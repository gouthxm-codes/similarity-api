import { ApiKey } from "@prisma/client";
import type { ZodIssue } from "zod";

export interface CreateApiData {
  error: string | ZodIssue[] | null;
  createdApiKey: ApiKey | null;
}

export interface RevokedApiData {
  error: string | ZodIssue[] | null;
  success: boolean;
}
