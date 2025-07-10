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








export const Seo = ({ title, description, link }) => {
    

  // Rebuild query string if present

  const metadata = {
    title: `${title}`,
    description: `${description}`,
  };
 
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
       <link rel="canonical" href={link} />
    </>
  );
};
