// import { Directive, Input } from '@angular/core';
// import { NG_VALIDATORS, validator, validationErrors, FormGroup } from '@angular/forms';
// import { MustMatch } from './must-match.validator'

// @Directive({
//   selector: '[appMustMatch]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
// })
// export class MustMatchDirective implements validator {
//   @Input('mustMatch') mustMatch: string[] = [];
//   validate(FormGroup: FormGroup): validationErrors {
//     return MustMatch(this.mustMatch[0],this.mustMatch[1])(FormGroup)
//   }
// constructor() { }

// }
