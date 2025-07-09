import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-8 h-8" />,
      url: 'https://github.com/Kushal-Srivastav',
      color: 'text-gray-700 hover:text-gray-800',
      bg: 'bg-gray-100 hover:bg-gray-200'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-8 h-8" />,
      url: 'https://www.linkedin.com/in/kushal-srivastava-099274293',
      color: 'text-blue-600 hover:text-blue-700',
      bg: 'bg-blue-100 hover:bg-blue-200'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-8 h-8" />,
      url: 'https://www.instagram.com/j_s.r.i.v.a.s.t.a.v_/',
      color: 'text-pink-600 hover:text-pink-700',
      bg: 'bg-pink-100 hover:bg-pink-200'
    }
  ];

  return (
    <section className='c-space my-20' id='contact'>
      <div className='w-full text-center'>
        <p className='head-text'>Let's Connect</p>
        
        <div className='mt-12'>
          <p className='text-2xl font-semibold text-white-800 mb-8'>
            Feel free to reach out to me on my socials
          </p>
          
          <div className='flex justify-center gap-8 flex-wrap'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${social.bg} ${social.color} transform hover:-translate-y-1`}
              >
                {social.icon}
                <span className='mt-2 text-sm font-medium'>{social.name}</span>
              </a>
            ))}
          </div>
          
          <p className='mt-8 text-white-500'>
            Or email me at: <span className='text-blue-400'>kushalsrijan17@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
