import { Component, OnInit } from '@angular/core';
// import { MatDialog, MatDialogRef } from '@angular/material';
//
// export interface DialogData {
//   batal: string;
// }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  // batal: string;

//   constructor(public dialog: MatDialog) {}
//
//   openDialog(): void {
//     const dialogRef = this.dialog.open(BatalFormComponent, {
//       width: '700px',
//       data: {
//         batal: this.batal
//       }
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       console.log('this.batal');
//       this.batal = result;
//     });
//   }
// }
//
// @Component({
//   selector: 'batal-form-component',
//   templateUrl: 'batal-form.component.html',
// })
// export class BatalFormComponent {
//
//   constructor(public dialogRef: MatDialogRef<BatalFormComponent>){}
//
//   closeDialog(): void {
//     this.dialogRef.close();
//   }
}
