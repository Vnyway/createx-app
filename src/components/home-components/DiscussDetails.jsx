import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputError from "./InputError";

const DiscussDetails = () => {
  const [agreeWithTerms, setAgreeWithTerms] = useState(false);
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      setAgreeWithTerms(false);
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <section
      style={{
        backgroundImage: `url("./images/discuss-details/background.svg")`,
        backgroundSize: "cover",
      }}
      className="">
      <div className="container mx-auto flex justify-end">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-[40px] md:my-[60px] py-[40px] md:py-[60px] px-[20px] md:px-[40px] flex flex-col bg-white w-full md:w-[470px] rounded-[4px] shadow-md">
          <h3 className="font-[700] text-[20px] md:text-[28px] text-heading text-center mb-[15px] md:mb-[30px]">
            A quick way to discuss details
          </h3>
          <div className="flex flex-col gap-[10px] md:gap-[15px]">
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
            <div className="flex flex-col gap-[5px] md:gap-[10px]">
              <div className="flex justify-between">
                <label htmlFor="message">Message*</label>
                <InputError message={errors.message?.message} />
              </div>
              <input
                className="h-[44px] bg-[#F4F5F6] outline-primary border-[1px] border-[#D7DADD] px-[15px] rounded-[4px]"
                placeholder="Your message"
                type="text"
                id="message"
                {...register("message", {
                  required: { value: true, message: "Required" },
                  minLength: { value: 9, message: "Too short" },
                })}
              />
            </div>
            <div className="flex gap-[5px] items-start">
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
          </div>
          <div className="flex justify-center mt-[30px]">
            <motion.button
              disabled={!agreeWithTerms}
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { backgroundColor: "#FF5A30", color: "#FFFFFF" },
                hover: {
                  backgroundColor: agreeWithTerms ? "#FFFFFF" : "#FF5A30",
                  color: agreeWithTerms ? "#FF5A30" : "#FFFFFF",
                },
              }}
              className={`bg-primary border-[1px] border-primary px-[40px] py-[10px] rounded-[4px] font-[700] text-[14px] text-[#FFFFFF] uppercase ${
                agreeWithTerms ? "" : "cursor-not-allowed"
              }`}>
              Send request
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscussDetails;
