import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-with-rows',
  templateUrl: './playing-with-rows.component.html',
  styleUrls: ['./playing-with-rows.component.scss']
})
export class PlayingWithRowsComponent implements OnInit {

  rows: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.rows.push('' + i);
    }
  }

  ngOnInit(): void {
  }

}
