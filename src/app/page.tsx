import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

import "simplebar-react/dist/simplebar.min.css";

export const metadata: Metadata = {
  title: "Smilarity API | Home",
  description: "Free & open-source text similarity API",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <Heading
            size={"lg"}
            className="three-d text-black dark:text-light-gold"
          >
            Easily determine <br /> text similarity
          </Heading>
          <Paragraph className="max-w-xl lg:text-left">
            With the text smilarity API, you can easily determine the similarity
            between to pieces of text with a free {""}
            <Link
              href={"/login"}
              className="underline underline-offset-2 text-black lg:text-light-gold"
            >
              API Key
            </Link>
            .
          </Paragraph>
          <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="image-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/typewriter.png"
              alt="Typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
