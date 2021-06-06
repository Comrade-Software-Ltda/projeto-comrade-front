import { Observable } from 'rxjs';
import { MenuModel } from '../utils/menu.model';

export abstract class MenuRepository {
  abstract getAllMenus(): Observable<MenuModel>;
  abstract setMenuLocal(menu: MenuModel[]): Observable<void>;
  abstract getMenuLocal(): Observable<any>;
  abstract setMenuActiveLocal(url: string): Observable<void>;
  abstract getMenuActiveLocal(): Observable<any>;
}
