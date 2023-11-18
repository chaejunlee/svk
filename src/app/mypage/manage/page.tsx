import { api } from "@/trpc/server";
import Booking from "./_components/booking";

export default function Page() {
  return (
    <>
      <ManageBooking />
    </>
  );
}

async function ManageBooking() {
  const books = await api.book.manageBooks.query();

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
