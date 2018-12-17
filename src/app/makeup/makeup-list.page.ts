import {Component, OnInit} from '@angular/core';
import {Makeup} from './makeup.model';
import {Observable} from 'rxjs';
import {MakeupService} from '../../services/makeup.service';
import {Router} from '@angular/router';
import {MakeupCreatorDialog} from '../academy/makeup-creator.dialog';
import {MatDialog, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {Makeup2CreatorDialog} from '../academy/makeup2-creator.dialog';

@Component({
  selector: 'trg-makeup-list',
  templateUrl: './makeup-list.page.html',
})
export class MakeupListPage implements OnInit {
  public columns = [ 'id', 'brand', 'name'];

  public dataSource: Observable<Makeup[]>;


  // @ts-ignore
  constructor(private makeupService: MakeupService, private dialog: MatDialog, private snackBar: MatSnackBar,
              private router: Router) {

  }

  ngOnInit(): void {
    this.dataSource = this.makeupService.findMakeup();
  }

  view(makeup: Makeup): void {
    console.log(JSON.stringify(makeup));
    this.router.navigate(['makeup/list/', makeup.id]);

  }

  show(): void {
   const dialogRef = this.dialog.open(MakeupCreatorDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }

  showMakeup(): void {
    const dialogRef = this.dialog.open(Makeup2CreatorDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }


}

