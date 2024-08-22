import ecommerce_shop from "../assets/projects/ecommerce-shop.png";
import nc_news from "../assets/projects/nc-news.png";
import weather_app from "../assets/projects/weather_app.png";
import safer_places from "../assets/projects/safer-places.png";
import redmapp from "../assets/projects/redmapp.png";

export const HERO_CONTENT = `Adept at combining technical expertise with strong interpersonal and transferable skills, including collaboration, problem-solving, and effective communication. Recognized for exceptional analytical skills, a collaborative approach, and a passion for continuous improvement and learning.`;

export const ABOUT_TEXT = `With lots of transferable skills gained through my previous work experience, including great organizational skills, I am now seeking to collaborate on interesting projects in the tech industry where I can apply my knowledge and broaden my understanding. Having recently completed a coding bootcamp, I am passionate about pursuing a career in software development and contributing to the development of innovative solutions. I possess strong interpersonal skills that enable me to work collaboratively with teams, communicate complex technical concepts effectively, and deliver projects to meet strict deadlines while maintaining high standards of quality. Additionally, I am skilled at working under pressure and multitasking, making me a valuable asset to any organization. I am excited about the prospect of leveraging my skills and passion to make a meaningful contribution to a dynamic team.`;

export const EXPERIENCES = [];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecommerce_shop,
    description:
      "A fully functional e-commerce website with features like product listing and shopping cart.",
    technologies: ["TailwindCSS", "React", "FakeStoreApi"],
  },
  {
    title: "Weather App",
    image: weather_app,
    description:
      "An application for getting temperature, max temperature, min temperature, humidity, real feel, sunrise, sunset, hourly and daily forecast. Is it also displaying the local time at the selected location.",
    technologies: ["HTML", "TailwindCSS", "React", "Unicons"],
  },
  {
    title: "News Website",
    image: nc_news,
    associated_with: "Northcoders",
    description:
      "A news website. Each article can be voted using the API. Users can also add comments about an article, log in, sign up and see their account details.A user can remove their own comments. All data come from own implementation of the API server.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
  },
  {
    title: "Safer Places Website",
    image: safer_places,
    associated_with: "Few and Far",
    description:
      "A platform for supporting all adult & child victims of domestic abuse across Essex & Hertfordshire.",
    technologies: ["TailwindCSS", "Vue.js", "PHP", "Laravel", "Statamic"],
  },
  {
    title: "Redmapp Website",
    image: redmapp,
    associated_with: "Few and Far",
    description:
      "A platform for supporting all to parents when making treatment decisions for their child with relapsed or refractory neuroblastoma in the United Kingdom.",
    technologies: ["TailwindCSS", "Vue.js", "PHP", "Laravel", "Statamic"],
  },
];

export const CONTACT = {
  email: "cristinaf.stefan@gmail.com",
};
