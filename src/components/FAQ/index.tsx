import React from "react";
import CollapsePanel from "./CollapsePanel";

export function FAQ() {
  return (
    <div
      style={{
        boxSizing: "border-box",
        textAlign: "center",  
        width: "100%",
        border: "0px solid rgb(228, 228, 231)",
      }}
      data-id="element-0"
    >
      <div
        style={{
          boxSizing: "border-box",
          textAlign: "center",
          border: "0px solid rgb(228, 228, 231)",
        }}
        data-id="element-1"
      >
        <h1
          style={{
            boxSizing: "border-box",
            fontSize: "80px",
            fontWeight: "700",
            lineHeight: "28px",
            letterSpacing: "-0.5px",
          
            border: "0px solid rgb(228, 228, 231)",
            margin: "50px 0px ",
          }}
          data-id="element-2"
        >
          FAQs
        </h1>
        <h2
          style={{
            boxSizing: "border-box",
            fontSize: "60px",
            fontWeight: "700",
            lineHeight: "60px",
            letterSpacing: "-1.5px",
            border: "0px solid rgb(228, 228, 231)",
            margin: "0px",
          }}
          data-id="element-3"
        >
          Frequently Asked Questions
        </h2>
        <p
          style={{
            boxSizing: "border-box",
            fontSize: "20px",
            lineHeight: "32px",
            border: "0px solid rgb(228, 228, 231)",
            margin: "24px 0px 0px 0px",
          }}
          data-id="element-4"
        >
          Need help with something? Here are some of the most common questions
          we get.
        </p>
      </div>

      <div
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "32px",
          paddingRight: "32px",
          width: "600px",
          border: "0px solid rgb(228, 228, 231)",
          margin: "48px auto",
        }}
        data-id="element-5"
      >
        <section
          id="faq-General"
          style={{
            boxSizing: "border-box",
            border: "0px solid rgb(228, 228, 231)",
          }}
          data-id="element-6"
        >
          <div
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "0px solid rgb(228, 228, 231)",
            }}
            data-id="element-8"
          >
            <div
              style={{
                boxSizing: "border-box",
                width: "536px",
                borderTop: "0px solid rgb(228, 228, 231)",
                borderLeft: "0px solid rgb(228, 228, 231)",
                borderRight: "0px solid rgb(228, 228, 231)",
                borderBottom: "1px solid rgb(228, 228, 231)",
              }}
              data-id="element-9"
            >
              <CollapsePanel
                title={'123'}
                children={'123'}
              />
              <CollapsePanel
                title={'123'}
                children={'123'}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
