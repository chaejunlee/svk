import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./_components/navigation";
import { BottomNav } from "./_components/bottom-nav";
import { api } from "@/trpc/server";

export default function Home() {
  return (
    <>
      <MainPosts />
      <BottomNav>
        <Navigation />
      </BottomNav>
    </>
  );
}

const itemMap = {
  aesthetic: "미용/헤어/네일",
  restaurant: "식당/카페/베이커리",
  housing: "월세/룸 쉐어",
};

async function MainPosts() {
  const posts = await api.post.getAllPosts.query();

  const aesthetic = posts.posts.filter(
    (post) => post.storePost.description === itemMap.aesthetic,
  );
  const restaurant = posts.posts.filter(
    (post) => post.storePost.description === itemMap.restaurant,
  );
  // const housing = posts.posts.filter(
  //   (post) => post.storePost.description === itemMap.housing,
  // );

  return (
    <div className="flex flex-col gap-4 py-6 pb-24">
      <h3
        className="flex items-center justify-between px-6 pb-4 pt-10 text-2xl font-bold"
        id="#aesthetic"
      >
        미용/헤어/네일
        <Link href="/search?item=aesthetic" className="text-sm underline">
          더보기
        </Link>
      </h3>
      <div className="flex flex-col gap-6 px-6">
        {aesthetic.map((post) => (
          <Post key={post.storePost.id} props={post} />
        ))}
      </div>

      <h3 className="flex items-center justify-between px-6 pb-4 pt-20 text-2xl font-bold">
        식당/카페/베이커리
        <Link href="/search?item=restaurant" className="text-sm underline">
          더보기
        </Link>
      </h3>
      <div className="flex flex-col gap-6 px-6">
        {restaurant.map((post) => (
          <Post key={post.storePost.id} props={post} />
        ))}
      </div>
    </div>
  );
}

function Post({
  props,
}: {
  props: {
    user: {
      id: string;
      name: string | null;
      email: string;
      emailVerified: Date | null;
      image: string | null;
    } | null;
    storePost: {
      id: number;
      description: string | null;
      title: string | null;
      owner: string | null;
      location: string | null;
      price: string | null;
    };
  };
}) {
  const rating = Math.round(Math.random() * 5 * 10) / 10;
  const reviews = Math.round(Math.random() * 1000);
  return (
    <Card className="overflow-clip rounded-xl border-2">
      <div className="relative">
        <Badge variant="default" className="absolute left-4 top-4">
          {props.storePost.price}
        </Badge>
        <Image
          className="h-48 w-full origin-center overflow-hidden object-cover"
          src={`https://picsum.photos/id/44${props.storePost.id}/400/400`}
          width="400"
          height="400"
          alt=""
        />
      </div>
      <CardHeader className="">
        <CardTitle className="text-lg leading-7">
          <Link href={"/post/" + props.storePost.id} className="underline">
            {props.storePost.title}
          </Link>
        </CardTitle>
        <CardDescription>
          {props.storePost.location} ·{" "}
          <span className="text-primary-500">10 miles away</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link href="/" className="font-semibold underline">
          {props.user?.name}
        </Link>
        <div>
          <span className="text-primary">★ {rating}</span>
          <span className="text-primary"> ({reviews})</span>
        </div>
      </CardContent>
    </Card>
  );
}
