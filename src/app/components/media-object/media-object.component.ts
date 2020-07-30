import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-media-object',
  templateUrl: './media-object.component.html',
  styleUrls: ['./media-object.component.scss']
})
export class MediaObjectComponent {
  @Input() header?: string;
  @Input() image?: string;
  @Input() description?: string;
}
