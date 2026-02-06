// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: "Healthcare Communication & Patient Engagement Platform",
  description: "Celitix transforms healthcare communication using WhatsApp API service, SMS service, and voice service to improve patient alerts, reminders, and engagement.",
  alternates: {
    canonical: "https://www.celitix.com/healthcare",
  },
  openGraph: {
  title: "Healthcare Communication & Patient Engagement Platform",
  description: "Celitix transforms healthcare communication using WhatsApp API service, SMS service, and voice service to improve patient alerts, reminders, and engagement.",
},
};

export default function Layout({ children }) {
  return <>{children}</>;
}