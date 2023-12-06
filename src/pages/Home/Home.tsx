import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="header-home">
        <Header />
      </div>
      <div className="body-home">
        <Body />
      </div>
    </div>
  );
}
