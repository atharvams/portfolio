import React from 'react';
import { Code2, Brain, Coffee, Rocket, Github, Award, Terminal } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-red-600">About Me</h1>
        
        <div className="space-y-8">
          <div className="prose prose-invert">
            <p className="text-xl text-gray-300 mb-8">
              Hi, I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in crafting web applications. 
              I specialize in building scalable, user-friendly solutions that solve real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="text-red-600" size={24} />
                <h3 className="text-xl font-bold">Technical Expertise</h3>
              </div>
              <p className="text-gray-300">
                Proficient in modern web technologies including React, Node.js, and cloud platforms.
                Strong focus on writing clean, maintainable code.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="text-red-600" size={24} />
                <h3 className="text-xl font-bold">Problem Solver</h3>
              </div>
              <p className="text-gray-300">
                Analytical thinker with a knack for finding elegant solutions to complex technical challenges.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Coffee className="text-red-600" size={24} />
                <h3 className="text-xl font-bold">Always Learning</h3>
              </div>
              <p className="text-gray-300">
                Constantly exploring new technologies and best practices to stay at the forefront of web development.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Rocket className="text-red-600" size={24} />
                <h3 className="text-xl font-bold">Goal-Oriented</h3>
              </div>
              <p className="text-gray-300">
                Focused on delivering high-quality projects that exceed client expectations and drive business growth.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-8">Coding Profiles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Github className="text-red-600" size={24} />
                  <h3 className="text-xl font-bold">GitHub</h3>
                </div>
                <p className="text-gray-300">500+ contributions in the last year</p>
                <p className="text-gray-400 mt-2">@johndoe</p>
              </a>

              <a 
                href="https://leetcode.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Terminal className="text-red-600" size={24} />
                  <h3 className="text-xl font-bold">LeetCode</h3>
                </div>
                <p className="text-gray-300">300+ problems solved</p>
                <p className="text-gray-400 mt-2">Top 5% globally</p>
              </a>

              <a 
                href="https://codeforces.com/profile/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-red-600" size={24} />
                  <h3 className="text-xl font-bold">CodeForces</h3>
                </div>
                <p className="text-gray-300">Specialist (1400+)</p>
                <p className="text-gray-400 mt-2">100+ contests</p>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-red-600 pl-4">
                <h3 className="font-bold">Senior Full Stack Developer</h3>
                <p className="text-gray-400">Tech Corp • 2021 - Present</p>
                <p className="text-gray-300 mt-2">
                  Leading development of enterprise-scale web applications using React and Node.js.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h3 className="font-bold">Full Stack Developer</h3>
                <p className="text-gray-400">Digital Solutions Inc • 2019 - 2021</p>
                <p className="text-gray-300 mt-2">
                  Developed and maintained multiple client projects using modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;