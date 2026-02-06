import { smskey, rcskey, whatsappkey } from "@/app/lib/cities";
import Rcs from "@/app/rcs-business-messaging/Rcs";
import Sms from "@/app/sms-marketing/sms";
import WhatsApp from "@/app/whatsapp-business-platform/whatsapp";
import { Seo } from "@/utils/seo";

export default async function Cities({ params }) {
  const { service, cities } = await params;


  const formattedCity = cities
    ? cities?.charAt(0).toUpperCase() + cities?.slice(1)
    : "India";

  const SMSCitiesMeta = {
    title: `SMS Marketing & OTP Platform in ${formattedCity}`,
    description: `Reach anyone, anywhere, instantly right from ${formattedCity}. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`,
    link: cities
      ? `https://www.celitix.com/sms-marketing/${cities}`
      : `https://www.celitix.com/sms-marketing`,
      openGraph: {
  title: `SMS Marketing & OTP Platform in ${formattedCity}`,
  description: `Reach anyone, anywhere, instantly right from ${formattedCity}. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`,
},
  };
  const WhatsAppCitiesMeta = {
    title: `WhatsApp Business API & Chatbots in ${formattedCity}`,
    description: `Use WhatsApp to grow your ${formattedCity} business. Reach new heights with Celitix’s enterprise messaging solutions. Chatbots, Click to WhatsApp ads, CRM, & more.`,
    link: cities
      ? `https://www.celitix.com/whatsapp-business-platform/${cities}`
      : `https://www.celitix.com/whatsapp-business-platform`,
      openGraph: {
  title: `WhatsApp Business API & Chatbots in ${formattedCity}`,
  description: `Use WhatsApp to grow your ${formattedCity} business. Reach new heights with Celitix’s enterprise messaging solutions. Chatbots, Click to WhatsApp ads, CRM, & more.`,
},
  };

  const RcsCitiesMeta = {
    title: `RCS Business Messaging in ${formattedCity}`,
    description: `Break free from the limitations of SMS marketing in ${formattedCity}. Engage users with buttons, media, and branded messages via Celitix’s RCS platform.`,
    link: cities
      ? `https://www.celitix.com/rcs-business-messaging/${cities}`
      : `https://www.celitix.com/rcs-business-messaging`,

      openGraph: {
  title: `RCS Business Messaging in ${formattedCity}`,
  description: `Break free from the limitations of SMS marketing in ${formattedCity}. Engage users with buttons, media, and branded messages via Celitix’s RCS platform.`,
},
  };

  // //
  //   const RCSCitiesMeta = {
  //     title: `RCS Business Messaging in ${formattedCity}`,
  //     description:
  //       "Break free from the limitations of SMS marketing. Engage users with buttons, media, and branded messages via Celitix’s RCS platform.",
  //   };

  if (smskey?.includes(service)) {
    return (
      <>
        <Seo
          title={SMSCitiesMeta.title}
          description={SMSCitiesMeta.description}
          link={SMSCitiesMeta.link}
          openGraph ={SMSCitiesMeta.openGraph.title}
        />
        <Sms />
      </>
    );
  }
  // if (rcskey?.includes(service)) {
  //   return (
  //     <>
  //       <Seo title={RCSMetaData.title} description={RCSMetaData.description} />
  //       <Rcs />
  //     </>
  //   );
  // }
  if (whatsappkey?.includes(service)) {
    return (
      <>
        <Seo
          title={WhatsAppCitiesMeta.title}
          description={WhatsAppCitiesMeta.description}
          link={WhatsAppCitiesMeta.link}
          openGraph ={WhatsAppCitiesMeta.openGraph.title}
        />
        <WhatsApp />
      </>
    );
  }
  if (rcskey?.includes(service)) {
    return (
      <>
        <Seo
          title={RcsCitiesMeta.title}
          description={RcsCitiesMeta.description}
          link={RcsCitiesMeta.link}
          openGraph ={RcsCitiesMeta.openGraph.title}
        />
        <Rcs />
      </>
    );
  }
}
