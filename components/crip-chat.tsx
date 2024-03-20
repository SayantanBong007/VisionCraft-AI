"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8838b37a-a8d6-4ebc-9e7a-c01f40294fd2");
  }, []);

  return null;
};
