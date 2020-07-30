import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-center',
  templateUrl: './auto-center.component.html',
  styleUrls: ['./auto-center.component.scss']
})
export class AutoCenterComponent implements OnInit {
  image: string;
  constructor() { }

  ngOnInit(): void {
    this.image = 'assets/img/dog.png'
  }

}
