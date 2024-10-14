import { useParams } from "react-router-dom";

export default function Categories() {
  const params = useParams();
  console.log(params)
  return (
    <>
      <h2>Categories</h2>
    </>
  );
}
