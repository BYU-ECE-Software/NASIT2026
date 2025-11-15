export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-wide py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Our University. All rights reserved.</p>
        <p>Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
