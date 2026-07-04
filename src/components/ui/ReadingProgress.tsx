"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ReadingProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const handle = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight * 100, 100) : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [pathname]);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-zinc-200/50 dark:bg-zinc-800/50">
      <div className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
