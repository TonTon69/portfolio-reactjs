import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
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
  projects: [
    {
      tag: "React",
      image:
        "https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg",
      title: "Setting Text Color",
      description: "Language used: Reactjs",
      caption: "Project setting text color",
      links: [
        {
          link: "https://github.com/TonTon69/React-setting-text-color",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Nodejs",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611240746/image-web/nodejs-blog_ya7fmb.jpg",
      title: "Courses Blog",
      description:
        "Programming community.\nLearn to code through hands-on learning with quality courses.\nLanguage used: Handlebarsjs, Nodejs, Expressjs, MongoDB, Mongoose, Bootstrap 4",
      caption: "Programming community",
      links: [
        {
          link: "https://github.com/TonTon69/TonTon_Blog",
          icon: <GitHubIcon />,
        },
        {
          link: "https://tonton-blog.herokuapp.com/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Nodejs",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611245392/image-web/nodejs-book_rarrem.jpg",
      title: "BookHouse",
      description:
        "Building book business website.\nLanguage used: Pugjs, Nodejs, Expressjs, MongoDB, Mongoose, Bootstrap 4",
      caption: "Building book business website",
      links: [
        {
          link: "https://github.com/TonTon69/Books-Express",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Asp.Net MVC",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611240746/image-web/fashion-aspnet_z7sc9y.jpg",
      title: "Fashion Business",
      description:
        "Building fashion business website.\nAsian fashion style.\nLanguage used: Bootstrap 4, Asp.net MVC, SQL Server",
      caption: "Building fashion business website",
      links: [
        {
          link: "https://github.com/TonTon69/Web-ASP.NET-MVC",
          icon: <GitHubIcon />,
        },
        {
          link: "https://hhtfashion.somee.com/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Html",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611240747/image-web/shopee-html_tdwhee.jpg",
      title: "Shopee Clone Html",
      description:
        "This is a static website, cloned shopee.\nLanguage used: html-css-js",
      caption: "Static fashion website",
      links: [
        {
          link: "https://github.com/TonTon69/Shopee-clone-html",
          icon: <GitHubIcon />,
        },
        {
          link: "http://shopee-clone-html.surge.sh/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Html",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611241875/image-web/html-porflio_yjxwst.jpg",
      title: "Porfolio",
      description:
        "This is a static website, my resume.\nLanguage used: html-css-js",
      caption: "Static porfolio website",
      links: [
        {
          link: "https://github.com/TonTon69/Personal-web",
          icon: <GitHubIcon />,
        },
        {
          link: "https://minhhoang6920.web.app/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Html",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611240746/image-web/muzli-html_pta6mp.jpg",
      title: "Muzli Clone Html",
      description: "This is a static news website.\nLanguage used: html-css-js",
      caption: "Static news website",
      links: [
        {
          link: "https://github.com/TonTon69/Muzli-clone",
          icon: <GitHubIcon />,
        },
        {
          link: "http://muzli-clone-html.surge.sh/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "JavaScript",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611242730/image-web/from-validation_qp0js0.jpg",
      title: "From Validation",
      description:
        "Check the validity of the user login and register.\nLanguage used: html-css-js",
      caption: "Test from",
      links: [
        {
          link: "https://github.com/TonTon69/From-Validation",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Designer",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611242594/image-web/ui-login_mtgopr.jpg",
      title: "Login UI",
      description: "Design from login.\nLanguage used: html-css",
      caption: "From login",
      links: [
        {
          link: "https://github.com/TonTon69/Login-UI-Design",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "C-Sharp",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611242231/image-web/qlsv_t6quug.png",
      title: "Student Score Management",
      description:
        "Student score management.\nLanguage used: c#, entity framework",
      caption: "Winform student management",
      links: [
        {
          link: "https://github.com/TonTon69/QuanLySinhVien-Winform",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "C-Sharp",
      image:
        "https://res.cloudinary.com/din6v2it9/image/upload/v1611242306/image-web/qlfashion_ka7kml.jpg",
      title: "Modern Fashion Business",
      description:
        "Fashion business software.\nLanguage used: c#, entity framework",
      caption: "Winform fashion business",
      links: [
        {
          link: "https://github.com/TonTon69/Modern-Fashion-C-Sharp",
          icon: <GitHubIcon />,
        },
      ],
    },
  ],
};
