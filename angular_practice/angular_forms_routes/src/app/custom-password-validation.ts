import { AbstractControl } from "@angular/forms";

export function CustomValidatePassword(control: AbstractControl) {
    if(control.value.toUpperCase() == 'PASSWORD'){
        return {
            invalidPassword: true
        }
    }
    return null;//otherwise you will get error
     // Validation passed; To signal this we need to return null
//     The validator function needs to return null if no errors were found in the field value, meaning that the value is valid
// If any validation errors are found, the function needs to return an object of type ValidationErrors
}