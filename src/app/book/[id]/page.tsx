import BookForm from "../../_components/book-form";
import GoBack from "../../_components/goback";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <GoBack />
      <BookForm />
    </>
  );
}
