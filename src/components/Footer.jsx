function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left: Logo + Description */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-15 w-25" />
          </div>
          <p className="text-gray-600">
            Darwazypy is unmatched when it comes to performance and scalability.
            Reap the benefits of having an online store that outperforms your
            competitors.
          </p>

          {/* Language selector */}
          <div>
            <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none">
              <option value="en">English 🇺🇸</option>
              <option value="fr">Français 🇫🇷</option>
              <option value="de">Deutsch 🇩🇪</option>
            </select>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Information</h4>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>FAQ's</li>
          </ul>
        </div>
        {/* <div>
          <h4 className="font-semibold text-gray-800 mb-2">Products</h4>
          <ul className="space-y-1">
            <li>New Arrivals</li>
            <li>On sale</li>
            <li>Top rated</li>
            <li>Gift Cards</li>
          </ul>
        </div> */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Customer Service</h4>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">My Account</h4>
          <ul className="space-y-1">
            <li>My Account</li>
            <li>Order History</li>
            <li>Wishlist</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500">
        Copyright 2025 - by Aqib Zafeer
      </div>
    </footer>
  );
}

export default Footer;
