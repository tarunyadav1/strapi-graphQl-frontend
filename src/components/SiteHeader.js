import { Link } from "react-router-dom";
export default function SiteHeader() {
  return (
    <div>
      <div className="site-header">
        <Link to="/">
          <h1>Ninja Reviews</h1>
        </Link>
      </div>
    </div>
  );
}
