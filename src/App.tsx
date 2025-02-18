import { Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

function App() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek-Karki-Resume.pdf'; 
    link.setAttribute('download', 'Abhishek-Karki-Resume.pdf');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Abhishek Karki - Quality Assurance Engineer</title>
        <meta name="description" content="Abhishek Karki's professional portfolio showcasing experience in Quality Assurance, skills, and certifications." />
        <meta name="keywords" content="Abhishek Karki, Quality Assurance Engineer, QA, Software Testing, Automation, Selenium, API Testing, Kathmandu" />
        <meta name="author" content="Abhishek Karki" />
        <meta property="og:title" content="Abhishek Karki - Quality Assurance Engineer" />
        <meta property="og:description" content="Abhishek Karki's professional portfolio showcasing experience in Quality Assurance, skills, and certifications." />
        <meta property="og:image" content="/profile-pic.jpeg" />
        <meta property="og:url" content="https://abhishek.karki.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative">
        <div className="mx-auto p-6 md:p-20">
          <div className="mx-auto flex flex-col md:flex-row items-start gap-6 md:gap-12">
            <motion.div
              className="rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }} // Add hover effect
              transition={{ duration: 0.5 }}
            >
              <img
                src="/profile-pic.jpeg"
                alt="Abhishek Karki"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
              />
            </motion.div>
            <motion.div
              className="flex-1 info-sec"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-6xl font-bold mb-4">Abhishek Karki</h1>
              <h2 className="text-lg md:text-2xl mb-6">Quality Assurance Engineer</h2>
              <p className="text-base md:text-lg mb-8 text-blue-100">
                With a robust understanding of testing methodologies and the software development lifecycle, I excel in leveraging AI and emerging technologies to enhance quality assurance processes. My strong analytical skills and meticulous attention to detail enable me to effectively integrate innovative solutions, such as AI-driven test automation, to optimize test coverage and accuracy. This approach ensures the delivery of high-quality software products in today's rapidly evolving technological landscape.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6 text-blue-100">
                <a href="mailto:brtabhishek10@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" />
                  brtabhishek10@gmail.com
                </a>
                <a href="tel:+9779814363802" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" />
                  +977 9814363802
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Lazimpat, Kathmandu
                </div>
                <a 
                  href="https://www.linkedin.com/in/abhishek-karki-882076219/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-blue-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Rest of the component remains unchanged */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Software Engineer I</h3>
                    <p className="text-blue-600">Infinite Computer Solutions (formerly Cotiviti Nepal)</p>
                  </div>
                  <span className="text-gray-500">September 2023 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Conducted comprehensive API testing using Postman for DxCG healthcare analytics application</li>
                  <li>Performed manual testing and result validation using Beyond Compare</li>
                  <li>Implemented detailed regression testing plans across different environments and databases</li>
                  <li>Conducted performance testing for system scalability evaluation</li>
                  <li>Key role in testing containerized DxCG 6.3 version</li>
                  <li>Collaborated in SAFe environment and delivered product demos to stakeholders</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Quality Assurance Engineer</h3>
                    <p className="text-blue-600">Yirifi.ai Pte. Ltd., Singapore</p>
                  </div>
                  <span className="text-gray-500">June 2024 - January 2025</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Test Case Preparation: Creating detailed and comprehensive test cases for various applications.</li>
                  <li>Test Data Preparation: Generating test data for various testing scenarios to ensure thorough application validation.</li>
                  <li>API Testing: Conducting API tests to verify functionality, security, and performance.</li>
                  <li>Load Testing: Performing load and stress tests to assess the performance of web applications under different load conditions.</li>
                  <li>UI Testing: Testing the user interface of web applications to ensure usability, functionality, and responsiveness.</li>
                  <li>Web Application Testing: Conducting end-to-end testing of web applications to ensure their overall quality.</li>
                  <li>Automation using Selenium (Java in Headless Mode): Implementing automated test scripts using Selenium WebDriver in Java for headless testing, improving the efficiency of the testing process.</li>
                  <li>Requirements Analysis: Reviewing project requirements and aligning them with testing strategies to ensure all deliverables meet the necessary quality standards.</li>
                  <li>UAT (User Acceptance Testing) Report Preparation: Assisting in the preparation of UAT reports and ensuring that all user acceptance criteria were met.</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Senior Associate QA Engineer</h3>
                    <p className="text-blue-600">TechnoFex Nepal Pvt Ltd</p>
                  </div>
                  <span className="text-gray-500">April 2022 - August 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Implemented UI automation testing using Selenium C# with XUnit and POM framework</li>
                  <li>Performed API testing using Postman and Swagger</li>
                  <li>Conducted cross-browser testing using BrowserStack</li>
                  <li>Managed bug tracking on Azure DevOps</li>
                  <li>Provided training and knowledge sharing sessions to interns</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">QA Trainee</h3>
                    <p className="text-blue-600">Citytech</p>
                  </div>
                  <span className="text-gray-500">November 2021 - April 2022</span>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Handled FinPRO and TradePulse projects for major banks</li>
                  <li>Served as Scrum Master, managing sprint planning and ceremonies</li>
                  <li>Created and maintained test cases and project documentation</li>
                  <li>Performed testing across QAT, QA, and staging environments</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Skills & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Software testing methodologies",
                    "Test automation (Selenium WebDriver, XUnit)",
                    "API Testing (Postman, Swagger)",
                    "Performance testing (JMeter)",
                    "Database testing (SQL, PostgreSQL)",
                    "Agile/SAFe methodologies",
                    "Test case creation and execution",
                    "Defect tracking and reporting",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white px-4 py-2 rounded-lg shadow-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Azure DevOps",
                    "Jira & Confluence",
                    "TestLink",
                    "Selenium",
                    "Postman",
                    "Figma & Adobe XD",
                    "Microsoft Office Suite",
                    "BrowserStack",
                  ].map((tool) => (
                    <div
                      key={tool}
                      className="bg-white px-4 py-2 rounded-lg shadow-sm"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Education & Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
            <div className="space-y-6">
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-semibold">International Masters in Business Administration</p>
                    <p className="text-blue-600">University of Wolverhampton (Herald College Kathmandu)</p>
                    <p className="text-gray-500">Ongoing</p>
                  </div>
                  <div>
                    <p className="font-semibold">BSc (Hons) Computer Science</p>
                    <p className="text-blue-600">University of Wolverhampton (Herald College Kathmandu)</p>
                    <p className="text-gray-500">2018 - 2022</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold">Certifications</h3>
                <div className="mt-4">
                  <p className="text-lg">ISTQB Advanced Test Automation Engineer Certification</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold">Featured on United Academy's LinkedIn</h3>
                <p className="text-blue-600">My Professional Development Journey</p>
                <a href="https://www.linkedin.com/posts/unitedacademynepal_alumniacheivement-unitedacademy-unitedacademynepal-activity-7237365923920150528-LXHv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADcBNGIB9US_-HjYkXBeyoDOxFawoYfQz1w" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 mt-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Post
                </a>
              </motion.div>
            </div>
          </motion.section>

          {/* References */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">References</h2>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold">Prajwal Adhikari</h3>
              <p className="text-blue-600">Project Manager and InfoSecOps Lead</p>
              <a href="mailto:adhikari.prajwal678@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 mt-2">
                <Mail className="w-4 h-4" />
                adhikari.prajwal678@gmail.com
              </a>
            </motion.div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
          <p className="mt-4 text-gray-600">© 2025 Abhishek Karki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;