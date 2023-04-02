"use client";

import { createApiKey } from "@/helpers/create-api-key";
import { Key } from "lucide-react";
import { FC, FormEvent, useState } from "react";
import Heading from "@/ui/Heading";
import { toast } from "@/ui/Toast";
import Paragraph from "@/ui/Paragraph";
import CopyButton from "@/components/CopyButton";
import { Input } from "@/ui/Input";
import Button from "@/ui/Button";

const RequestApikey: FC = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apikey, setApikey] = useState<string | null>(null);
  const createApikey = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreating(true);

    try {
      const apiKey = await createApiKey();
      setApikey(apiKey);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          message: error.message,
          type: "error",
        });
        return;
      }
      toast({
        title: "Error",
        message: "something went wrong",
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  };
  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <Heading>Request Your API Key</Heading>
        <Paragraph>You haven&apos;t requested an API key yet.</Paragraph>
      </div>
      <form
        onSubmit={createApikey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <div className="relative rounded-md shadow-md sm:min-w-0 sm:flex-1">
          {apikey ? (
            <CopyButton
              valueToCopy={apikey}
              type="button"
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
            />
          ) : null}
          <Input
            readOnly
            value={apikey ?? ""}
            placeholder="Request an API key to display it here!"
          />
        </div>
        <div className="mt-3 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <Button disabled={!!apikey} isLoading={isCreating}>
            Request key
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RequestApikey;
