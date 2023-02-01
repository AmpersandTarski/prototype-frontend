import { Component } from '@angular/core';
import { ButtonState } from 'src/app/shared/helper/button-state';
import { ImportService } from './import.service';

@Component({
  selector: 'app-population-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
  /**
   * ImportComponent allows the user to upload a .json file containing population data.
   * TODO:
   * - File uploader/drop zone
   * - File explorer/queue
   *
   */
  buttonState1: ButtonState = new ButtonState();

  constructor(private importService: ImportService) {}

  /**
   * Set the buttonState to its initial value
   */
  initButtonStates(): void {
    this.buttonState1.init();
  }

  /**
   * Determines whether a file is being chosen to upload.
   * @returns true while busy
   */
  isLoading(): boolean {
    return true;
  }

  chooseFileUpload(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;
  }
}
