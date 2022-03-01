import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: "alert-circle-outline",
      name: 'Alerta',
      redirectTo: '/alerta'
    },
    {
      icon: 'cog-outline',
      name: 'Accion',
      redirectTo: '/accion'
    },
    {
      icon: "happy-outline",
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: "color-palette-outline",
      name: 'botones',
      redirectTo: '/botones'
    },
    {
      icon: "color-palette-outline",
      name: 'card',
      redirectTo: '/card'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
