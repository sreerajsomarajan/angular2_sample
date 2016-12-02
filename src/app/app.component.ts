import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sample Angular 2 App';
  tweet = {
    totalLikes: 10,
    iLike: false
  };
  post = {
    voteCount: 10,
    myVote: 0
  };

  onVote(event) {
    console.log(event);
  }
}
