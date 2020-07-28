import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-cards',
  templateUrl: './playing-cards.component.html',
  styleUrls: ['./playing-cards.component.scss']
})
export class PlayingCardsComponent implements OnInit {
  cards: any = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  constructor() { }

  ngOnInit(): void {
  }

}
