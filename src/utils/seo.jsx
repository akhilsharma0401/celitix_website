// export const Seo = ({ title, description, link }) => {
//   const metadata = {
//     title: `${title}`,
//     description: `${description}`,
//     alternates: {
//       canonical: link || "https://www.celitix.com",
//     },
//   };
//   return (
//     <>
//       <title>{metadata.title}</title>
//       <meta name="description" content={metadata.description} />
//       <link rel="canonical" href={metadata.alternates.canonical} />
//     </>
//   );
// };







"use client";
import { usePathname, useSearchParams } from "next/navigation";
export const Seo = ({ title, description, link }) => {
    const pathname = usePathname();
  const searchParams = useSearchParams();

  // Rebuild query string if present
  const qs = searchParams.toString();
  const suffix = qs ? `?${qs}` : "";
  const metadata = {
    title: `${title}`,
    description: `${description}`,
  };
  const canonical = link ?? `https://www.celitix.com${pathname}${suffix}`;
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
       <link rel="canonical" href={canonical} />
    </>
  );
};
