import React from 'react';
import styles from './page.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.30434371529!2d106.82963755!3d-6.63747335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8b16ee07ef5%3A0x14ab253dd267de49!2sSMK%20Negeri%204%20Bogor%20(Nebrazka)!5e0!3m2!1sid!2sid!4v1727941577991!5m2!1sid!2sid"
          width="400"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        ></iframe>
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">Call us</span>
              <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {/* Social Media Links */}
              {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map((platform, index) => (
                <li key={index}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* Add appropriate SVG paths for each platform here */}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">1on1 Coaching</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Company Review</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">Accounts Review</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">HR Consulting</a></li>
                <li><a href="#" className="text-gray-700 transition hover:opacity-75">SEO Optimization</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
