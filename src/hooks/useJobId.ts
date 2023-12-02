"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useJobId = (): { jobId: string } => {
  const pathname = usePathname();
  const [jobId, setJobId] = useState<string>("");

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const id = pathname.replace("/job/", "");
    if (!id) {
      return;
    }

    // const id = replaced === "/" ? "" : replaced;
    // alert(id);
    setJobId(id);
  }, [pathname]);

  return { jobId };
};

export default useJobId;
