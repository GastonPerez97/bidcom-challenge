"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { BENEFITS, SERVICES } from "@/consts/service-data";
import { Benefit } from "@/types/services/benefit";

import HeroCallToAction from "../hero/HeroCallToAction";
import ServiceBenefit from "./ServiceBenefit";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full px-4 py-12 lg:pt-20 lg:pb-0">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="mb-16 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Offer</h2>

            <p className="text-muted-foreground flex max-w-[900px] flex-col md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <span>Comprehensive solutions tailored to your unique needs.</span>
              <span>
                From strategy to execution, I provide professional services that deliver measurable
                results.
              </span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="mb-16">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-2xl font-bold">Why Work With Me</h3>
              <p className="text-muted-foreground mx-auto max-w-2xl">
                I&apos;m committed to delivering exceptional value and results that exceed your
                expectations
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {BENEFITS.map((benefit: Benefit, index: number) => (
                <ServiceBenefit key={index} {...benefit} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="from-primary/5 to-secondary/5 border-primary/20 bg-gradient-to-r">
              <CardContent className="p-8 md:p-12">
                <h3 className="mb-4 text-2xl font-bold">Ready to Work Together?</h3>
                <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
                  Let&apos;s discuss your project and explore how I can help you achieve your goals.
                  I&apos;d love to hear about your vision and provide insights on the best path
                  forward.
                </p>

                <HeroCallToAction href="/get-started" text="Get Started" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
