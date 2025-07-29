import { Component } from '@angular/core';
import { Menu, MenuService } from '../../../../shared/services/menu.service';
interface MenuItem {
  label: string;
  icon?: string;
  children?: MenuItem[];
  route?: string;
}

@Component({
  selector: 'tw-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: false,
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Caja',
      children: [
        { label: 'Ver caja', route: '/caja/ver' },
        { label: 'Abrir caja', route: '/caja/abrir' },
        { label: 'Cerrar caja', route: '/caja/cerrar' },
      ],
    },
    {
      label: 'Distribuidores',
      children: [
        { label: 'Ver distribuidores', route: '/distribuidores/ver' },
        { label: 'Crear distribuidor', route: '/distribuidores/crear' },
        {
          label: 'Actualizar distribuidor',
          route: '/distribuidores/actualizar',
        },
      ],
    },
    {
      label: 'Compras',
      children: [
        { label: 'Comprar', route: '/compras/crear' },
        { label: 'Ver compras', route: '/compras' },
        { label: 'Actualizar compra', route: '/compras/actualizar' },
      ],
    },
    {
      label: 'Usuarios',
      children: [
        { label: 'Crear usuario', route: '/usuarios/crear' },
        { label: 'Actualizar usuario', route: '/usuarios/actualizar' },
        { label: 'Ver usuarios', route: '/usuarios' },
      ],
    },
    {
      label: 'Ventas',
      children: [
        { label: 'Vender', route: '/ventas/crear' },
        { label: 'Ver ventas', route: '/ventas' },
        { label: 'Actualizar venta', route: '/ventas/actualizar' },
      ],
    },
    {
      label: 'Sistema',
      route: '/sistema',
    },
  ];
}
