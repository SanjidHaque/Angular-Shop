import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Product} from '../../models/product.model';
import {noWhitespaceValidator} from '../../custom-form-validators/no-white-space.validator';

@Component({
  selector: 'app-add-update-dialog',
  templateUrl: './add-update-dialog.component.html',
  styleUrls: ['./add-update-dialog.component.css']
})
export class AddUpdateDialogComponent {
  productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddUpdateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = new FormGroup({
      'name': new FormControl(data.name, [Validators.required, noWhitespaceValidator]),
      'category': new FormControl(data.category, [Validators.required, noWhitespaceValidator])
    });
  }
  cancelClick() {
    this.data.confirmationStatus = false;
    this.dialogRef.close('');
  }

  confirmClick() {
    this.data.confirmationStatus = true;

    const name = this.productForm.controls['name'].value;
    const category = this.productForm.controls['category'].value;
    const date = new Date().toLocaleDateString('en-US');
    const product = new Product(null, name, category, date);

    this.dialogRef.close({
      confirmationStatus: this.data.confirmationStatus, product
    });
  }

}
