import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:john.doe@example.com?subject=Portfolio Contact: ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-red-600">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:john.doe@example.com" className="text-gray-400 hover:text-red-600">
                    john.doe@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-red-600" size={24} />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Social Links</h2>
            <div className="space-y-4">
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Github size={24} />
                <span>github.com/johndoe</span>
              </a>
              <a 
                href="https://twitter.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Twitter size={24} />
                <span>@johndoe</span>
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Linkedin size={24} />
                <span>linkedin.com/in/johndoe</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;