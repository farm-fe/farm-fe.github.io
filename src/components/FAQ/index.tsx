import React, { useState } from "react";
import CollapsePanel from "./CollapsePanel";
import BlurIn from "../../components/MagicUi/blur-in";
import SeparateAway from "../../components/MagicUi/separate-away";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      boxSizing: "border-box",
      width: "536px",
      maxWidth: "600px",
      borderBottom: "1px solid rgb(228, 228, 231)"
    }}>
      <h3 style={{
        boxSizing: "border-box",
        fontSize: "16px",
        fontWeight: "400",
        display: "flex",
        margin: "0px"
      }}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            boxSizing: "border-box",
            fontFamily: '__GeistSans_ac79ff, __GeistSans_Fallback_ac79ff, sans-serif',
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "20px",
            backgroundColor: "transparent",
            cursor: "pointer",
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.15s",
            padding: "16px 0px",
            margin: "0px",
            border: "none"
          }}
        >
          {question}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s"
            }}
          >
            <path
              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </h3>
      <div
        style={{
          display: isOpen ? "block" : "none",
          padding: "0px 0px 16px 0px",
          fontSize: "14px",
          lineHeight: "20px"
        }}
      >
        {answer}
      </div>
    </div>
  );
};

export function FAQ() {
  const faqData = [
    {
      category: "General",
      items: [
        {
          question: "What is Magic UI?",
          answer: "Magic UI is a modern, customizable UI component library for React applications."
        },
        {
          question: "How can I get started with Magic UI?",
          answer: "You can start by installing Magic UI via npm or yarn, and then importing the components you need in your React project."
        }
      ]
    },
    {
      category: "Support",
      items: [
        {
          question: "Does Magic UI offer technical support?",
          answer: "Yes, Magic UI offers technical support through our documentation, community forums, and dedicated support channels for premium users."
        }
      ]
    },
    {
      category: "Customization",
      items: [
        {
          question: "Can I customize Magic UI components?",
          answer: "Absolutely! Magic UI components are highly customizable. You can modify their appearance using CSS, props, or theme configurations."
        }
      ]
    },
    {
      category: "Integration",
      items: [
        {
          question: "How do I integrate Magic UI with my existing project?",
          answer: "You can integrate Magic UI into your existing project by installing it as a dependency and then importing the desired components into your React files."
        }
      ]
    }
  ];

  return (
    <div style={{
      boxSizing: "border-box",
      marginLeft: "0px",
      marginRight: "0px",
      paddingLeft: "32px",
      paddingRight: "32px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <div style={{
        boxSizing: "border-box",
        textAlign: "center",
      }}>
        <BlurIn
          word="Frequently Asked Questions"
          className="pointer-events-none bg-gradient-to-br md:text-6xl font-semibold text-transparent dark:from-white from-black from-30% dark:to-white/40 to-black/40  bg-clip-text "
        />
        <div className="mb-10 mt-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
          <SeparateAway
            upper_text="Need help with something? Here are some of the most common questions we get."
            duration={2}
            hidden_opacity={0}
            visible_opacity={1}
            className="pointer-events-none font-display text-center text-xs font-bold tracking-[-0.02em]  dark:text-gray-400 md:text-2xl"
          />
        </div>
      </div>
      <div style={{
        boxSizing: "border-box",
        paddingLeft: "32px",
        paddingRight: "32px",
        width: "600px",
        maxWidth: "600px",
        margin: "48px 290px 48px 290px"
      }}>
        {faqData.map((category, index) => (
          <section key={index} id={`faq-${category.category}`} style={{
            boxSizing: "border-box",
            marginTop: index > 0 ? "48px" : "0px",
          }}>
            <h2 style={{
              boxSizing: "border-box",
              fontSize: "16px",
              fontWeight: "600",
              textAlign: "left",
              lineHeight: "24px",
              letterSpacing: "-0.4px",
              margin: "0px 0px 16px 0px"
            }}>
              {category.category}
            </h2>
            <div style={{
              boxSizing: "border-box",
              display: "flex",
              width: "536px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {category.items.map((item, itemIndex) => (
                <FAQItem key={itemIndex} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <h4 style={{
        boxSizing: "border-box",
        fontSize: "14px",
        fontWeight: "500",
        textAlign: "center",
        lineHeight: "20px",
        letterSpacing: "-0.35px",
        margin: "0px 0px 48px 0px"
      }}>
        Still have questions? Concat us at{" "}
        <a href="https://github.com/orgs/farm-fe/discussions" style={{
          boxSizing: "border-box",
          textDecorationLine: "underline",
          textDecorationThickness: "auto",
          textDecorationStyle: "solid",
          textDecorationColor: "rgba(9, 9, 11, 0.8)",
        }}>
          GitHub Discussions
        </a>
      </h4>
    </div>
  );
}

export default FAQ;
