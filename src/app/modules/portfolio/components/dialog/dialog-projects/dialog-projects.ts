import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.components';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss',
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ){
    
   }
  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }
  public closeDialog() { 
    return this._dialogRef.close();
  }
}
