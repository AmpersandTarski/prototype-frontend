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
   * TODO:
   * - File uploader/drop zone
   * - File explorer/queue
   *
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

  uploadFiles(buttonState: ButtonState) {
    this.initButtonStates();
    buttonState.loading = true;

    // send files to API
    this.populationService.importPopulation(this.files);

    // when complete, remove files
    this.files.forEach((file) => {
      this.onRemove(file);
    });

    this.buttonState1.loading = false;
  }

  /**
   * Uploads file.
   */
  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  /* Removes file */
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
