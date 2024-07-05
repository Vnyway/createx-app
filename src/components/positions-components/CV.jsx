import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputError from "../general-components/InputError";

const Newsletter = ({ setResume }) => {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      letter: "",
    },
  });
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    setResume(false);
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <>
      <motion.form
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onSubmit={handleSubmit(onSubmit)}
        className="fixed z-20 bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] bg-white border-[1px] border-[#E5E8ED] rounded-[4px] ">
        <div className="relative flex flex-col gap-[30px] p-[40px]">
          <button
            type="button"
            onClick={() => setResume(false)}
            className="w-[20px] h-[20px] absolute top-[15px] right-[15px]">
            <div className="absolute w-[23px] h-[1px] bg-customGray rotate-45"></div>
            <div className="absolute w-[23px] h-[1px] bg-customGray -rotate-45"></div>
          </button>
          <h3 className="font-[700] text-[28px] text-heading">
            Subscribe to our newsletter
          </h3>
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="font-[400] text-[14px] text-customGray">
                  Name*
                </label>
                <InputError message={errors.name?.message} />
              </div>
              <input
                type="text"
                placeholder="Your name"
                className="rounded-[4px] border-[#D7DADD] border-[1px] bg-[#F4F5F6] text-[#9A9CA5] font-[400] text-[14px] p-[10px] outline-primary"
                id="name"
                {...register("name", {
                  required: { value: true, message: "Required" },
                })}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-between">
                <label
                  htmlFor="phone"
                  className="font-[400] text-[14px] text-customGray">
                  Phone*
                </label>
                <InputError message={errors.phone?.message} />
              </div>
              <input
                type="text"
                placeholder="Your phone number"
                className="rounded-[4px] border-[#D7DADD] border-[1px] bg-[#F4F5F6] text-[#9A9CA5] font-[400] text-[14px] p-[10px] outline-primary"
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
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="font-[400] text-[14px] text-customGray">
                  Email*
                </label>
                <InputError message={errors.email?.message} />
              </div>
              <input
                type="text"
                placeholder="Your working email"
                className="rounded-[4px] border-[#D7DADD] border-[1px] bg-[#F4F5F6] text-[#9A9CA5] font-[400] text-[14px] p-[10px] outline-primary"
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
            <div className="flex flex-col gap-[5px]">
              <div className="flex justify-between">
                <label
                  htmlFor="letter"
                  className="font-[400] text-[14px] text-customGray">
                  Covering letter*
                </label>
                <InputError message={errors.letter?.message} />
              </div>
              <input
                type="text"
                placeholder="Your covering letter"
                className="rounded-[4px] border-[#D7DADD] border-[1px] bg-[#F4F5F6] text-[#9A9CA5] font-[400] text-[14px] p-[10px] outline-primary"
                id="letter"
                {...register("letter", {
                  required: { value: true, message: "Required" },
                  minLength: { value: 9, message: "Too short" },
                })}
              />
            </div>
          </div>
          <motion.button
            style={{ transition: "all ease-out .3s" }}
            initial={{ backgroundColor: "#FF5A30", color: "#FFFFFF" }}
            whileHover={{ backgroundColor: "#FFFFFF", color: "#FF5A30" }}
            className="uppercase w-full h-[44px] font-[700] text-[14px] rounded-[4px] border-primary border-[1px]">
            send
          </motion.button>
        </div>
      </motion.form>
      <motion.div
        transition={{ duration: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed z-10 top-0 left-0 w-full h-full bg-heading bg-opacity-75"></motion.div>
    </>
  );
};

export default Newsletter;
