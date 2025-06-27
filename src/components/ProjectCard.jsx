import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, desc, link, comingSoon }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-100 shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 w-64 border border-blue-200">
      <div className="p-6 flex flex-col items-center">
        <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl shadow">
          <FaGithub />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">{desc}</p>
        {comingSoon ? (
          <span className="inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-400 text-xs font-semibold shadow">
            Coming Soon
          </span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition shadow"
          >
            <FaGithub className="text-base" />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
