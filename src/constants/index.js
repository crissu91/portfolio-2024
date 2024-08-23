import ecommerce_shop from "../assets/projects/ecommerce-shop.png";
import nc_news from "../assets/projects/nc-news.png";
import weather_app from "../assets/projects/weather_app.png";
import safer_places from "../assets/projects/safer-places.png";
import redmapp from "../assets/projects/redmapp.png";
import gttg from "../assets/projects/gttg.png";

export const HERO_CONTENT = `Adept at combining technical expertise with strong interpersonal and transferable skills, including collaboration, problem-solving, and effective communication. Recognized for exceptional analytical skills, a collaborative approach, and a passion for continuous improvement and learning.`;

export const ABOUT_TEXT = `I am a passionate software engineer with a strong foundation in the Payroll industry, where I honed skills in attention to detail, accuracy, and working with complex data. My seven-year experience in this field has seamlessly translated into software development, driving my meticulous and analytical approach. I am dedicated to continuous learning and actively seek opportunities to expand my knowledge, stay current with industry trends, and refine my skills. Outside of work, my interests in photography and travel fuel my creativity and inspire a fresh perspective in problem-solving.`;

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "Safer Places Website",
    image: safer_places,
    associated_with: "Few and Far",
    link: "https://www.saferplaces.co.uk/",
    description:
      "A platform for supporting all adult & child victims of domestic abuse across Essex & Hertfordshire.",
    technologies: ["TailwindCSS", "Vue.js", "PHP", "Laravel", "Statamic"],
  },
  {
    title: "Redmapp Website",
    image: redmapp,
    associated_with: "Few and Far",
    link: "https://www.redmapp.org.uk/",
    description:
      "A platform for supporting parents when making treatment decisions for their child with relapsed or refractory neuroblastoma in the United Kingdom.",
    technologies: ["TailwindCSS", "Vue.js", "PHP", "Laravel", "Statamic"],
  },
  {
    title: "GTTG Website",
    image: gttg,
    associated_with: "Few and Far",
    link: "https://www.gettogetherthroughgaming.com/",
    description:
      "A platform for a gaming event supporting better mental health for all. In partnership with Leeds Mind.",
    technologies: ["TailwindCSS", "Vue.js", "PHP", "Laravel", "Statamic"],
  },
  {
    title: "News Website",
    image: nc_news,
    associated_with: "Northcoders",
    link: "https://crissu-nc-news.netlify.app/",
    description:
      "A news website. Each article can be voted using the API. Users can also add comments about an article, log in, sign up and see their account details.A user can remove their own comments. All data come from own implementation of the API server.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "E-Commerce Website",
    image: ecommerce_shop,
    link: "https://crissu91-ecommerce-shop.netlify.app/",
    description:
      "A fully functional e-commerce website with features like product listing and shopping cart.",
    technologies: ["TailwindCSS", "React", "FakeStoreApi"],
  },
  {
    title: "Weather App",
    image: weather_app,
    link: "https://crissu91-weather-app.netlify.app/",
    description:
      "An application for getting temperature, max temperature, min temperature, humidity, real feel, sunrise, sunset, hourly and daily forecast. Is it also displaying the local time at the selected location.",
    technologies: ["HTML", "TailwindCSS", "React", "Unicons"],
  },
];
