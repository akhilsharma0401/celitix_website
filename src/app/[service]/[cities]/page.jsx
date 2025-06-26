import { smskey, rcskey, whatsappkey } from "@/app/lib/cities";
import Sms from "@/app/sms-marketing/sms";
import { Seo } from "@/utils/seo";

export default async function Cities({ params }) {
  const { service, cities } = await params;

  console.log(service);

  const formattedCity = cities
    ? cities?.charAt(0).toUpperCase() + cities?.slice(1)
    : "India";

  const SMSCitiesMeta = {
    title: `SMS Marketing & OTP Platform in ${formattedCity}`,
    description: `Reach anyone, anywhere, instantly right from ${formattedCity}. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`,
    alternates: {
      canonical: cities
        ? `http://localhost:3000/sms-marketing/${cities}`
        : `localhost:3000/sms-marketing`,
    },
  };

  if (smskey?.includes(service)) {
    return (
      <>
        <Seo
          title={SMSCitiesMeta.title}
          description={SMSCitiesMeta.description}
        />
        <Sms />
      </>
    );
  }
  // if (rcskey?.includes(service)) {
  //   return (
  //     <>
  //       {/* <Seo title={RCSMetaData.title} description={RCSMetaData.description} /> */}
  //       <Rcs />
  //     </>
  //   );
  // }
  // if (whatsappkey?.includes(service)) {
  //   return (
  //     <>
  //       {/* <Seo
  //         title={WhatsAppMetaData.title}
  //         description={WhatsAppMetaData.description}
  //       /> */}
  //       <WhatsApp />
  //     </>
  //   );
  // }
}
