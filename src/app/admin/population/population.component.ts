import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ButtonState } from 'src/app/shared/helper/button-state';
import { PopulationService } from './population.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss'],
})
export class PopulationComponent {
  buttonState1: ButtonState = new ButtonState();
  buttonState2: ButtonState = new ButtonState();

  constructor(private populationService: PopulationService) {}

  /**
   * Method to determine if there is a 'population' call to the backend in progress, triggered by any of the buttons
   * We capture this state in the associated buttonState(s)
   */
  isLoading(): boolean {
    return [this.buttonState1, this.buttonState2].some((state) => state.isLoading());
  }

  /**
   * Set the buttonStates to their initial value
   */
  initButtonStates(): void {
    [this.buttonState1, this.buttonState2].forEach((state) => state.init());
  }

  /**
   * Call to the backend to (re)install the application and database
   *
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  exportPopulation(buttonState: ButtonState): void {
    this.initButtonStates();
    buttonState.loading = true;
    this.populationService
      .getExportPopulation()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
        next: (x) => this.populationService.exportPopulation(x),
      });
  }

  /**
   * Call to the backend to (re)install the application and database
   *
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  exportPopulationMetaModel(buttonState: ButtonState): void {
    this.initButtonStates();
    buttonState.loading = true;
    this.populationService
      .getExportPopulationMetaModel()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
        next: (x) => this.populationService.exportPopulation(x),
      });
  }
}
