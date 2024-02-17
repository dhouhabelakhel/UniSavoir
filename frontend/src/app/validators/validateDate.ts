import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDate: Date = new Date();
    const inputDate: Date = new Date(control.value);

    if (inputDate <= currentDate) {
      control.setErrors({ DateInvalid: true });
      return { DateInvalid: true };
    } else {
      control.setErrors(null);
      return null;
    }
  };
}
