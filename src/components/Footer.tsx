import { Linkedin, Mail, Youtube, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/bkmy43" className="text-[#127ff0] hover:text-[#ff5500]">
            <Linkedin className="w-9 h-9" />
          </a>
          <a href="mailto:ilya@lab4.berlin" className="text-[#127ff0] hover:text-[#ff5500]">
            <Mail className="w-9 h-9" />
          </a>
          <a href="https://www.youtube.com/channel/UCjkEoOh45ZpXeSRFGexlVzQ" className="text-[#127ff0] hover:text-[#ff5500]">
            <Youtube className="w-9 h-9" />
          </a>
          <a href="https://github.com/lab4-berlin" className="text-[#127ff0] hover:text-[#ff5500]">
            <Github className="w-9 h-9" />
          </a>
        </div>
      </div>
    </footer>
  );
}