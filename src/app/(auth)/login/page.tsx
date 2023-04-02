import AuthForm from "@/components/AuthForm";
import { buttonVariants } from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col items-center gap-6 text-center">
          <Link
            className={buttonVariants({
              variants: "ghost",
              className: "w-fit",
            })}
            href="/"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <Heading>Welcome Back</Heading>
          <Paragraph>Please sign in using your google account.</Paragraph>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
