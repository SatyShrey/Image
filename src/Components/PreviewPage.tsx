import { useParams } from "react-router-dom";
import { useValues } from "./Global";
import convertImage from "../utils/converter";
import ErrorScreen from "./ErrorScreen";
import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import frames from "../utils/frames";

export default function EditPage() {
    const { id } = useParams()
    const Item = frames[parseInt(id as string)];
    const { divRef, name, title } = useValues();
    const [loading, setloading] = useState(false)

    if (!Item) { return <ErrorScreen error="Frame not found" /> }
    if (loading) { return <LoadingScreen text="Saving file..." type="bar" /> }

    return (
        <>
            <div className="overflow-y-scroll flex-grow-1">
                <div className="text-center my-1 mx-auto" ref={divRef} style={{ width: "fit-content" }}>
                    <Item />
                </div>
            </div>
            <div className="py-1 bg-primary text-center">
                <button 
                className="btn btn-info fw-bold p-2"
                style={{width:"260px"}}
                 onClick={async () => {
                    const filename = (title + "-" + name).replaceAll(' ', '-').replaceAll('.', '_');
                    setloading(true)
                    await convertImage(divRef.current as HTMLElement, filename);
                    setloading(false)
                }}>Save Poster</button>
            </div>
        </>
    )
}