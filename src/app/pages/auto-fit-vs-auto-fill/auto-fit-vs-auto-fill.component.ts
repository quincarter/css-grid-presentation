import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-fit-vs-auto-fill',
  templateUrl: './auto-fit-vs-auto-fill.component.html',
  styleUrls: ['./auto-fit-vs-auto-fill.component.scss']
})
export class AutoFitVsAutoFillComponent implements OnInit {

  columns: string[] = [];

  constructor() {
    for (let i = 1; i < 7; i++) {
      this.columns.push('' + i);
    }
  }

  ngOnInit(): void {
  }

}
