import { Mapper } from '../../../core/utils/bases/mapper';
import { SystemMenuWebEntity } from './system-menu-web-entity';
import { SystemMenuModel } from 'src/app/core/models/system-menu.model';

export class SystemMenuWebRepositoryMapper extends Mapper<SystemMenuWebEntity, SystemMenuModel> {
  mapFrom(param: SystemMenuWebEntity): SystemMenuModel {
    return {
      id: param.id,
      menuId: param.menuId,
      systemMenu: param.systemMenu,
      submenus: param.submenus,
      text: param.text,
      icon: param.icon,
      description: param.description,
      route: param.route,
    };
  }

  mapTo(param: SystemMenuModel): SystemMenuWebEntity {
    return {
      id: param.id,
      menuId: param.menuId,
      systemMenu: param.systemMenu,
      submenus: param.submenus,
      text: param.text,
      icon: param.icon,
      description: param.description,
      route: param.route,
    };
  }
}
