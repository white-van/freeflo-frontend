const subtitle =
  "The Dijkstra algorithm uses labels that are positive integers or real numbers, which are totally ordered. It can be generalized to use any labels.";
const pic =
  "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg";

const featureEpic =
  "https://cdn.vox-cdn.com/thumbor/I2bFYczqDpiHcC1cUt_ptziX_t8=/0x0:4896x3264/1820x1213/filters:focal(2057x1241:2839x2023):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64715574/GettyImages_577660404.0.jpg";
const featureAuthor = "Alex English";
const featureIcon =
  "https://miro.medium.com/fit/c/262/262/1*UKEsrHsZRxFk6XTl51pX5g.jpeg";
const featureTitle = "How to Be a Fashion-Loving Minimalist";
const featureTimestamp = "5 hours ago";
export const mockRecommendedArticles = [
  {
    img: featureEpic,
    desc:
      "I'll admit it, amongst my friends I'm known as the Consumer, the Shopaholic, the Big Spender, etc.  But the irony is that I am also constantly trying to simplify my life.",
    title: featureAuthor,
    subtitle: featureTitle,
    timestamp: featureTimestamp,
    avatar: featureIcon,
  },
  {
    img:
      "https://automationpanda.files.wordpress.com/2017/09/django-logo-negative.png?w=620",
    title: "Why Django Sucks",
    subtitle:
      "What sucks about Django? Asynchronous is a bit of a pain. Http 2 pipelines aren’t easy. Django was designed and written for py2 a long while ago.",
    timestamp: "2 hours ago",
  },
  {
    img: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
    title: "React 101",
    subtitle:
      "React is the hottest JavaScript framework on the market - but why?",
    timestamp: "5 hours ago",
  },
  {
    img: pic,
    title: "Cool article",
    subtitle,
    timestamp: "2 days ago",
  },
];

export const mockRequests = [
  {
    name: "nivy",
    avatar:
      "https://avatars2.githubusercontent.com/u/34191104?s=460&u=db9b373c76a9e9b36b59ad676cc1bed43d7155f9&v=4",
    title: "@nivy",
    subtitle: "typo fix",
    iconindex: 1,
  },
  {
    name: "jerry",
    avatar:
      "https://avatars2.githubusercontent.com/u/45128231?s=400&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
    title: "@jerry",
    subtitle: "added paragraph",
    iconindex: 2,
  },
  {
    name: "noor",
    avatar:
      "https://avatars3.githubusercontent.com/u/30037359?s=400&u=9e1182dbf652b1fa06e8c388dcec1d1099d33fe1&v=4",
    title: "@noor",
    subtitle: "rephrasing",
    iconindex: 0,
  },
];

export const mockRecommendations = [
  {
    name: "noor",
    avatar:
      "https://avatars3.githubusercontent.com/u/30037359?s=400&u=9e1182dbf652b1fa06e8c388dcec1d1099d33fe1&v=4",
    title: "@noor",
    subtitle: "uwaterloo!",
    iconindex: 3,
  },
  {
    name: "aipiox",
    avatar: "https://avatars1.githubusercontent.com/u/43301959?s=400&v=4",
    title: "@aipiox",
    subtitle: "robot revolution",
    iconindex: 3,
  },
  {
    name: "nivy",
    avatar:
      "https://avatars2.githubusercontent.com/u/34191104?s=460&u=db9b373c76a9e9b36b59ad676cc1bed43d7155f9&v=4",
    title: "@nivy",
    subtitle: "aka orange",
    iconindex: 3,
  },
];

export const mockProjects = [
  {
    id: 624979123796836355,
    username: "aipiox_tech",
    project_name: "lalala",
    description: null,
    heart_count: 0,
    created_at: "2021-01-16T12:08:12.336Z",
    updated_at: "2021-01-16T12:08:12.336Z",
    organization: null,
  },
  {
    id: 625064339364347905,
    username: "test_user",
    project_name: "DJANGO LOL",
    description: "this is op text here",
    heart_count: 0,
    created_at: "2021-01-16T19:21:38.042Z",
    updated_at: "2021-01-16T19:21:38.042Z",
    organization: null,
  },
];

export const mockUsers = [
  {
    id: 624978508801409025,
    email: "test_email@outlook.com",
    username: "aipiox_tech",
    created_at: "2021-01-16T12:05:04.604Z",
    updated_at: "2021-01-16T12:05:04.604Z",
    full_name: "Aipiox Techson",
    url: "https://freeflo-backend.herokuapp.com/users/624978508801409025.json",
  },
  {
    id: 625057024760381442,
    email: "Wow",
    username: "techtech",
    created_at: "2021-01-16T18:44:25.769Z",
    updated_at: "2021-01-16T18:44:25.769Z",
    full_name: "Aipiox-Tech",
    url: "https://freeflo-backend.herokuapp.com/users/625057024760381442.json",
  },
  {
    id: 625060715787845633,
    email: "Test-User@gmail.com",
    username: "test_user",
    created_at: "2021-01-16T19:03:12.187Z",
    updated_at: "2021-01-16T19:03:12.187Z",
    full_name: "Test User1",
    url: "https://freeflo-backend.herokuapp.com/users/625060715787845633.json",
  },
  {
    id: 625094733371932673,
    email: "TestUser3@gmail.com",
    username: "YEET2",
    created_at: "2021-01-16T21:56:13.603Z",
    updated_at: "2021-01-16T21:56:13.603Z",
    full_name: "TestUser3",
    url: "https://freeflo-backend.herokuapp.com/users/625094733371932673.json",
  },
  {
    id: 625101055671926785,
    email: "testuser2@gmail.com",
    username: "testuser2",
    created_at: "2021-01-16T22:28:22.873Z",
    updated_at: "2021-01-16T22:28:22.873Z",
    full_name: "test user2",
    url: "https://freeflo-backend.herokuapp.com/users/625101055671926785.json",
  },
  {
    id: 625107924232699906,
    email: "yeet",
    username: "applejuice",
    created_at: "2021-01-16T23:03:18.992Z",
    updated_at: "2021-01-16T23:03:18.992Z",
    full_name: "apple juice",
    url: "https://freeflo-backend.herokuapp.com/users/625107924232699906.json",
  },
  {
    id: 625118344080818177,
    email: "testuser6@gmail.com",
    username: "test7",
    created_at: "2021-01-16T23:56:19.023Z",
    updated_at: "2021-01-16T23:56:19.023Z",
    full_name: "testuser6",
    url: "https://freeflo-backend.herokuapp.com/users/625118344080818177.json",
  },
];

export const mockCommits = [
  {
    id: 625104358016679937,
    content: "YEETSTAR123",
    created_at: "2021-01-16T22:45:10.708Z",
    updated_at: "2021-01-16T22:45:10.708Z",
    branch_id: 625064340233420801,
    branch_name: "main",
  },
];
