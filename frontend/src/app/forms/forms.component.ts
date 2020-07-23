import { Component, OnInit, Injectable, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { InfoServiceService } from '../info-service.service';
import { stringify } from 'querystring';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { UsersModel } from '../model/users-model';
import { Usersmodel } from '../usersmodel';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [InfoServiceService]
})
export class FormsComponent implements OnInit {

  myForm: FormGroup;
  name: any;
  myname: any;
  password: string;
  error = 'enter';
  invalidLogin = false;
  header: any;
  dbuser: string;
  dbpassword: string;
  output: any;
  userModel: Usersmodel;
  loginmessage = "Information Management Portal";
  disabled = true;





  constructor(private fb: FormBuilder,
    private router: Router, private http: HttpClient,
    private infoService: InfoServiceService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Optional() public dialogRef: MatDialogRef<FormsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data?: any) {
    this.userModel = new Usersmodel();
    this.matIconRegistry.addSvgIcon(
      `close`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/cancel-24px.svg`)
    );
  }


  ngOnInit() {
    if ((this.data)) {
      this.disabled = this.data.disabled
      this.loginmessage = "Sign Up";
    }

    localStorage.clear();
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  Submit() {

    this.userModel.name = this.myname;
    this.userModel.password = this.password;

    this.infoService.getSingleUser(this.userModel).subscribe(response => this.handleSuccessfulResponse1(response));

  }
  handleSuccessfulResponse1(response) {
    this.userModel = response;
    console.log(this.userModel)

    this.dbuser = this.userModel.name;
    this.dbpassword = this.userModel.password;
    this.output = this.infoService.checkusernameandpassword(this.myname, this.password, this.dbuser, this.dbpassword);

    if (this.output == true) {
      this.router.navigate(['/info'])
    }

    else {
      this.snackBar.open("SignUp first!!", '', { duration: 3500 });
      window.location.reload();

    }
  }

  signup() {

    let dialogRef = this.matDialog.open(FormsComponent, {

      height: '500px',
      width: '1100px',
      data: { loginmessage: "Sign Up", disabled: false }

    }

    );


    dialogRef.afterClosed().subscribe(result => { console.log("closed") });

  }

  enter() {

    this.userModel.name = this.myname;
    this.userModel.password = this.password;

    this.infoService.createUser(this.userModel).subscribe(data => {
      window.location.reload();
      this.snackBar.open("User created successfully", '', { duration: 20000 }
      );
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
