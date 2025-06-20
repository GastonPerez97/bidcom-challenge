import ContactForm from "@/components/contact/ContactForm";
import ContactMoreInfo from "@/components/contact/ContactMoreInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-muted/50 mx-auto w-full px-4 py-12 md:px-6 md:py-24 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold sm:text-5xl">Contact</h2>
          <p className="text-muted-foreground flex max-w-[900px] flex-col md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <span>Have a question or want to work together? I&apos;d love to hear from you.</span>
            <span>Send me a message and i&apos;ll respond as soon as possible.</span>
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
        <ContactForm />
        <ContactMoreInfo />
      </div>
    </section>
  );
}
