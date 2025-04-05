
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-red-600">Project Not Found</h1>
          <Link to="/projects" className="text-gray-400 hover:text-red-600">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/projects"
          className="inline-flex items-center text-gray-400 hover:text-red-600 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Link>

        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <h1 className="text-4xl font-bold mb-4 text-red-600">{project.title}</h1>
        
        <div className="flex gap-4 mb-8">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            <Github size={20} />
            View Source
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300">{project.overview}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {project.technicalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            {project.challenges.map((challenge, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-300">{challenge.solution}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const projectDetails = {
  "vr-training-simulator": {
    title: "VR Training Simulator",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1932",
    github: "https://github.com",
    demo: "https://demo.com",
    overview: "A comprehensive VR training platform designed for industrial safety procedures. The platform enables companies to create, manage, and track employee training programs in an immersive virtual environment.",
    technicalDetails: [
      "Developed using Unity and C# for core VR functionality",
      "Implemented Oculus SDK for hardware integration",
      "Created custom shaders for realistic material visualization",
      "Built backend API using Node.js and MongoDB",
      "Integrated WebXR for browser-based VR experiences"
    ],
    challenges: [
      {
        title: "Performance Optimization",
        solution: "Implemented dynamic LOD system and object pooling to maintain 90fps in complex industrial environments"
      },
      {
        title: "Multi-user Synchronization",
        solution: "Developed custom networking solution using Photon PUN for real-time collaboration"
      }
    ],
    features: [
      "Real-time multi-user training sessions",
      "Custom scenario creator for trainers",
      "Analytics dashboard for tracking progress",
      "Cross-platform support (Oculus, HTC Vive, WebXR)",
      "Integrated voice communication"
    ]
  },
  // Add similar detailed entries for other projects
};

export default ProjectDetail;