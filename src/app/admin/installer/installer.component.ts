import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { finalize } from 'rxjs';

class ButtonState {
  loading: boolean = false;
  success: boolean = false;
  error: boolean = false;

  isLoading(): boolean {
    return this.loading;
  }

  getStyleClass(): string {
    return this.success ? 'p-button-success' : (this.error ? 'p-button-danger' : '');
  }
  
  init(): void {
    this.loading = false;
    this.success = false;
    this.error = false;
  }
}

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.scss'],
})
export class InstallerComponent {
  buttonState1 = new ButtonState();
  buttonState2 = new ButtonState();
  buttonState3 = new ButtonState();

  constructor(private http: HttpClient) {}

  isLoading(): boolean {
    return [this.buttonState1, this.buttonState2, this.buttonState3].some(state => state.isLoading());
  }

  initButtonStates(): void {
    [this.buttonState1, this.buttonState2, this.buttonState3].forEach(state => state.init());
  }

  reinstall(defaultPop: boolean, ignoreInvariants: boolean, buttonState: ButtonState): void {
    this.initButtonStates();
    buttonState.loading = true;
    this.http.get('admin/installer', { params : {defaultPop : defaultPop, ignoreInvariantRules: ignoreInvariants}}).pipe(
      finalize(() => buttonState.loading = false)
    ).subscribe({
      error: (err) => buttonState.error = true,
      complete: () => buttonState.success = true
    });
  }
}
