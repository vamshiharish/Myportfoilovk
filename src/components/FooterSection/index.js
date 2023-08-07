import {FaGithub,FaLinkedin, FaEnvelope} from "react-icons/fa"

const FooterSection = () => (
    <footer className="border-t flex justify-center items-center">
      <div className="p-8">
        <div className="m-auto my-4 flex justify-center">
          <a
            target="_blank"
            href="https://github.com/vamshiharish"
            rel="noreferrer"
          >
            <FaGithub size={30} className="rounded-lg mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"/>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vamshi-krishna77/"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="rounded-lg mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"/>
          </a>
          <a
            target="_blank"
            href="mailto: vamshiharish777@gmail.com"
            rel="noreferrer"
          >
            <FaEnvelope size={30} className="rounded-lg mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"/>
          </a>
        </div>
        <p className="text-gray-500">
          Copyright ©vamshikrishna. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
  
  export default FooterSection;
