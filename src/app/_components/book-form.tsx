"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { type Dispatch, type SetStateAction, useState } from "react";
import { ko } from "date-fns/locale";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function BookForm({ id }: { id: string }) {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [people, setPeople] = useState<number>(1);

  const { isLoading, mutate } = api.book.mutate.useMutation({
    onSuccess: () => {
      router.push("/mypage/book");
    },
  });

  return (
    <form
      className="py-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!date || !time) {
          alert("날짜와 시간을 선택해주세요.");
          return;
        }
        await new Promise((resolve, reject) => {
          const result = window.confirm("예약하시겠습니까?");
          if (result) {
            resolve(result);
          } else {
            reject(null);
          }
        });
        mutate({
          postId: Number.parseInt(id),
          date: date,
          time: time,
          people: people,
        });
      }}
    >
      <h3 className="px-6 text-xl font-semibold">날짜 선택</h3>
      <DatePicker {...{ date, setDate }} />

      <h3 className="px-6 py-4 text-xl font-semibold">시간 선택</h3>
      <TimePicker {...{ time, setTime }} />

      <h3 className="px-6 py-4 text-xl font-semibold">인원 수</h3>
      <div className="px-4 pb-8">
        <Input
          type="number"
          min={1}
          placeholder="인원 수를 입력해주세요."
          className="w-1/2 text-base"
          defaultValue={people}
          onChange={(e) => {
            setPeople(Number(e.target.value));
          }}
        />
      </div>

      <div className="px-4">
        <Button
          className="w-full cursor-pointer py-6 text-lg"
          type="submit"
          variant="default"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          예약하기
        </Button>
      </div>
    </form>
  );
}

function DatePicker({
  date,
  setDate,
}: {
  date?: Date;
  setDate?: Dispatch<SetStateAction<Date | undefined>>;
}) {
  return (
    <>
      <div className="p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flex rounded-lg"
          fromDate={new Date()}
          locale={ko}
          formatters={{
            formatCaption: (date) =>
              `${date.toLocaleString("ko", {
                year: "numeric",
                month: "long",
              })}`,
          }}
        />
      </div>
    </>
  );
}

function TimePicker({
  time,
  setTime,
}: {
  time?: string;
  setTime?: Dispatch<SetStateAction<string | undefined>>;
}) {
  const possibleTimes = [
    { time: "10:00", available: true },
    { time: "11:00", available: true },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
  ];
  return (
    <>
      <div className="px-4 pb-6">
        <RadioGroup
          value={time}
          onValueChange={setTime}
          className="grid grid-cols-4"
        >
          {possibleTimes.map((t) => (
            <div key={t.time}>
              <RadioGroupItem
                id={t.time}
                value={t.time}
                disabled={!t.available}
                className="sr-only hidden"
              />
              <Button
                asChild
                className="h-12 w-full cursor-pointer transition"
                type="button"
                variant={
                  t.available
                    ? time === t.time
                      ? "default"
                      : "outline"
                    : "ghost"
                }
              >
                <Label htmlFor={t.time} key={t.time}>
                  {t.time}
                </Label>
              </Button>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
}
