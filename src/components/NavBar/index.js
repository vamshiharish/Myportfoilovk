import { Component } from "react";

class NavBar extends Component {
  state = {
    isMenuClosed: false,
    useWhiteBackground: false,
  };

  toggleMenu = () => {
    const { isMenuClosed } = this.state;
    this.setState({
      isMenuClosed: !isMenuClosed,
    });
  };

  switchBackgroundIfNeeded = () => {
    const { useWhiteBackground } = this.state;
    if (window.scrollY >= 200) {
      if (!useWhiteBackground) {
        this.setState({ useWhiteBackground: true });
      }
    } else {
      if (useWhiteBackground) {
        this.setState({ useWhiteBackground: false });
      }
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.switchBackgroundIfNeeded);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.switchBackgroundIfNeeded);
  }

  render() {
    const { isMenuClosed, useWhiteBackground } = this.state;
    const whiteBgClass = useWhiteBackground ? "bg-white shadow-lg py-2" : "bg-[#C9DCFC] py-6";
    return (
      <nav className={`fixed top-0 w-full transition-all duration-500 ${whiteBgClass} z-50`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                onClick={this.toggleMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuClosed && (
                  <svg
                    className="h-8 w-8 stroke-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {isMenuClosed && (
                  <svg
                    className="h-8 w-8 stroke-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center ml-2">
                <a href="#hero">
                  <img
                    className="block h-10 w-auto"
                    src="logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <a
                        href="#about"
                        className="hover:text-blue-600 transition-colors duration-700 text-black px-3 py-2 text-base font-medium"
                        aria-current="page"
                      >
                        About
                      </a>
                      <a
                        href="#projects"
                        className="transition-colors duration-700 hover:text-blue-600 text-black px-3 py-2 text-base font-medium"
                      >
                        Projects
                      </a>
                      <a
                        href="#contact"
                        className="transition-colors duration-700 hover:text-blue-600 text-black px-3 py-2 text-base font-medium"
                      >
                        Contact
                      </a>
                      <a
                        href="Resume.pdf" target="_blank"
                        className="bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white rounded-full p-3 px-4 text-sm font-semibold shadow-xl"
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMenuClosed && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#about"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                About
              </a>
              <a
                href="#projects"
                className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Contact
              </a>
              <a
                href="Resume.pdf" target="_blank"
                className="bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;