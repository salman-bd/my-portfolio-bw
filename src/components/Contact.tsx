import { Mail, Phone, Linkedin, Github, MapPin, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-black dark:text-white">Get in Touch</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          I&apos;m always excited to connect with fellow developers, potential clients, and collaborators. Whether you
          have a project in mind, a question about my work, or just want to say hello, I&apos;d love to hear from you!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-8">
          <Card className="border border-black dark:border-white">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Contact Information</CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-300">
                Reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <ContactItem
                  icon={<Mail className="w-5 h-5 text-black dark:text-white" />}
                  text="your.email@example.com"
                  href="mailto:your.email@example.com"
                />
                <ContactItem
                  icon={<Phone className="w-5 h-5 text-black dark:text-white" />}
                  text="(123) 456-7890"
                  href="tel:+11234567890"
                />
                <ContactItem
                  icon={<Linkedin className="w-5 h-5 text-black dark:text-white" />}
                  text="linkedin.com/in/yourprofile"
                  href="https://linkedin.com/in/yourprofile"
                />
                <ContactItem
                  icon={<Github className="w-5 h-5 text-black dark:text-white" />}
                  text="github.com/yourusername"
                  href="https://github.com/yourusername"
                />
                <ContactItem
                  icon={<MapPin className="w-5 h-5 text-black dark:text-white" />}
                  text="New York City, NY, USA"
                />
                <ContactItem
                  icon={<Clock className="w-5 h-5 text-black dark:text-white" />}
                  text="Available: Mon-Fri, 9AM-5PM EST"
                />
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-black dark:border-white">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Let&apos;s Collaborate</CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-300">
                I&apos;m open to various opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>🚀 Exciting web development projects</li>
                <li>🤝 Freelance opportunities</li>
                <li>🎓 Mentorship and teaching</li>
                <li>💡 Tech talks and workshops</li>
                <li>✍️ Technical writing and blogging</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="border border-black dark:border-white">
            <CardHeader>
              <CardTitle className="text-black dark:text-white">Send a Message</CardTitle>
              <CardDescription className="text-gray-700 dark:text-gray-300">
                I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Let&apos;s Create Something Amazing Together
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Whether you have a specific project in mind or just want to explore possibilities, I&apos;m here to help turn
          your ideas into reality. Don&apos;t hesitate to reach out!
        </p>
      </section>
    </div>
  )
}

function ContactItem({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const content = (
    <span className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
      <span className="text-black dark:text-white">{icon}</span>
      <span>{text}</span>
    </span>
  )

  return (
    <li>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

