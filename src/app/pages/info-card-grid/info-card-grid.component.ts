import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceImage, SpaceImagesService } from '../../services/space-images.service';
import { map } from 'rxjs/operators';
import { shuffleArrayInPlace } from '../../utils';

@Component({
  selector: 'app-info-card-grid',
  templateUrl: './info-card-grid.component.html',
  styleUrls: ['./info-card-grid.component.scss']
})
export class InfoCardGridComponent {

  imageItems: Observable<SpaceImage[]>;

  constructor(spaceImagesService: SpaceImagesService) {
    this.imageItems = spaceImagesService.load('women-in-astronomy')
      .pipe(
        map(data => shuffleArrayInPlace([...data]))
      )
    ;
  }

}
