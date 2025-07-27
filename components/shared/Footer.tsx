import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f3ff] text-gray-700">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Newsletter */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black flex items-center">
            <span className="text-pink-500">N</span>OFAKA
          </h2>
          <p className="text-sm leading-relaxed">
            I appreciate your amazing services and professional staff for all
            your hard work and creative thinking.
          </p>
          <div>
            <p className="font-semibold">Subscribe to our newsletter</p>
            <div className="flex mt-2">
              <Input
                placeholder="Enter your email"
                className="rounded-none border-pink-500 focus-visible:ring-pink-500"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Conference Links */}
        <div>
          <h3 className="font-bold mb-3 border-b border-gray-300 pb-1">
            Conference
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Community blog</li>
            <li>Rewards</li>
            <li>Work with us</li>
            <li>Meet the team</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-bold mb-3 border-b border-gray-300 pb-1">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Account</li>
            <li>Faq</li>
            <li>Legal</li>
            <li>Contact us</li>
            <li>Affiliate program</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

    
        {/* Help Section */}
        <div>
          <h3 className="font-bold mb-3 border-b border-gray-300 pb-1">
            Need any help?
          </h3>
          <p className="text-sm mb-1">Call 24/7 for any help</p>
          <p className="text-lg font-bold text-indigo-900">+00 123 456 789</p>
          <p className="text-sm mt-3">Mail to our support team</p>
          <p className="text-indigo-900 font-semibold">support@domain.com</p>
          <p className="text-sm mt-3">Follow us on</p>
          <div className="flex gap-3 mt-2 text-indigo-900">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-indigo-900 text-white text-sm flex flex-col md:flex-row items-center justify-between px-6 py-4">
        <p>Copyright © 2025 All Rights Reserved</p>
        <div className="space-x-3">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
