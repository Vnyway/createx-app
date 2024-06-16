import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputError from "../general-components/InputError";

const CoreValues = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
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
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <section className="container mx-auto flex flex-col mt-[40px] md:mt-[80px]">
      <div className="text-center mb-[20px]">
        <h2 className="font-[700] text-[26px] md:text-[46px] text-heading">
          Our core values
        </h2>
        <p className="font-[400] text-[12px] md:text-[18px] text-paragraph my-[10px] md:my-[20px]">
          Our mission is to set the highest standards for construction sphere.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center gap-[30px] md:gap-[30px] lg:gap-[80px]">
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] w-full md:w-[285px]">
          <img
            src="./images/ic-like.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Quality</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
            velit nostrud aliquip sunt.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] md:border-r-[1px] md:border-l-[1px] md:px-[30px] lg:px-[80px] w-[full] md:w-[345px] lg:w-[445px]">
          <img
            src="./images/ic-hand.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Safety</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Anim reprehenderit sint voluptate exercitation adipisicing laborum
            adipisicing. Minim empor est ea.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[5px] md:gap-[10px] w-full md:w-[285px]">
          <img
            src="./images/ic-slippers.svg"
            className="size-[40px] md:size-[48px]"
            alt=""
          />
          <h3 className="font-[700] text-[20px] text-heading">Comfort</h3>
          <p className="font-[400] text-[12px] md:text-[16px] text-center text-paragraph">
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
            voluptate ullamco proident ea ad.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[30px] my-[40px] md:my-[80px] bg-white shadow-md p-[20px] md:p-[40px] rounded-[4px]">
        <h3 className="text-center font-[700] text-[18px] md:text-[28px] text-heading mb-0 md:mb-[20px]">
          Want to know more? Ask us a question:
        </h3>
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-[20px]">
          <label
            htmlFor="name"
            className="w-full md:w-[24%] flex flex-col gap-[5px]">
            <div className="flex justify-between">
              <span className="font-[400] text-[14px] text-customGray">
                Name
              </span>
              <InputError message={errors.name?.message} />
            </div>
            <input
              className="outline-primary border-[#D7DADD] border-[1px] bg-[#F4F5F6] p-[15px] rounded-[4px] h-[44px]"
              type="text"
              placeholder="Your name"
              id="name"
              {...register("name", {
                required: { value: true, message: "Required" },
              })}
            />
          </label>
          <label
            htmlFor="phone"
            className="w-full md:w-[24%] flex flex-col gap-[5px]">
            <div className="flex justify-between">
              <span className="font-[400] text-[14px] text-customGray">
                Phone
              </span>
              <InputError message={errors.phone?.message} />
            </div>
            <input
              className="outline-primary border-[#D7DADD] border-[1px] bg-[#F4F5F6] p-[15px] rounded-[4px] h-[44px]"
              type="tel"
              placeholder="Your phone"
              id="phone"
              {...register("phone", {
                required: { value: true, message: "Required" },
                pattern: {
                  value: /^\+?\d{7,15}$/,
                  message: "Invalid number",
                },
              })}
            />
          </label>
          <label
            htmlFor="message"
            className="w-full md:w-[34%] flex flex-col gap-[5px]">
            <div className="flex justify-between">
              <span className="font-[400] text-[14px] text-customGray">
                Message
              </span>
              <InputError message={errors.message?.message} />
            </div>
            <input
              className="outline-primary border-[#D7DADD] border-[1px] bg-[#F4F5F6] p-[15px] rounded-[4px] h-[44px]"
              type="text"
              placeholder="Your message"
              id="message"
              {...register("message", {
                required: { value: true, message: "Required" },
                minLength: { value: 9, message: "Too short" },
              })}
            />
          </label>
          <motion.button
            className="bg-primary w-full md:w-[14%] py-[20px] h-[44px] flex items-center justify-center mt-[26px] rounded-[4px] font-[700] text-[14px] text-[#FFFFFF] border-primary border-[1px]"
            whileHover={{
              backgroundColor: "#FFFFFF",
              color: "#FF5A30",
              transition: { duration: 0.3 },
            }}
            type="submit">
            SEND
          </motion.button>
        </div>
      </form>
    </section>
  );
};

export default CoreValues;
