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
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  location: z.string().min(2, "Please enter your city and country."),
  role: z.string().min(1, "Please select a role of interest."),
  availability: z
    .string()
    .min(5, "Tell us a little about your availability (at least 5 characters)."),
});

type FormValues = z.infer<typeof schema>;

const roles = [
  "Program volunteer",
  "Knowledge Sessions volunteer",
  "Communications volunteer",
  "Research & Evaluation volunteer",
  "Not sure yet — let's talk",
];

export function VolunteerForm({ roleOptions }: { roleOptions: string[] }) {
  const [submitted, setSubmitted] = useState(false);
  const options = roleOptions.length > 0 ? roleOptions : roles;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      role: "",
      availability: "",
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
            Application received.
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Thank you for offering your time and skills. A member of the team will reach
          out within 5 business days to discuss placement.
        </p>
        <BrandButton
          variant="outline"
          size="md"
          onClick={() => {
            form.reset();
            setSubmitted(false);
          }}
        >
          Submit another application
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
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="City, Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role of interest</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
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
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Availability</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  placeholder="Hours per week, days, time of day, remote or in-person — anything that helps us place you."
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
            Submit application
          </Button>
          <span className="text-xs text-muted-foreground">
            We will get back to you within 5 business days.
          </span>
        </div>
      </form>
    </Form>
  );
}
