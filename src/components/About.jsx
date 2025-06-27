   
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaJs, FaGithub, FaLock, FaServer } from "react-icons/fa";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <FaServer className="text-gray-700" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-yellow-600" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
  { name: "REST APIs", icon: <FaServer className="text-indigo-500" /> },
  { name: "JWT Auth", icon: <FaLock className="text-red-400" /> },
  { name: "Git & GitHub", icon: <FaGithub className="text-black" /> },
];

function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          About Me
        </h2>
        <p className="text-xl leading-relaxed mb-10 font-medium text-gray-700">
          I'm <strong className="text-blue-700">Shehroz Bibi</strong>, a passionate Full Stack Web Developer who loves building responsive and meaningful web applications.<br />
          I specialize in <span className="text-blue-600 font-semibold">React.js</span>, <span className="text-green-600 font-semibold">Node.js</span>, and <span className="text-yellow-600 font-semibold">MongoDB</span> with a focus on clean UI, strong logic, and real-world functionality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-white/80 shadow-lg hover:shadow-xl transition rounded-xl px-4 py-3 mx-auto w-full justify-center border border-gray-100 hover:scale-105 duration-200"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-semibold text-gray-800">{skill.name}</span>
            </div>
          ))}
         </div>
                    <div className="flex justify-center m-7">
          <a
            href="public/Shehroz_Bibi_CV_CoverLetter_Updated.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-pink-500 hover:scale-105 transition duration-200"
          >
            <span role="img" aria-label="resume">📄</span> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
