const Contact = () => {
  return (
    <section className="bg-[#161513] px-40 py-20 h-[594px]">
      <div className="flex mt-10">
        <div className="w-1/2">
          <h2 className="gradient_text font-bold text-[48px]">Get in touch</h2>
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
          <div>
            <label className="block" htmlFor="name">
              Your Name
            </label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div>
            <label className="block" htmlFor="email">
              Your Email
            </label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block" htmlFor="info">
              Tell me a bit more what you are looking for?
            </label>
            <textarea id="info" />
          </div>

          <button>SUBMIT NOW</button>
        </form>
      </div>

      <div className="h-[2px] w-full bg-white mt-[100px]"></div>

      <p className="mt-8">© Design by Edwin</p>
    </section>
  );
};

export default Contact;
