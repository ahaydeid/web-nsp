export default function Footer() {
  return (
    <footer className="w-full bg-yellow-100 py-2">
      <div className="mx-auto max-w-5xl px-4 flex flex-col items-center gap-2">
        {/* Copyright */}
        <p className="text-xs text-gray-700 mt-2">© {new Date().getFullYear()} New Smart People. All rights reserved.</p>
        <p className="text-xs text-gray-700">
          by {" "}
          <a href="https://ahadi.my.id/" target="_blank" rel="noopener noreferrer" className="text-sky-500 font-bold">
            ahadi
          </a>
        </p>
      </div>
    </footer>
  );
}
