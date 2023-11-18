"use client";

import { api } from "@/trpc/react";

export function Confirm({ id }: { id: number }) {
  const { mutate } = api.book.confirm.useMutation({
    onSuccess: () => {
      location.reload();
    },
  });

  return (
    <div className="relative flex justify-end gap-2 pt-4">
      <button
        className="cursor-pointer rounded-lg border-2 border-blue-300 px-2 py-1 text-blue-400 hover:bg-blue-100"
        onClick={() => {
          mutate({ id, status: "confirmed" });
        }}
      >
        예약 확정
      </button>
      <button
        className=" cursor-pointer rounded-lg border-2 border-red-300 px-2 py-1 text-red-400 hover:bg-red-100"
        onClick={() => {
          mutate({ id, status: "cancelled" });
        }}
      >
        취소
      </button>
    </div>
  );
}
