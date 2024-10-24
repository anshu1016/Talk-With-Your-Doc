"use-client";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Progress } from "@/components/ui/progress";

export const HeaderActions = () => {
  return (
    <div>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <div className="flex gap-4">
          <UserButton />
        </div>
      </Authenticated>
      <AuthLoading>
        <Progress value={100} />
      </AuthLoading>
    </div>
  );
};
