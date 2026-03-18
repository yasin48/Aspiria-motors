import Link from 'next/link';
import { Twitter, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-primary/15 relative overflow-hidden text-sm">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block group">
              <span className="font-orbitron font-bold text-2xl tracking-widest text-text group-hover:text-primary transition-colors duration-300">
                ASPIRIA
              </span>
            </Link>
            <p className="text-text-muted leading-relaxed font-inter mt-2">
              Pioneering the next generation of zero-emission mobility through advanced hydrogen fuel cell architecture.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-orbitron font-medium text-white tracking-wider uppercase mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-text-muted hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/technology" className="text-text-muted hover:text-primary transition-colors">Technology</Link></li>
              <li><Link href="/about" className="text-text-muted hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col gap-4">
            <h3 className="font-orbitron font-medium text-white tracking-wider uppercase mb-2">Connect</h3>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-all hover:scale-110">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface-2 gap-4">
          <p className="text-text-muted text-xs font-inter">
            &copy; {currentYear} Aspiria Motors Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs font-orbitron tracking-wider text-primary">
            <span>BUILT WITH CLEAN ENERGY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
