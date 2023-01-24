import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ManagementAPIService } from 'src/app/management-api/management-api.service';

class ButtonState {
  public loading: boolean = false;
  public success: boolean = false;
  public error: boolean = false;

  isLoading(): boolean {
    return this.loading;
  }

  getStyleClass(): string {
    return this.success ? 'p-button-success' : this.error ? 'p-button-danger' : '';
  }

  init(): void {
    this.loading = false;
    this.success = false;
    this.error = false;
  }
}

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent {
  buttonState1: ButtonState = new ButtonState();
  buttonState2: ButtonState = new ButtonState();

  constructor(private managementAPIService: ManagementAPIService) {}

  /**
   * Method to determine if there is a 'installer' call to the backend in progress, triggered by any of the buttons
   * We capture this state in the associated buttonState(s)
   */
  public isLoading(): boolean {
    return [this.buttonState1, this.buttonState2].some((state) => state.isLoading());
  }

  /**
   * Set the buttonStates to their initial value
   */
  public initButtonStates(): void {
    [this.buttonState1, this.buttonState2].forEach((state) => state.init());
  }

  /**
   * Call to the backend to (re)evaluate all rules
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  public evaluateRules(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.managementAPIService
      .getEvaluateAllRules()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to run the execution engine
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  public runExecutionEngine(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.managementAPIService
      .getRunExecutionEngine()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }
}
