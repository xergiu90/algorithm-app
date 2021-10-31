export interface IApiResponseSingleError {
  message: string;
  errors: [];
}

export interface IApiResponseErrorValue {
  [key: string]: string[] | string;
}

export interface IApiResponseMultipleErrors {
  message: string;
  errors: IApiResponseErrorValue;
}
