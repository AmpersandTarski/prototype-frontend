import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ButtonState } from 'src/app/shared/helper/button-state';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})
export class UtilsComponent {
  buttonState1: ButtonState = new ButtonState();
  buttonState2: ButtonState = new ButtonState();
  buttonState3: ButtonState = new ButtonState();
  buttonState4: ButtonState = new ButtonState();

  constructor(private utilsService: UtilsService) {}

  /**
   * Method to determine if there is a 'utils' call to the backend in progress, triggered by any of the buttons
   * We capture this state in the associated buttonState(s)
   */
  isLoading(): boolean {
    return [this.buttonState1, this.buttonState2, this.buttonState3, this.buttonState4].some((state) =>
      state.isLoading(),
    );
  }

  /**
   * Set the buttonStates to their initial value
   */
  initButtonStates(): void {
    [this.buttonState1, this.buttonState2, this.buttonState3, this.buttonState4].forEach((state) => state.init());
  }

  /**
   * Call to the backend to (re)evaluate all rules
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  evaluateRules(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.utilsService
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
  runExecutionEngine(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.utilsService
      .getRunExecutionEngine()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to regenerate all atom ids
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  regenerateAllAtomIds(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.utilsService
      .getRegenerateAllAtomIds()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to regenerate atoms of a single conceps
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  regenerateAtom(concept: string, buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.utilsService
      .getRegenerateAtom(concept)
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }
}
