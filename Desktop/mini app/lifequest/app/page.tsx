import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Добро пожаловать!
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Нажмите кнопку ниже, чтобы начать
          </p>
          <Link
            href="/frontend/hobbies_page"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium"
          >
            Начать
          </Link>
        </div>
      </main>
    </div>
  );
}