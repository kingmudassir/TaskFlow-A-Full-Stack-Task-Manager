import React from 'react';
import Logo from '../Logo/Logo';

function Footer() {
  const quickLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about' },
    { name: 'Contact Us', route: '/contact' },
    { name: 'FAQ', route: '/faq' },
  ];

  const accountLinks = [
    { name: 'Login', route: '/login' },
    { name: 'Signup', route: '/signup' },
    { name: 'Terms of Service', route: '/terms' },
    { name: 'Privacy Policy', route: '/privacy' },
  ];

  return (
    <footer className="bg-linear-to-r from-teal-400 to-cyan-400 text-white px-6 py-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-4">
          <Logo className="text-gray-100 border-gray-100 text-[29px]" />
          <p className="max-w-sm text-gray-100">
            TaskFlow helps you manage your tasks efficiently and stay organized. All your projects, all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
            {quickLinks.map((item) => (
              <li key={item.name} className="hover:text-yellow-200 cursor-pointer transition-colors">
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Account / Legal Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <ul className="flex flex-col space-y-2">
            {accountLinks.map((item) => (
              <li key={item.name} className="hover:text-yellow-200 cursor-pointer transition-colors">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-white/30 pt-4 text-sm text-gray-100 text-center">
        © 2025 TaskFlow. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
