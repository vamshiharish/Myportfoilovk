const HeroSection = () => (
    <section id="hero" className="h-screen bg-[#C9DCFC]  space-y-30 flex justify-around items-center">
        <div>
            <img className="max-w-lg opacity-80 hidden md:block" src="profilevk.png" alt="profile"/>
        </div>
        <div className="h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-7xl font-extrabold bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] bg-clip-text text-transparent">
            Hello, I'm Vamshi Krishna
            </h1>
            <p className="mt-8 text-blue-950 text-3xl font-bold">
            I'm a <span className="type-role"></span>
            </p>
            <div className="mt-12">
            <a
                href="#projects"
                className="mr-4 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl"
            >
                My Projects
            </a>
    
            <a
                href="#contact"
                className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl"
            >
                Contact Me
            </a>
            </div>
        </div>
    </section>
  );
  
  export default HeroSection;