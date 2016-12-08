import { Component } from '@angular/core'
import { TweetService } from './tweet.service'

@Component({
  selector: 'tweet',
  templateUrl: 'tweet.component.html',
  styleUrls: ['tweet.component.css'],
  providers: [TweetService]
})

export class TweetComponent {
  tweets: any[];

  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }

  onClick(tweet) {
    tweet.iLike = !tweet.iLike;
    tweet.totalLikes += tweet.iLike ? 1 : -1;
  }
}
