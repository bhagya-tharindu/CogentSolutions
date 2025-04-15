"use client";
import RegisterService from "@/services/RegisterService";
import React, { useActionState } from "react";
import { toast } from "sonner";
import { useMotionScrollAnimation } from "../utils/Helpers";
import { motion } from "framer-motion";

const RegisterForm = () => {
  const registerFormAnimation = useMotionScrollAnimation(0.5);
  const registerUser = async (prevState, formData) => {
    try {
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };

      await RegisterService.registerUser(data);

      toast.success("Registration Successfully!", {
        position: "top-center",
      });
    } catch (error) {
      toast.error("Sorry something went wrong!", {
        position: "top-center",
      });
      console.error(error);
    }
  };

  const [state, formAction, isPending] = useActionState(registerUser, {
    status: "INITIAL",
    error: "",
  });

  return (
    <motion.div
      ref={registerFormAnimation.ref}
      animate={registerFormAnimation.controls}
      id="registerForm"
      className="py-[100px] px-3 xl:px-36 "
    >
      <div className="md:grid-cols-[auto_1fr] md:gap-[24px] xl:gap-[80px] md:grid max-w-[1200px] mx-auto">
        <div className="font-medium leading-[1.2] text-black md:self-center text-center md:text-left mb-6 md:mb-0 md:max-w-[300px] xl:max-w-[500px]">
          <h2 className="text-[32px] mb-4 md:mb-0">Register Now</h2>
          <h3 className="text-[24px]">
            Join us for an unforgettable experience!
          </h3>
        </div>

        <form
          action={formAction}
          style={{
            backgroundImage:
              "linear-gradient(-90deg, #444343 -7.52%, #1a1a1a 108.41%)",
          }}
          className="p-[24px] rounded-xl max-w-[600px]"
        >
          <input
            name="name"
            id="name"
            required
            placeholder="Name"
            className="p-2 border w-full rounded-xl mb-4 bg-[rgba(255, 255, 255, 0.1)] text-[#fff]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="p-2 border rounded-xl w-full mb-4 bg-[rgba(255, 255, 255, 0.1)] text-[#fff]"
          />
          <textarea
            name="message"
            id="message"
            required
            placeholder="Message"
            className="p-2 border rounded-xl w-full h-[100px] mb-4 bg-[rgba(255, 255, 255, 0.1)] text-[#fff] "
          />
          <button
            type="submit"
            className="text-center w-full  bg-[#c137a2] text-white p-2 rounded-xl cursor-pointer
            hover:bg-[#a567a0] transition-all delay-100 font-medium
            "
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
