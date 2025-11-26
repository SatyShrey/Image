import { useParams } from "react-router-dom";
import frames from "../utils/frames";
import { useValues } from "./Global";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import convertImage from "../assets/converter";

export default function EditPage() {
    const { id } = useParams()
    const Item = frames.filter(item => item.id === id)[0];
    const { name, setname, divRef, title, settitle, message, setmessage, setimage1, setbackground1, image1, background1 } = useValues()
    if (!Item) { return }

    const handleImage = (e: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string>>) => {
        const files = e.target.files;
        if (!files) { return }
        const file = files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                setImage(e.target?.result as string)
            };
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="flex-grow-1 overflow-y-scroll d-flex justify-content-center flex-wrap">
            <div className="text-center my-1 border" style={{height:"fit-content"}} ref={divRef}>
                <Item.Component />
            </div>
            <div className="d-flex p-2 flex-column gap-1 my-1">
                <h4 className="text-center">Edit fields</h4>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} className="p-1" style={{ width: "330px", maxWidth: "100%" }} />
                <input type="text" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} className="p-1" style={{ width: "330px", maxWidth: "100%" }} />
                <textarea value={message} onChange={(e) => setmessage(e.target.value)} className="p-1" style={{ width: "330px", maxWidth: "100%", minHeight: "150px",scrollbarWidth:"none" }} />
                <input type="file" accept=".jpg,.jpeg,.png" id="change-pic1" className="d-none" onChange={(e) => {
                    handleImage(e, setimage1 as Dispatch<SetStateAction<string>>)
                }} />
                <label htmlFor="change-pic1" className="p-1 bg-black text-white d-flex align-items-center" style={{ width: "330px", maxWidth: "100%",cursor:"pointer" }}>
                    <img src={image1 as string} alt="pic" width={35} height={35} /> <span className=" flex-grow-1 text-center">Change Profile Pic</span>
                </label>
                <input type="file" accept=".jpg,.jpeg,.png" id="change-bg1" className="d-none" onChange={(e) => {
                    handleImage(e, setbackground1 as Dispatch<SetStateAction<string>>)
                }} />
                <label htmlFor="change-bg1" className="p-1 bg-black text-white d-flex align-items-center" style={{ width: "330px", maxWidth: "100%",cursor:"pointer" }}>
                    <img src={background1 as string} alt="pic" width={35} height={35} /> <span className=" flex-grow-1 text-center">Change Background</span>
                </label>
                <button className="p-1 bg-primary text-white border-0 py-2" style={{ width: "330px", maxWidth: "100%" }} onClick={() => {
                    convertImage(divRef.current as HTMLDivElement,title+"-"+name)
                }}>
                    Save Poster
                </button>
            </div>
        </div>
    )
}