import { getTired } from './tiredSelector';

describe('comments selectors', () => {
  it('gets a list of comments from state', () => {
    const state = {
      videos: [],
      comments: [
        { videoId: '1234', text: 'My first comment' },
        { videoId: '1234', text: 'My second comment' }
      ]
    };

    const comments = getComments(state);

    expect(comments).toEqual([
      { videoId: '1234', text: 'My first comment' },
      { videoId: '1234', text: 'My second comment' }
    ]);
  });
});
