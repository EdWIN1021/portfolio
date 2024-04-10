import { useState } from "react";

const ContactForm = () => {
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
        // toast.success("i have gotten your email");
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
    <form onSubmit={handleSubmit} className="mt-8 md:mt-0">
      <div className="mb-5">
        <label className="block mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          className="w-full bg-[#161513] p-2 outline-none"
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
          className="w-full bg-[#161513] p-2 outline-none"
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
          className="w-full bg-[#161513] p-2 outline-none"
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
  );
};

export default ContactForm;
