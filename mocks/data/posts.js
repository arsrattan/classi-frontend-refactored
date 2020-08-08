export const postData = [
  {
    postId: 1,
    postType: 'Registered_Class', // enum of Registered_Class, Completed_Class, or Created_Class
    caption: 'Cant wait for this class',
    userId: 'derekxiao77',
    createdAt: new Date().toISOString(),
    comments: [
      {
        userId: 'arsrattan',
        postCreator: 'Derek',
        postId: 1,
        data: 'nice class',
      },
      {
        userId: 'arsrattan',
        postCreator: 'Derek',
        postId: 1,
        data: 'dope',
      },
    ],
    likes: ['arnimj', 'malikhadjri'],
    classId: 1,
    users3url: 's3://test',
  },
  {
    postId: 2,
    postType: 'Completed_Class', // enum of Registered_Class, Completed_Class, or Created_Class
    caption: 'Best class ever',
    userId: 'arsrattan',
    createdAt: new Date().toISOString(),
    comments: [],
    likes: ['arnimj', 'malikhadjri'],
    classId: 2,
    users3url: 's3://test',
  },
];
