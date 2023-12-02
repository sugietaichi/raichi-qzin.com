"use client";

import { LikeJobContext } from "@/states/LikeJobState";
import { parseCookies, setCookie } from "nookies";
import { useEffect, useContext } from "react";

const useLikeJobs = () => {
  const { likedJobIds, setLikedJobIds } = useContext(LikeJobContext);
  const cookies = parseCookies();

  useEffect(() => {
    const v = cookies.likedJobs;
    if (!v) return;
    const likes = v.split(",");
    setLikedJobIds(likes);
  }, [cookies.likedJobs, setLikedJobIds]);

  const isLiked = (jobId: string) => {
    return likedJobIds.includes(jobId);
  };

  const like = (jobId: string) => {
    if (!likedJobIds.includes(jobId)) {
      const updatedLikes = [...likedJobIds, jobId];
      setLikedJobIds(updatedLikes);
      setCookie(null, "likedJobs", updatedLikes.join(","), {
        maxAge: 2147483647,
        secure: true,
        httpOnly: false,
        sameSite: "strict",
      });
    }
  };

  const unlike = (jobId: string) => {
    const updatedLikes = likedJobIds.filter((id) => id !== jobId);
    setLikedJobIds(updatedLikes);
    setCookie(null, "likedJobs", updatedLikes.join(","), {
      maxAge: 2147483647,
      secure: true,
      httpOnly: false,
      sameSite: "strict",
    });
  };

  return {
    jobIds: likedJobIds,
    like,
    unlike,
    isLiked,
    count: likedJobIds.length,
  };
};

export default useLikeJobs;
