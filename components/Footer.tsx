import Link from 'next/link';
import { Instagram, Mail, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-3">Lloyd Matsi</h3>
            <p className="text-warm-gray text-sm">
              Photography • Stories • Moments
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-warm-gray">
              Navigate
            </h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm hover:text-warm-gray transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-sm hover:text-warm-gray transition-colors">
                About
              </Link>
              <Link href="/portfolio" className="block text-sm hover:text-warm-gray transition-colors">
                Portfolio
              </Link>
              <Link href="/stories" className="block text-sm hover:text-warm-gray transition-colors">
                Stories
              </Link>
              <Link href="/services" className="block text-sm hover:text-warm-gray transition-colors">
                Services
              </Link>
              <Link href="/contact" className="block text-sm hover:text-warm-gray transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-warm-gray">
              Connect
            </h4>
            <a 
              href="mailto:hello@lloydmatsi.com" 
              className="block text-sm hover:text-warm-gray transition-colors mb-4"
            >
              hello@lloydmatsi.com
            </a>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-gray transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@lloydmatsi.com"
                className="hover:text-warm-gray transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-gray transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-warm-gray transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-warm-gray">
            © {currentYear} Lloyd Matsi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
