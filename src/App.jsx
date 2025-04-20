// import movingclouds from "./assets/movingclouds.mp4";
import sunlyLogo from "./assets/sunlyLogo.PNG";
import heroBackground from "./assets/heroBackgroundImage.png";
// import phoneGraphic from "./assets/phonegraphic.png";
import Spline from "@splinetool/react-spline";
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
      <WhyCheck />
      <InfoForm />
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
          className="inline-block rounded-full bg-yellow-500 text-black shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-yellow-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-yellow-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-yellow-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
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
              Enter your ZIP code and complete a short form to see options
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
              consultation if you'd like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCheck() {
  return (
    <section className="relative bg-orange-50 pt-16 pb-24 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline
          scene="https://prod.spline.design/2GhDPZk1dze7EkTm/scene.splinecode"
          loading="eager"
          className="w-full h-full"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.7,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          {/* Text Content */}
          <div className="max-w-2xl space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Check Your Solar Savings Potential?
            </h2>

            <div className="space-y-6">
              {/* Reason 1 */}
              <div className="p-6 rounded-xl bg-white border-2 border-amber-100 hover:border-amber-300 transition-all shadow-lg hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 rounded-lg text-white">
                    <span className="text-2xl">🌞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      State Incentives
                    </h3>
                    <p className="text-gray-600">
                      Many homeowners qualify for state and federal programs
                      that can significantly reduce or even eliminate upfront
                      costs through tax credits and rebates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="p-6 rounded-xl bg-white border-2 border-amber-100 hover:border-amber-300 transition-all shadow-lg hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 rounded-lg text-white">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Accurate Comparisons
                    </h3>
                    <p className="text-gray-600">
                      Our Sunly calculator removes the guesswork by analyzing
                      your specific energy needs and providing clear comparisons
                      between verified local providers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="p-6 rounded-xl bg-white border-2 border-amber-100 hover:border-amber-300 transition-all shadow-lg hover:shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500 rounded-lg text-white">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Substantial Savings
                    </h3>
                    <p className="text-gray-600">
                      Typical solar adopters save between $30,000 to $100,000
                      over the lifespan of their system, depending on their
                      location and energy consumption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoForm() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-900 py-16 px-4">
      <form className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-white/10">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-400 mb-2">
            Solar Eligibility Check
          </h2>
          <p className="text-gray-300">
            Answer a few questions to see if solar is right for your home
          </p>
        </div>

        {/* Homeowner Status */}
        <div className="space-y-2">
          <label className="block text-amber-300 font-semibold mb-2">
            Are you the homeowner? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2 text-white">
              <input
                type="radio"
                name="homeowner"
                required
                className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-white">
              <input
                type="radio"
                name="homeowner"
                className="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Address with Autocomplete */}
        <div className="space-y-2">
          <label className="block text-amber-300 font-semibold mb-2">
            Property Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Start typing your address..."
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>

        {/* Average Electric Bill */}
        <div className="space-y-2">
          <label className="block text-amber-300 font-semibold mb-2">
            Monthly Electric Bill ($) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-400">$</span>
            </div>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="Enter average amount"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
            />
          </div>
        </div>

        {/* Shading Obstruction */}
        <div className="space-y-2">
          <label className="block text-amber-300 font-semibold mb-2">
            Roof Shading <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 appearance-none"
          >
            <option value="" disabled selected>
              Select shading level
            </option>
            <option className="bg-gray-800 text-white">
              Very Minimal Shading
            </option>
            <option className="bg-gray-800 text-white">Moderate Shading</option>
            <option className="bg-gray-800 text-white">
              Substantial Shading
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg transform transition-all hover:scale-[1.02] hover:shadow-lg active:scale-95"
        >
          Check Eligibility
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}
