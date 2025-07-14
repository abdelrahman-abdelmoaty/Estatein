"use client";

import { useState } from "react";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import SectionHeader from "@/components/ui/SectionHeader";
import Features from "@/containers/home/hero/Features";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon.",
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div>
        {" "}
        <div className="mt-[-50px] bg-[linear-gradient(96deg,#262626_-26.82%,rgba(38,38,38,0.00)_40.46%)] py-[50px] xl:mt-[-70px] xl:py-[100px] dt:mt-[-100px] dt:py-[150px]">
          <div className="container">
            <Heading>Find Your Dream Property</Heading>
            <Paragraph className="xl:max-w-[80%]">
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your
              journey{" "}
            </Paragraph>
          </div>
        </div>
        <Features />
      </div>
      <div className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <SectionHeader
          heading="Let's Connect"
          paragraph="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
        />
        <div className="rounded-xl border border-grey-15 bg-grey-10 p-[20px] xl:p-[30px] dt:p-[40px]">
          {submitMessage && (
            <div className="mb-[20px] rounded-[8px] border border-purple-60 bg-purple-95 px-[16px] py-[12px] text-[14px] text-purple-60 xl:text-[16px] dt:text-[18px]">
              {submitMessage}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[20px] xl:gap-[25px] dt:gap-[30px]"
          >
            <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:gap-[25px] dt:gap-[30px]">
              <div className="flex flex-col gap-[10px] dt:gap-[14px]">
                <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter First Name"
                  className="rounded-[8px] border border-grey-15 bg-grey-08 px-[16px] py-[12px] text-[14px] placeholder:text-grey-60 focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px] dt:gap-[14px]">
                <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter Last Name"
                  className="rounded-[8px] border border-grey-15 bg-grey-08 px-[16px] py-[12px] text-[14px] placeholder:text-grey-60 focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 xl:gap-[25px] dt:gap-[30px]">
              <div className="flex flex-col gap-[10px] dt:gap-[14px]">
                <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="rounded-[8px] border border-grey-15 bg-grey-08 px-[16px] py-[12px] text-[14px] placeholder:text-grey-60 focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                  required
                />
              </div>
              <div className="flex flex-col gap-[10px] dt:gap-[14px]">
                <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="rounded-[8px] border border-grey-15 bg-grey-08 px-[16px] py-[12px] text-[14px] placeholder:text-grey-60 focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-[10px] dt:gap-[14px]">
              <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="appearance-none rounded-[8px] border border-grey-15 bg-grey-08 bg-none px-[16px] py-[12px] text-[14px] focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                required
              >
                <option value="">Select Inquiry Type</option>
                <option value="buying">Buying Property</option>
                <option value="selling">Selling Property</option>
                <option value="investment">Investment Opportunities</option>
                <option value="consultation">Real Estate Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-[10px] dt:gap-[14px]">
              <label className="text-[14px] font-medium xl:text-[16px] dt:text-[18px]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your Message here.."
                rows={5}
                className="rounded-[8px] border border-grey-15 bg-grey-08 px-[16px] py-[12px] text-[14px] placeholder:text-grey-60 focus:border-purple-60 focus:outline-none xl:px-[20px] xl:py-[14px] xl:text-[16px] dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-[8px] bg-purple-60 px-[20px] py-[14px] text-center text-[14px] font-medium transition hover:opacity-80 disabled:opacity-50 sm:w-fit dt:rounded-[10px] dt:px-[24px] dt:py-[18px] dt:text-[18px]"
            >
              {isSubmitting ? "Sending..." : "Send Your Message"}
            </button>
          </form>
        </div>
      </div>
      
      <section id="our-offices" className="container flex flex-col gap-[40px] xl:gap-[60px] dt:gap-[80px]">
        <SectionHeader
          heading="Our Offices"
          paragraph="Visit us at any of our convenient locations or contact us directly. Our team is ready to assist you with all your real estate needs."
        />
        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 dt:gap-[40px]">
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Downtown Office</Heading>
            <Paragraph>
              123 Main Street, Suite 400<br />
              Downtown District<br />
              Phone: (555) 123-4567<br />
              Email: downtown@estatein.com
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Westside Branch</Heading>
            <Paragraph>
              456 Oak Avenue, Floor 2<br />
              Westside Plaza<br />
              Phone: (555) 987-6543<br />
              Email: westside@estatein.com
            </Paragraph>
          </div>
          <div className="flex flex-col gap-[20px] rounded-xl border border-grey-15 p-[30px] xl:p-[40px] dt:p-[50px]">
            <Heading variant="medium">Suburban Center</Heading>
            <Paragraph>
              789 Elm Road, Building C<br />
              Suburban Business Park<br />
              Phone: (555) 456-7890<br />
              Email: suburban@estatein.com
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
