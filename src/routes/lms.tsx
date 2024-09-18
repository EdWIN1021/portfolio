import SampleBreadcrumb from "@/components/SampleBreadcrumb";
import TableOfContent from "@/components/TableOfContent";

const titles = [
  "Home Page",
  "Signup",
  "Login",
  "Book Detail",
  "Book List",
  "Book Shelf",
  "OTP",
  "Reset Password",
  "Settings",
  "Payment",
];

const LMS = () => {
  return (
    <>
      <TableOfContent titles={titles} />
      <div className="max-w-[800px] mx-auto">
        <SampleBreadcrumb />

        <div className="flex flex-col items-center gap-20 mt-10">
          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Home Page"
            >
              Home Page
            </h2>

            <img src="../lms/home.png" alt="home" width={800} height={450} />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Signup"
            >
              Signup
            </h2>
            <p className="my-5">
              Users can sign up using email or log in with their Gmail or GitHub
              account.
            </p>
            <img
              src="../lms/signup.png"
              alt="signup"
              width={800} // The original image width
              height={450} // Adjust height to maintain the aspect ratio
              sizes="(max-width: 256px) 256px, 
                 (max-width: 800px) 800px, 
                 (max-width: 1270px) 1270px, 
                 (max-width: 1600px) 1600px, 
                 100vw"
            />
          </div>

          <div>
            <h2 className="font-semibold text-2xl scroll-mt-[100px]" id="Login">
              Login
            </h2>
            <p className="my-5">
              Users can use email or login with their Gmail or GitHub account.
            </p>
            <img
              src="../lms/login.png"
              className="h-auto w-auto"
              alt="login"
              width={800}
              height={450}
            />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Book Detail"
            >
              Book Detail
            </h2>
            <p className="my-5">
              Display basic book information, check stock availability, and
              borrow books.
            </p>

            <img
              src="/lms/book-detail.png"
              alt="book-detail"
              width={800}
              height={450}
            />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Book List"
            >
              Book List
            </h2>
            <p className="my-5">Display list of books.</p>

            <img
              src="../lms/book-list.png"
              alt="book-list"
              width={800}
              height={450}
            />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Book Shelf"
            >
              Book Shelf
            </h2>
            <p className="my-5">
              Display a list of books that the user has borrowed.
            </p>

            <img src="../lms/shelf.png" alt="shelf" width={800} height={450} />
          </div>

          <div>
            <h2 className="font-semibold text-2xl scroll-mt-[100px]" id="OTP">
              OTP
            </h2>
            <p className="my-5">
              The user needs to input the OTP that the system sent to their
              email&quot;.
            </p>
            <img src="../lms/otp.png" alt="otp" width={800} height={450} />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Reset Password"
            >
              Reset Password
            </h2>
            <p className="my-5">
              The user inputs a new password and confirms the new password to
              reset their password.
            </p>
            <img
              src="/lms/reset-password.png"
              alt="reset-password"
              width={800}
              height={450}
            />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Settings"
            >
              Settings
            </h2>
            <p className="my-5">Display the user&apos;s settings.</p>

            <img
              src="../lms/settings.png"
              alt="settings"
              width={800}
              height={450}
            />
          </div>

          <div>
            <h2
              className="font-semibold text-2xl scroll-mt-[100px]"
              id="Payment"
            >
              Payment
            </h2>
            <p className="my-5">
              The user makes a payment to cover the late fee.
            </p>

            <img
              src="../lms/payment.png"
              alt="payment"
              width={800}
              height={450}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LMS;
