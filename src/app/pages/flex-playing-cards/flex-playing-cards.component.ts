import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-playing-cards',
  templateUrl: './flex-playing-cards.component.html',
  styleUrls: ['./flex-playing-cards.component.scss']
})
export class FlexPlayingCardsComponent implements OnInit {
  cards: any = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  constructor() { }

  ngOnInit(): void {
  }

}
