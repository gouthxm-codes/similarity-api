"use client";
import { FC, useState } from "react";
import Button from "@/ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "@/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Errot signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
