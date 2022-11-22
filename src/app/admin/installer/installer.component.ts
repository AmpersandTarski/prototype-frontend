import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.scss'],
})
export class InstallerComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  reinstall(): void {
    this.http.get('admin/installer').subscribe();
  }

  reinstallWithoutPopulation(): void {}

  reinstallIgnoreInvariantViolations(): void {}
}
