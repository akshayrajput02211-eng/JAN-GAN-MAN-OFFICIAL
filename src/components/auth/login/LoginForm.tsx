"use client";

import Link from "next/link";

import { Smartphone } from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

import OtpInput from "./OtpInput";

export default function LoginForm() {
  const [phone, setPhone] =
    useState("");

  const [otpVisible, setOtpVisible] =
    useState(false);

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [wrongOtp, setWrongOtp] =
    useState(false);

  const verifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp !== "123456") {
      setWrongOtp(true);

      setTimeout(() => {
        setWrongOtp(false);
      }, 500);

      return;
    }

    alert("Login Successful");
  };

  return (
    <section className="flex items-center justify-center px-5 py-10">
      <motion.div
        animate={
          wrongOtp
            ? {
                x: [-10, 10, -10, 10, 0],
              }
            : {}
        }
        className="
          w-full
          max-w-md

          rounded-[32px]

          border
          border-white/50

          bg-white/70

          p-8

          shadow-2xl

          backdrop-blur-xl

          dark:border-slate-700/50
          dark:bg-slate-800/70
        "
      >
        <div className="mb-8 text-center">
          <div
            className="
              mx-auto
              mb-4

              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              bg-green-100

              dark:bg-green-900/30
            "
          >
            <Smartphone className="text-green-600" />
          </div>

          <h2 className="text-3xl font-black dark:text-white">
            Apna Number Daalo
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            OTP se secure login karo
          </p>
        </div>

        <div className="space-y-5">
          <input
            type="tel"
            maxLength={10}
            placeholder="10 digit mobile number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-white/50
              bg-white/70
              px-5
              py-4
              outline-none

              dark:bg-slate-900/50
              dark:text-white
            "
          />

          {!otpVisible ? (
            <button
              onClick={() =>
                setOtpVisible(true)
              }
              className="
                w-full
                rounded-2xl

                bg-gradient-to-r
                from-green-500
                to-emerald-600

                py-4

                font-bold
                text-white
              "
            >
              OTP Bhejo
            </button>
          ) : (
            <>
              <OtpInput
                otp={otp}
                setOtp={setOtp}
              />

              <button
                onClick={verifyOtp}
                className="
                  w-full
                  rounded-2xl

                  bg-gradient-to-r
                  from-green-500
                  to-emerald-600

                  py-4

                  font-bold
                  text-white
                "
              >
                Verify Karo
              </button>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          Naya account?{" "}
          <Link
            href="/signup"
            className="
              font-bold
              text-green-600
              hover:underline
            "
          >
            Signup karo
          </Link>
        </p>
      </motion.div>
    </section>
  );
}