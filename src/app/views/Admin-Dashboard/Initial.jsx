import Header from "../../components/Header";
import "../../styles/admin.css";
import Address from "../Address";
export default function Initial() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Address></Address>
      </div>
    </>
  );
}
