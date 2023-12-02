"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useCookie from "./useCookie";

const useAffiliatorId = (key: string): { affiliatorId: string } => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get(key);

  const { get, set } = useCookie();
  const [affiliatorId, setAffiliatorId] = useState<string>("");

  useEffect(() => {
    if (current) {
      set(key, current, {
        path: pathname,
        maxAge: 2147483647,
        secure: true,
        httpOnly: false,
        sameSite: "strict",
      });
    }
    const affiliatorId = get(key);
    setAffiliatorId(affiliatorId as string);
  }, [key, pathname, current, get, set]); // key を依存配列に追加

  return { affiliatorId };
};

export default useAffiliatorId;
