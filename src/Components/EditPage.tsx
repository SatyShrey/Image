import { useParams } from "react-router-dom";
import frames from "../utils/frames";
import { useValues } from "./Global";
import { useState, type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import convertImage from "../assets/converter";

export default function EditPage() {
    const { id } = useParams()
    const Item = frames.filter(item => item.id === id)[0];
    const { name, setname, divRef, title, settitle, message, setmessage, setimage1, setbackground1 } = useValues();
    const [editName, seteditName] = useState(false)
    const [editTitle, seteditTitle] = useState(false)
    const [editMessage, seteditMessage] = useState(false)

    if (!Item) { return <div className="h-100 w-100 d-flex justify-content-center align-items-center">Loading...</div> }

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
            <div className="text-center my-1 border" style={{ height: "fit-content" }} ref={divRef}>
                <Item.Component />
            </div>
            <div className="d-flex p-2 flex-column gap-1 my-1" style={{ width: "330px", maxWidth: "100%" }}>
                <h4 className="text-center px-1 border-bottom">Edit fields</h4>
                <button className="px-1 bg-black text-white border-0 py-2" onClick={() => {
                    seteditName(true); seteditMessage(false); seteditTitle(false)
                }}>
                    Edit Name
                </button>
                {editName && <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} className="w-100 p-1" />}
                <button className="px-1 bg-black text-white border-0 py-2" onClick={() => {
                    seteditName(false); seteditMessage(false); seteditTitle(true)
                }}>
                    Edit Title
                </button>
                {editTitle && <input type="text" placeholder="Title" value={title} onChange={(e) => settitle(e.target.value)} className="p-1 w-100" />}
                <button className="px-1 bg-black text-white border-0 py-2" onClick={() => {
                    seteditName(false); seteditMessage(true); seteditTitle(false)
                }}>
                    Edit Message
                </button>
                {editMessage && <textarea value={message} onChange={(e) => setmessage(e.target.value)} className="p-1 w-100" style={{ minHeight: "150px" }} />}
                <input type="file" accept=".jpg,.jpeg,.png" id="change-pic1" className="d-none" onChange={(e) => {
                    handleImage(e, setimage1 as Dispatch<SetStateAction<string>>)
                }} />
                <label htmlFor="change-pic1" className="px-1 bg-black text-white pointer py-2 text-center">
                    Change Profile Pic
                </label>
                <input type="file" accept=".jpg,.jpeg,.png" id="change-bg1" className="d-none" onChange={(e) => {
                    handleImage(e, setbackground1 as Dispatch<SetStateAction<string>>)
                }} />
                <label htmlFor="change-bg1" className="px-1 bg-black text-white pointer py-2 text-center" >
                    Change Background
                </label>
                <button className="px-1 bg-primary text-white border-0 py-2" onClick={() => {
                    convertImage(divRef.current as HTMLDivElement, title + "-" + name)
                }}>
                    Save Poster
                </button>
            </div>
        </div>
    )
}