"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormValues = {
  item: string;
  location: string;
  priceLow: string;
  priceHigh: string;
};

export default function Page() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    router.push(`/search/result?low=${data.priceLow}&high=${data.priceHigh}`);

  return (
    <div className="min-h-screen">
      <form
        className="flex flex-col gap-4 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label className="text-sm font-semibold">검색어</Label>
          <Input
            type="text"
            className="mt-2 text-base"
            placeholder="검색어를 입력해주세요."
            {...register("item")}
          />
        </div>
        <div>
          <Label className="text-sm font-semibold">아이템</Label>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="항목" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectItem value="aesthetic">미용/헤어/네일</SelectItem>
              <SelectItem value="restaurants">식당/카페/베이커리</SelectItem>
              <SelectItem value="housing">월세/룸 쉐어</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-sm font-semibold">위치</Label>
          <Input
            type="mt-2 text"
            className="mt-4 text-base"
            placeholder="위치를 입력해주세요."
            {...register("location")}
          />
        </div>
        <div>
          <Label className="text-sm font-semibold">가격</Label>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold">$</span>
              <Input
                type="mt-2 number"
                className="grow text-base"
                placeholder="최소 가격"
                defaultValue={10}
                {...register("priceLow")}
              />
            </div>
            <span className="text-lg font-bold">~</span>
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold">$</span>
              <Input
                type="number"
                className="grow text-base"
                placeholder="최대 가격"
                defaultValue={50}
                {...register("priceHigh")}
              />
            </div>
          </div>
        </div>
        <div>
          <Button type="submit" className="w-full ">
            검색
          </Button>
        </div>
      </form>
    </div>
  );
}
