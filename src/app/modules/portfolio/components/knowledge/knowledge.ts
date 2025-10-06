import { Component, signal } from '@angular/core';
import { ISkills } from '../../interface/ISkills.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss',
})
export class KnowledgeComponent {
  public arraySkills = signal<ISkills[]>([
    { src: '../../../../../assets/icons/skills/html.svg', alt: 'HTML logo' },
    { src: '../../../../../assets/icons/skills/css.svg', alt: 'CSS logo' },
    {
      src: '../../../../../assets/icons/skills/javascript.svg',
      alt: 'JavaScript logo',
    },
    // { src../../../../../: 'assets/icons/skills/typescript.svg', alt: 'TypeScript logo' },
    {
      src: '../../../../../assets/icons/skills/angular.svg',
      alt: 'Angular logo',
    },
    { src: '../../../../../assets/icons/skills/sass.svg', alt: 'Sass logo' },
    { src: '../../../../../assets/icons/skills/java.svg', alt: 'Java logo' },
    {
      src: '../../../../../assets/icons/skills/spring.svg',
      alt: 'Spring logo',
    },
    { src: '../../../../../assets/icons/skills/sql.svg', alt: 'SQL logo' },
    // { src: '../../../../../assets/icons/skills/git.svg', alt: 'Git logo' },
    // { src: '../../../../../assets/icons/skills/aws.svg', alt: 'AWS logo' },
    // {
    //   src: '../../../../../assets/icons/skills/docker.svg',
    //   alt: 'Docker logo',
    // },
  ]);
}
