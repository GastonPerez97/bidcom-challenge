import { ArrowLeft, Calendar, Mail, Zap } from "lucide-react";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function GetStarted() {
  return (
    <ViewTransition name="fade">
      <section className="flex items-center justify-center px-4 py-[80px] sm:h-screen sm:py-0">
        <div className="mx-auto max-w-5xl text-center">
          <Button
            variant="ghost"
            size="sm"
            className="group hover:text-slate-90 mb-6 text-slate-600 transition-all hover:bg-white/50"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="mr-1 h-4 w-4 duration-150 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>

          <div className="mb-6 flex justify-center">
            <Badge
              variant="outline"
              className="rounded-3xl border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            >
              <Zap className="mr-2 text-blue-600" style={{ scale: 1.3 }} />
              Ready to Begin Your Journey?
            </Badge>
          </div>

          <h1 className="mb-8 text-5xl leading-tight font-bold md:text-7xl">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Let&apos;s Get Started
            </span>
          </h1>

          <p className="mb-6 text-2xl font-medium text-slate-700 md:text-3xl">
            Transform your ideas into reality
          </p>

          <div className="mx-auto mb-12 max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-slate-600">
              Whether you&apos;re launching a startup, growing your business, or bringing a creative
              vision to life, I&apos;m here to help you build something extraordinary. From concept
              to launch, let&apos;s create digital experiences that make an impact.
            </p>
          </div>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-lg" asChild>
              <Link href="https://calendly.com/" target="_blank">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="px-8 text-lg" asChild>
              <Link href="mailto:example@mail.com.ar" target="_blank">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
