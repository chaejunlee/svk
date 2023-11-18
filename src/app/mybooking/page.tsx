import Booking from "./components/booking";

export default function Page() {
  return (
    <main className="flex flex-col">
      <div>
        <Booking status="pending">
          <div className="flex flex-col">
            <div>홍길동</div>
            <div className="flex gap-3">
              <div>2023-11-18</div>
              <div>11:30 - 13:30</div>
              <div>2명</div>
            </div>
          </div>
        </Booking>
      </div>

      <div>
        <Booking status="approved">
          <div>홍길동</div>
          <div>2023-11-18</div>
          <div>11:30 - 13:30</div>
          <div>2명</div>
        </Booking>
      </div>

      <div>
        <Booking status="cancelled">
          <div>홍길동</div>
          <div>2023-11-18</div>
          <div>11:30 - 13:30</div>
          <div>2명</div>
        </Booking>
      </div>

      <div>
        <Booking status="history">
          <div>홍길동</div>
          <div>2023-11-18</div>
          <div>11:30 - 13:30</div>
          <div>2명</div>
        </Booking>
      </div>
    </main>
  );
}
