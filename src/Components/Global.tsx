import { createContext, useContext, useRef, useState, type Dispatch, type ReactNode, type RefObject, type SetStateAction } from "react";
import pic1 from "../assets/pic.png";
import bg1 from "../assets/bg.png";

export type ContextValues={
name:string;
setname:Dispatch<SetStateAction<string>>;
divRef:RefObject<HTMLDivElement | null>;
title:string;
message:string;
image1:string | ArrayBuffer ;
background1:string | ArrayBuffer ;
settitle:Dispatch<SetStateAction<string>>;
setmessage:Dispatch<SetStateAction<string>>;
setimage1:Dispatch<SetStateAction<string | ArrayBuffer>>;
setbackground1:Dispatch<SetStateAction<string | ArrayBuffer>>;
}

const Contexts=createContext<ContextValues|null>(null);

export const Provider=({children}:{children:ReactNode})=>{
    const [name, setname] = useState("Satya");
    const [title, settitle] = useState("Happy Birthday");
    const [message, setmessage] = useState("🎉 “Happy Birthday, my dear friend! May your day be filled with laughter, love, and endless joy. You deserve all the happiness in the world today and always. Let’s make more amazing memories together this year!” 🎂✨");
    const [image1, setimage1] = useState<string|ArrayBuffer>(pic1);
    const [background1, setbackground1] = useState<string|ArrayBuffer>(bg1);
    const divRef=useRef<HTMLDivElement>(null)

    return <Contexts.Provider value={{name,setname,divRef,title, settitle,message, setmessage,image1, setimage1,background1, setbackground1}}>
        {children}
    </Contexts.Provider>
}

export const useValues=()=>{
    let values=useContext(Contexts);
    if(!values){
        throw new Error("It's look like you are importing the contexts value from outside the provider")
    }
    return values
}