"use client"

import { MapPin, Heart, Award, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function PersonalLife() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-12">Personal Life</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <MapPin className="w-6 h-6 text-black dark:text-gray-300" />
            <span className="text-black dark:text-white">My Growing Up</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-600 text-justify leading-relaxed">
            I grew up in Sylhet, Bangladesh, a beautiful city located in the north-eastern part of the country. Sylhet
            is known for its lush green landscapes, tea gardens, and natural beauty, which have greatly influenced my
            appreciation for nature and my home country.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
                alt="Pang Thu Mai Source:The Asisan Age"
              />
              <p>Pang Thu Mai (Gowainghat, Sylhet)</p>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                className="rounded-lg shadow-md"
                alt="Tea Gardens Source: Steemit.com"
              />
              <p>Tea Garden (Moulvibazar, Sylhet)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Heart className="w-6 h-6 text-black dark:text-gray-300" />
            <span>Hobbies and Interests</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Learning new skills",
              "Observing people's life and livelihood",
              "Staying updated with the latest developments in technology and education",
              "Exploring history and human past life",
              "Contemplating various religions and philosophies",
              "Traveling and experiencing different cultures",
            ].map((hobby, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Badge variant="secondary" className="mt-1">
                  {index + 1}
                </Badge>
                <span className="text-gray-600">{hobby}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Award className="w-6 h-6 text-black dark:text-gray-300" />
            <span>Personal Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {[
              {
                title: "Career Balance",
                description: "Successfully balancing careers in software engineering and teaching",
              },
              {
                title: "Community Contribution",
                description: "Contributing to my community through education initiatives",
              },
              {
                title: "National Connection",
                description: "Maintaining strong connections to my nation's growth and development",
              },
              {
                title: "Continuous Learning",
                description: "Consistently acquiring new skills and knowledge in rapidly evolving tech fields",
              },
            ].map((achievement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Badge variant="outline" className="px-2 py-1 mt-1">
                  {String.fromCharCode(65 + index)}
                </Badge>
                <div>
                  <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Globe className="w-6 h-6 text-black dark:text-gray-300" />
            <span>Future Aspirations</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Looking ahead, I have several goals and aspirations that I&apos;m working towards:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• Founding a tech startup that addresses local challenges</li>
            <li>• Publishing research papers on innovative educational technologies</li>
            <li>• Establishing a coding academy to empower the next generation of developers in Bangladesh</li>
            <li>• Contributing to policies that promote tech education and digital literacy</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

