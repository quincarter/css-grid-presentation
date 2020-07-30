import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-with-columns',
  templateUrl: './playing-with-columns.component.html',
  styleUrls: ['./playing-with-columns.component.scss']
})
export class PlayingWithColumnsComponent implements OnInit {

  columns: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.columns.push('' + i);
    }
  }

  ngOnInit(): void {
  }

}
