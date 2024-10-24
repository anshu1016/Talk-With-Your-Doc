import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({
    title: v.string(),
    tokenIdentifier: v.optional(v.string()), // Make tokenIdentifier optional
  }).index("by_tokenIdentifier", ["tokenIdentifier"]),
});
