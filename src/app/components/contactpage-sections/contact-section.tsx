import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const ContactSection = (): React.ReactElement => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="rounded-3xl bg-gray-50 p-8 shadow-lg">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE7310]">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We would love to hear from you. Whether you have questions about
              courses, instructors, or anything else, our team is ready to
              answer all your questions.
            </p>

            <div className="mt-10 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-orange-100 p-4">
                  <FiMail size={24} className="text-[#FE7310]" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Email Address
                  </h4>

                  <p className="text-gray-600">
                    support@nextskill.com
                  </p>

                  <p className="text-gray-600">
                    info@nextskill.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-orange-100 p-4">
                  <FiPhone size={24} className="text-[#FE7310]" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Phone Number
                  </h4>

                  <p className="text-gray-600">
                    +880 1234-567890
                  </p>

                  <p className="text-gray-600">
                    +880 9876-543210
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-orange-100 p-4">
                  <FiMapPin size={24} className="text-[#FE7310]" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Office Address
                  </h4>

                  <p className="text-gray-600">
                    House #25, Road #12,
                  </p>

                  <p className="text-gray-600">
                    Dhanmondi, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-5">
                <div className="rounded-xl bg-orange-100 p-4">
                  <FiClock size={24} className="text-[#FE7310]" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    Office Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday - Friday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE7310]">
              Send Message
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900">
              We would Love To Hear From You
            </h2>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-14 rounded-xl border border-gray-300 px-5 outline-none focus:border-[#FE7310]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-14 rounded-xl border border-gray-300 px-5 outline-none focus:border-[#FE7310]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="h-14 w-full rounded-xl border border-gray-300 px-5 outline-none focus:border-[#FE7310]"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 p-5 outline-none resize-none focus:border-[#FE7310]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#FE7310] py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;