"use client";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200">
      <div className="container-wide py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          NASIT 2026
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
