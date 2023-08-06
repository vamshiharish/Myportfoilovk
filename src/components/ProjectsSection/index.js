import ProjectCard from "../ProjectCard";

const projectsList = [
  {
    id:1,
    name:"Jobby App",
    imgUrl: "jobby.png",
    liveUrl:"https://jobbbyappvk.ccbp.tech/",
    githubUrl:"https://github.com/vamshiharish/JobbyApplication",
  },
  {
    id:2,
    name:"Todo Application",
    imgUrl: "todoapp.png",
    liveUrl:"https://tvamshiatodo.ccbp.tech/",
    githubUrl:"https://github.com/vamshiharish/todoapplication",
  },
  {
    id:3,
    name:"Twitter API Clone",
    imgUrl: "twitterapi.png",
    liveUrl:"https://github.com/vamshiharish/twitter-api.git",
    githubUrl:"https://github.com/vamshiharish/twitter-api.git",
  },
  {
    id:4,
    name:"Bingo Game",
    imgUrl: "bingogame.png",
    liveUrl:"https://github.com/vamshiharish/Bingo-Game",
    githubUrl:"https://github.com/vamshiharish/Bingo-Game",
  },
  {
    id:5,
    name:"Food Munch",
    imgUrl: "foodmanch.png",
    liveUrl:"https://onlinefood12.ccbp.tech/",
    githubUrl:"https://github.com/vamshiharish/Food-manch",
  }
]

const ProjectsSection = () => (
  <section
    id="projects"
    className="py-16 flex flex-col items-center bg-blue-100"
  >
    <h1 className="text-center font-semibold text-3xl">
    Awesome Creations I've Developed
    </h1>
    <p className="text-gray-500 text-lg  text-center p-8 w-4/5 leading-relaxed">
    During my learning journey, I've crafted several websites using diverse technologies like JavaScript, 
    HTML, CSS, and MySQL. Additionally, I've harnessed the power of various frameworks and libraries, such 
    as React.js, Node.js, Express.js, Bootstrap, and Tailwind CSS, to enhance the functionality and design 
    of these websites
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
      {projectsList.map(each=>(
        <ProjectCard key={each.id} project={each}/>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
