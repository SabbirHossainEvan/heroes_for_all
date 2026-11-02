"use client";

import { useState } from "react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { presetDonationAmounts } from "@/data/content";
import { CheckCircle2, Heart, ArrowRight } from "lucide-react";

type DonationFormProps = {
  campaignSlug?: string;
  campaignTitle?: string;
};

const frequencies = [
  { value: "one-time", label: "One-time" },
  { value: "monthly", label: "Monthly" },
];

export function DonationForm({ campaignSlug, campaignTitle }: DonationFormProps) {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("one-time");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
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
            Thank you.
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {campaignTitle
            ? `Your gift of ${formatCurrency(finalAmount)} (${frequency}) to ${campaignTitle} has been queued.`
            : `Your gift of ${formatCurrency(finalAmount)} (${frequency}) has been queued.`}{" "}
          In production this would route to a secure payment provider.
        </p>
        <Button
          variant="outline"
          size="default"
          className="self-start"
          onClick={() => {
            setSubmitted(false);
            setCustom("");
          }}
        >
          Make another gift
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6"
      noValidate
      aria-label="Donation form"
    >
      {campaignSlug && (
        <input type="hidden" name="campaign" value={campaignSlug} />
      )}

      {/* Frequency */}
      <fieldset>
        <legend className="label-small text-muted-foreground mb-3">
          Frequency
        </legend>
        <RadioGroup
          value={frequency}
          onValueChange={setFrequency}
          className="grid gap-2 sm:grid-cols-2"
        >
          {frequencies.map((f) => (
            <label
              key={f.value}
              htmlFor={`freq-${f.value}`}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-4 py-3 text-sm cursor-pointer transition-colors",
                frequency === f.value
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary",
              )}
            >
              <RadioGroupItem id={`freq-${f.value}`} value={f.value} />
              <span className="font-medium text-foreground">{f.label}</span>
            </label>
          ))}
        </RadioGroup>
      </fieldset>

      {/* Preset amounts */}
      <fieldset>
        <legend className="label-small text-muted-foreground mb-3">
          Amount (USD)
        </legend>
        <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-5">
          {presetDonationAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setAmount(amt);
                setCustom("");
              }}
              className={cn(
                "h-11 rounded-lg border text-sm font-semibold transition-colors",
                amount === amt && !custom
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary",
              )}
            >
              {formatCurrency(amt)}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Custom amount */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="custom-amount" className="label-small text-muted-foreground">
          Or enter a custom amount
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            $
          </span>
          <Input
            id="custom-amount"
            type="number"
            min={1}
            step={1}
            placeholder="0"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            className="pl-7"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-2xl bg-secondary/60 p-4 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Your gift</span>
        <span className="font-heading text-xl font-bold text-primary">
          {formatCurrency(finalAmount || 0)}
          <span className="ml-1 text-xs font-medium text-muted-foreground">
            / {frequency === "monthly" ? "mo" : "once"}
          </span>
        </span>
      </div>

      <Button
        type="submit"
        size="lg"
        className="bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        <Heart className="h-4 w-4" aria-hidden />
        Donate {formatCurrency(finalAmount || 0)}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
