import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/libs/firebase/server";

export type Job = {
  id: string;
  job: {
    /* 案件見出し */
    title: string;
    /* サブタイトル(titleよりちょい長めなイメージ、カードで使う) */
    subtitle: string;
    /* 案件イメージ画像 */
    imageUrl: string;
    /* LINE Flex MessageのJSON文字列 */
    lineFlexMsgCard: string;

    /* フォーマット */
    format: string;

    /* 仕事条件・内容等 */
    details: {
      /* 撮影場所 */
      location: string;
      /* 拘束時間 */
      hours: string;
      /* 支払いについて */
      payment: string;
      /* ギャラ目安 */
      guarantee: string;
      /* 応募資格 */
      require: string;
      idCard: string;
      touch: string;
      karami: string;
    };

    jobStep: {
      step: number;
      text: string;
      hour: number;
      description: string;
    }[];

    tags?: string[];

    faq: {
      question: string;
      answer: string;
      priority?: number;
    }[];

    kuchikomi: {
      nickname?: string;
      title?: string;
      shootingDate: string;
      rating?: number;
      comment: string;
      priority?: number;
    }[];
  };
};
export const jobRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.id}`,
      };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const ref = db.collection("jobs").doc(input.id);
      const doc = await ref.get();
      return { id: doc.id, ...doc.data() } as Job;
    }),

  getAll: publicProcedure.query(async () => {
    const docRefs = await db.collection("jobs").listDocuments();
    const docs = await Promise.all(
      docRefs.map(async (docRef) => {
        const doc = await docRef.get();
        if (doc.exists) {
          return { id: doc.id, ...doc.data() } as Job;
        }
      }),
    );
    // docs.sort((a: any, b: any) => a.priority - b.priority)
    return docs as Job[];
  }),
});
