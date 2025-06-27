import { FaUser, FaEnvelope, FaCommentDots, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-16 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="max-w-3xl mx-auto text-center shadow-xl rounded-xl bg-white/80 backdrop-blur-md p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700 drop-shadow">Contact Me</h2>
        <p className="mb-8 text-gray-600">
          Have a question, job opportunity, or just want to say hi? Feel free to reach out!
        </p>
        <form
          action="https://formsubmit.co/shehrozbibi5@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>
          <div className="relative">
            <FaCommentDots className="absolute left-3 top-4 text-blue-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
            />
          </div>
          <input type="hidden" name="_next" value="https://your-portfolio-url.netlify.app/" />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://www.linkedin.com/in/shehroz-bibi-190582338/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SHEHROZ-BIBI5" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-2xl transition">
            <FaGithub />
          </a>
         </div>
      </div>
    </section>
  );
}

export default Contact;
