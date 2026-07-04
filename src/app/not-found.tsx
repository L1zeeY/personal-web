import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-zinc-200 dark:text-zinc-800">404</h1>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">页面不存在</p>
        <Link href="/" className="mt-6 inline-block text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline">
          返回首页
        </Link>
      </div>
    </main>
  );
}
