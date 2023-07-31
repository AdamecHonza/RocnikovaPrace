import Input from "../components/Inputs";
import NavigationBarReserve from "../components/NavbarReserve";


export default function ReservationPage() {
  return (
    <>
      <NavigationBarReserve />
      <h1 className="reserveHeader">Reserve to the concert</h1>
      <Input />
    </>
  );
}
