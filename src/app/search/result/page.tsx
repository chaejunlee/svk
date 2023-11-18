import { api } from "@/trpc/server";
import Image from "next/image";

export default async function Page() {
  const { item } = await api.item.getFilteredItems.query({
    low: 10,
    high: 50,
  });
  console.log(item);
  return (
    <div className="h-[100dvh] pb-16">
      {item.map((i) => (
        <div className="flex items-center gap-5 p-3" key={i.id}>
          <Image
            src={i.url!}
            alt={"item"}
            className="h-24 w-24 rounded-lg bg-blue-100 object-cover"
            width={60}
            height={60}
          />
          <div className="flex w-60 flex-col gap-1">
            <span className="text-lg">{i.item}</span>
            <span className="break text-sm">{i.description}</span>
            <span className=" text-base font-bold">${i.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
