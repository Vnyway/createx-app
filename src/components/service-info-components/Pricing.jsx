import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section
      style={{
        backgroundSize: "cover",
        backgroundColor: "#F4F5F6",
      }}
      className="relative overflow-hidden">
      <img
        src="./images/facts-and-news/background.svg"
        className="w-[1065.95px] h-auto absolute -z-10 left-[-300px] top-[-380px]"
        alt=""
      />
      <div className="container mx-auto py-[60px] ">
        <div className="flex flex-col gap-[10px] text-center pb-[60px]">
          <h3 className="font-[700] text-[32px] md:text-[46px] text-heading">
            Pricing
          </h3>
          <p className="font-[400] text-[14px] md:text-[18px] text-paragraph">
            We offer you three categories of construction.
          </p>
        </div>
        <div className="overflow-auto">
          <table className="w-full text-center bg-white border-[1px] border-[#E5E8ED] rounded-[4px] font-[400] text-[14px] md:text-[16px] text-heading px-[20px]">
            <tr>
              <th
                className="text-left pl-[40px] font-[700] text-[14px] md:text-[18px]"
                rowSpan={2}>
                <div className="pt-[30px] min-w-[100px]">Items</div>
              </th>
              <th className="font-[700] text-[16px] md:text-[24px] pt-[20px]">
                BASIC
              </th>
              <th className="font-[700] text-[16px] md:text-[24px] pt-[20px]">
                STANDARD
              </th>
              <th className="font-[700] text-[16px] md:text-[24px] pt-[20px]">
                BUSINESS
              </th>
            </tr>
            <tr>
              <td className="pb-[20px]">$20 per m2</td>
              <td className="pb-[20px]">$30 per m2</td>
              <td className="pb-[20px]">$40 per m2</td>
            </tr>
            <tr className="bg-[#F4F5F6]">
              <td className="text-left pl-[40px]">Installation plan</td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-[40px]">
                Planning solutions (2-3 options)
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr className="bg-[#F4F5F6]">
              <td className="text-left pl-[40px]">Lighting plan</td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-[40px]">Flooring plan</td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr className="bg-[#F4F5F6]">
              <td className="text-left pl-[40px]">
                Heating floor laying scheme
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-[40px]">
                Air conditioner zones layout
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr className="bg-[#F4F5F6]">
              <td className="text-left pl-[40px]">
                3D visualization of all rooms
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <span>Simplified</span>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="text-left pl-[40px]">
                Visualization of each room (3-4 angles)
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]"></div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]"></div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <img src="./images/service/check.svg" alt="" />
                </div>
              </td>
            </tr>
            <tr className="bg-[#F4F5F6]">
              <td className="text-left pl-[40px]">Terms</td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <span>10 days</span>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <span>20 days</span>
                </div>
              </td>
              <td>
                <div className="flex justify-center items-center py-[10px]">
                  <span>30 days</span>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <div className="py-[30px] flex justify-center items-center">
                  <motion.button
                    initial={{ backgroundColor: "#FFFFFF", color: "#FF5A30" }}
                    whileHover={{
                      backgroundColor: "#FF5A30",
                      color: "#FFFFFF",
                    }}
                    className="border-[1px] border-primary rounded-[4px] w-[110px] lg:w-[143px] h-[36px] flex justify-center items-center uppercase font-[700] text-[11px] lg:text-[12px]">
                    send request
                  </motion.button>
                </div>
              </td>
              <td>
                <div className="py-[30px] flex justify-center items-center">
                  <motion.button
                    initial={{ backgroundColor: "#FFFFFF", color: "#FF5A30" }}
                    whileHover={{
                      backgroundColor: "#FF5A30",
                      color: "#FFFFFF",
                    }}
                    className="border-[1px] border-primary rounded-[4px] w-[110px] lg:w-[143px] h-[36px] flex justify-center items-center uppercase font-[700] text-[11px] lg:text-[12px]">
                    send request
                  </motion.button>
                </div>
              </td>
              <td>
                <div className="py-[30px] flex justify-center items-center">
                  <motion.button
                    initial={{ backgroundColor: "#FFFFFF", color: "#FF5A30" }}
                    whileHover={{
                      backgroundColor: "#FF5A30",
                      color: "#FFFFFF",
                    }}
                    className="border-[1px] border-primary rounded-[4px] w-[110px] lg:w-[143px] h-[36px] flex justify-center items-center uppercase font-[700] text-[11px] lg:text-[12px]">
                    send request
                  </motion.button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
