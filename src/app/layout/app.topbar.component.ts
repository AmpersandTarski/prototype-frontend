import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {
  public toolsItems!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService, // private messageService: MessageService, // private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
    this.toolsItems = [
      {
        label: 'Refresh page',
        icon: 'pi pi-refresh',
        command: () => {
          console.log('clicking update');
        },
      },
      {
        label: 'Reinstall application',
        icon: 'pi pi-trash',
        command: () => {
          console.log('clicking update');
        },
      },
      {
        label: '(Re)evaluate all rules)',
        icon: 'pi pi-check-square',
        command: () => {
          console.log('clicking update');
        },
      },
      {
        label: 'Run execution engine',
        icon: 'pi pi-cog',
        command: () => {
          console.log('clicking update');
        },
      },
      {
        label: 'Population importer',
        icon: 'pi pi-arrow-circle-up',
        command: () => {
          console.log('clicking update');
        },
      },
      {
        label: 'Population exporter',
        icon: 'pi pi-arrow-circle-down',
        command: () => {
          console.log('clicking update');
        },
      },
    ];
  }
}
