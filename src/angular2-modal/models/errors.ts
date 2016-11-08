export class DialogBailOutError extends Error {
  constructor(value?: string) {
    super();

    if (!value) {
      value = 'Dialog was forced to close by an unknown source.';
    }
    this.message = value;
  }
}
