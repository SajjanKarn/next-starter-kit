"use client";

import { Button } from "@/components/ui/button";
import { env } from "@/env/client";

const HomePage = () => {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-3 bg-gray-50 text-center dark:bg-gray-950">
      <h1 className="text-4xl font-bold">{env.NEXT_PUBLIC_MESSAGE}</h1>
      <p className="text-base text-gray-600">
        This project is configured with Tailwind CSS, ESLint, Prettier, and
        Husky
      </p>
      <div>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};
export default HomePage;
