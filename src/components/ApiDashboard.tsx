import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { formatDistance } from "date-fns";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import { Input } from "@/ui/Input";
import Table from "@/components/Table";
import ApiKeyOptions from "./ApiKeyOptions";
const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) notFound();

  const apiKeys = await db.apiKey.findMany({
    where: {
      userId: user.user.id,
    },
  });

  const activeKey = apiKeys.find((key) => key.enabled);

  if (!activeKey) notFound();

  const userReqs = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableReqs = userReqs.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <Heading>Welcome back, {user.user.name}</Heading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph>Your API key:</Paragraph>
        <Input className="w-fit truncate" readOnly value={activeKey.key} />
        <ApiKeyOptions apiKeyId={activeKey.id} apiKeyKey={activeKey.key} />
      </div>
      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        Your API history:
      </Paragraph>
      <Table userRequests={serializableReqs} />
    </div>
  );
};

export default ApiDashboard;
