import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-[#fa6c38] mb-4">Contact Information</h3>
            <div className="space-y-2">
              <p>📍 72/23,24 Chennimalai Road</p>
              <p>Perundurai – 638052, Tamil Nadu</p>
              <p>📞 99948-94844</p>
              <p>✉️ kavin95pri@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#fa6c38] mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block hover:text-orange-400 transition-colors">About</a>
              <a href="/campaigns" className="block hover:text-orange-400 transition-colors">Campaigns</a>
              <a href="/vision" className="block hover:text-orange-400 transition-colors">Vision</a>
              <a href="/gallery" className="block hover:text-orange-400 transition-colors">Gallery</a>
              <a href="/contact" className="block hover:text-orange-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-[#fa6c38] mb-4">Follow Us</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} KTS Kavin. All rights reserved. 
            <span className="block mt-2">
              Authorized by KTS Kavin, BJP Youth Wing Leader
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
