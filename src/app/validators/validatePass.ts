import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchingPasswordsValidator(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
  return (group: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = group.get(passwordKey);
    const confirmPasswordControl = group.get(confirmPasswordKey);

    if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl?.setErrors(null);
      return null;
    }
  };
}
