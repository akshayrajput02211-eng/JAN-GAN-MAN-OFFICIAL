"use client";

import { useState } from "react";

export default function useOtp() {
  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [isOtpSent, setIsOtpSent] = useState(false);

  const [isVerified, setIsVerified] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const sendOtp = async (phone: string) => {
    if (phone.length !== 10) {
      alert("Valid mobile number daalo");
      return;
    }

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setLoading(false);

    setIsOtpSent(true);
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    setLoading(false);

    if (enteredOtp === "123456") {
      setIsVerified(true);

      return true;
    }

    alert("Galat OTP");

    return false;
  };

  return {
    otp,
    setOtp,
    isOtpSent,
    isVerified,
    loading,
    sendOtp,
    verifyOtp,
  };
}