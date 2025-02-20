import { Linkedin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="p-4 border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/">
            <div className="flex flex-col">
              <h1 className="text-[#ff5500] text-5xl font-bold font-['Noto_Sans']">Lab IV</h1>
              <div className="text-[#127ff0] text-xl font-['Noto_Sans']">
                Shaping Your Data Team
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/bkmy43"
            className="text-[#127ff0] hover:text-[#ff5500]"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-9 h-9" />
          </a>
          <a
            href="/iv_cv.pdf"
            className="text-[#127ff0] hover:text-[#ff5500]"
            title="Download CV"
          >
            <FileText className="w-9 h-9" />
          </a>
        </div>
      </div>
    </nav>
  );
}