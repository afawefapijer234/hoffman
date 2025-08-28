"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import earthBackground from "/public/satellite/worldbg.jpg";
import satelliteImage from "/public/satellite/satellite.avif";
import { useRouter } from 'next/router';

interface NavigationState {
  activeSection: string;
}

// Navigation Header for Satellite Tech
function SatelliteNavigationHeader({ navigation, onNavigate, onBackToHome }: { 
  navigation: NavigationState, 
  onNavigate: (section: string) => void,
  onBackToHome: () => void 
}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onNavigate(sectionId);
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <div className="backdrop-blur-md bg-black/30 rounded-xl px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
          <a
            href="https://hoffman-holding.webflow.io/"
            target="_top"
            rel="noopener noreferrer"
            className="text-white hover:text-[#c8b04e] transition-colors text-xl font-semibold"
          >
            Hoffman Holdings
          </a>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="text-[#c8b04e] text-lg font-medium">Exploration Technologies</div>
        </div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-white hover:text-[#c8b04e] transition-colors" onClick={() => scrollToSection('technology')}>
              Technology
            </button>
            <button className="text-white hover:text-[#c8b04e] transition-colors" onClick={() => scrollToSection('capabilities')}>
              Capabilities
            </button>
            <button className="text-white hover:text-[#c8b04e] transition-colors" onClick={() => scrollToSection('applications')}>
              Applications
            </button>
            <button className="text-white hover:text-[#c8b04e] transition-colors" onClick={() => scrollToSection('results')}>
              Results
            </button>
            <button className="text-white hover:text-[#c8b04e] transition-colors" onClick={() => scrollToSection('contact')}>
              Get Survey
            </button>
          </nav>

          {/* Live Status */}
          <div className="hidden sm:flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2">
            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-medium">Satellites Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero Section with Earth Background and Satellite
function SatelliteHeroSection({ navigation, onNavigate, onBackToHome }: { 
  navigation: NavigationState, 
  onNavigate: (section: string) => void,
  onBackToHome: () => void 
}) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/satellite/worldbg.jpg')"
      }}
    >
      <SatelliteNavigationHeader navigation={navigation} onNavigate={onNavigate} onBackToHome={onBackToHome} />
      
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-[#c8b04e]/20 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-400 font-medium">SPACE-BASED EXPLORATION • 18,000 FT DETECTION RANGE</span>
            </div>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              SEE THROUGH
              <span className="block text-[#c8b04e]">THE EARTH</span>
            </h1>

            <p className="text-white text-xl md:text-2xl leading-relaxed max-w-2xl">
              Revolutionary satellite-based Atomic Mineral Resonance Tomography technology that detects 
              underground minerals, oil, and gas deposits with NASA-level precision—without ever touching the ground.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-[#c8b04e] text-3xl font-bold mb-1">93%</div>
                <div className="text-white text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-[#c8b04e] text-3xl font-bold mb-1">18,000</div>
                <div className="text-white text-sm">Feet Deep</div>
              </div>
              <div className="text-center">
                <div className="text-[#c8b04e] text-3xl font-bold mb-1">20+</div>
                <div className="text-white text-sm">Years Experience</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#c8b04e] text-black px-8 py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300">
                Request Survey
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-medium hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Technology Demo
              </button>
            </div>
          </motion.div>

          {/* Right - Satellite Image */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Orbital Ring Effect */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
              style={{ width: '600px', height: '600px' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Satellite Image */}
            <div className="relative z-10">
              <motion.img 
                src="/satellite/satellite.avif"
                alt="Hoffman Holdings Exploration Satellite"
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
                animate={{ 
                  y: [-10, 10, -10],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Satellite Beam Effect */}
              <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#c8b04e] to-transparent"
                style={{ height: '300px' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Floating Data Points */}
            <motion.div
              className="absolute top-10 right-10 bg-blue-500/20 backdrop-blur-sm rounded-lg p-3"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-blue-400 text-sm font-mono">
                <div>SIGNAL: ACTIVE</div>
                <div>DEPTH: 12,450 FT</div>
                <div>MINERAL: AU</div>
              </div>
            </motion.div>

            {/* Additional Floating Data Point */}
            <motion.div
              className="absolute bottom-20 left-10 bg-green-500/20 backdrop-blur-sm rounded-lg p-3"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="text-green-400 text-sm font-mono">
                <div>SCAN: COMPLETE</div>
                <div>ACCURACY: 93%</div>
                <div>STATUS: ONLINE</div>
              </div>
            </motion.div>

            {/* Orbital Path Indicator */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c8b04e] rounded-full"
              animate={{ 
                x: [0, 100, 0, -100, 0],
                y: [0, -50, 0, 50, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Technology Deep Dive Section
function TechnologySection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "Satellite Array",
      depth: "Space",
      description: "Advanced satellite constellation equipped with AMRT sensors orbiting Earth",
      icon: "🛰️"
    },
    {
      title: "Signal Processing",
      depth: "Atmospheric",
      description: "AI-powered algorithms analyze atomic resonance frequencies in real-time",
      icon: "📡"
    },
    {
      title: "Surface Analysis",
      depth: "0 - 500 ft",
      description: "Surface-level mineral identification and geological mapping",
      icon: "🗺️"
    },
    {
      title: "Deep Detection",
      depth: "500 - 5,000 ft",
      description: "Detection of precious metals, rare earth elements, and mineral deposits",
      icon: "💎"
    },
    {
      title: "Hydrocarbon Layer",
      depth: "5,000 - 18,000 ft",
      description: "Oil and gas deposit identification with precise depth mapping",
      icon: "🛢️"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-[#16213e] to-[#0f1419]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ATOMIC <span className="text-[#c8b04e]">MINERAL RESONANCE</span> TOMOGRAPHY
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every mineral element possesses a unique atomic resonance frequency. Our AMRT technology 
            detects these signatures from space, creating detailed subsurface maps without environmental impact.
          </motion.p>
        </div>

        {/* Interactive Technology Demo */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Layer Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-b from-blue-900/30 to-amber-900/30 rounded-2xl p-8 border border-gray-600">
                <h3 className="text-white text-xl font-medium mb-6">Underground Layer Detection</h3>
                
                <div className="space-y-4">
                  {layers.map((layer, index) => (
                    <motion.div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeLayer === index 
                          ? 'bg-[#c8b04e]/20 border border-[#c8b04e]' 
                          : 'bg-white/5 border border-gray-600 hover:bg-white/10'
                      }`}
                      onClick={() => setActiveLayer(index)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{layer.icon}</span>
                        <div className="flex-1">
                          <div className="text-white font-medium">{layer.title}</div>
                          <div className="text-gray-400 text-sm">{layer.depth}</div>
                        </div>
                        {activeLayer === index && (
                          <motion.div
                            className="w-3 h-3 bg-[#c8b04e] rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Details */}
            <div className="space-y-8">
              <motion.div
                key={activeLayer}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-600"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-4xl">{layers[activeLayer].icon}</span>
                  <div>
                    <h4 className="text-white text-xl font-medium">{layers[activeLayer].title}</h4>
                    <p className="text-[#c8b04e]">{layers[activeLayer].depth}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {layers[activeLayer].description}
                </p>
                
                {/* Technical Specs */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-[#c8b04e] text-sm font-medium mb-1">Detection Range</div>
                    <div className="text-white">
                      {activeLayer === 4 ? "Up to 18,000 ft" : "Up to 5,000 ft"}
                    </div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-[#c8b04e] text-sm font-medium mb-1">Accuracy</div>
                    <div className="text-white">93%+ Verified</div>
                  </div>
                </div>
              </motion.div>

              {/* Evolution from NMR */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-6 border border-blue-500/30">
                <h4 className="text-white font-medium mb-4">Evolution from Nuclear Magnetic Resonance (NMR)</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-red-400 font-medium">NMR (Legacy):</span>
                      <span className="text-gray-300"> Used photographic plates and radio-nucleotide bombardment</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#c8b04e] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-[#c8b04e] font-medium">AMRT (Current):</span>
                      <span className="text-gray-300"> Digital technology with AI algorithms, 93% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Hydrocarbon Detection",
      range: "Up to 18,000 feet",
      accuracy: "93%+",
      description: "Locate oil and gas deposits without drilling or seismic surveys",
      applications: ["Oil Exploration", "Natural Gas Fields", "Unconventional Reserves"],
      icon: "🛢️"
    },
    {
      title: "Precious Metals",
      range: "Up to 5,000 feet", 
      accuracy: "93%+",
      description: "Detect gold, silver, platinum, and rare earth elements",
      applications: ["Gold Mining", "Silver Deposits", "Rare Earth Elements"],
      icon: "💎"
    },
    {
      title: "Base Metals & Minerals",
      range: "Up to 5,000 feet",
      accuracy: "93%+", 
      description: "Identify copper, lithium, iron ore, and industrial minerals",
      applications: ["Copper Mining", "Lithium Extraction", "Industrial Minerals"],
      icon: "⚒️"
    },
    {
      title: "Underground Voids",
      range: "Up to 5,000 feet",
      accuracy: "95%+",
      description: "Detect caves, tunnels, and archaeological sites",
      applications: ["Archaeological Surveys", "Structural Assessment", "Security Applications"],
      icon: "🕳️"
    },
    {
      title: "Water Resources",
      range: "Up to 3,000 feet",
      accuracy: "90%+",
      description: "Locate underground aquifers and water tables",
      applications: ["Well Drilling", "Water Management", "Agricultural Planning"],
      icon: "💧"
    },
    {
      title: "Environmental Monitoring",
      range: "Surface to 1,000 feet",
      accuracy: "95%+",
      description: "Track contamination and environmental changes",
      applications: ["Pollution Monitoring", "Remediation Planning", "Environmental Assessment"],
      icon: "🌱"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            DETECTION <span className="text-[#c8b04e]">CAPABILITIES</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive subsurface analysis across multiple industries and applications,
            providing unprecedented insight into Earth's hidden resources.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-600 hover:border-[#c8b04e]/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">{capability.icon}</span>
                <div>
                  <h3 className="text-white font-medium text-lg">{capability.title}</h3>
                  <p className="text-[#c8b04e] text-sm">{capability.range}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{capability.description}</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Accuracy Rate</span>
                  <span className="text-[#c8b04e] font-medium">{capability.accuracy}</span>
                </div>

                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Applications:</h4>
                  <div className="space-y-1">
                    {capability.applications.map((app, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#c8b04e] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Applications Showcase
function ApplicationsSection() {
  const [activeApp, setActiveApp] = useState(0);

  const applications = [
    {
      title: "Oil & Gas Exploration",
      industry: "Energy",
      description: "Revolutionary approach to hydrocarbon exploration without environmental disruption",
      benefits: [
        "No seismic surveys required",
        "Zero environmental impact", 
        "Faster exploration timelines",
        "Reduced exploration costs by 60%"
      ],
      caseStudy: "Identified major oil reserve in Texas, saving $15M in traditional exploration costs",
      depth: "18,000 feet",
      accuracy: "93%"
    },
    {
      title: "Mining Exploration", 
      industry: "Mining",
      description: "Precision mineral detection for sustainable mining operations",
      benefits: [
        "Precise deposit mapping",
        "Minimize environmental impact",
        "Optimize drilling programs", 
        "Reduce exploration risk"
      ],
      caseStudy: "Located gold deposits in Nevada with 95% accuracy, confirmed by subsequent drilling",
      depth: "5,000 feet",
      accuracy: "93%"
    },
    {
      title: "Archaeological Discovery",
      industry: "Research",
      description: "Non-invasive archaeological surveying for historical preservation",
      benefits: [
        "Preserve site integrity",
        "Map underground structures",
        "Identify artifact locations",
        "Historical documentation"
      ],
      caseStudy: "Featured on History Channel's 'Lost Gold of World War II' - located Yamashita's treasure sites",
      depth: "500 feet",
      accuracy: "95%"
    },
    {
      title: "Water Resource Management",
      industry: "Agriculture",
      description: "Sustainable water resource identification and management",
      benefits: [
        "Locate underground aquifers",
        "Optimize well placement",
        "Water table monitoring",
        "Drought planning"
      ],
      caseStudy: "Helped California farms identify new water sources during drought conditions",
      depth: "3,000 feet", 
      accuracy: "90%"
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0f1419]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            INDUSTRY <span className="text-[#c8b04e]">APPLICATIONS</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Application Selector */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {applications.map((app, index) => (
              <button
                key={index}
                onClick={() => setActiveApp(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeApp === index
                    ? 'bg-[#c8b04e] text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {app.title}
              </button>
            ))}
          </motion.div>

          {/* Active Application Details */}
          <motion.div
            key={activeApp}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Application Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <h3 className="text-white text-2xl font-medium">{applications[activeApp].title}</h3>
                  <span className="bg-[#c8b04e]/20 text-[#c8b04e] px-3 py-1 rounded-full text-sm font-medium">
                    {applications[activeApp].industry}
                  </span>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {applications[activeApp].description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-medium">Key Benefits:</h4>
                  {applications[activeApp].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#c8b04e] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="text-blue-400 font-medium mb-2">Case Study:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {applications[activeApp].caseStudy}
                  </p>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <div className="text-[#c8b04e] text-2xl font-bold mb-1">
                      {applications[activeApp].depth}
                    </div>
                    <div className="text-gray-400 text-sm">Detection Depth</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 text-center">
                    <div className="text-[#c8b04e] text-2xl font-bold mb-1">
                      {applications[activeApp].accuracy}
                    </div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                </div>

                {/* Process Visualization */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6">
                  <h4 className="text-white font-medium mb-4">Survey Process:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#c8b04e] rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
                      <span className="text-gray-300 text-sm">Satellite positioning and target area mapping</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#c8b04e] rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
                      <span className="text-gray-300 text-sm">AMRT signal transmission and data collection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#c8b04e] rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
                      <span className="text-gray-300 text-sm">AI-powered analysis and mineral identification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#c8b04e] rounded-full flex items-center justify-center text-black font-bold text-sm">4</div>
                      <span className="text-gray-300 text-sm">Detailed report with depth and location data</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Results & Validation Section
function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            PROVEN <span className="text-[#c8b04e]">RESULTS</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AMRT technology has been validated through rigorous drilling programs, 
            third-party verification, and real-world applications across multiple industries.
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-[#c8b04e] text-4xl font-bold mb-2">93%+</div>
            <div className="text-gray-400">Average Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-[#c8b04e] text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-400">Surveys Completed</div>
          </div>
          <div className="text-center">
            <div className="text-[#c8b04e] text-4xl font-bold mb-2">20+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-[#c8b04e] text-4xl font-bold mb-2">Zero</div>
            <div className="text-gray-400">Environmental Impact</div>
          </div>
        </motion.div>

        {/* Validation Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-2xl p-8 border border-green-500/30">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-medium mb-4">Drilling Verification</h3>
            <p className="text-gray-300 leading-relaxed">
              Direct validation through drilling programs confirms our predictions with 93%+ accuracy rates across multiple geological formations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/20 rounded-2xl p-8 border border-blue-500/30">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-medium mb-4">Third-Party Validation</h3>
            <p className="text-gray-300 leading-relaxed">
              Independent geological firms and government agencies have verified our technology through blind studies and comparative analysis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-purple-700/20 rounded-2xl p-8 border border-purple-500/30">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm6-11a2 2 0 012-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2V4zm6 0a2 2 0 012-2h1a2 2 0 012 2v7a2 2 0 01-2 2h-1a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-medium mb-4">Historical Success</h3>
            <p className="text-gray-300 leading-relaxed">
              Featured on Discovery Channel's "Lost Gold of World War II" series, successfully locating historical treasure sites in the Philippines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact/Request Survey Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '', 
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Survey request submitted! Our team will contact you within 24 hours.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectType: '',
      location: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            REQUEST A <span className="text-[#c8b04e]">SATELLITE SURVEY</span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to discover what lies beneath your property? Get a detailed subsurface analysis 
            with our advanced AMRT technology. No environmental impact, maximum insight.
          </motion.p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-white text-xl font-medium mb-6">Survey Request Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Project Type *</label>
                    <select
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      <option value="oil-gas">Oil & Gas Exploration</option>
                      <option value="mining">Mining Exploration</option>
                      <option value="water">Water Resources</option>
                      <option value="archaeology">Archaeological Survey</option>
                      <option value="environmental">Environmental Assessment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Location *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                      placeholder="Survey location"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c8b04e] focus:border-transparent"
                    placeholder="Tell us about your project goals, target area size, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8b04e] text-black py-4 rounded-xl font-medium hover:scale-105 transition-transform duration-300"
                >
                  Request Satellite Survey
                </button>
              </form>
            </div>

            {/* Survey Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-900/20 to-blue-700/20 rounded-2xl p-6 border border-blue-500/30">
                <h4 className="text-white font-medium text-lg mb-4">What to Expect</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                    <div>
                      <div className="text-white font-medium">Initial Consultation</div>
                      <div className="text-gray-300 text-sm">Review project goals and target areas</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                    <div>
                      <div className="text-white font-medium">Satellite Survey</div>
                      <div className="text-gray-300 text-sm">AMRT data collection and analysis</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                    <div>
                      <div className="text-white font-medium">Detailed Report</div>
                      <div className="text-gray-300 text-sm">Comprehensive analysis with depth mapping</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/20 to-green-700/20 rounded-2xl p-6 border border-green-500/30">
                <h4 className="text-white font-medium text-lg mb-4">Survey Deliverables</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">High-resolution subsurface maps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Mineral composition analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Depth and location coordinates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Recommended exploration points</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Technical consultation support</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-700/20 rounded-2xl p-6 border border-yellow-500/30">
                <h4 className="text-white font-medium text-lg mb-4">Pricing & Timeline</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Survey Duration:</span>
                    <span className="text-white">2-5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Report Delivery:</span>
                    <span className="text-white">7-14 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Pricing:</span>
                    <span className="text-white">Custom quote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer Section
function SatelliteFooterSection() {
  return (
    <footer className="bg-[#0a0a0a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Hoffman Exploration Technologies</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Advanced satellite-based mineral exploration using revolutionary AMRT technology. 
              See beneath the Earth's surface with unprecedented precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#c8b04e] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c8b04e] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#c8b04e] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Survey Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Oil & Gas Exploration</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mining Surveys</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Water Resource Mapping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Archaeological Surveys</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Environmental Assessment</a></li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-white font-medium mb-4">Technology</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AMRT Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Satellite Capabilities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Specifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Validation Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Technology Center:<br />4500 Satellite Blvd<br />Denver, CO 80205</li>
              <li><a href="tel:555-EXPLORE" className="text-gray-400 hover:text-white transition-colors">(555) EXPLORE</a></li>
              <li><a href="mailto:surveys@hoffmantech.com" className="text-gray-400 hover:text-white transition-colors">surveys@hoffmantech.com</a></li>
              <li className="text-gray-400">24/7 Satellite Monitoring</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 Hoffman Exploration Technologies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">NASA-Grade Technology</span>
              <span className="text-gray-500 text-sm">93%+ Accuracy Verified</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-500 text-sm">Satellites Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Satellite Tech Component
function SatelliteTech({ onBackToHome }: { onBackToHome: () => void }) {
  const [navigation, setNavigation] = useState<NavigationState>({
    activeSection: 'hero'
  });

  const handleNavigate = (section: string) => {
    setNavigation(prev => ({
      ...prev,
      activeSection: section
    }));
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <SatelliteHeroSection navigation={navigation} onNavigate={handleNavigate} onBackToHome={onBackToHome} />
      <TechnologySection />
      <CapabilitiesSection />
      <ApplicationsSection />
      <ResultsSection />
      <ContactSection />
      <SatelliteFooterSection />
    </div>
  );
}

export default function SatellitePage() {
  const router = useRouter();
  return <SatelliteTech onBackToHome={() => router.push('/')} />;
}