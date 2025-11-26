import { Link } from "react-router-dom";
import frames from "../utils/frames";

export default function Posters() {

  return (
    <div className=" flex-grow-1 overflow-y-scroll">
      <div className="d-flex justify-content-around gap-1 flex-wrap my-1" >
        <h4 className="w-100 px-2 border-bottom">Select a frame</h4>
        {
          frames.map((Item) => <Link
            to={`/edit/${Item.id}`}
            key={Item.id}
            className="pic-cover"
            style={{}}
          ><Item.Component />
          </Link>)
        }
      </div>
    </div>
  )

}