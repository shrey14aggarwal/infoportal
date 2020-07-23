import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InfoServiceService } from '../info-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { InfoModel } from '../model/info-model';
import { ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InfoComponent } from '../info/info.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";







@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.css']
})
export class Info2Component implements OnInit {


  myform: FormGroup;
  infos: string[];

  info1: InfoModel;
  firstname: any;
  lastname: any;
  gender: any;
  id: number;
  house: any;
  street: any;
  zip: number;
  country: any;
  names: string[];
  search = new FormControl();
  options: string[];

  @ViewChild(InfoComponent) child: InfoComponent;
  constructor(
    private fb: FormBuilder,
    private infoService: InfoServiceService, private router: Router, private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `create`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/create.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `delete`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/delete-24px.svg`)
    );
   
  }

  dataSource = new MatTableDataSource(this.infos);

  filteredOptions: Observable<InfoModel[]>;


  ngOnInit(): void {
    this.myform = this.fb.group({

      search: ['']
    });
    this.infoService.getInfo().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response) {
    this.infos = response;
    console.log(this.infos);

  }


  displayedColumns: string[] = ['Id', 'First Name', 'Last Name', 'Gender',
    'House No.', 'Street', 'Zip code', 'Country', 'Delete', 'Edit'];

  onPress(id: any) {

    console.log(id);
    this.infoService.deleteInfo(id)
      .subscribe(data => {
        this.snackBar.open("Information deleted", '', { duration: 20000 });
        window.location.reload();

      });

  }

  onEdit(id: number) {

    this.infoService.getSingleInfo(id).subscribe(response => this.handleSuccessfulResponse1(response));

  }

  handleSuccessfulResponse1(response) {
    this.info1 = response;
    let dialogRef = this.matDialog.open(InfoComponent, {

      data: {
        firstname: this.info1.first, lastname: this.info1.last, gender: this.info1.gender, id: this.info1.id,
        house: this.info1.addressEntity.house,
        street: this.info1.addressEntity.street,
        zip: this.info1.addressEntity.zip,
        country: this.info1.addressEntity.country,
        disabled: true
      }
    }

    );

    dialogRef.afterClosed().subscribe(result => { console.log("closed") });

  }

  add() {
    this.router.navigateByUrl('/info');
  }

  logout() {
    this.router.navigateByUrl('');
  }



}
