import Sms from "../sms-marketing/sms";
import Rcs from "../rcs-business-messaging/Rcs";
import WhatsApp from "../whatsapp-business-platform/whatsapp";
import { smskey, rcskey, whatsappkey } from "../lib/cities";
import ErrorPage from "../components/ErrorPage";
import { Seo } from "@/utils/seo";



export default async function SMS({ params }) {
  const { service } = await params;

  const RCSMetaData = {
    title: "RCS Business Messaging | Celitix",
    description:
      "Break free from the limitations of SMS marketing. Engage users with buttons, media, and branded messages via Celitix’s RCS platform.",
    link: `https://www.celitix.com/${service}`,

  };
  const WhatsAppMetaData = {
    title: `WhatsApp Business API & Chatbots | Celitix`,
    description: `Use WhatsApp to grow your business. Reach new heights with Celitix’s enterprise messaging solutions. Chatbots, Click to WhatsApp ads, CRM, & more.`,
    link: `https://www.celitix.com/${service}`,
  };
  const SMSMetaData = {
    title: "SMS Marketing & OTP Platform | Celitix",
    description:
      "Reach anyone, anywhere, instantly. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.",
    link: `https://www.celitix.com/${service}`,
  };

  if (smskey?.includes(service)) {
    return (
      <>
        <Seo title={SMSMetaData.title} description={SMSMetaData.description} link={SMSMetaData.link} />
        <Sms />
      </>
    );
  }
  if (rcskey?.includes(service)) {
    return (
      <>
        <Seo title={RCSMetaData.title} description={RCSMetaData.description} link={RCSMetaData.link} />
        <Rcs />
      </>
    );
  }
  if (whatsappkey?.includes(service)) {
    return (
      <>
        <Seo
          title={WhatsAppMetaData.title}
          description={WhatsAppMetaData.description}
          link={WhatsAppMetaData.link}
        />
        <WhatsApp />
      </>
    );
  }

  return <ErrorPage />;
}
