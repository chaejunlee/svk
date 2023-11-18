"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { ko } from "date-fns/locale";

export default function BookForm() {
  return (
    <form className="pb-8">
      <h3 className="px-6 py-4 text-xl font-semibold">날짜 선택</h3>
      <DatePicker />

      <h3 className="px-6 py-4 text-xl font-semibold">시간 선택</h3>
      <TimePicker />

      <h3 className="px-6 py-4 text-xl font-semibold">인원 수</h3>
      <div className="p-4">
        <Input
          type="number"
          min={1}
          placeholder="인원 수를 입력해주세요."
          className="w-1/2 text-lg"
          defaultValue={1}
        />
      </div>
    </form>
  );
}

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <div className="p-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flex rounded-lg"
          fromDate={new Date()}
          disabled={[new Date("2023-11-30")]}
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

function TimePicker() {
  const possibleTimes = [
    { time: "10:00", available: true },
    { time: "11:00", available: true },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: true },
  ];
  const [time, setTime] = useState<string | undefined>(undefined);
  return (
    <>
      <div className="p-4">
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
