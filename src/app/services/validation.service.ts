/**
 *
 * Service for handeling custom validation.
 *
 * @author Ørjan Ertkjern
 *
 */
import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';


@Injectable()
export class ValidatorService {

  constructor() {
  }

  /**
   * Validate if from control has a valid email address.
   * @param control
   * @returns {any} null if everything is OK or a json with error
   */
  emailValidator(control: FormControl) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if ((control.value !== '' && control.value !== null) && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return {'incorrectMailFormat': true};
    }
    return null;
  }

  /**
   * Check if Form Control is true.
   * @param control
   */
  isTrue(control: FormControl) {
    if (control.value !== true) {
      return {'isInvalidTerm' : true};
    }
    return null;
  }

  /**
   * Check if input is a valid number as formbuilder
   *
   * @param input
   * @returns {boolean}
   */
  isValidPhoneFormBuilder(control: FormControl) {
    const pattern = /^-?[0-9]*$/;
    if ((control.value !== '' && control.value !== null) && (control.value.length !== 8 || !pattern.test(control.value))) {
      return {'isInvalidPhone': true};
    }
    return null;
  }

}


