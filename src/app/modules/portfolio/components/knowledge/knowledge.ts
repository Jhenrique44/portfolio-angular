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
    { src: '/html.svg', alt: 'HTML logo' },
    { src: '/css.svg', alt: 'CSS logo' },
    {
      src: '/javacript.svg',
      alt: 'JavaScript logo',
    },
    // { src: '/typescript.svg', alt: 'TypeScript logo' },
    // {
    //   src: '/angular.svg',
    //   alt: 'Angular logo',
    // },
    // { src: '/sass.svg', alt: 'Sass logo' },
    { src: '/java.svg', alt: 'Java logo' },
    {
      src: '/spring.svg',
      alt: 'Spring logo',
    },
    { src: '/sql.svg', alt: 'SQL logo' },
    // { src: '/git.svg', alt: 'Git logo' },
    // { src: '/aws.svg', alt: 'AWS logo' },
    // {
    //   src: '/docker.svg',
    //   alt: 'Docker logo',
    // },
  ]);
}
