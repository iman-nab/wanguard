import React from "react";

export default function Button({ className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-0 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <button className={base + " " + className} {...props}>
      {children}
    </button>
  );
}
