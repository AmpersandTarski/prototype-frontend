import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prototype-frontend';

  constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true; //enables core ripple functionality

    // Optional configuration with the default configuration
    this.layoutService.config = {
      ripple: false, //toggles ripple on and off
      inputStyle: 'outlined', //default style for input elements
      menuMode: 'static', //layout mode of the menu, valid values are "static" and "overlay"
      colorScheme: 'light', //color scheme of the template, valid values are "light" and "dark"
      theme: 'md-light-indigo', //default component theme for PrimeNG
      scale: 14, //size of the body font size to scale the whole application
    };
  }
}
