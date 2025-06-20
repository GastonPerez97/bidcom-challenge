"use client";

import { MessageSquare, Send } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Spinner from "@/components/ui/Spinner";
import { Textarea } from "@/components/ui/Textarea";

const DEFAULT_FORM_DATA = Object.freeze({ name: "", email: "", subject: "", message: "" });

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(DEFAULT_FORM_DATA);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Send me a Message</h3>

          {isSubmitted && (
            <div className="rounded-md border border-green-200 bg-green-50 p-4">
              <div className="flex">
                <MessageSquare className="h-5 w-5 text-green-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                  <p className="mt-1 text-sm text-green-700">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm leading-none font-medium">
                  Name
                </label>

                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm leading-none font-medium">
                  Email
                </label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm leading-none font-medium">
                Subject
              </label>

              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm leading-none font-medium">
                Message
              </label>

              <Textarea
                id="message"
                name="message"
                placeholder="Tell me more about your project or inquiry..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
