import { Component } from '@angular/core'

@Component({
  selector: 'favourite',
  template: `<i
                class="glyphicon"
                [class.glyphicon-star-empty]="!isFavourite"
                [class.glyphicon-star]="isFavourite"
                (click)="onClick()">
             </i>
            `
})

export class StarComponent {
  isFavourite = false;
  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
