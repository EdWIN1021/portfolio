const Contact = () => {
  return (
    <section className="bg-[#161513] px-40 py-20">
      <div className="flex mt-10 justify-center gap-2">
        <div className="w-1/2">
          <h2 className="gradient_text font-bold text-[48px]" id="contact">
            Get in touch
          </h2>
          <p className="mt-10">
            Have a project in mind? Looking to partner or work together? Reach
            out through the form and I'll get back to you in the next 48 hours.
          </p>

          <div className="flex gap-2 mt-10 mb-5">
            <img
              src="/email.png"
              alt="email..."
              className="w-[25px] h-[25px]"
            />
            <p>edwinshi.work@gmail.com</p>
          </div>

          <div className="flex gap-2">
            <img
              src="/phone.png"
              alt="phone..."
              className="w-[25px] h-[25px]"
            />
            <p>778-898-3668</p>
          </div>
        </div>
        <form>
          <div className="mb-5">
            <label className="block mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full bg-[#1c1c22] p-2 outline-none"
              type="text"
              id="name"
              placeholder="Enter your name"
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
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2" htmlFor="info">
              Tell me a bit more what you are looking for?
            </label>
            <textarea
              className="w-full bg-[#1c1c22] p-2 outline-none"
              id="info"
            />
          </div>

          <button
            className="px-4 py-2 rounded-full"
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
    </section>
  );
};

export default Contact;
