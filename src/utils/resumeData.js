import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
export default {
  name: "Huynh Minh Hoang",
  title: "Web Developer",
  birthday: "06 September 2000",
  email: "hoanghuynh0609@gmail.com",
  address: "District 9, HCM City",
  phone: "039 8412 102",

  socials: {
    GitHub: {
      link: "https://github.com/tonton69",
      text: "TonTon69",
      icon: <GitHubIcon />,
    },
  },

  about:
    "4 words always: \nalways smile, always gentle, always understanding, always help.\n \nYou should message me if you are: \nSexy, smart, fit and fun. I don’t think that’s too much to ask.\n \nMaxim live: \nNever study to be successful, study for self efficiency. Don’t run behind success. Follow behind excellence, success will come all way behind you.\n \nI love to play chess and travel.",
  educations: [
    {
      title: "Ho Chi Minh City University of Technology",
      date: "2018 - Persent",
      description: "Wish to graduate with excellence",
    },
  ],
  experences: [
    {
      title: "Fashion Business - Asp.Net MVC",
      date: "2020 - 2021",
      description:
        "Language used: Asp.Net MVC, SQL Server, Bootstrap 4. \nHere is the demo link for my exercises using somee.com: \nhttps://hhtfashion.somee.com/",
    },
    {
      title: "Course Blog - Nodejs",
      date: "2019 - 2020",
      description:
        "Language used: Handlebarsjs, Nodejs, Expressjs, MongoDB, Mongoose, Bootstrap 4. \nHere is the demo link for my exercises using heroku.com: \nhttps://tonton-blog.herokuapp.com/",
    },
    {
      title: "Shopee Clone - HTML",
      date: "2019",
      description:
        "Language used: HTML, CSS, JavaScript. \nHere is the demo link for my exercises using surge.sh: \nhttp://shopee-clone-html.surge.sh/",
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: ["HTML-CSS-JS", "Bootstrap", "ReactJS", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "ExpressJS", "Asp.Net MVC", "WordPress"],
    },
    {
      title: "DATABASE",
      description: ["Firebase", "MongoDB", "SQL Server"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub"],
    },
  ],
};
