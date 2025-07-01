// src/app/cpaas-solutions/layout.js
export const metadata = {
  title: " Token-Based SMS Authentication API | Celitix",
  description: "Celitix’s App Authenticator verifies users with fast, secure, OTP-free flows over SMS. No hassle or delays.",
  alternates: {
    canonical: "https://www.celitix.com/user-verification",
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}