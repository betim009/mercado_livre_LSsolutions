import { Link } from "react-router-dom";
import "./notfound.css";

export default function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
}
