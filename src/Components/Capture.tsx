import { useParams } from "react-router-dom";
import frames from "../utils/frames";
import { useValues } from "./Global";
import ErrorScreen from "./ErrorScreen";

export default function Capture() {
    const { id } = useParams()
    const Item = frames.filter(item => item.id === id)[0];
    const { divRef } = useValues();

    if (!Item) { return <ErrorScreen error="Frame not found" /> }

    return (
        <div className="overflow-y-scroll flex-grow-1">
            <div className="text-center my-1 mx-auto" ref={divRef} style={{ width: "fit-content" }}>
                <Item.Component />
            </div>
        </div>
    )
}