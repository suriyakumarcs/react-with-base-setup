export class ApiError extends Error {
  constructor(error: Error) {
    super();
    this.name = error.name;
    this.message = error.message;
    Error.captureStackTrace(this, this.constructor);
  }
}
