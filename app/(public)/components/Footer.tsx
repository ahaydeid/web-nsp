export default function Footer() {
  return (
    <footer className="w-full bg-yellow-100 py-2">
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-4">
        {/* Copyright */}
        <p className="text-xs text-gray-700 my-2">© {new Date().getFullYear()} New Smart People. All rights reserved.</p>
      </div>
    </footer>
  );
}
