import theVillageImg from "../media/theVillage.png";
import pawfectImg from "../media/pawfect_match.png";
import restcountriesImg from "../media/BookHub.png";



export const projects = [
  {
    title: "The Village",
    description:
      "Mobile-first application that allows users to share childcare-related resources. Users can set up their own village or join an existing village and submit childcare-related requests and trade 'crayons' (points) with other villagers.",
    image: theVillageImg,
    tags: [ "React", "JavaScript", "MongoDB", "MUI"],
    source: "https://github.com/Annie-McElroy/the-village",
    liveVersion: "https://the-village-pr3-499485f65b78.herokuapp.com/",
    id: 0,
  },
  {
    title: "PawfectMatch",
    description:
      "Pawfect Match is a web application powered by Node.js, Express, MySQL, and Sequelize for seamless functionality. Handlebars and Tailwind CSS ensure a stylish and user-friendly interface, features Firebase realtime chat, ",
    image: pawfectImg,
    tags: ["Firebase", "JavaScript", "Node.js", "MySQL"],
    source: "https://github.com/CypherNyx/PawfectMatch",
    liveVersion: "https://desolate-journey-58009-31421c44a662.herokuapp.com/",
    id: 1,
  },
  {
    title: "BookHub",
    description:
      "This application allows users to take a quiz and get book recommendations based on their favorite shows. Then, the user will be presented with a curated list of books to read that are relevant to genres, topics and style of their favorite shows. ",
    image: restcountriesImg,
    tags: ["JavaScript", "HTML5", "CSS", "API-Client"],
    source: "https://github.com/CypherNyx/BookHub",
    liveVersion: "https://cyphernyx.github.io/BookHub/",
    id: 2,
  },
];
