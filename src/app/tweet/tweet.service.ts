export class TweetService {
  getTweets() {
    return [
      {
        author: 'Sreeraj S',
        handler: 'sreerajsomarajan',
        body: 'Hi this is my tweet message',
        totalLikes: 20,
        iLike: false
      },
      {
        author: 'Prajeesh B',
        handler: 'prajeeshbalagopalan',
        body: `Hi this is prajeesh's message`,
        totalLikes: 102,
        iLike: true
      },
      {
        author: 'Rajeev G',
        handler: 'rajeev_123',
        body: 'Hi all, here is your rajeev',
        totalLikes: 562,
        iLike: false
      }
    ];
  }
}
