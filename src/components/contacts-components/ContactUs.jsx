import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputError from "../general-components/InputError";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [contactMethod, setContactMethod] = useState("phone");
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      category: "",
      location: "",
      contactMethod: "",
      message: "",
    },
  });
  const { register, formState, handleSubmit, reset, setValue } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  useEffect(() => {
    setValue("contactMethod", contactMethod);
  }, [contactMethod, setValue]);
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
  return (
    <section>
      <div className="container mx-auto py-[40px] md:py-[80px] flex flex-col gap-[20px]">
        <h3 className="font-[700] text-[46px] text-heading text-center">
          Contact us
        </h3>
        <p className="font-[400] text-[18px] text-paragraph text-center">
          Please complete the form. Detailed information will help us to make a
          tuned offer.
        </p>
        <div className="flex flex-col gap-[40px] min-[880px]:flex-row min-[880px]:gap-[5%]">
          <img
            src="/images/contacts/contact-us.svg"
            alt="contact-us"
            className="w-full min-[880px]:w-[47%]"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full min-[880px]:w-[48%] flex flex-col">
            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[2%]">
                <div className="flex flex-col w-full md:w-[49%] gap-[20px]">
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <div className="flex justify-between">
                      <label htmlFor="name">Name*</label>
                      <InputError message={errors.name?.message} />
                    </div>
                    <input
                      className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                      placeholder="Your name"
                      type="text"
                      id="name"
                      {...register("name", {
                        required: { value: true, message: "Required" },
                      })}
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <div className="flex justify-between">
                      <label htmlFor="phone">Phone*</label>
                      <InputError message={errors.phone?.message} />
                    </div>
                    <input
                      className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                      placeholder="Your phone number"
                      type="text"
                      id="phone"
                      {...register("phone", {
                        required: { value: true, message: "Required" },
                        pattern: {
                          value: /^\+?\d{7,15}$/,
                          message: "Invalid number",
                        },
                      })}
                    />
                  </div>
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <div className="flex justify-between">
                      <label htmlFor="email">Email*</label>
                      <InputError message={errors.email?.message} />
                    </div>
                    <input
                      className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                      placeholder="Your working email"
                      type="email"
                      id="email"
                      {...register("email", {
                        required: { value: true, message: "Required" },
                        pattern: {
                          value:
                            /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-[49%] gap-[20px]">
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <div className="flex justify-between">
                      <label htmlFor="category">Category*</label>
                      <InputError message={errors.category?.message} />
                    </div>
                    <select
                      name="category"
                      id="category"
                      {...register("category", {
                        required: { value: true, message: "Required" },
                      })}
                      className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[10px] pb-[2px] rounded-[4px] text-paragraph">
                      <option value="construction">Construction</option>
                      <option value="project-development">
                        Project Development
                      </option>
                      <option value="interior-design">Interior Design</option>
                      <option value="repairs">Repairs</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <div className="flex justify-between">
                      <label htmlFor="location">Location*</label>
                      <InputError message={errors.location?.message} />
                    </div>
                    <select
                      name="location"
                      id="location"
                      {...register("location", {
                        required: { value: true, message: "Required" },
                      })}
                      className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[10px] pb-[2px] rounded-[4px] text-paragraph">
                      <option value="new-york">New York</option>
                      <option value="new-jersey">New Jersey</option>
                      <option value="san-francisco">San Francisco</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] md:gap-[10px]">
                    <span>Contact method</span>
                    <div className="flex h-[44px] w-full items-center justify-between">
                      <div className="flex gap-[8px] items-center">
                        <button
                          type="button"
                          id="contactMethod1"
                          style={{ transition: "all ease-out .3s" }}
                          onClick={() => setContactMethod("phone")}
                          className={`size-[12px] rounded-full ring-[1px] ring-offset-2 ${
                            contactMethod === "phone"
                              ? "ring-[#FF5A30] bg-[#FF5A30]"
                              : "ring-[#D7DADD] bg-[#FFFFFF]"
                          }`}></button>
                        <span
                          onClick={() => {
                            setContactMethod("phone");
                          }}
                          className="cursor-pointer">
                          Phone
                        </span>
                      </div>
                      <div className="flex gap-[8px] items-center">
                        <button
                          type="button"
                          id="contactMethod1"
                          style={{ transition: "all ease-out .3s" }}
                          onClick={() => setContactMethod("email")}
                          className={`size-[12px] rounded-full ring-[1px] ring-offset-2 ${
                            contactMethod === "email"
                              ? "ring-[#FF5A30] bg-[#FF5A30]"
                              : "ring-[#D7DADD] bg-[#FFFFFF]"
                          }`}></button>
                        <span
                          onClick={() => {
                            setContactMethod("email");
                          }}
                          className="cursor-pointer">
                          Email
                        </span>
                      </div>
                      <div className="flex gap-[8px] items-center">
                        <button
                          type="button"
                          id="contactMethod1"
                          style={{ transition: "all ease-out .3s" }}
                          onClick={() => setContactMethod("viber")}
                          className={`size-[12px] rounded-full ring-[1px] ring-offset-2 ${
                            contactMethod === "viber"
                              ? "ring-[#FF5A30] bg-[#FF5A30]"
                              : "ring-[#D7DADD] bg-[#FFFFFF]"
                          }`}></button>
                        <span
                          onClick={() => {
                            setContactMethod("viber");
                          }}
                          className="cursor-pointer">
                          Viber
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex justify-between">
                  <label htmlFor="message">Your comment*</label>
                  <InputError message={errors.comment?.message} />
                </div>
                <textarea
                  type="text"
                  placeholder="Type comment here"
                  className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] pt-[10px] rounded-[4px] min-h-[60px] md:min-h-[100px] resize-none"
                  id="message"
                  {...register("message", {
                    required: { value: true, message: "Required" },
                    minLength: { value: 9, message: "Too short" },
                  })}></textarea>
              </div>
              <div className="flex flex-col md:flex-row gap-[20px] md:gap-[10%] lg:gap-[2%]">
                <div className="w-full md:w-[51%] lg:w-[59%] flex gap-[5px] items-start">
                  <div
                    onClick={() => setAgreeWithTerms((pv) => !pv)}
                    style={{ transition: "all ease-out 0.3s" }}
                    className={`cursor-pointer border-[1px] border-primary rounded-[4px] shrink-0 size-[15px] mt-[5px] flex justify-center items-center ${
                      agreeWithTerms ? "bg-primary" : "bg-white"
                    }`}>
                    <svg
                      className={agreeWithTerms ? "block" : "hidden"}
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.82771 0.195262C10.0574 0.455612 10.0574 0.877722 9.82771 1.13807L3.94536 7.80474C3.71564 8.06509 3.34319 8.06509 3.11347 7.80474L0.17229 4.4714C-0.05743 4.21105 -0.05743 3.78894 0.17229 3.5286C0.40201 3.26825 0.77446 3.26825 1.00418 3.5286L3.52941 6.39052L8.99582 0.195262C9.22554 -0.0650874 9.59799 -0.0650874 9.82771 0.195262Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <label
                    htmlFor="agreeWithTerms"
                    className="cursor-pointer"
                    onClick={() => setAgreeWithTerms((pv) => !pv)}>
                    I agree to receive communications from Createx Construction
                    Bureau.
                  </label>
                </div>
                <motion.button
                  disabled={!agreeWithTerms}
                  initial={{ backgroundColor: "#FF5A30", color: "#FFFFFF" }}
                  whileHover={{
                    color: agreeWithTerms ? "#FF5A30" : "#FFFFFF",
                    backgroundColor: agreeWithTerms ? "#FFFFFF" : "#FF5A30",
                    transition: { duration: 0.3 },
                  }}
                  className={`uppercase font-[700] text-[16px] w-full md:w-[39%] h-[52px] rounded-[4px] border-[1px] border-primary ${
                    !agreeWithTerms ? "cursor-not-allowed" : ""
                  }`}>
                  send request
                </motion.button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
