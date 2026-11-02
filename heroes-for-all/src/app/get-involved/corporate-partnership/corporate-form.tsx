"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { BrandButton } from "@/components/ui-brand/button";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  organization: z.string().min(2, "Please enter your organization's name."),
  contactName: z.string().min(2, "Please enter the contact person's name."),
  email: z.string().email("Please enter a valid email address."),
  tier: z.string().min(1, "Please select a partnership tier."),
  message: z
    .string()
    .min(10, "Tell us a little about what you're hoping to do (at least 10 characters)."),
});

type FormValues = z.infer<typeof schema>;

const tiers = [
  "Program Partner",
  "Strategic Partner",
  "Event Partner",
  "Not sure yet — let's talk",
];

export function CorporateForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      organization: "",
      contactName: "",
      email: "",
      tier: "",
      message: "",
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
            Inquiry received.
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Thank you for your interest in partnering with Heroes For All. A member of the
          development team will respond within 5 business days.
        </p>
        <BrandButton
          variant="outline"
          size="md"
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
        >
          Submit another inquiry
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
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@organization.com"
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
          name="tier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership tier of interest</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a tier" />
                  </SelectTrigger>
                  <SelectContent>
                    {tiers.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="What are you hoping to do together? Programs of interest, timeline, anything that helps."
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
            Submit inquiry
          </Button>
          <span className="text-xs text-muted-foreground">
            We will get back to you within 5 business days.
          </span>
        </div>
      </form>
    </Form>
  );
}
