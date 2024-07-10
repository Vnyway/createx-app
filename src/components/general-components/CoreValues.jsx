import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputError from "./InputError";
import { Link } from "react-router-dom";

const CoreValues = ({
  isForm,
  isButton,
  background,
  heading,
  paragraph,
  features,
}) => {
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
    <section
      className={`pt-[20px] md:pt-[40px] ${
        !isForm && !isButton && "pb-[40px] md:pb-[80px]"
      } ${background === "dark" && "bg-heading"} ${
        background === "gray" && "bg-[#F4F5F6]"
      }`}>
      <div className="container mx-auto flex flex-col">
        <div className="text-center mb-[20px]">
          <h2
            className={`font-[700] text-[26px] md:text-[46px] ${
              background === "dark" ? "text-white" : "text-heading"
            } `}>
            {heading}
          </h2>
          <p
            className={`font-[400] text-[12px] md:text-[18px] ${
              background === "dark"
                ? "text-white text-opacity-60"
                : "text-paragraph"
            } my-[10px] md:my-[20px]`}>
            {paragraph}
          </p>
        </div>
        <div
          className={`flex flex-col md:flex-row md:justify-center gap-[30px] md:gap-[30px] my-[30px] md:my-[60px] lg:gap-[80px] ${
            background === "dark"
              ? "text-white text-opacity-60"
              : "text-paragraph"
          }`}>
          {features &&
            features.map((element) => {
              if (element.id % 2) {
                return (
                  <div className="flex flex-col items-center gap-[5px] md:gap-[10px] w-full md:w-[285px]">
                    <img
                      src={element.image}
                      className="size-[40px] md:size-[48px]"
                      alt=""
                    />
                    <h3
                      className={`font-[700] text-[20px] ${
                        background === "dark" ? "text-white" : "text-heading"
                      }`}>
                      {element.name}
                    </h3>
                    <p className="font-[400] text-[12px] md:text-[16px] text-center ">
                      {element.description}
                    </p>
                  </div>
                );
              } else {
                return (
                  <div className="flex flex-col items-center gap-[5px] md:gap-[10px] md:border-r-[1px] md:border-l-[1px] md:px-[30px] lg:px-[80px] w-[full] md:w-[345px] lg:w-[445px]">
                    <img
                      src="./images/ic-hand.svg"
                      className="size-[40px] md:size-[48px]"
                      alt=""
                    />
                    <h3
                      className={`font-[700] text-[20px] ${
                        background === "dark" ? "text-white" : "text-heading"
                      }`}>
                      Safety
                    </h3>
                    <p className="font-[400] text-[12px] md:text-[16px] text-center ">
                      Anim reprehenderit sint voluptate exercitation adipisicing
                      laborum adipisicing. Minim empor est ea.
                    </p>
                  </div>
                );
              }
            })}
        </div>
        {isForm && (
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
        )}
        {isButton && (
          <div className="w-full flex justify-center">
            <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
              <motion.button
                initial={{ backgroundColor: "#FF5A30", color: "#FFFFFF" }}
                whileHover={{ backgroundColor: "#1E212C", color: "#FF5A30" }}
                transition={{ duration: 0.3 }}
                className="uppercase w-[390px] h-[52px] flex justify-center items-center font-[700] text-[16px] border-[1px] border-primary rounded-[4px] mt-[60px]">
                Discuss a project
              </motion.button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreValues;
