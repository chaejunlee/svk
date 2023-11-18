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
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./_components/navigation";
import { BottomNav } from "./_components/bottom-nav";

export default async function Home() {
  const session = await getServerAuthSession();

  // if (!session?.user) {
  //   return (
  //     <div className="flex h-[100dvh] flex-col items-center justify-center">
  //       <h1 className="text-3xl font-bold">Welcome to SVK Shop</h1>
  //       <p className="text-lg">Please log in to continue.</p>
  //       <Link
  //         href="/api/auth/signin"
  //         className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
  //       >
  //         Sign in
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <>
      <MainPosts />
      <BottomNav>
        <Navigation />
      </BottomNav>
    </>
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
          <Link href="/post" className="underline">
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
          <span className="text-primary">★ 3.5</span>
          <span className="text-primary"> (123)</span>
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
      <div className="flex flex-col gap-6 px-6">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
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
