import { Component } from '@angular/core';
import { ButtonState } from 'src/app/shared/helper/button-state';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-population-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
  /**
   * ImportComponent allows the user to upload a .json file containing population data.
   */
  buttonState1: ButtonState = new ButtonState();
  files: File[] = [];

  constructor(private populationService: PopulationService) {}

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
    return this.buttonState1.loading;
  }

  hasNoFiles(): boolean {
    return this.files.length < 1;
  }

  uploadFiles() {
    this.initButtonStates();
    this.buttonState1.loading = true;

    // send files to API (one by one)
    let isError = false;
    while (!isError && !this.hasNoFiles()) {
      // upload one file
      this.populationService.importPopulation(this.files.pop()).subscribe({
        error: (err) => {
          isError = true; // will terminate loop
          this.buttonState1.error = true;
        },
        complete: () => (this.buttonState1.success = !isError),
        next: () => {},
      });
    }

    this.buttonState1.loading = false;
  }

  /**
   * Uploads file.
   */
  onSelect(event: { addedFiles: File[] }) {
    this.files.push(...event.addedFiles);
  }

  /* Removes file */
  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
