"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  MultichannelIntegrationsSms,
  ThankyouDesktop,
} from "../../../public/assets/images";
import UniversalButton from "../components/UniversalButton";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { axiosInstance } from "@/utils/axios";

// ✅ Replace these with your own images (static import)

const CARDS_PER_PAGE = 6;

function formatDate(dateStr) {
  if (!dateStr) return "—";

  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageIndex />
    </Suspense>
  );
}
function PageIndex() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [blogs, setBlogs] = useState([]);
  const [recentBlog, setRecentBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Fetch Blogs
  const fetchBlogs = async (page = 1, search = "") => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(
        `/blog?page=${page}&limit=${CARDS_PER_PAGE}&orderBy=desc&search=${search}&type=published`,
      );

      if (res.data?.status) {
        setBlogs(res.data.blogs || []);
        setRecentBlog(res.data.recentBlogs || []);
        setTotalPages(res.data.meta?.totalPages || 1);
      } else {
        setBlogs([]);
        setRecentBlog([]);
        setTotalPages(1);
      }
    } catch (err) {
      console.error(err);
      setBlogs([]);
      setRecentBlog([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage, query);
  }, [currentPage, query]);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  // Recent Blogs (Top 2)
  const Latestblogs = useMemo(() => {
    return recentBlog
      .filter((b) => b.status === "PUBLISHED")
      .slice(0, 2)
      .map((b) => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        desc: b.shortDesc,
        badge: b.category,
        author: "Admin",
        date: formatDate(b.publishedDate),
        image: b.image,
      }));
  }, [recentBlog]);

  const oldblogs = useMemo(() => {
    return blogs
      .filter((b) => b.status === "PUBLISHED")
      .filter(
        (b) =>
          b.title?.toLowerCase().includes(query.toLowerCase()) ||
          b.shortDesc?.toLowerCase().includes(query.toLowerCase()),
      )
      .map((b) => ({
        id: b.id,
        title: b.title,
        slug: b.slug,
        description: b.shortDesc,
        category: b.category,
        author: "Admin",
        date: formatDate(b.publishedDate),
        image: b.image,
      }));
  }, [blogs, query]);

  return (
    <div className="bg-[#f4f5f7] min-h-screen px-4 sm:px-6 lg:px-16 py-10 pt-25 md:pt-35">
      <div className="max-w-7xl mx-auto  text-center mb-5 md:mb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl heading font-bold text-gray-900 leading-tight">
          Celitix Blogs
        </h1>
        <p className="text-lg md:text-xl pera text-gray-600 mt-2 text-justify">
          Blogs written by experts on WhatsApp Business API, bulk SMS campaigns,
          RCS messaging, voice call services, outbound dialer (OBD), chatbot
          automation & CPaaS solutions and omnichannel marketing trends. Read
          in-depth guides, integrations tutorials, industry news, product
          comparisons and growth strategies for the modern business.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {Latestblogs.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Top Image */}
            <div className="relative h-[250] md:h-[300px] w-full">
              <img
                src={
                  item.image
                    ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${item.image.replace(/\\/g, "/")}`
                    : "/no-image.png"
                }
                alt={item.title}
                className="h-full w-full object-fit"
              />

              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#69727D] text-white text-xs px-4 py-1 rounded-full tracking-wide sub-heading">
                {item.badge}
              </div>
            </div>

            {/* Content */}
            <div className="p-3 md:p-6 bg-[#F1F1F6] h-full">
              <h2 className="text-2xl md:text-3xl font-semibold heading text-gray-900 leading-snug cursor-pointer hover:text-purple-700">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-700 pera text-sm leading-relaxed">
                {item.desc}
              </p>

              <Link
                href={`/blog/${item.slug}`}
                className="mt-6 inline-block text-[12px] font-semibold text-gray-900 hover:text-purple-700 transition"
              >
                READ MORE »
              </Link>

              <div className="mt-6 text-xs text-gray-400 flex items-center gap-2">
                <span>{item.author}</span>
                <span>•</span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#f4f5f7] min-h-screen px-6 md:px-16 py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {oldblogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-[210px] w-full">
                <img
                  src={
                    blog.image
                      ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${blog.image.replace(/\\/g, "/")}`
                      : "/no-image.png"
                  }
                  alt={blog.title}
                  className="h-full w-full object-fit"
                />

                <div className="absolute top-4 right-4 bg-[#69727D] text-white text-[11px] px-4 py-1 rounded-full tracking-wide sub-heading">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 bg-[#F1F1F6] h-full">
                <h3 className="text-[18px] font-semibold heading text-gray-900 leading-snug cursor-pointer hover:text-purple-700">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm pera leading-relaxed line-clamp-3">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-6 inline-block text-[12px] font-semibold hover:text-purple-700"
                >
                  READ MORE »
                </Link>

                <div className="mt-8 text-[12px] text-gray-400">
                  {blog.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
