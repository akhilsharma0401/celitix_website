"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ThankyouDesktop } from "../../../../public/assets/images";
import { FaUserCircle } from "react-icons/fa";
import { axiosInstance } from "@/utils/axios";
import { FiCalendar } from "react-icons/fi";
import { useParams } from "next/navigation";
import BlogSkeleton from "../components/BlogSkeleton";

const sanitizeAndAbsolutize = (html = "") => {
  if (!html || typeof html !== "string") return "";

  // Remove script tags
  html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");

  // Remove inline JS
  html = html.replace(/\son[a-z]+\s*=\s*(['"]).*?\1/gi, "");

  // Fix null/undefined links
  html = html.replace(/(src|href)=["'](null|undefined)["']/gi, '$1="#"');

  // Convert relative image paths to absolute
  html = html.replace(
    /src=["'](?!https?:|data:|\/)([^"']+)["']/gi,
    (m, path) => `src="${process.env.NEXT_PUBLIC_API_URL}/${path}"`,
  );

  // Remove inline font-size
  html = html.replace(/style=["'][^"']*font-size:[^;"']*;?[^"']*["']/gi, (m) =>
    m.replace(/font-size:[^;]+;?/gi, ""),
  );

  // Style h2 tags
  html = html.replace(/<h2([^>]*)>/gi, (match, attrs) => {
    const tailwind = "text-xl md:text-3xl font-semibold my-4 leading-snug";

    if (/class=/i.test(attrs)) {
      return match.replace(
        /class=(["'])(.*?)\1/i,
        (m, q, cls) => `class=${q}${cls} ${tailwind}${q}`,
      );
    }

    return `<h2${attrs} class="${tailwind}">`;
  });

  return html;
};

// ------------------ DATE FORMATTER ------------------
function formatDate(dateStr) {
  if (!dateStr) return "—";

  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
export default function PageRef() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Blog
  const fetchBlog = async () => {
    try {
      setLoading(true);

      const res = await axiosInstance.get(`/blog/${slug}`);

      if (res.data?.status) {
        const tag = res?.data?.blog?.tags?.split(",");
        const blog = res.data.blog;
        setBlog({
          ...blog,
        });
      } else {
        setBlog(null);
      }
    } catch (err) {
      console.error(err);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) {
    return <BlogSkeleton />;
  }

  // Not Found
  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center min-h-screen pt-35 flex justify-center items-center">
        <h2 className="text-2xl font-semibold">Blog not found</h2>
      </div>
    );
  }

  const tags = blog?.tags?.split(", ") || [];

  return (
    <div className="bg-[#f4f5f7] min-h-screen px-6 md:px-16 pt-35">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Category Badge */}
          <div className="inline-block bg-gray-200 text-gray-700 text-xs px-4 py-1 rounded-md uppercase tracking-wide font-medium sub-heading">
            {blog.category}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-slate-800">
              <span className="font-semibold">Tags:</span>

              {tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="font-normal text-slate-700 bg-slate-100 py-0.5 rounded-md"
                >
                  {tag} |
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mt-6 text-4xl md:text-5xl heading font-bold text-[#0f172a] leading-tight">
            {blog.title}
          </h1>

          {/* Author + Date */}
          <div className="mt-3 flex items-center gap-6 text-gray-600 text-sm">
            {/* Author */}
            <div className="flex items-center gap-2 sub-heading">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUserCircle className="text-gray-400 text-2xl" />
              </div>
              <span>Celitix Admin</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 sub-heading">
              <FiCalendar className="text-gray-400 text-sm" />
              <span>{formatDate(blog.publishedDate)}</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[350px] md:h-[380px] rounded-2xl overflow-hidden shadow-md">
          <img
            src={
              blog.image?.startsWith("http")
                ? blog.image
                : blog.image
                  ? `${process.env.NEXT_PUBLIC_MEDIA_URL}/${blog.image.replace(/\\/g, "/")}`
                  : "/no-image.png"
            }
            alt={blog.title}
            className="rounded-xl w-full h-full object-fit"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-10 space-y-6 mt-10">
        {/* Full Content */}
        {blog.content && (
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{
              __html: sanitizeAndAbsolutize(blog.content),
            }}
          />
        )}
      </div>
    </div>
  );
}
