import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills: Skill[] = [
    {name: 'Figma'},
    {name: 'JavaScript'},
    {name: 'MySQL'},
    {name: 'HTML5'},
    {name: 'CSS3'},
    {name: 'Angular'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
