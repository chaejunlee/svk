import { CreatePost } from "@/app/_components/create-post";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="relative mx-auto flex min-h-[100svh] max-w-lg flex-col border-2 bg-gray-50">
      <Header />
      <div className="-my-5">asdfasdfads</div>
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
    <nav className="absolute bottom-0 w-full border-t-2 py-4 ">
      <ul className="flex flex-row justify-between px-8">
        <li className="flex flex-col items-center justify-center">
          <div className="aspect-square w-10 rounded-full bg-gray-300"></div>
          <span className="text-sm uppercase">Home</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="aspect-square w-10 rounded-full bg-gray-300"></div>
          <span className="text-sm uppercase">Search</span>
        </li>
        <li className="flex flex-col items-center justify-center">
          <div className="aspect-square w-10 rounded-full bg-gray-300"></div>
          <span className="text-sm uppercase">My</span>
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
