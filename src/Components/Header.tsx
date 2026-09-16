import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useValues } from "./Global"

export default function Header() {
    const { setimage1} = useValues();

    const handleImage = (e: ChangeEvent<HTMLInputElement>, setImage: Dispatch<SetStateAction<string | ArrayBuffer>>) => {
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
        <header className="bg-primary px-2 py-1 text-white d-flex justify-content-between align-items-center">
            <h1 className="h2">Quick Poster</h1>
            <input className="d-none"
                onChange={(e) => handleImage(e, setimage1)}
                type="file" name="pic-1" id="pic-1"
                accept=".jpg,.png,.jpeg"
            />
        </header>
    )
}