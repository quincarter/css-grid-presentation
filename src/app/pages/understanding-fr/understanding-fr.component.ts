import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-fr',
  templateUrl: './understanding-fr.component.html',
  styleUrls: ['./understanding-fr.component.scss']
})
export class UnderstandingFrComponent implements OnInit {
  columns: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.columns.push('' + i);
    }
  }

  ngOnInit(): void {
  }

}
