"use client";

import { useState } from "react";
import { submitName } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [greeting, setGreeting] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    const result = await submitName(formData);
    setGreeting(result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Next.js Server Action Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          {greeting && (
            <p className="mt-4 text-center text-lg font-semibold">{greeting}</p>
          )}
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full max-w-md mt-8">
        <AccordionItem value="explanation">
          <AccordionTrigger>How it works</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              This demo showcases Next.js 15.1 features, server actions, and
              Shadcn UI components:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Server actions process the input on the server and return the
                response.
              </li>
              <li>
                Shadcn UI components (Button, Input, Card, Accordion) are used
                for styling.
              </li>
              <li>
                Next.js 15.1 features like improved server actions and enhanced
                type safety are utilized.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
