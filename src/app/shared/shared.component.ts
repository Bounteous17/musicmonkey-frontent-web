import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@NgModule({
    imports: [ CommonModule ],
})
export class SharedComponent {

    constructor(
        private _toastr: ToastrService,
    ) { }

    showSuccess(message) {
        this._toastr.success('Completed', message);
    }

    showError(message) {
        this._toastr.error('Failed', message);
    }
}


