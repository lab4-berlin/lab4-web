import { Linkedin, Mail, Youtube, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-6">
          <a href="#" className="text-[#127ff0] hover:text-[#ff5500]">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#127ff0] hover:text-[#ff5500]">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#127ff0] hover:text-[#ff5500]">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="text-[#127ff0] hover:text-[#ff5500]">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}