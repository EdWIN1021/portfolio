"use client";

import Container from "../ui/Container";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [fields, setFields] = useState({ name: "", email: "", info: "" });

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("api/send_email", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        toast.success("i have gotten your email");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFields({ ...fields, name: "", email: "", info: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <Container bgColor={"#161513"}>
      <div className="md:flex md:justify-between mt-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="gradient_text font-bold text-[32px]" id="contact">
            Get in touch
          </h2>
          <p className="mt-10">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>

          <div className="flex gap-2 mt-10 mb-5 justify-center md:justify-start">
            <img
              src="/email.png"
              alt="email..."
              className="w-[25px] h-[25px]"
            />
            <p>edwinshi.work@gmail.com</p>
          </div>

          <div className="flex gap-2 justify-center md:justify-start">
            <img
              src="/phone.png"
              alt="phone..."
              className="w-[25px] h-[25px]"
            />
            <p>778-898-3668</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 md:mt-0">
          <div className="mb-5">
            <label className="block mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full bg-[#1c1c22] p-2 outline-none"
              type="text"
              id="name"
              name="name"
              value={fields.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full bg-[#1c1c22] p-2 outline-none"
              type="email"
              id="email"
              name="email"
              value={fields.email}
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2" htmlFor="info">
              Tell me a bit more what you are looking for?
            </label>
            <textarea
              className="w-full bg-[#1c1c22] p-2 outline-none"
              id="info"
              name="info"
              value={fields.info}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="px-4 py-2 rounded-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #b16cea, #ff5e69, #ff8a56, #ffa84b)",
            }}
          >
            SUBMIT NOW
          </button>
        </form>
      </div>

      <div className="h-[2px] w-full bg-white mt-[80px]"></div>
      <p className="mt-2">© Design by Edwin</p>
    </Container>
  );
};

export default Contact;
