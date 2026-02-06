// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: "SMS 2-Way Messaging API & Platform | Celitix",
  description: "Empower your business with conversational messaging. Use two-way SMS to boost engagement, handle support, and close leads faster.",
  alternates: {
    canonical: "https://www.celitix.com/two-way-sms",
  },
   openGraph: {
  title: "SMS 2-Way Messaging API & Platform | Celitix",
  description: "Empower your business with conversational messaging. Use two-way SMS to boost engagement, handle support, and close leads faster.",
},
};

export default function Layout({ children }) {
  return <>{children}</>;
}