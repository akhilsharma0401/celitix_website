// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: "Financial Services Communication & Automation Platform",
  description: "Simplify KYC, speed up OTP delivery, provide real-time transaction alerts, and support customers with seamless digital communication using Celitix for financial services.",
  alternates: {
    canonical: "https://www.celitix.com/financial-services",
  },
   openGraph: {
  title: "Financial Services Communication & Automation Platform",
  description: "Simplify KYC, speed up OTP delivery, provide real-time transaction alerts, and support customers with seamless digital communication using Celitix for financial services.",
},
};

export default function Layout({ children }) {
  return <>{children}</>;
}