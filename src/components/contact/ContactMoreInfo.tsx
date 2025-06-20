import { Mail, MapPin, Phone } from "lucide-react";

import TextWithIcon from "@/components/ui/TextWithIcon";

export default function ContactMoreInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">More Information</h3>
        <p className="text-muted-foreground">
          Reach out directly using the information below, or connect with me on social media.
        </p>
      </div>

      <div className="space-y-4">
        <TextWithIcon
          title="Email"
          text="example@mail.com.ar"
          icon={<Mail className="h-5 w-5" />}
        />

        <TextWithIcon
          title="Phone"
          text="+54 9 11 1234 5678"
          icon={<Phone className="h-5 w-5" />}
        />

        <TextWithIcon
          title="Address"
          text={
            <>
              Business Street 123
              <br />
              Buenos Aires, Argentina
            </>
          }
          icon={<MapPin className="h-5 w-5" />}
        />
      </div>
    </div>
  );
}
