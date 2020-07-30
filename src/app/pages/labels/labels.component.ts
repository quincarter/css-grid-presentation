import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss'],
})
export class LabelsComponent implements OnInit {
  static label = 'Playing With Blocks';

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.labels.push('' + i);
    }
  }

  ngOnInit(): void {}
}
