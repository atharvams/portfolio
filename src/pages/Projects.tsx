
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-600">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-red-600 px-2 py-1 rounded text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:underline"
                  >
                    View Project →
                  </a>
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "VR Training Simulator",
    description: "Enterprise VR training platform for industrial safety procedures",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1932",
    tech: ["Unity", "C#", "Oculus SDK", "WebXR"],
    link: "https://github.com",
    slug: "vr-training-simulator"
  },
  {
    title: "AR Product Visualization",
    description: "Mobile AR app for furniture visualization in real space",
    image: "https://images.unsplash.com/photo-1713869782573-3a6eee95c834?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["ARKit", "ARCore", "React Native", "Three.js"],
    link: "https://github.com",
    slug: "ar-product-viz"
  },
  {
    title: "Mixed Reality Education",
    description: "Educational platform using mixed reality for interactive learning",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1932",
    tech: ["HoloLens", "Unity", "Azure Spatial Anchors"],
    link: "https://github.com",
    slug: "mr-education"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1932",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com",
    slug: "ecommerce-platform"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1770",
    tech: ["Python", "TensorFlow", "WebSocket"],
    link: "https://github.com",
    slug: "ai-chat"
  },
  {
    title: "Cloud Dashboard",
    description: "Analytics dashboard for cloud resource management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1770",
    tech: ["Vue.js", "AWS", "D3.js"],
    link: "https://github.com",
    slug: "cloud-dashboard"
  }
];

export default Projects;