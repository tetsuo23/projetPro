import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetPro';
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '../../UI/assets/params/img/Atoms - 8579.mp4'
  }

  ngOnInit() {

  }
}
