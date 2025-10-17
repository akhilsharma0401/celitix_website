// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: "WhatsApp Business API & Chatbots | Celitix",
  description: "Enhance your marketing with WhatsApp ads, AI chatbots, and CRM solutions powered by WhatsApp API to automate messaging and boost customer loyalty.",
  alternates: {
    canonical: "https://www.celitix.com/whatsapp-business-platform",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}







// 1. Metadata function to handle dynamic metadata (based on route params)
// const cityMapping = {
//   pune: "Pune, Maharashtra, India",
//   hyderabad: "Hyderabad, Telangana, India",
//   mumbai: "Mumbai, Maharashtra, India",
//   bengaluru: "Bengaluru, Karnataka, India",
//   rajasthan: "Rajasthan, India",
//   jaipur: "Jaipur, Rajasthan, India",
//   delhi: "New Delhi, Delhi, India",
//   ghaziabad: "Ghaziabad, Uttar Pradesh, India",
//   gurugram: "Gurugram, Haryana, India",
//   sonipat: "Sonipat, Haryana, India",
//   surat: "Surat, Gujarat, India",
//   ahmedabad: "Ahmedabad, Gujarat, India",
// };

// export async function generateMetadata({ params }) {
//   // Extract the city name from params
//   const cityName = cityMapping[params.city?.toLowerCase()] || "";
//   return {
//     title: `WhatsApp Business API & Chatbots | Celitix ${cityName}`,
//     description: `Use WhatsApp to grow your ${cityName} business. Reach new heights with Celitix’s enterprise messaging solutions. Chatbots, Click to WhatsApp ads, CRM, & more.`,
//   };

// }

// Layout component that renders children (main content of each page)
// export default function Layout({ children }) {
//   return <>{children}</>;
// }
