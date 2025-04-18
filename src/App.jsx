// import movingclouds from "./assets/movingclouds.mp4";
import sunlyLogo from "./assets/sunlyLogo.PNG";
import heroBackground from "./assets/heroBackgroundImage.png";
export default function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Hero />
      </div>
      <HowItWorks />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blend-saturation  backdrop-brightness-80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-amber-600">
          <img src={sunlyLogo} alt="Sunly Logo" className="h-20 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white font-bold hover:text-yellow-600">
            Home
          </a>
          <a href="#" className="text-white font-bold hover:text-yellow-600">
            Learn
          </a>
          <a href="#" className="text-white font-bold hover:text-yellow-600">
            Contact
          </a>
          <a href="#" className="text-white font-bold hover:text-yellow-600">
            About
          </a>
        </nav>
        <button
          type="button"
          class="inline-block rounded-full bg-yellow-500 text-black shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-yellow-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          Get a quote
        </button>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden ">
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover filter brightness-50 z-0"
        src={movingclouds}
        autoPlay
        loop
        muted
        playsInline
      /> */}
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-40"></div> */}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)">
          Skip the Sales Pitch. <br />
          Find The Best Solar Options In Your Area
        </h1>
        <p className="mt-4 text-base font-bold sm:text-lg text-white max-w-md">
          No phone calls. No pressure. Just real numbers based on your home.
        </p>

        <form className="mt-6 w-full max-w-md font-bold flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your ZIP code"
            className="px-4 py-3 rounded-md border-2  border-amber-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none w-full sm:w-auto "
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md transition duration-300 w-full sm:w-auto"
          >
            See My Rates
          </button>
        </form>

        <p className="mt-4 text-sm font-bold text-white">
          Don't Worry - We'll only contact you if you'd like to hear more.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-black to-gray-900 ">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight text-center mb-12">
          How does it all work?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-amber-500 hover:border-yellow-400 transition-all hover:transform hover:scale-105">
            <div className="text-yellow-500 text-4xl font-bold mb-4">01</div>
            <h3 className="text-white text-xl font-bold mb-3">
              Enter Your ZIP
            </h3>
            <p className="text-gray-300">
              Enter your ZIP code and completing a short form to see options
              available in your area
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-amber-500 hover:border-yellow-400 transition-all hover:transform hover:scale-105">
            <div className="text-yellow-500 text-4xl font-bold mb-4">02</div>
            <h3 className="text-white text-xl font-bold mb-3">
              Review Options
            </h3>
            <p className="text-gray-300">
              Compare personalized solar solutions based on your home's energy
              needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-amber-500 hover:border-yellow-400 transition-all hover:transform hover:scale-105">
            <div className="text-yellow-500 text-4xl font-bold mb-4">03</div>
            <h3 className="text-white text-xl font-bold mb-3">See Savings</h3>
            <p className="text-gray-300">
              Get transparent pricing and calculate your potential energy
              savings.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-amber-500 hover:border-yellow-400 transition-all hover:transform hover:scale-105">
            <div className="text-yellow-500 text-4xl font-bold mb-4">04</div>
            <h3 className="text-white text-xl font-bold mb-3">
              Choose Install
            </h3>
            <p className="text-gray-300">
              Select your preferred option and schedule an obligation free
              consultation when you're ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
