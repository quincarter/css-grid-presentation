import { Component, OnInit } from '@angular/core';

interface RowsWithNames {
  title: string;
  value: string;
}

@Component({
  selector: 'app-rows-with-names',
  templateUrl: './rows-with-names.component.html',
  styleUrls: ['./rows-with-names.component.scss']
})
export class RowsWithNamesComponent implements OnInit {
  rows: RowsWithNames[] = [
    {
      title: 'row1',
      value: 'I am 1'
    },
    {
      title: 'row2',
      value: 'I am 2'
    },
    {
      title: 'row3',
      value: 'I am 3'
    },
    {
      title: 'row4',
      value: 'I am 4'
    },
    {
      title: 'row5',
      value: 'I am 5'
    },
    {
      title: 'row6',
      value: 'I am 6'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
