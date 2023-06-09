//Generated by GeneratePageFile
import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  text: string;
}
const LinkButton: React.FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <Link
      className="px-4 py-2 text-white bg-green-700 rounded-sm max-w-max"
      href={href}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
