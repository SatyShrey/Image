import { AnimatePresence, motion } from "framer-motion"
import { useValues } from "./Global"
import type { ReactNode } from "react";

function Container({ children, value }: { children: ReactNode, value: boolean }) {
    const { setnameEditOpen, settitleEditOpen, setmessageEditOpen, setnavOpen } = useValues();
    return <AnimatePresence>
        {value && <dialog open >
            <motion.div
                initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                exit={{ backgroundColor: "rgba(0,0,0,0)" }}
                transition={{ duration: 0.3 }}
                style={{ width: "100vw", height: "100vh", }}>
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    className="bg-white rounded p-2 mx-auto" style={{ width: "400px", maxWidth: "100%" }}>
                    {children}
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={() => {
                            setnameEditOpen(false);
                            setmessageEditOpen(false);
                            settitleEditOpen(false);
                            setnavOpen(false)
                        }}>Close</button>
                    </div>
                </motion.div>
            </motion.div>
        </dialog>}
    </AnimatePresence>
}

export default function EditDialog() {
    const { setname, name, nameEditOpen, titleEditOpen, messageEditOpen, settitle, setmessage, title, message } = useValues();

    return (
        <>
            <Container value={nameEditOpen}>
                <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" className="px-2 w-100 mb-1 border-0 rounded-2" style={{outline:"none",height:"45px",boxShadow:"0 0 2px"}} />
            </Container>
            <Container value={titleEditOpen}>
                <input type="text" name="name" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Tittle" className="px-2 w-100 mb-1 border-0 rounded-2" style={{outline:"none",height:"45px",boxShadow:"0 0 2px"}}/>
            </Container>
            <Container value={messageEditOpen}>
                <textarea name="name" value={message} onChange={(e) => setmessage(e.target.value)} placeholder="Message" className="px-2 w-100 mb-1 border-0 rounded-2" style={{outline:"none",boxShadow:"0 0 2px",height: "150px"}} />
            </Container>
        </>
    )
}