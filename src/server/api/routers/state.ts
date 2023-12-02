import { db } from "@/libs/firebase/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { FieldValue } from "firebase-admin/firestore";

export const stateRouter = createTRPCRouter({
  create: publicProcedure.mutation(async (_opts: unknown) => {
    // SCRF対策
    const doc = await db.collection("states").add({
      createdAt: FieldValue.serverTimestamp(),
    });
    const state = doc.id;

    return {
      state: {
        value: state,
      },
    };
  }),
});
