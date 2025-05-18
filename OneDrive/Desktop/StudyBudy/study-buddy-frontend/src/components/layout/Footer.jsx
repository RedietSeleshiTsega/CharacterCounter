
import { FaInstagram, FaLinkedin, FaFacebook, FaTimes } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="bg-blue-800 py-8 px-4 text-center text-white bg-[url('/bg-pattern.png')] bg-cover">
        <h2 className="text-xl font-semibold mb-4">Subscribe to get study tips and updates!</h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Type your email here"
            className="px-4 py-2 rounded-l-full text-black w-72"
          />
          <button className="bg-black px-6 py-2 rounded-r-full hover:bg-gray-800">
            Subscribe
          </button>
        </div>
        <div className="mt-4 text-sm flex justify-center gap-6 underline">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="bg-blue-100 text-black px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-xl font-bold text-blue-900">StudyBuddy</h3>
          <p className="mt-2">Smarter, Organized Study Groups for Every Student.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Link</h4>
          <ul className="space-y-1">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <p>📍 732 Despard St, Atlanta</p>
          <p>📧 +97 888 8888</p>
          <p>📞 info@traveller.com</p>
        </div>

        
        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-lg text-blue-800">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTimes /></a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 text-sm">
        © 2025 Study Buddy. All rights reserved.
      </div>
    </footer>
  );
}
