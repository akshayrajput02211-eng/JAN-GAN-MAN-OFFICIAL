"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    router.push("/");
  };

  const signup = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    router.push("/");
  };

  const logout = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    router.push("/login");
  };

  return {
    login,
    signup,
    logout,
    loading,
  };
}