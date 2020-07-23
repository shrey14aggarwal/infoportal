import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoModel } from '../model/info-model';
import { InfoServiceService } from '../info-service.service';
import { Injectable } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AddressModel } from '../model/address-model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  myForm: FormGroup;
  second: FormGroup;
  name: any;
  id: number;
  myname: any;
  firstName: any;
  lastName: any;
  house: any;
  street: any;
  zip: number;
  land: any;
  gender: any;
  language: any;
  mylanguage: string[];
  isChecked: any;
  favoriteSeason: string;
  genders: string[] = ['Male', 'Female'];
  countries: string[] = ['Germany', 'France', 'USA', 'UK'
    , 'Switzerland', 'Austria'];
  disabled = false;
  createMessage = "Information created successfully";

  infoModel: InfoModel = new InfoModel();
  addressModel: AddressModel = new AddressModel();


  constructor(private fb: FormBuilder,
    private router: Router, private infoService: InfoServiceService, private snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry,
    @Optional()public dialogRef: MatDialogRef<InfoComponent>,
    private domSanitizer: DomSanitizer,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any
  ) {
    this.matIconRegistry.addSvgIcon(
      `close`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/cancel-24px.svg`)
    );

  }


  ngOnInit(): void {
    if ((this.data)) {
      this.disabled = this.data.disabled
    }
    this.myForm = this.fb.group({
      id: [{
        value: '',
        disabled: this.disabled
      }, Validators.required],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', Validators.required],
      language: ['', Validators.required],
      message: ['', Validators.required]
    });
    this.second = this.fb.group({
      house: ['', Validators.required],
      street: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      land: ['', [Validators.required]]
    });


    if (this.data) {
      this.firstName = this.data.firstname;
      this.lastName = this.data.lastname;
      this.gender = this.data.gender;
      this.id = this.data.id;
      this.house = this.data.house;
      this.street = this.data.street;
      this.zip = this.data.zip;
      this.land = this.data.country;
    }
  }

  Submit() {
    this.infoModel.first = this.firstName;
    this.infoModel.last = this.lastName;
    this.infoModel.gender = this.gender;
    this.infoModel.id = this.id;

    console.log(this.infoModel.first);
  }

  createInfo() {

    this.addressModel.house = this.house;
    this.addressModel.street = this.street;
    this.addressModel.zip = this.zip;
    this.addressModel.country = this.land;

    this.infoModel.first = this.firstName;
    this.infoModel.last = this.lastName;
    this.infoModel.gender = this.gender;
    this.infoModel.id = this.id;
    this.infoModel.addressEntity = this.addressModel;

    this.infoService.createInfo(this.infoModel)
      .subscribe(data => {
        window.location.reload();
        this.snackBar.open(this.createMessage, '', { duration: 20000 }
        );
      });


    this.router.navigateByUrl('/info2');

  }

  editInfo() {

    this.addressModel.house = this.house;
    this.addressModel.street = this.street;
    this.addressModel.zip = this.zip;
    this.addressModel.country = this.land;

    this.infoModel.first = this.firstName;
    this.infoModel.last = this.lastName;
    this.infoModel.gender = this.gender;
    this.infoModel.id = this.id;
    this.infoModel.addressEntity = this.addressModel;

    console.log("hello")
    console.log(this.infoModel)
    this.infoService.editInfo(this.infoModel)
      .subscribe(data => {
        window.location.reload();
        this.snackBar.open('Information edited successfully', '', { duration: 20000 }
        );
      });


    this.router.navigateByUrl('/info2');
  }

  onClose(){
    this.dialogRef.close();
  }




}
