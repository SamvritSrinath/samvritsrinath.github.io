import {FaLinkedin, FaGithub, FaEnvelope, FaPhone} from 'react-icons/fa';
import {resumeData} from '../data/resumeData';
import {cn} from '@/lib/utils';
import Contact from '../pages/Contact';

const Footer = () => {
  const {email, phone, linkedin, github} = resumeData.main.contact;

  // Google Drive resume link - update this with your actual Drive shareable link
  const resumeLink =
    import.meta.env.VITE_RESUME_DRIVE_LINK ||
    'https://drive.google.com/file/d/YOUR_FILE_ID/view';

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-xl">
      {/* Contact Section */}
      <section id="contact" className="py-8 px-4 sm:px-6 lg:px-8">
        <Contact content={resumeData.main.contact} theme={{}} />
      </section>

      {/* Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub">
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              aria-label="Email">
              <FaEnvelope className="h-5 w-5" />
              <span className="hidden sm:inline">{email}</span>
            </a>
            <a
              href={`tel:${phone}`}
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              aria-label="Phone">
              <FaPhone className="h-5 w-5" />
              <span className="hidden sm:inline">{phone}</span>
            </a>
          </div>

          {/* Resume Link */}
          <div>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'text-sm font-medium transition-colors',
                'hover:text-primary',
                'relative after:absolute after:bottom-0 after:left-0',
                'after:h-0.5 after:w-0 after:bg-primary',
                'after:transition-all after:duration-300',
                'hover:after:w-full inline-block',
              )}>
              View Resume
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Samvrit Srinath. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
