import Booking from "./components/booking";

export default function Page() {
  return (
    <section className="flex flex-col">
      <h3 className="px-6 py-6 text-xl font-semibold">예약 관리</h3>
      <div className="flex flex-col gap-4 px-6">
        <Booking status="pending">
          <div className="flex flex-col p-4">
            <div className="text-lg font-bold">홍길동</div>
            <div>2023-11-18</div>
            <div>11:30</div>
            <div>2명</div>
          </div>
        </Booking>

        <Booking status="approved">
          <div className="flex flex-col p-4">
            <div className="text-lg font-bold">노진구</div>
            <div>2023-11-18</div>
            <div>11:30</div>
            <div>2명</div>
          </div>
        </Booking>

        <Booking status="cancelled">
          <div className="flex flex-col p-4">
            <div className="text-lg font-bold">짱구</div>
            <div>2023-11-18</div>
            <div>11:30</div>
            <div>2명</div>
          </div>
        </Booking>

        <Booking status="history">
          <div className="flex flex-col p-4">
            <div className="text-lg font-bold">이슬이</div>
            <div>2023-11-18</div>
            <div>11:30</div>
            <div>2명</div>
          </div>
        </Booking>
      </div>
    </section>
  );
}
