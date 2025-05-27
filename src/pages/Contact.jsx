// pages/Contact.jsx
function Contact() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border"
          rows={4}
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
