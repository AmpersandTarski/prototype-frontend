export class ButtonState {
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
