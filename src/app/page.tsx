import PersonalLife from "@/components/PersonalLife"
import Education from "@/components/Education"
import Career from "@/components/Career"
import Work from "@/components/Work"
import Contact from "@/components/Contact"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, Code, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-12">
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-background.jpg"
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="opacity-30 grayscale"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black z-10"></div>
          <div className="relative z-20 text-center space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white">Md. Abu Salman</h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
              Software Engineer & ICT Teacher
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge
                variant="outline"
                className="text-lg py-1 px-3 border-black dark:border-white text-black dark:text-white"
              >
                Full-Stack Developer
              </Badge>
              <Badge
                variant="outline"
                className="text-lg py-1 px-3 border-black dark:border-white text-black dark:text-white"
              >
                Educator
              </Badge>
              <Badge
                variant="outline"
                className="text-lg py-1 px-3 border-black dark:border-white text-black dark:text-white"
              >
                Tech Enthusiast
              </Badge>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
                View Projects
              </Button>
              <Button
                variant="outline"
                className="text-black dark:text-white border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <ChevronDown className="w-10 h-10 text-black dark:text-white" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-20"></div>
        </section>

        <div className="relative mt-[-100px] z-30">
          <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-3xl shadow-xl"></div>
          <Card className="relative bg-transparent">
            <CardHeader>
              <CardTitle className="text-3xl font-semibold text-black dark:text-white">
                Welcome to My Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-justify">
              <p className="text-xl text-gray-800 dark:text-gray-200">
                Hello! I am a passionate software engineer with years of experience in full-stack development,
                specializing in creating scalable web applications. Additionally, I teach ICT, blending industry
                knowledge with educational insights to prepare the next generation of developers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                This portfolio showcases my journey, skills, and achievements in both the software industry and the
                educational sector. Feel free to explore the different sections to learn more about my personal life,
                education, career, and work.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="text-black dark:text-white border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
                >
                  Contact Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold">What I Do</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-medium flex items-center">
                  <Briefcase className="mr-2 w-6 h-6" /> Software Engineering
                </h3>
                <p>Developing robust and scalable web applications to solve real-world problems.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-medium flex items-center">
                  <GraduationCap className="mr-2 w-6 h-6" /> ICT Teaching
                </h3>
                <p>Educating and inspiring students in the field of Information and Communication Technology.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-black dark:border-white">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold flex items-center text-black dark:text-white">
              <Code className="mr-2 w-6 h-6" /> Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend",
                  skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "TypeScript"],
                },
                { title: "Backend", skills: ["Node.js", "Express.js", "Next.js API Routes", "RESTful APIs"] },
                { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma ORM"] },
              ].map((category, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{category.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <PersonalLife />
      <hr className="border-black dark:border-white" />
      <Education />
      <hr className="border-black dark:border-white" />
      <Career />
      <hr className="border-black dark:border-white" />
      <Work />
      <hr className="border-black dark:border-white" />
      <Contact />
      <hr className="border-black dark:border-white" />
    </>
  )
}

