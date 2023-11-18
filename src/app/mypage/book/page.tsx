import { api } from "@/trpc/server";
import { Book } from "./Book";

export default function Page() {
  return (
    <>
      <MyBooking />
    </>
  );
}

async function MyBooking() {
  const books = await api.book.getBooks.query();

  return (
    <section className="min-h-screen py-6">
      <h3 className="px-6 py-6 text-xl font-semibold">예약 현황</h3>
      <div className="flex flex-col gap-4 px-6">
        {books.map((book) => {
          return (
            <Book
              key={book.books.id}
              props={{
                books: book.books!,
                storePost: book.storePost!,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
