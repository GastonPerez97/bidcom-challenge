import ContactForm from "@/components/contact/ContactForm";
import ContactMoreInfo from "@/components/contact/ContactMoreInfo";

import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full px-4 pt-20 pb-12 lg:pt-20 lg:pb-12">
      <SectionHeader
        title="Contact"
        subtitle={
          <>
            <span>Have a question or want to work together? I&apos;d love to hear from you.</span>
            <span>Send me a message and i&apos;ll respond as soon as possible.</span>
          </>
        }
      />

      <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
        <ContactForm />
        <ContactMoreInfo />
      </div>
    </section>
  );
}
