
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-red-600">JD</Link>
              <div className="flex gap-6">
                <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-red-600 transition-colors">About</Link>
                <Link to="/projects" className="hover:text-red-600 transition-colors">Projects</Link>
                <Link to="/skills" className="hover:text-red-600 transition-colors">Skills</Link>
                <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
          <div className="flex justify-center gap-8 mb-4">
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john.doe@example.com" className="hover:text-red-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p>© 2024 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;