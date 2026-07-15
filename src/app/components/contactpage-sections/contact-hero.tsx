import Image from "next/image";
import contactImage from "@/images/about-story.jpg";

const ContactHero = (): React.ReactElement => {
  return (
    <section className="bg-gradient-to-r from-orange-50 via-white to-blue-50 pt-25 md:pt-35 pb-20">
      <div className="max-w-[1500px] mx-auto px-[1rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Side */}
          <div>
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FE7310]">
              Contact NextSkill
            </span>

            <h1 className="mt-5 text-2xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Lets Build Your
              <span className="text-[#FE7310]"> Learning Journey.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our courses or need assistance? Our team is
              always ready to help you. Reach out to us anytime and well get
              back to you as soon as possible.
            </p>

          
          </div>

          {/* Right Side */}
          <div className="relative">
            <Image
              src={contactImage}
              alt="Contact NextSkill"
              priority
              className="w-full rounded-3xl object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
              <h4 className="text-3xl font-bold text-[#FE7310]">
                24/7
              </h4>

              <p className="text-gray-600">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;