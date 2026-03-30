import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 ">

         {/* Purple divider line */}
  <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10
                      grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

        {/* BRAND */}
        <div className="col-span-2">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600
                            flex items-center justify-center font-bold text-white">
              W
            </div>

            <span className="text-xl font-semibold text-white">
              Wolsera
            </span>

          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Premium fashion crafted for modern lifestyle. Discover timeless
            styles and curated collections designed for everyday elegance.
          </p>

        </div>


        {/* ABOUT */}
        <div>

          <h3 className="text-gray-400 uppercase text-sm mb-4">
            About
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">
              About Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Careers
            </li>

            <li className="hover:text-white cursor-pointer">
              Contact Us
            </li>

            <li className="hover:text-white cursor-pointer">
              Our Story
            </li>

          </ul>

        </div>


        {/* HELP */}
        <div>

          <h3 className="text-gray-400 uppercase text-sm mb-4">
            Help
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">
              Payments
            </li>

            <li className="hover:text-white cursor-pointer">
              Shipping
            </li>

            <li className="hover:text-white cursor-pointer">
              Returns
            </li>

            <li className="hover:text-white cursor-pointer">
              FAQ
            </li>

          </ul>

        </div>


        {/* POLICIES */}
        <div>

          <h3 className="text-gray-400 uppercase text-sm mb-4">
            Policies
          </h3>

          <ul className="space-y-2 text-sm">

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>

            <li className="hover:text-white cursor-pointer">
              Refund Policy
            </li>

            <li className="hover:text-white cursor-pointer">
              Security
            </li>

          </ul>

        </div>


        {/* CONTACT */}
        <div>

          <h3 className="text-gray-400 uppercase text-sm mb-4">
            Contact
          </h3>

          <p className="text-sm text-gray-400 mb-2">
            support@wolsera.com
          </p>

          <p className="text-sm text-gray-400">
            Chennai, Tamil Nadu
            <br />
            India
          </p>

        </div>


        {/* SOCIAL */}
        <div>

          <h3 className="text-gray-400 uppercase text-sm mb-4">
            Social
          </h3>

          <div className="flex gap-4">

            <Facebook className="cursor-pointer hover:text-white" />

            <Instagram className="cursor-pointer hover:text-white" />

            <Twitter className="cursor-pointer hover:text-white" />

            <Youtube className="cursor-pointer hover:text-white" />

          </div>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © 2026 Wolsera. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;