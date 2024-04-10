import Container from "../Container";
// import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container bgColor="#1c1c22">
      <div className="md:flex md:justify-between mt-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="gradient_text font-bold text-[32px]" id="contact">
            Get in touch
          </h2>

          <div className="text-[#f0f2f5]">
            <p className="mt-10">
              Have a project in mind? Looking to partner or work together? Reach
              out through the form and I'll get back to you in the next 48
              hours.
            </p>

            <div className="flex gap-2 mt-10 mb-5 justify-center md:justify-start">
              <img src="email.png" alt="email..." width={25} height={25} />
              <p>edwinshi.work@gmail.com</p>
            </div>

            <div className="flex gap-2 justify-center md:justify-start">
              <img src="phone.png" alt="phone..." width={25} height={25} />
              <p>778-898-3668</p>
            </div>
          </div>
        </div>
        {/* <ContactForm /> */}
      </div>

      <div className="h-[2px] w-full bg-white mt-[80px]"></div>
      <p className="mt-2 text-[#f0f2f5]">© Design by Edwin</p>
    </Container>
  );
};

export default Contact;
