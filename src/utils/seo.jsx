export const Seo = ({ title, description, link }) => {
  const metadata = {
    title: `${title}`,
    description: `${description}`,
  };
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </>
  );
};
