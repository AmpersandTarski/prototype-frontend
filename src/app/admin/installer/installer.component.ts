import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.scss'],
})
export class InstallerComponent {
  constructor(private http: HttpClient) {}

  reinstall(): void {
    this.http.get('admin/installer').subscribe();
  }

  reinstallWithoutPopulation(): void {}

  reinstallIgnoreInvariantViolations(): void {}
}
