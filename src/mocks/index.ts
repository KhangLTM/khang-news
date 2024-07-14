export const newsCategories = [
  {
    id: 1,
    name: 'Business',
    img: 'https://cloudinary.hbs.edu/hbsit/image/upload/s--Fm3oHP0m--/f_auto,c_fill,h_375,w_750,/v20200101/79015AB87FD6D3284472876E1ACC3428.jpg'
  },
  {
    id: 2,
    name: 'Technology',
    img: 'https://www.21kschool.com/us/wp-content/uploads/sites/37/2023/09/Pros-and-Cons-of-Using-Education-Technology.png'
  },
  {
    id: 3,
    name: 'Sports',
    img: 'https://nativespeaker.vn/uploaded/page_1656_1712278968_1715676497.jpg'
  },
  {
    id: 4,
    name: 'Entertainment',
    img: 'https://musictheatreaustralia.com.au/wp-content/uploads/2023/11/Music-Theatre-Australia-The-Importance-of-Entertainment-at-an-Event-i.png'
  }
];

export const mockHightLightNews = [
  {
    id: 1,
    title: 'New Study Shows Benefits of Regular Exercise',
    desc: 'Researchers find significant health benefits associated with daily exercise routines.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Sports',
    img: 'https://picsum.photos/500/501',
    createdDt: '2023-10-01'
  },
  {
    id: 2,
    title: 'Tech Company Launches Revolutionary AI Assistant',
    desc: 'A new AI assistant promises to revolutionize how users interact with technology.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Technology',
    img: 'https://picsum.photos/500/502',
    createdDt: '2023-10-05'
  },
  {
    id: 3,
    title: 'Climate Change Conference Yields Historic Agreements',
    desc: 'Global leaders agree on ambitious targets to combat climate change.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Business',
    img: 'https://picsum.photos/500/503',
    createdDt: '2023-09-25'
  },
  {
    id: 4,
    title: 'New Vaccine Shows Promising Results Against Virus X',
    desc: 'Early trials of a new vaccine suggest high efficacy rates against Virus X.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Entertainment',
    img: 'https://picsum.photos/500/504',
    createdDt: '2023-10-10'
  },
  {
    id: 5,
    title: 'Breakthrough in Renewable Energy Technology',
    desc: 'Scientists develop a new method to harness solar power more efficiently.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Science',
    img: 'https://picsum.photos/500/505',
    createdDt: '2023-10-12'
  },
  {
    id: 6,
    title: 'Stock Market Hits Record Highs',
    desc: 'The stock market reaches new peaks amid economic recovery.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'business',
    img: 'https://picsum.photos/500/506',
    createdDt: '2023-10-15'
  },
  {
    id: 7,
    title: 'New Culinary Trend Sweeps the Nation',
    desc: 'A new fusion cuisine is taking the food scene by storm.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'Technology',
    img: 'https://picsum.photos/500/507',

    createdDt: '2023-10-18'
  },
  {
    id: 8,
    title: 'Innovative Education Program Boosts Student Success',
    desc: 'A new educational initiative shows promising results in improving student outcomes.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor eget dolor dapibus, ut luctus dui pellentesque.',
    category: 'technology',
    img: 'https://picsum.photos/500/508',
    createdDt: '2023-10-20'
  }
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
    date: '01 Jan 2045',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    replies: [
      {
        id: 12,
        userName: 'Jane Doe',
        userAvatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
        date: '02 Jan 2045',
        text: "Reply to John Doe's comment lorems skd skddss ssss"
      }
    ]
  },
  {
    id: 1,
    userName: 'John Doe',
    userAvatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
    date: '01 Jan 2045',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...',
    replies: [
      {
        id: 12,
        userName: 'Jane Doe',
        userAvatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
        date: '02 Jan 2045',
        text: "Reply to John Doe's comment..."
      }
    ]
  }
];
