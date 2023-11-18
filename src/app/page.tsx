import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="relative mx-auto flex min-h-[100svh] max-w-lg flex-col border-2 bg-gray-50">
      <Header />
      <BottomNav />
    </main>
  );
}

function Header() {
  return (
    <header className="px-4 py-2 backdrop-blur">
      <div className="text-2xl font-bold italic">SVK Shop</div>
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="absolute bottom-0 w-full border-t-2 pb-3 pt-2">
      <ul className="flex flex-row justify-between px-10">
        <li className="flex flex-col items-center justify-center gap-1">
          <div className="flex aspect-square  content-center justify-center">
            <HomeIcon className="w-7" />
          </div>
          <span className="text-xs uppercase">홈</span>
        </li>
        <li className="flex flex-col items-center justify-center gap-1">
          <div className="flex aspect-square  content-center justify-center">
            <MagnifyingGlassIcon className="w-7" />
          </div>
          <span className="text-xs uppercase">검색</span>
        </li>
        <li className="flex flex-col items-center justify-center gap-1">
          <div className="flex aspect-square  content-center justify-center">
            <UserIcon className="w-7" />
          </div>
          <span className="text-xs uppercase">마이페이지</span>
        </li>
      </ul>
    </nav>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
