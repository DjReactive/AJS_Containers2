export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(code, errorMsg) {
    this.errors.set(code, errorMsg);
  }

  translate(code) {
    if (!this.errors.has(code)) throw new Error('Unknown error');
    return this.errors.get(code);
  }
}
