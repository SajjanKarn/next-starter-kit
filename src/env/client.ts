import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_MESSAGE: z.string().min(1),
  },
  runtimeEnv: {
    // eslint-disable-next-line n/no-process-env
    NEXT_PUBLIC_MESSAGE: process.env.NEXT_PUBLIC_MESSAGE,
  },
});
