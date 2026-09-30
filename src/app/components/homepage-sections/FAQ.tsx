"use client";

import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
} from "react-icons/fi";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is NextSkill?",
    answer:
      "NextSkill is an online learning platform where you can learn industry-relevant skills from expert instructors and build your career.",
  },
  {
    id: 2,
    question: "Do I get a certificate?",
    answer:
      "Yes. After successfully completing an eligible course, you can receive a course completion certificate.",
  },
  {
    id: 3,
    question: "Can I access courses anytime?",
    answer:
      "Yes. You can access your enrolled courses anytime and continue learning at your own pace.",
  },
  {
    id: 4,
    question: "Are the courses beginner friendly?",
    answer:
      "Yes. Many courses are designed with beginners in mind and provide step-by-step learning materials.",
  },
  {
    id: 5,
    question: "How long do I have access?",
    answer:
      "Course access depends on the course terms. Eligible courses provide long-term access to the learning materials.",
  },
  {
    id: 6,
    question: "Can I get a refund?",
    answer:
      "Refund eligibility depends on the course refund policy and the applicable purchase terms.",
  },
  {
    id: 7,
    question: "Do you offer live classes?",
    answer:
      "Some courses may include live classes or instructor-led sessions depending on the course.",
  },
];

export const FAQ = (): React.ReactElement => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  const leftFAQs = faqData.slice(0, 3);
  const rightFAQs = faqData.slice(3);

  const renderFAQ = (faq: FAQItem) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className="
          overflow-hidden
          rounded-xl
          border
          border-slate-100
          bg-white
          transition-all
          duration-300
          hover:border-blue-100
          hover:shadow-sm
        "
      >
        {/* Question */}
        <button
          type="button"
          onClick={() => toggleFAQ(faq.id)}
          className="
            flex
            w-full
            items-center
            gap-4
            px-5
            py-4
            text-left
            sm:px-6
            sm:py-5
          "
          aria-expanded={isOpen}
        >
          {/* Number */}
          <span className="w-9 shrink-0 text-base font-bold text-blue-600 sm:text-lg">
            {String(faq.id).padStart(2, "0")}.
          </span>

          {/* Question */}
          <span className="flex-1 text-sm font-bold text-slate-900 sm:text-base">
            {faq.question}
          </span>

          {/* Icon */}
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-blue-600">
            {isOpen ? (
              <FiChevronUp size={19} />
            ) : (
              <FiChevronDown size={19} />
            )}
          </span>
        </button>

        {/* Answer */}
        <div
          className={`
            grid
            transition-all
            duration-300
            ${
              isOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="overflow-hidden">
            <div
              className="
                border-t
                border-slate-100
                px-5
                pb-5
                pt-4
                pl-[4.5rem]
                sm:px-6
                sm:pb-6
                sm:pt-4
                sm:pl-[5.75rem]
              "
            >
              <p className="text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1500px] px-4 py-12 sm:py-16">
        {/* ================= HEADER ================= */}

        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-9 w-1.5 rounded-full bg-orange-500" />

            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Question Badge */}
          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-slate-100
              bg-white
              px-4
              py-2
              text-sm
              font-semibold
              text-blue-600
              shadow-sm
              sm:flex
            "
          >
            <FiHelpCircle size={17} />
            <span>Have another question?</span>
          </div>
        </div>

        {/* ================= FAQ GRID ================= */}

        <div className="grid gap-3 lg:grid-cols-2 lg:gap-5">
          {/* Left */}
          <div className="space-y-3">
            {leftFAQs.map(renderFAQ)}
          </div>

          {/* Right */}
          <div className="space-y-3">
            {rightFAQs.map(renderFAQ)}
          </div>
        </div>

        {/* Mobile Question Badge */}

        <div className="mt-5 flex justify-center sm:hidden">
          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-100
              bg-white
              px-4
              py-2
              text-xs
              font-semibold
              text-blue-600
              shadow-sm
            "
          >
            <FiHelpCircle size={16} />
            Have another question?
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;