import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.components';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
    {
      src: '../../../../../assets/images/projects',
      alt: '',
      title: '',
      description: '',
      links: [
        {
          name: '',
          url: '',
        },
      ],
    },
  ]);
  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, { 
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
