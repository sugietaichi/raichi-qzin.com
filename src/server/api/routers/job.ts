import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/libs/firebase/server";

export type Job = {
  id: string;
  job: {
    /* 案件見出し */
    title: string;
    /* サブタイトル */
    subtitle: string;
    /* 案件イメージ画像 */
    imageUrl: string;
    /* LINE Flex MessageのJSON文字列 */
    lineFlexMsgCard: string;

    /* フォーマット */
    format: string;
    /* 仕事条件・内容等 */
    details: {
      /* 顔出し範囲 */
      facialExposure: string;
      /* 撮影場所 */
      location: string;
      /* 拘束時間 */
      hours: string;
      /* スキン(S着・外出し可など) */
      skin: string;
      /* 報酬受け渡しのタイミング */
      paymentTiming: string;
      /* 撮影内容 */
      scenes: string[];
      /* 備考 */
      notes: string[];
      /* ギャラ目安 */
      guarantee: string;
    };
    /* 募集要項 */
    recruitment: {
      /* 年齢採用基準 */
      age: string;
      /* スペ採用基準 */
      spe: string;
      /* 必須項目 */
      required: string[];
      /* 歓迎項目 */
      welcome: string[];
      /* 備考 */
      notes: string[];
    };
    tags?: string[];
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
