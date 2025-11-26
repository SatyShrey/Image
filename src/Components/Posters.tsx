import { Link } from "react-router-dom";
import frames from "../utils/frames";

export default function Posters() {

  return (
    <div style={{ flexGrow: 1, overflowY: "scroll", scrollbarWidth: "thin" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: '5px', flexWrap: "wrap", marginBlock: "5px" }}>
        <h4 className="w-100 px-2 border-bottom">Select a frame</h4>
        {
          frames.map((Item) => <Link
            to={`/edit/${Item.id}`}
            key={Item.id}
            className="text-center text-decoration-none pic-cover"
            style={{}}
          ><Item.Component />
          </Link>)
        }
      </div>
    </div>
  )

}