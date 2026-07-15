import React from "react";
import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoYoutube,
  BiEnvelope,
  BiPhone,
  BiMap,
} from "react-icons/bi";

export const Footer = (): React.ReactElement => {
  return (
    <footer className="bg-[#0F172A] text-white mt-20">
      <div className="max-w-[1500px] mx-auto px-4 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-[#FE7310]">
              NextSkill
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Empowering learners worldwide with quality education
              and career-focused online courses.
            </p>

            <div className="flex gap-4 mt-6">
              <BiLogoFacebookCircle className="text-3xl hover:text-[#FE7310] cursor-pointer transition" />
              <BiLogoLinkedinSquare className="text-3xl hover:text-[#FE7310] cursor-pointer transition" />
              <BiLogoGithub className="text-3xl hover:text-[#FE7310] cursor-pointer transition" />
              <BiLogoYoutube className="text-3xl hover:text-[#FE7310] cursor-pointer transition" />
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/explore">Courses</Link></li>            
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

       

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <BiEnvelope className="text-xl text-[#FE7310]" />
                <span>info@nextskill.com</span>
              </div>

              <div className="flex gap-3">
                <BiPhone className="text-xl text-[#FE7310]" />
                <span>+880 170-1035-894</span>
              </div>

              <div className="flex gap-3">
                <BiMap className="text-xl text-[#FE7310]" />
                <span>Khulna, Bangladesh</span>
              </div>

            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Follow Us
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>YouTube</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 NextSkill. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;