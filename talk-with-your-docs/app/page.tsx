"use client";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Home() {
  const getDocs = useQuery(api.documents.getDocument);
  const createDocument = useMutation(api.documents.createDocument);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button
          onClick={() => {
            createDocument({ title: "Hello World!" });
          }}
        >
          Click me
        </button>
        {getDocs?.map((title) => <div key={title?._id}>{title?.title}</div>)}
      </Authenticated>
    </div>
  );
}
