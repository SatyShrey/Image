import { useParams } from "react-router-dom";
import frames from "../utils/frames";
import { useValues } from "./Global";
import convertImage from "../utils/converter";
import ErrorScreen from "./ErrorScreen";

export default function EditPage() {
    const { id } = useParams()
    const Item = frames.filter(item => item.id === id)[0];
    const { divRef, name, title } = useValues();

    if (!Item) { return <ErrorScreen error="Frame not found" /> }

    return (
        <div className="overflow-y-scroll flex-grow-1">
            <div className="text-center my-1 mx-auto" ref={divRef} style={{ width: "fit-content" }}>
                <Item.Component />
            </div>
            <div className="mx-auto my-2" style={{ width: "300px" }}>
                <button className="btn btn-primary w-100" onClick={() => {
                    const filename = (title + "-" + name).replaceAll(' ', '-').replaceAll('.', '_');
                    convertImage(divRef.current as HTMLElement, filename)
                }}>Save Poster</button>
            </div>
        </div>
    )
}