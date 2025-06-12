// pages/Contact.jsx
function Contact() {
  return (
    <section className="w-full mx-auto">
      <div className="mt-0 bg-gradient-to-r from-gray-800 to-indigo-600 min-h-[200px] md:min-h-[300px] flex flex-col justify-center items-center px-4 md:px-0 shadow-lg">
        <h3 className="text-xs md:text-sm text-[#f28123] font-bold uppercase tracking-widest text-center">
          See more Details
        </h3>
        <h2 className="text-2xl md:text-[50px] font-black text-[#f28123] mt-1 text-center">
          Contact Us
        </h2>
      </div>

      <form className="space-y-4 max-w-md w-full mx-auto px-4 py-8">
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
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          rows={4}
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
