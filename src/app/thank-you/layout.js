// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: "Thank You | Celitix",
  description: "Thank you for connecting with Celitix! We’ll be in touch soon to help you unlock smarter, faster, and more effective communication for your business.",
  alternates: {
    canonical: "https://www.celitix.com/thank-you",
  },
   openGraph: {
  title: "Thank You | Celitix",
  description: "Thank you for connecting with Celitix! We’ll be in touch soon to help you unlock smarter, faster, and more effective communication for your business.",
},
};

export default function Layout({ children }) {
  return <>{children}</>;
}