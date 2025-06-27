 import ProjectCard from './ProjectCard'; // <-- Add this line

function Projects() {
  return (
    <section id="projects" className="px-6 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1: Mini Amazon Clone */}
          <ProjectCard
            title="Mini Amazon Clone"
            img="/amazon-img1.jpeg"
            desc="Full-stack e-commerce project using React, Node.js, Express, and MongoDB. Includes cart, checkout, and auth."
            link="https://github.com/SHEHROZ-BIBI5/mini-amazon-clone"
          />

          {/* Project 2: LinkedIn Clone */}
          <ProjectCard
            title="LinkedIn Clone (In Progress)"
            img="/linkedin-preview.jpg"
            desc="MERN Stack social media app with login, posts, likes, and profile system."
            link=""
            comingSoon={true}
          />

          {/* Project 3: Airbnb Clone */}
          <ProjectCard
            title="Airbnb Clone"
            img="/airbnb-img.jpg"
            desc="Booking platform built with MERN Stack. Features: host listing, booking, search, and login system."
            link="https://github.com/SHEHROZ-BIBI5/airbnb-clone"
          />

          {/* Project 4: E-Commerce App */}
          <ProjectCard
            title="E-Commerce App"
            img="/ecommerce-img.jpg"
            desc="Modern e-commerce site with cart, order placement, and backend APIs. Built with React + Node."
            link="https://github.com/SHEHROZ-BIBI5/ecommerce-app"
          />

          {/* Project 5: Todo App */}
          <ProjectCard
            title="Full Stack Todo App"
            img="/todo-img.jpg"
            desc="Todo list app with React frontend and Node.js + MongoDB backend. Includes add/delete/edit tasks."
            link="https://github.com/SHEHROZ-BIBI5/fullstack-todo-app"
          />

          {/* Project 6: Login System */}
          <ProjectCard
            title="Login/Auth System"
            img="/auth-preview.jpg"
            desc="Simple authentication system using React, Node.js, JWT, and bcrypt. Includes protected routes."
            link="https://github.com/SHEHROZ-BIBI5/login-auth-system"
          />

        </div>
      </div>
    </section>
  );
}

export default Projects;