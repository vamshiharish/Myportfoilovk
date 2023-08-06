const FooterSection = () => (
    <footer className="border-t">
      <div className="text-center p-8">
        <div className="m-auto my-4">
          <a
            target="_blank"
            href="https://github.com/vamshiharish"
            rel="noreferrer"
            className="w-10 h-5 p-1 rounded-lg bg-cyan-500 mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"
          >
            Github
            {/* <i className="fa-brands fa-github mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i> */}
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vamshi-krishna77/"
            rel="noreferrer"
            className="w-10 h-5 p-1 rounded-lg bg-cyan-500 mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"
          >
            Linkedin
            {/* <i className="fa-brands fa-linkedin mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i> */}
          </a>
          <a
            target="_blank"
            href="mailto: swethapaleti555@gmail.com"
            rel="noreferrer"
            className="w-10 h-5 p-1 rounded-lg bg-cyan-500 mx-2 text-xs transform transition duration-500 hover:scale-110 hover:text-white-500 ease-in-out"
          >
            E-Mail
            {/* <i className="fa-solid fa-envelope mx-4 text-gray-500 text-2xl transform transition duration-500 hover:scale-150 hover:text-pink-500 ease-in-out"></i> */}
          </a>
        </div>
        <p className="text-gray-500">
          Copyright ©vamshikrishna. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
  
  export default FooterSection;