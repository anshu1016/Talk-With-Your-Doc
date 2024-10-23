"use client";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/ui/ModeToggle";
// import { api } from "@/convex/_generated/api";
// import { SignInButton, UserButton } from "@clerk/clerk-react";
// import {
//   Authenticated,
//   Unauthenticated,
//   useMutation,
//   useQuery,
// } from "convex/react";
import Header from "./header";

export default function Home() {
  // const getDocs = useQuery(api.documents.getDocument);
  // const createDocument = useMutation(api.documents.createDocument);
  return (
    <div className="bg-red-500">
      <Header />{" "}
    </div>
  );
}
