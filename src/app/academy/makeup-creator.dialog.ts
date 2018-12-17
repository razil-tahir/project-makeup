import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component ({
  selector: 'trg-makeup-dialog-creator',
  templateUrl: 'makeup-creator-dialog.html'
})


export class MakeupCreatorDialog implements OnInit {


  mainForm: FormGroup;
  submitted = false;

  constructor(private dialogRef: MatDialogRef<MakeupCreatorDialog>,
              private form: FormBuilder) {
    this.mainForm = this.form.group({
      id: [''],
      brand: [''],
      price: [0],
      rating: [0],
      currency: [''],
      productType: [''],
      status: [''],
      date: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
  console.log(JSON.stringify(value));
    this.submitted = true;
    this.dialogRef.close();
  }


}
