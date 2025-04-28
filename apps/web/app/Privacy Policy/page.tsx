"use client";
import { useState, useEffect, SetStateAction } from 'react';
import { Shield, Lock, Database, Eye, FileText, Bell, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-section').forEach((section) => {
      observer.observe(section);
    });
    
    // Scroll tracking for nav highlighting
    const handleScroll = () => {
      setIsScrolling(true);
      
      const sections = document.querySelectorAll('section');
      let currentActiveSection = 'introduction';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  
  const scrollToSection = (sectionId: SetStateAction<string>) => {
    setIsScrolling(true);
    setActiveSection(sectionId);
    
    const section = document.getElementById(sectionId as string);
    window.scrollTo({
      top: section ? section.offsetTop - 80 : 0,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <Lock className="inline-block mr-2" size={24} /> 
              Company Privacy Center
            </h1>
            
            <div className="hidden md:block">
              <nav className="flex space-x-6">
                {['introduction', 'collection', 'usage', 'protection', 'rights', 'updates'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`py-2 px-1 border-b-2 transition-all duration-300 ${
                      activeSection === section 
                        ? 'border-blue-600 text-blue-600 font-medium' 
                        : 'border-transparent text-gray-600 hover:text-blue-500'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section id="introduction" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We value your privacy and are committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full mb-6 md:mb-0 md:mr-8">
                <FileText size={40} className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-3">Last Updated: April 27, 2025</h2>
                <p className="text-gray-600">
                  This Privacy Policy applies to all services offered by Company Name.
                  By using our services, you consent to the collection and use of information as described here.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-blue-50 group">
                <Database className="text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-medium mb-2">Data Collection</h3>
                <p className="text-gray-600">We collect information to provide better services to our users.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-blue-50 group">
                <Eye className="text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-medium mb-2">Data Usage</h3>
                <p className="text-gray-600">We use your data to improve our services and user experience.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md hover:bg-blue-50 group">
                <Shield className="text-blue-600 mb-4 transition-all duration-300 group-hover:scale-110" size={32} />
                <h3 className="text-xl font-medium mb-2">Data Protection</h3>
                <p className="text-gray-600">We implement strict measures to ensure your data's security.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Data Collection Section */}
        <section id="collection" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="mr-3 text-blue-600" size={32} />
              Data Collection
            </h2>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-8">
              <p className="text-lg text-gray-700 italic">
                "We collect only what is necessary to provide you with the best service possible."
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Information You Provide</h3>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Create an account or profile</li>
                  <li>Fill out forms or surveys</li>
                  <li>Communicate with our customer support</li>
                  <li>Subscribe to newsletters or promotional materials</li>
                </ul>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  When you use our services, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Device information (hardware model, operating system version, unique device identifiers)</li>
                  <li>Log information (IP address, browser type, pages visited, search terms)</li>
                  <li>Location information (with your consent)</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Information from Third Parties</h3>
                <p className="text-gray-600">
                  We may receive information about you from third-party partners, such as marketing partners 
                  and analytics providers, which helps us provide and improve our services.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Data Usage Section */}
        <section id="usage" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="mr-3 text-blue-600" size={32} />
              How We Use Your Data
            </h2>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-8">
              <p className="text-lg text-gray-700 italic">
                "We use your data responsibly to enhance your experience and improve our services."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Providing Services</h3>
                <p className="text-gray-600">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Create and maintain your account</li>
                  <li>Process transactions and payments</li>
                  <li>Deliver the products and services you request</li>
                  <li>Communicate with you about your account or transactions</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Improving Services</h3>
                <p className="text-gray-600">
                  We analyze how users interact with our services to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Monitor and analyze trends and usage</li>
                  <li>Develop new products and services</li>
                  <li>Enhance existing features and functionality</li>
                  <li>Test and troubleshoot new products and features</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Personalization</h3>
                <p className="text-gray-600">
                  We use your information to personalize your experience by:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Providing customized content and recommendations</li>
                  <li>Remembering your preferences and settings</li>
                  <li>Recognizing you across different devices</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-400">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Marketing and Communication</h3>
                <p className="text-gray-600">
                  With your consent, we may use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Send promotional communications</li>
                  <li>Deliver relevant advertisements</li>
                  <li>Notify you about changes to our services</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Data Protection Section */}
        <section id="protection" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="mr-3 text-blue-600" size={32} />
              Data Protection
            </h2>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-8">
              <p className="text-lg text-gray-700 italic">
                "Your security is our priority. We implement industry-leading measures to protect your data."
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security Measures</h3>
                <p className="text-gray-600 mb-4">
                  We take data security seriously and implement various technical and organizational measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Encryption of sensitive data both in transit and at rest</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Continuous monitoring for suspicious activities</li>
                  <li>Regular backups and disaster recovery plans</li>
                </ul>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Fulfill the purposes outlined in this Privacy Policy</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  When your data is no longer needed, we securely delete or anonymize it.
                </p>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Third-Party Processors</h3>
                <p className="text-gray-600">
                  We may share your information with trusted third-party service providers who assist us in 
                  operating our business. These partners are contractually obligated to handle your data 
                  securely and in compliance with applicable privacy laws.
                </p>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-400">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Breach Procedures</h3>
                <p className="text-gray-600">
                  In the unlikely event of a data breach, we have procedures in place to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                  <li>Identify and contain the breach</li>
                  <li>Assess the risk to affected individuals</li>
                  <li>Notify relevant authorities within required timeframes</li>
                  <li>Inform affected users when necessary</li>
                  <li>Implement measures to prevent future breaches</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* User Rights Section */}
        <section id="rights" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <UserCheck className="mr-3 text-blue-600" size={32} />
              Your Rights
            </h2>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-8">
              <p className="text-lg text-gray-700 italic">
                "We respect your rights and provide you with control over your personal data."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Access and Portability</h3>
                <p className="text-gray-600">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Access your personal information</li>
                  <li>Receive a copy of your data in a structured, machine-readable format</li>
                  <li>Request information about how your data is processed</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Correction and Deletion</h3>
                <p className="text-gray-600">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Request correction of inaccurate personal data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Close your account and remove your profile information</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Object and Restrict</h3>
                <p className="text-gray-600">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Object to the processing of your personal data</li>
                  <li>Restrict how we use your information</li>
                  <li>Withdraw consent for activities you previously consented to</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl transition-all duration-300 hover:shadow-md animate-section opacity-0 translate-y-8 transition-all duration-700 delay-400">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">How to Exercise Your Rights</h3>
                <p className="text-gray-600">
                  To exercise any of these rights:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-2">
                  <li>Access your account settings</li>
                  <li>Contact us at privacy@company.com</li>
                  <li>Use the "Privacy Request" form on our website</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Updates Section */}
        <section id="updates" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Bell className="mr-3 text-blue-600" size={32} />
              Policy Updates
            </h2>
            
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-8">
              <p className="text-lg text-gray-700 italic">
                "We regularly review and update our Privacy Policy to ensure compliance with applicable laws and regulations."
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Changes to This Policy</h3>
                <p className="text-gray-600">
                  We may modify this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                  legal, or regulatory reasons. When we make material changes to this policy, we will:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mt-4">
                  <li>Post the updated policy on our website</li>
                  <li>Update the "Last Updated" date at the top of this policy</li>
                  <li>Notify you via email or through a notice on our website</li>
                  <li>In some cases, seek your consent to the changes</li>
                </ul>
              </div>
              
              <div className="animate-section opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Previous Versions</h3>
                <p className="text-gray-600">
                  You can request access to previous versions of our Privacy Policy by contacting us at privacy@company.com.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl mt-8 border border-blue-200 animate-section opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Stay Informed</h3>
                <p className="text-gray-700 mb-4">
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
                <div className="mt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                    Subscribe to Policy Updates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="mb-16 animate-section opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-600 mb-6">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-blue-600">privacy@company.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-blue-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Privacy Street<br />
                        Secure City, ST 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    >
                      <option value="" disabled selected>Select a subject</option>
                      <option value="question">General Question</option>
                      <option value="access">Data Access Request</option>
                      <option value="delete">Data Deletion Request</option>
                      <option value="complaint">Privacy Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                      I consent to the processing of my personal data as described in the Privacy Policy.
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer with Schema.org structured data for SEO */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="text-gray-400">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GDPR Compliance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">CCPA Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates about our privacy practices and policies.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
        
        {/* Schema.org structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy - Company Name",
          "description": "Learn about how we collect, use, and protect your personal information at Company Name.",
          "publisher": {
            "@type": "Organization",
            "name": "Company Name",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.company.com/logo.png"
            }
          },
          "mainEntity": {
            "@type": "WebContent",
            "about": {
              "@type": "Thing",
              "name": "Privacy Policy"
            },
            "datePublished": "2025-04-27",
            "dateModified": "2025-04-27"
          }
        })}} />
      </footer>
      
      {/* Back to top button with animation */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          window.scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
