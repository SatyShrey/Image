import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useValues } from "./Global"
import { Image, Menu, PenLine, } from "lucide-react";

export default function Header() {
    const { setnameEditOpen, settitleEditOpen, setmessageEditOpen, setimage1, setbackground1, setnavOpen } = useValues();

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

    if (location.pathname.includes("capture")) {
        return null;
    }


    return (
        <header className="bg-primary px-2 py-1 text-white d-flex justify-content-between align-items-center">
            <h1 className="h2">Quick Poster</h1>
            <input className="d-none" onChange={(e) => handleImage(e, setimage1 as Dispatch<SetStateAction<string>>)} type="file" name="pic-1" id="pic-1" accept=".jpg,.png,.jpeg" />
            <input className="d-none" onChange={(e) => handleImage(e, setbackground1 as Dispatch<SetStateAction<string>>)} type="file" name="bg-1" id="bg-1" accept=".jpg,.png,.jpeg" />
            <nav className="d-none flex-grow-1 justify-content-evenly d-md-flex gap-1">
                <button className="btn btn-info" onClick={() => setnameEditOpen(true)}>Name<PenLine className="d-inline" size={16} /></button>
                <button className="btn btn-info" onClick={() => settitleEditOpen(true)}>Title<PenLine className="d-inline" size={16} /></button>
                <button className="btn btn-info" onClick={() => setmessageEditOpen(true)}>Message<PenLine className="d-inline" size={16} /></button>
                <label className="btn btn-info" htmlFor="pic-1">Change <Image className="d-inline" size={16} /></label>
            </nav>
            <button className="btn btn-info d-md-none" onClick={() => setnavOpen(true)}>
                <Menu />
            </button>
        </header>
    )
}