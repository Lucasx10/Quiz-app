import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-3">
      <p className="text-lg text-center">Teste seus conhecimentos sobre ciência da computação !</p>
      <Link href="/quiz">
        <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">
          Start Quiz
        </button>
      </Link>
    </main>
  );
}
