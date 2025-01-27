import { ShoppingCart, Newspaper, PenTool, Book, Rocket, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Work() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-black  text-justify dark:text-white pb-4">Work & Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore a showcase of my key projects, demonstrating expertise in web development, e-commerce solutions,
          content management systems, and educational technology. Each project reflects my commitment to creating
          impactful, user-centric digital experiences.
        </p>
      </header>

      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="Interactive Learning Platform"
            icon={<Book className="w-8 h-8" />}
            description="A comprehensive educational platform designed to facilitate online learning and resource sharing for students and educators. Features include interactive lessons, progress tracking, and collaborative tools."
            image="/placeholder.svg?height=300&width=600"
            technologies={["React", "Node.js", "MongoDB", "WebRTC"]}
            link="https://example-learning-platform.com"
          />
          <ProjectCard
            title="Real-Time News Portal"
            icon={<Newspaper className="w-8 h-8" />}
            description="A dynamic news website that delivers real-time updates and in-depth articles across various categories. Implemented with a custom CMS, real-time notifications, and personalized content recommendations."
            image="/placeholder.svg?height=300&width=600"
            technologies={["Next.js", "GraphQL", "PostgreSQL", "Redis"]}
            link="https://example-news-portal.com"
          />
          <ProjectCard
            title="E-commerce Marketplace"
            icon={<ShoppingCart className="w-8 h-8" />}
            description="A fully-featured online marketplace with multi-vendor support, product management, shopping cart functionality, and secure payment integration. Includes features like real-time inventory tracking and personalized product recommendations."
            image="/placeholder.svg?height=300&width=600"
            technologies={["Vue.js", "Laravel", "MySQL", "Elasticsearch"]}
            link="https://example-ecommerce.com"
          />
          <ProjectCard
            title="Content Creation Platform"
            icon={<PenTool className="w-8 h-8" />}
            description="A sleek and responsive blog platform with an advanced content management system. Features include rich text editing, SEO optimization tools, content scheduling, and analytics dashboard."
            image="/placeholder.svg?height=300&width=600"
            technologies={["Gatsby", "Strapi", "AWS", "Algolia"]}
            link="https://example-blog-platform.com"
          />
        </div>
      </section>

      {/* <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">Additional Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Project Management Tool", icon: <Briefcase className="w-6 h-6" />, tech: "Angular, NestJS" },
            { title: "Code Collaboration Platform", icon: <Code className="w-6 h-6" />, tech: "React, WebAssembly" },
            { title: "AI-Powered Chatbot", icon: <Globe className="w-6 h-6" />, tech: "Python, TensorFlow" },
            { title: "Mobile Fitness App", icon: <Rocket className="w-6 h-6" />, tech: "React Native, Firebase" },
            {
              title: "Blockchain Voting System",
              icon: <ShoppingCart className="w-6 h-6" />,
              tech: "Solidity, Web3.js",
            },
            { title: "AR Product Visualizer", icon: <PenTool className="w-6 h-6" />, tech: "Unity, ARKit" },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-black dark:text-white">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">Technologies: {project.tech}</p>
              <Link
                href="#"
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 flex items-center"
              >
                Learn more <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section> */}

      <section className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-800 dark:to-gray-600 rounded-xl p-8 shadow-lg text-white">
        <h2 className="text-3xl font-semibold mb-4 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["JavaScript", "React", "Node.js", "TypeScript", "Next.js", "GraphQL", "AWS", "MongoDB"].map((skill) => (
            <div
              key={skill}
              className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-filter backdrop-blur-lg"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">Let&apos;s Build Something Amazing</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I&apos;m always excited to take on new challenges and create innovative solutions. If you have a project in mind,
          let&apos;s collaborate and bring your ideas to life!
        </p>
        <Link href="/contact">
          <Button className="bg-black dark:bg-white text-white hover:bg-gray-800 dark:hover:bg-gray-200">
            <Rocket className="w-5 h-5 mr-2" />
            Start a Project
          </Button>
        </Link>
      </section>
    </div>
  )
}

function ProjectCard({
  title,
  icon,
  description,
  image,
  technologies,
  link,
}: {
  title: string
  icon: React.ReactNode
  description: string
  image: string
  technologies: string[]
  link: string
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-black dark:text-white">{icon}</div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300"
        >
          View Project
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  )
}

