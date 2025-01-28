import { Briefcase, Code, BookOpen, Server, Database, Globe, Cpu, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Career() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-black dark:text-white">Career Journey</h1>
        <p className="text-xl text-gray-600 text-justify">
          My career path combines a passion for software engineering with a commitment to education, allowing me to
          contribute to technological advancements while shaping young minds.
        </p>
      </header>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-black text-center">
            Technical Expertise <hr />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={<Globe className="w-8 h-8 text-black dark:text-gray-300" />}
            title="Frontend Development"
            skills={["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "TypeScript"]}
          />
          <SkillCard
            icon={<Server className="w-8 h-8 text-black dark:text-gray-400" />}
            title="Backend Development"
            skills={["Node.js", "Express.js", "Next.js API Routes", "RESTful APIs"]}
          />
          <SkillCard
            icon={<Database className="w-8 h-8 text-black dark:text-gray-500" />}
            title="Databases"
            skills={["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"]}
          />
          <SkillCard
            icon={<Cpu className="w-8 h-8 text-black dark:text-gray-600" />}
            title="DevOps & Cloud"
            skills={["Git", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"]}
          />
          <SkillCard
            icon={<Tool className="w-8 h-8 text-black dark:text-gray-700" />}
            title="Tools & Methodologies"
            skills={["Agile", "Scrum", "Jira", "Figma", "Jest", "Cypress"]}
          />
          <SkillCard
            icon={<Code className="w-8 h-8 black dark:text-gray-300" />}
            title="Programming Languages"
            skills={["JavaScript", "TypeScript", "Python", "C"]}
          />
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-black text-center pt-6 ">
        Professional Experience<hr />
          
        </h2>
        <div className="space-y-6">
          <ExperienceCard
            icon={<Briefcase className="w-8 h-8 text-black dark:text-white" />}
            title="Software Engineer"
            responsibilities={[
              "Develop and maintain web applications for various clients",
              "Collaborate with cross-functional teams to deliver high-quality software solutions",
              "Architect scalable backend solutions with microservices architecture",
              "Collaborate with product managers to define and implement new features",
              "Stay updated with the latest technologies and best practices in software development",
            ]}
          />
          <ExperienceCard
            icon={<BookOpen className="w-8 h-8 text-black dark:text-gray-400" />}
            title="ICT Teacher"
            responsibilities={[
              "Teach Information and Communication Technology (ICT) to students",
              "Introduce students to web development, focusing on HTML, CSS, and JavaScript",
              "Develop and implement engaging curriculum to foster students' interest in technology",
              "Create interactive lessons on advanced topics such as data structures, algorithms, and software design principles",
            ]}
          />
        </div>
      </section>

      <footer className="text-center">
        <p className="text-lg text-gray-600 text-justify max-w-3xl mx-auto">
          By balancing roles in software engineering and education, I bring real-world experience into the classroom
          while staying connected to the evolving needs of the technology industry. This unique perspective allows me to
          prepare the next generation of developers with cutting-edge skills and practical knowledge.
        </p>
      </footer>
    </div>
  )
}

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

interface ExperienceCardProps {
  icon: React.ReactNode
  title: string
  responsibilities: string[]
}

function ExperienceCard({ icon, title, responsibilities }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mt-2"></span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

