import PageTuto from "./pageTuto";
import { tutorialData } from "@/utils/tutotialData";
export async function generateMetadata({ params }) {
    const { type } = await params;

    const tutorial = tutorialData.find(
        (item) => item.slug === type
      );
    
      if (!tutorial) {
        return (
          <div className="p-6 text-gray-600">
            Tutorial Not Found
          </div>
        );
      }

  // const res = await fetch(`${process.env.API_URL}/blog/${slug}`, {
  //   cache: "no-store",
  // }).then((res) => res.json());

  // if (!res?.status) return {};

  return {
    title: tutorial?.title,
    // description: res?.blog?.seo?.description,
    openGraph: {
      title: tutorial?.title,
      // description: res?.blog?.seo?.description,
      // images: [res?.blog?.image],
    },
    alternates: {
      canonical: `https://www.celitix.com/tutorial/${type}`,
    },
  };
}



export default async function Page({ params }) {
    const { type } = await params;
  return <PageTuto params={{type}} />;
}