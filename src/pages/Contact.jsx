// pages/Contact.jsx
function Contact() {
  return (
    <section className="w-full mx-auto">
      {/* Header */}
      <div className="mt-0 bg-gradient-to-r from-gray-800 to-indigo-600 min-h-[220px] md:min-h-[320px] flex flex-col justify-center items-center px-4 md:px-0 shadow-lg">
        <h3 className="text-xs md:text-sm text-[#f28123] font-bold uppercase tracking-widest text-center">
          Get in Touch
        </h3>
        <h2 className="text-2xl md:text-[50px] font-black text-[#f28123] mt-1 text-center">
          Contact Us
        </h2>
        <p className="text-white mt-2 text-center max-w-xl">
          We'd love to hear from you! Fill out the form or reach us directly using the information below.
        </p>
      </div>

      {/* Contact Info & Form */}
      <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto px-4 py-12">
 
    
        <div className="flex-1 mt-10 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-xl shadow-lg p-8 mb-6 md:mb-0">
          
      <div className="mt-0 p-8 flex flex-col items-center mx-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Contact Information</h3>

           <p className="text-center">
            <a
              href="mailto:aqib@darwazypy.com"
              className="hover:underline"
            >
              <span className="font-semibold"> aqib@darwazypy.com</span> 
            </a>
            <br /> 
            or call us at : <a href="callto:+923025089439" className="hover:underline"><span className="font-semibold">+923025089439</span></a>
          </p> <br /> <br />
        <ul className="flex flex-wrap gap-6 mt-4">
          <li>
            <a
              href="https://facebook.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="Facebook" />
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png" alt="Twitter" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="Instagram" />
              Instagram
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/tiktok.png" alt="LinkedIn" />
              TikTok
            </a>
          </li>
          
          <li>
            <a
              href="https://linkedin.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
          </li>


          <li>
            <a
              href="https://youtube.com"
              className="flex items-center gap-2 hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="YouTube" />
              YouTube
            </a>
          </li>
        </ul>
      </div>
        </div>

        {/* Contact Form */}
        <form className="flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Send Us a Message</h4>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
          <button className="bg-[#f28123] hover:bg-orange-600 text-white px-4 py-2 rounded w-full md:w-auto font-semibold transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
