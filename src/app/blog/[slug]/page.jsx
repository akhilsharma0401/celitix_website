import { axiosInstance } from "@/utils/axios";
import PageRef from "./pageRef";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
    cache: "no-store",
  }).then((res) => res.json());

  if (!res?.status) return {};

  return {
    title: res?.blog?.seo?.title,
    description: res?.blog?.seo?.description,
    openGraph: {
      title: res?.blog?.seo?.title,
      description: res?.blog?.seo?.description,
      images: [res?.blog?.image],
    },
    alternates: {
      canonical: `https://www.celitix.com/blog/${slug}`,
    },
  };
}
export default function Page() {
  return <PageRef />;
}
