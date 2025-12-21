import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useValues } from "./Global"
import { ImagePlus, Menu, PenLine, } from "lucide-react";

export default function Header() {
    const { setnameEditOpen, settitleEditOpen, setmessageEditOpen, setimage1,image1 } = useValues();

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
           
            <nav className="d-none flex-grow-1 justify-content-evenly d-md-flex gap-1">
                <button className="btn btn-info" onClick={() => settitleEditOpen(true)}>Header<PenLine className="d-inline" size={16} /></button>
                <button className="btn btn-info" onClick={() => setnameEditOpen(true)}>Name<PenLine className="d-inline" size={16} /></button>
                <button className="btn btn-info" onClick={() => setmessageEditOpen(true)}>Message<PenLine className="d-inline" size={16} /></button>
            </nav>
             <label className="rounded-circle mx-auto overflow-hidden border d-md-block d-none position-relative pointer" htmlFor="pic-1" style={{width:"60px",height:"60px"}}>
                <img src={image1 as string} alt="image" className="w-100" />
                <span className=" d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0 text-info" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <ImagePlus size={30}/>
                </span>
              </label>
            <button className="btn btn-info d-md-none" onClick={() => {
                (document.getElementById("sidenav") as HTMLDialogElement).showModal();
            }}>
                <Menu />
            </button>
        </header>
    )
}