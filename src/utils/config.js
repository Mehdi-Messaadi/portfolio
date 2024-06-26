import { ReactComponent as HTML } from "../images/html.svg";
import { ReactComponent as CSS } from "../images/css.svg";
import { ReactComponent as JavaScript } from "../images/javascript.svg";
import { ReactComponent as ReactJS } from "../images/react.svg";
import { ReactComponent as Sass } from "../images/sass.svg";
import { ReactComponent as Tailwind } from "../images/tailwind.svg";
import { ReactComponent as Redux } from "../images/redux.svg";
import { ReactComponent as ApolloClient } from "../images/apolloclient.svg";
import { ReactComponent as PHP } from "../images/php.svg";
import { ReactComponent as MySQL } from "../images/mysql.svg";
import { ReactComponent as RestAPI } from "../images/restapi.svg";
import { ReactComponent as GraphQL } from "../images/graphql.svg";
import { ReactComponent as Git } from "../images/git.svg";

export const skillsList = [
  {
    name: "React",
    code: "react",
    skillIconCode: ReactJS,
    url: "https://react.dev/",
  },
  {
    name: "HTML",
    code: "html",
    skillIconCode: HTML,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    code: "css",
    skillIconCode: CSS,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    code: "javascript",
    skillIconCode: JavaScript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Sass",
    code: "sass",
    skillIconCode: Sass,
    url: "https://sass-lang.com/",
  },
  {
    name: "Tailwind",
    code: "tailwind",
    skillIconCode: Tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    code: "redux",
    skillIconCode: Redux,
    url: "https://redux.js.org/",
  },
  {
    name: "Apollo Client",
    code: "apolloclient",
    skillIconCode: ApolloClient,
    url: "https://www.apollographql.com/",
  },
  { name: "PHP", code: "php", skillIconCode: PHP, url: "https://www.php.net/" },
  {
    name: "MySQL",
    code: "mysql",
    skillIconCode: MySQL,
    url: "https://www.mysql.com/",
  },
  {
    name: "GraphQL",
    code: "graphql",
    skillIconCode: GraphQL,
    url: "https://graphql.org/",
  },
  {
    name: "REST API",
    code: "restapi",
    skillIconCode: RestAPI,
    url: "https://www.techtarget.com/searchapparchitecture/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20operations%20related%20to%20resources.",
  },
  { name: "Git", code: "git", skillIconCode: Git, url: "https://git-scm.com/" },
];

export const breakpoints = {
  sm540: "540",
  sm: "640",
  md: "768",
  md992: "992",
  lg: "1024",
  xl: "1280",
  "2xl": "1536",
};

export const animateDown = (inView, duration = 600) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(-50px)",
  config: { mass: 1, tension: 120, friction: 14, duration },
});

export const animateUp = (inView, duration = 600) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(50px)",
  config: { mass: 1, tension: 120, friction: 14, duration },
});

export const animateRightToLeft = (inView, duration = 600) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(50px)",
  config: { mass: 1, tension: 120, friction: 14, duration },
});

export const animateLeftToRight = (inView, duration = 600) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateX(0)" : "translateX(-50px)",
  config: { mass: 1, tension: 120, friction: 14, duration },
});

export const animateAppear = (inView, duration = 600) => ({
  opacity: inView ? 1 : 0,
  config: { mass: 1, tension: 120, friction: 14, duration },
});
