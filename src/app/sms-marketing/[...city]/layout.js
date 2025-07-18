// src/app/cpaas-solutions/layout.js
// export const metadata = {
//   title: "SMS Marketing & OTP Platform | Celitix",
//   description: "Reach anyone, anywhere, instantly. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.",
// };

// export default function Layout({ children }) {
//   return <>{children}</>;
// }

// app/sms-marketing/[...city]/page.jsx

import { cities, smskey } from "../../lib/cities";

export const dynamic = "force-dynamic"; // Enable dynamic rendering

// export default function CitySMSPage({ params }) {
//   const city = params.city?.[0] || null; // Get dynamic city parameter
//   const isKnownCity = city && cities.includes(city.toLowerCase()); // Check if city is known
//   const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'India'; // Format city name

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold">
//         {isKnownCity ? `Bulk SMS in ${formattedCity}` : `SMS Marketing Platform`}
//       </h1>
//       <p className="mt-4 text-lg">
//         {isKnownCity
//           ? `Send high-converting SMS campaigns in ${formattedCity}.`
//           : `Reach your customers across India with fast SMS delivery.`}
//       </p>

//       {/* Full content (reuse for all cities) */}
//       <section className="mt-10">
//         <h2 className="text-xl font-semibold">Why Choose Celitix?</h2>
//         <ul className="list-disc ml-6 mt-2">
//           <li>DLT-compliant SMS APIs</li>
//           <li>Instant OTP delivery</li>
//           <li>Real-time analytics dashboard</li>
//         </ul>
//       </section>
//     </div>
//   );
// }

export async function generateMetadata({ params }) {
  const city = params.city?.[0] || null; // Get city parameter from the URL
  const formattedCity = city
    ? city.charAt(0).toUpperCase() + city.slice(1)
    : "India"; // Format the city
  const isKnownCity = city && cities.includes(city.toLowerCase());

  return {
    title: isKnownCity
      ? `SMS Marketing & OTP Platform in ${formattedCity}`
      : `SMS Marketing & OTP Platform | Celitix`,
    description: isKnownCity
      ? `Reach anyone, anywhere, instantly right from ${formattedCity}. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`
      : `Reach anyone, anywhere, instantly. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`,
    alternates: {
      canonical: city
        ? `https://www.celitix.com/sms-marketing/${city}`
        : `https://www.celitix.com/sms-marketing`,
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}

// Assuming this is where your arrays are defined.

// export async function generateMetadata({ params }) {
//   const city = params.city?.[0] || null; // Get city parameter from the URL
//   const key = params.key?.[0] || null; // Get service key parameter from the URL

//   const formattedCity = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'India'; // Format the city
//   const formattedSmsKey = key ? key.charAt(0).toUpperCase() + key.slice(1) : 'Service'; // Format the service key

//   const isKnownCity = city && cities.includes(city.toLowerCase()); // Check if city is in cities array
//   const isKnownKey = key && smskey.includes(key.toLowerCase()); // Check if service key is in smskey array

//   // Combined check if both the city and the key are known
//   const isKnownCityAndKey = isKnownCity && isKnownKey;

//   return {
//     title: isKnownCityAndKey
//       ? `${formattedSmsKey} in ${formattedCity}`
//       : `SMS Marketing & OTP Platform | Celitix`,

//     description: isKnownCityAndKey
//       ? `Reach anyone, anywhere, instantly right from ${formattedCity}. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`
//       : `Reach anyone, anywhere, instantly. Use Celitix’s SMS platform to deliver OTPs, alerts, and promotional messages and drive results.`,

//     alternates: {
//       canonical: city
//         ? `http://localhost:3000/${formattedSmsKey}`
//         : `http://localhost:3000/sms-marketing`,
//     },
//   };
// }

// export default function Layout({ children }) {
//   return <>{children}</>;
// }
