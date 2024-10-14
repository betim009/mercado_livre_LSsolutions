import { useContext } from "react";
import "./home.css";
import Context from "../../context/Context";

import MapItems from "../../components/mapItems";

export default function Home() {
  const { data } = useContext(Context);
  console.log("estou aqui", data);

  return (
    <div>
      <h2>Home</h2>
      {!data ? "Loading" : <MapItems items={data} />}
    </div>
  );
}
