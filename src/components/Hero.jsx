function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-20 bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 min-h-[80vh]">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-2 drop-shadow-lg">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">Shehroz Bibi</span>
        </h2>
        <p className="text-xl text-gray-700 mb-4 font-medium">
          I'm a passionate <strong className="text-blue-700">Full Stack Web Developer</strong> building modern web apps using <span className="text-purple-600 font-semibold">React</span>, <span className="text-green-600 font-semibold">Node.js</span>, and <span className="text-emerald-600 font-semibold">MongoDB</span>.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Let's Connect
        </a>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur opacity-70 group-hover:scale-105 transition-all duration-300"></div>
          <img
            src="https://avatars.githubusercontent.com/u/112131391?v=4"
            alt="Shehroz Avatar"
            className="relative rounded-full w-64 h-64 mx-auto shadow-2xl border-8 border-white object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
