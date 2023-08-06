const ProjectCard = (props) => {
    const { project } = props;
    const { name, imgUrl, liveUrl, githubUrl } = project;
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700  transition duration-500 hover:scale-105">
        <a href={liveUrl} target="_blank" rel="noreferrer">
          <img className="rounded-t-lg h-72 w-full" src={imgUrl} alt={name} />
        </a>
        <div className="p-5">
          <a href={liveUrl} target="_blank" rel="noreferrer">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <div className="flex w-full justify-between border-box">
            <a
              href={liveUrl}
              target="_blank"
              className="hover:text-blue-600 hover:border-2 place-self-start hover:border-pink-600 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-white"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              href={githubUrl}
              target="_blank"
              className="text-blue-700 border-2 place-self-start hover:border-none border-blue-800 hover:from-[#1d4ed8] hover:to-[#3b82f6] hover:text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl bg-gradient-to-r from-blue to-clay"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;