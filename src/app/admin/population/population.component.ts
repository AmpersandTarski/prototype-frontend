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
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss'],
})
export class PopulationComponent {
  buttonState1: ButtonState = new ButtonState();

  constructor(private managementAPIService: ManagementAPIService) {}

  /**
   * Method to determine if there is a 'installer' call to the backend in progress, triggered by any of the buttons
   * We capture this state in the associated buttonState(s)
   */
  isLoading(): boolean {
    return [this.buttonState1].some((state) => state.isLoading());
  }

  /**
   * Set the buttonStates to their initial value
   */
  initButtonStates(): void {
    [this.buttonState1].forEach((state) => state.init());
  }

  /**
   * Call to the backend to (re)install the application and database
   *
   * @param defaultPop determines if default population of the application should be installed or not
   * @param ignoreInvariants determines if invariant violations of the default population should be ignored or not
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  exportPopulation(buttonState: ButtonState): void {
    this.initButtonStates();
    buttonState.loading = true;
    this.managementAPIService
      .getExportPopulation()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
        next: (x) => this.managementAPIService.exportPopulation(x),
      });
  }
}
