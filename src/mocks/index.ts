export const newsCategories = [
  { id: 1, name: 'Politics' },
  { id: 2, name: 'Technology' },
  { id: 3, name: 'Sports' },
  { id: 4, name: 'Entertainment' },
  { id: 5, name: 'Health' },
  { id: 6, name: 'Business' },
  { id: 7, name: 'Science' },
  { id: 8, name: 'Education' },
  { id: 9, name: 'Environment' },
  { id: 10, name: 'Travel' },
  { id: 11, name: 'Fashion' },
  { id: 12, name: 'Food' }
];

export const newTags = [
  { id: 1, name: 'Election 2024' },
  { id: 2, name: 'Artificial Intelligence' },
  { id: 3, name: 'Basketball' },
  { id: 4, name: 'Movie Reviews' },
  { id: 5, name: 'Fitness Tips' },
  { id: 6, name: 'Climate Change' },
  { id: 7, name: 'Music' },
  { id: 8, name: 'Gaming' },
  { id: 9, name: 'Home Decor' },
  { id: 10, name: 'Cooking' },
  { id: 11, name: 'Pets' },
  { id: 12, name: 'Photography' }
];

export const socialCounts: Record<string, number> = {
  facebook: 12345,
  twitter: 56789,
  linkedin: 98765,
  instagram: 54321,
  youtube: 24680,
  vimeo: 13579
};

interface Comment {
  id: number;
  userName: string;
  userAvatar: string;
  date: string;
  text: string;
  replies?: Reply[];
}

export const comments: Comment[] = [
  {
    id: 1,
    userName: 'John Doe',
    userAvatar:
      'https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg',
    date: '01 Jan 2045',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    replies: [
      {
        id: 12,
        userName: 'Jane Doe',
        userAvatar:
          'https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg',
        date: '02 Jan 2045',
        text: "Reply to John Doe's comment lorems skd skddss ssss",
        replies: [
          {
            id: 13,
            userName: 'John Doe',
            userAvatar:
              'https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg',
            date: '01 Jan 2045',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
          }
        ]
      }
    ]
  },
  {
    id: 1,
    userName: 'John Doe',
    userAvatar:
      'https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg',
    date: '01 Jan 2045',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    replies: [
      {
        id: 12,
        userName: 'Jane Doe',
        userAvatar:
          'https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg',
        date: '02 Jan 2045',
        text: "Reply to John Doe's comment..."
      }
    ]
  }
];
