import anatomy from "../assets/projects/anatomy.png";
import restaurant from "../assets/projects/restaurant.png";
import uiux from "../assets/projects/uiux.png";

const projects = [
  {
    id: 1,
    title: "VR Anatomy Model",
    description:
      "An immersive VR application that allows students to explore interactive 3D human anatomy models for an engaging learning experience.",
    technologies: ["Unity", "Blender", "C#"],
    image: anatomy,
    github: "https://github.com/Sathiya0406/HumanAnatomy",
    demo: "",
  },
  {
    id: 2,
    title: "Restaurant Roster Planner",
    description:
      "A web application that helps restaurant managers create and manage employee work schedules efficiently.",
    technologies: ["React", "JavaScript", "CSS"],
    image: restaurant,
    github: "https://github.com/Sathiya0406/Restaurant_Staff-",
    demo: "",
  },
  {
    id: 3,
    title: "UI/UX Design Collection",
    description:
      "A collection of responsive UI/UX designs and interactive prototypes created using Figma.",
    technologies: ["Figma"],
    image: uiux,
    github: "",
    demo: "",
  },
];

export default projects;