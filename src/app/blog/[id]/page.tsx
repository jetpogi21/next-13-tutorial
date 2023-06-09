import Image from "next/image";
import React from "react";
import { TPost } from "../page";
import { notFound } from "next/navigation";

async function getData({ id }: { id: string }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

interface CategoryProps {
  params: {
    id: string;
  };
}

//prettier-ignore
//@ts-expect-error Async Server Component
const BlogPost: React.FC<CategoryProps> = async ({ params }) => {
  const id = params.id;

  const blog = (await getData({id})) as unknown as TPost;
  
  const renderParagraphs = () => {
    const paragraphs = [];
    for (let i = 0; i < 5; i++) {
      paragraphs.push(
        <p className="text-lg" key={i}>
          {blog.body || "no body detected"}
        </p>
      );
    }

    return paragraphs;
  };
  return (
    <div className="flex flex-col gap-5">
      {/* first row */}
      <div className="flex gap-5">
        {/* blog detail */}
        <div className="flex flex-col flex-1 gap-5">
          <h1 className="text-3xl font-extrabold ">{blog.title || "Title"}</h1>
          <p className="text-lg">{blog.body || "no body detected"}</p>
          <div className="flex gap-5  h-[36px]">
            <Image
              src="/avatar.jpg"
              alt="avatar.jpg"
              height={36}
              width={36}
              className="object-cover rounded-full"
            />
            <span className="self-center text-lg">Jonathan P.</span>
          </div>
        </div>
        {/* blog image */}
        <div className="relative shrink-0 basis-[400px] h-[480px]">
          <Image
            src={`/blog-1.jpg`}
            alt={`blog-${blog.id || "1"}`}
            fill={true}
            
            className="object-contain"
          />
        </div>
      </div>

      {/* second row */}
      {renderParagraphs()}
    </div>
  );
};

export default BlogPost;
