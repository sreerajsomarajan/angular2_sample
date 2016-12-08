import { Component } from '@angular/core'

// One way of class adding
// @Component({
//   selector: 'favourite',
//   template: `
//     <h2>Favourite Section</h2>
//     <i
//       class="glyphicon"
//       [class.glyphicon-star-empty]="!isFavourite"
//       [class.glyphicon-star]="isFavourite"
//       (click)="onClick()">
//     </i>
//   `
// })

@Component({
  selector: 'favourite',
  template: `
    <h2>Favourite Section</h2>
    <i
      class="glyphicon"
      [ngClass] = "{
        'glyphicon-star-empty': !isFavourite,
        'glyphicon-star': isFavourite
      }"
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
