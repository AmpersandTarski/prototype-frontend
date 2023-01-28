import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { ButtonState } from 'src/app/shared/helper/button-state';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
  buttonState1: ButtonState = new ButtonState();
  buttonState2: ButtonState = new ButtonState();
  buttonState3: ButtonState = new ButtonState();
  buttonState4: ButtonState = new ButtonState();
  buttonState5: ButtonState = new ButtonState();

  constructor(private reportService: ReportService) {}

  /**
   * Method to determine if there is a 'report' call to the backend in progress, triggered by any of the buttons
   * We capture this state in the associated buttonState(s)
   */
  isLoading(): boolean {
    return [this.buttonState1, this.buttonState2, this.buttonState3, this.buttonState4, this.buttonState5].some(
      (state) => state.isLoading(),
    );
  }

  /**
   * Set the buttonStates to their initial value
   */
  initButtonStates(): void {
    [this.buttonState1, this.buttonState2, this.buttonState3, this.buttonState4, this.buttonState5].forEach((state) =>
      state.init(),
    );
  }

  /**
   * Call to the backend to -some description-
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  relations(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.reportService
      .getRelations()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to -some description-
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  conjuntUsage(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.reportService
      .getConjunctUsage()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to -some description-
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  conjunctPerformance(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.reportService
      .getConjunctPerformance()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to -some description-
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  interfaces(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.reportService
      .getInterfaces()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }

  /**
   * Call to the backend to -some description-
   * @param buttonState the ButtonState associated with the button that triggers this method
   */
  interfaceIssues(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
    this.reportService
      .getInterfaceIssues()
      .pipe(finalize(() => (buttonState.loading = false)))
      .subscribe({
        error: (err) => (buttonState.error = true),
        complete: () => (buttonState.success = true),
      });
  }
}
