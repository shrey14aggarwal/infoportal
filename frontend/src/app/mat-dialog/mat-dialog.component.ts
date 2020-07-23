import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css']
})
export class MatDialogComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog():void {
   let dialogRef= this.matDialog.open(InfoComponent, {});
   
   dialogRef.afterClosed().subscribe(result=>{console.log("closed")});
  }
}
