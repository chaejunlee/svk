import { api } from "@/trpc/server";
import Booking from "./components/booking";

export default async function Page() {
  const books = await api.book.manageBooks.query();
  console.log(books);
  return (
    <section className="flex min-h-screen flex-col">
      <h3 className="px-6 py-6 text-xl font-semibold">예약 관리</h3>
      <div className="flex flex-col gap-4 px-6">
        {books.map((book) => {
          return (
            <Booking
              key={book.books.id}
              props={{
                storePost: book.storePost!,
                books: book.books!,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
