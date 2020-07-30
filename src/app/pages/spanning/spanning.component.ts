import { Component, OnInit } from '@angular/core';

interface NewsCards {
  cardTitle: string;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-spanning',
  templateUrl: './spanning.component.html',
  styleUrls: ['./spanning.component.scss']
})
export class SpanningComponent implements OnInit {
  cards: NewsCards[] = [
    {
      cardTitle: 'treasure',
      title: 'Amazing things are happening with CSS Grid!',
      description: 'The world of CSS Grid is amazing. You will absolutely love it once you start to use it. It is incredibly easy to adopt and it is very versatile!',
      image: 'assets/img/treasure.png'
    },
    {
      cardTitle: 'cssgrid',
      title: 'Did I mention how awesome it is?',
      description: 'Have you used it before? Do you prefer flexbox over CSS Grid? Have you never used it before? You are in the right place!',
      image: 'assets/img/css-grid.jpg'
    },
    {
      cardTitle: 'gridShowcase',
      title: 'How many times have you wanted to do something in css and throught it was a pain?',
      description: 'Enter CSS Grid. Never again will you fret about aligning or doing something trivially simple in css, you will have css grid at your disposal!',
      image: 'assets/img/css-grid-framework.png'
    },
    {
      cardTitle: 'treasure',
      title: 'How many times have you wanted to do something in css and throught it was a pain?',
      description: 'Enter CSS Grid. Never again will you fret about aligning or doing something trivially simple in css, you will have css grid at your disposal!',
      image: 'assets/img/css-grid-framework.png'
    },
    {
      cardTitle: 'treasure',
      title: 'How many times have you wanted to do something in css and throught it was a pain?',
      description: 'Enter CSS Grid. Never again will you fret about aligning or doing something trivially simple in css, you will have css grid at your disposal!',
      image: 'assets/img/treasure.png'
    }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
