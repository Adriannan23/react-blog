const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title one',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Movies'
    },
    {
      id: '2',
      title: 'Article title two',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '3',
      title: 'Article title three',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'News'
    },
    {
      id: '4',
      title: 'Article title four',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      category: 'Sport'
    }
  ],

  categories: [
    'Sport',
    'News',
    'Movies',
  ],
};



export default initialState;