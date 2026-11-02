"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BrandButton } from "@/components/ui-brand/button";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  age: z
    .string()
    .refine((v) => !Number.isNaN(Number(v)) && Number(v) >= 13 && Number(v) <= 25, {
      message: "Membership is open to youth aged 13–25.",
    }),
  interests: z
    .string()
    .min(10, "Tell us a little about your interests (at least 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

export function MembershipForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      age: "",
      interests: "",
    },
  });

  function onSubmit(_values: FormValues) {
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="h-5 w-5" aria-hidden />
          </span>
          <h3 className="font-heading text-lg font-semibold text-primary">
            Interest received.
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Thank you for your interest in Heroes For All student membership. A member of
          the team will be in touch within 5 business days.
        </p>
        <BrandButton
          variant="outline"
          size="md"
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
        >
          Submit another response
        </BrandButton>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
        noValidate
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={13}
                  max={25}
                  placeholder="13–25"
                  inputMode="numeric"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your interests</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Programs you'd like to participate in, causes you care about, anything that helps us place you."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" size="default" className="bg-primary hover:bg-primary-dark">
            <Send className="h-4 w-4" aria-hidden />
            Submit interest form
          </Button>
          <span className="text-xs text-muted-foreground">
            We will get back to you within 5 business days.
          </span>
        </div>
      </form>
    </Form>
  );
}
