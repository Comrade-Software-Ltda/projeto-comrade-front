import {
  Component,
  NgModule,
  Output,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ItemClickEvent } from 'devextreme/ui/tree_view';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';

import * as events from 'devextreme/events';
import { navigation } from '../../../main/app-navigation';
import { GetAllMenuSystemMenuUsecase } from 'src/app/core/usecases/system-menu/get-all-menu-system-menu.usecase';
import { SystemMenuModel } from 'src/app/core/models/system-menu.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';

type MappedItem = {
  path?: string;
  text: string;
  icon: string;
  items: MappedItem[];
  expanded: boolean;
};

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DxTreeViewComponent, { static: true })
  menu!: DxTreeViewComponent;

  @Output()
  selectedItemChanged = new EventEmitter<ItemClickEvent>();

  @Output()
  openMenu = new EventEmitter<any>();

  private _selectedItem!: String;
  @Input()
  set selectedItem(value: String) {
    this._selectedItem = value;
    if (!this.menu.instance) {
      return;
    }

    this.menu.instance.selectItem(value);
  }

  private _items!: Record<string, unknown>[];
  private _mappedItems!: Record<string, unknown>[];
  get items() {
    if (this._mappedItems) return this._mappedItems;
    return this._items;
  }

  private _compactMode = false;
  @Input()
  get compactMode() {
    return this._compactMode;
  }
  set compactMode(val) {
    this._compactMode = val;

    if (!this.menu.instance) {
      return;
    }

    if (val) {
      this.menu.instance.collapseAll();
    } else {
      this.menu.instance.expandItem(this._selectedItem);
    }
  }

  constructor(
    private elementRef: ElementRef,
    private getAllMenuSystemMenu: GetAllMenuSystemMenuUsecase
  ) {}
  ngOnInit(): void {
    this._items = navigation.map((item) => {
      item.path = this.checkPath(item.path);
      return { ...item, expanded: !this._compactMode };
    });
    this.getAllMenuSystemMenu.execute({}).subscribe((grid: PageResultModel<SystemMenuModel>) => {
      var mappedItems = grid.data?.map((item) => this.itemMenuMap(item));
      if (mappedItems) {
        this._mappedItems = mappedItems;
      }
    });
  }

  checkPath(path: string | undefined) {
    return path && !/^\//.test(path) ? `/${path}` : path;
  }

  itemMenuMap(item: SystemMenuModel) {
    var items = item.submenus?.map((item) => this.itemMenuMap(item));
    const mappedItem: MappedItem = {
      path: this.checkPath(item.route),
      text: item.text,
      icon: item.icon,
      expanded: !this._compactMode,
      items: items,
    };
    return mappedItem;
  }

  onItemClick(event: ItemClickEvent) {
    this.selectedItemChanged.emit(event);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e: Event) => {
      this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}

@NgModule({
  imports: [DxTreeViewModule],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent],
})
export class SideNavigationMenuModule {}
