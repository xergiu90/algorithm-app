import { Injectable } from '@angular/core';
import { IApiResponseMultipleErrors, IApiResponseSingleError } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HelperService {

  constructor(
  ) {
  }

  showErrorMessage(
    err: any,
  ) {
    if (!Array.isArray(err.error.errors)) {
      // When the API has an issue it responds with the stack trace
      if (!err.error.errors) {
        return;
      }

      const error = err.error as IApiResponseMultipleErrors;
      let msg = '';
      let pos = 1;
      for (const [key, value] of Object.entries(error.errors)) {
        msg += '<div>' + pos + '. ' + (Array.isArray(value) ? value.join(', ') : value) + '</div>';
        pos++;
      }
    } else {
      const error = err.error as IApiResponseSingleError;
    }
  }

  collectionIncludeInput(input: string, collection: string[]): boolean {
    return collection.findIndex(element => input.endsWith(element)) > -1;
  }
}
