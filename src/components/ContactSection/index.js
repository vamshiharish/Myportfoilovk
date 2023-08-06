const ContactSection = () => (
    <section
      id="contact"
      className="bg-white p-8 md:p-16 flex flex-col items-center"
    >
      <h1 className="font-semibold text-4xl my-4 text-center">
      Do you have any inquiries? Feel free to contact us.
      </h1>
      <p className="pt-4 text-gray-600 text-center">
        Send me a message on{" "}
        <a
          className="text-blue-500"
          target="_blank"
          href="https://www.linkedin.com/in/vamshi-krishna77/"
          rel="noreferrer"
        >
          Linkedin
        </a>{" "}
        or you can email me at:{" "}
        <a className="text-blue-500" href="mailto:vamshiharish777@gmail.com">
          vamshiharish777@gmail.com
        </a>
      </p>
    </section>
  );
  
  export default ContactSection;