import { CreatePost } from "@/app/_components/create-post";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="bg-background relative mx-auto flex h-[100dvh] max-w-lg flex-col overflow-scroll border-2">
      <Header />
      <MainPosts />
      <BottomNav />
    </main>
  );
}

function Post() {
  return (
    <Card className="overflow-clip rounded-xl border-2">
      <div className="relative">
        <Badge variant="default" className="absolute left-4 top-4">
          $$$
        </Badge>
        <Image
          className="h-48 w-full origin-center overflow-hidden object-cover"
          src="https://placehold.co/400/png"
          width="400"
          height="400"
          alt=""
        />
      </div>
      <CardHeader className="">
        <CardTitle className="text-lg leading-7">
          <Link href="/" className="underline">
            롯데 미용실 - Lotte Beauty Salon
          </Link>
        </CardTitle>
        <CardDescription>
          1860 Fillmore St, San Francisco ·{" "}
          <span className="text-primary-500">10 miles away</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link href="/" className="font-semibold underline">
          이채준
        </Link>
        <div>
          <span className="text-primary-500">★ 3.5</span>
          <span className="text-primary-500"> (123)</span>
        </div>
      </CardContent>
    </Card>
  );
}

function MainPosts() {
  return (
    <div className="flex flex-col gap-4 py-6">
      <h3 className="px-4 text-2xl font-bold" id="#aesthetic">
        미용
      </h3>
      <div className="flex flex-col gap-4 px-6">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 isolate z-10 px-4 py-2 backdrop-blur">
      <div className="text-2xl font-bold italic">SVK Shop</div>
    </header>
  );
}

function BottomNav() {
  return (
    <nav className="bg-background text-primary sticky bottom-0 w-full border-t-2 pb-3 pt-2">
      <ul className="flex flex-row justify-around">
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
