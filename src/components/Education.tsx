"use client"

import { GraduationCap, School, Award, Calendar, BookOpen, TrendingUp, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">Educational Journey</h1>
        <p className="text-xl text-gray-600 mx-auto">
          My academic path in Business Administration, with a focus on Marketing, has equipped me with a strong
          foundation in business strategies and market dynamics.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border-gray-300 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl text-gray-800 dark:text-gray-200">
              <GraduationCap className="w-8 h-8 text-black dark:text-white" />
              <span>SUST</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Master of Business Administration (MBA)</p>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Major: Marketing</p>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Graduation Year: 2020</p>
            </div>
            <p className="text-gray-600">
              Advanced marketing strategies, consumer behavior, and business analytics. Enhanced leadership skills and
              strategic thinking abilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Advanced Marketing
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Business Strategy
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Leadership
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border-gray-300 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl text-gray-800 dark:text-gray-200">
              <GraduationCap className="w-8 h-8 text-black dark:text-white" />
              <span>SUST</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Bachelor of Business Administration (BBA)</p>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Major: Marketing</p>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Graduation Year: 2017</p>
            </div>
            <p className="text-gray-600">
              Strong foundation in business principles and marketing concepts. Engaged in various projects and case
              studies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Marketing Fundamentals
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Business Ethics
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Financial Management
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border-gray-300 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl text-gray-800 dark:text-gray-200">
              <School className="w-8 h-8 text-black dark:text-white" />
              <span>Goainghat College</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Higher Secondary Certificate (HSC)</p>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <p className="text-lg text-gray-700">Passing Year: 2012</p>
            </div>
            <p className="text-gray-600">
              Laid the foundation for future academic pursuits. Developed a strong interest in business and economics.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Economics
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Psychology
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                English
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Bangla
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Social Welfare
              </Badge>
              <Badge variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
                Civics
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 border-gray-300 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3 text-2xl text-gray-800 dark:text-gray-200">
            <Award className="w-8 h-8 text-black dark:text-white" />
            <span>Skills</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Key Skills</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Marketing Strategy</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Data Analysis</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Project Management</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Digital Marketing</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

