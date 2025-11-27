import { AnimatePresence, motion } from "framer-motion"
import { useValues } from "./Global"
import type { ReactNode } from "react";

export default function EditDialog() {
    const { setnameEditOpen, setname, name, nameEditOpen, titleEditOpen, settitleEditOpen,
        messageEditOpen, setmessageEditOpen, settitle, setmessage, title, message } = useValues();

    function Container({ children, value }: { children: ReactNode, value: boolean }) {
        return <AnimatePresence>
            {value && <dialog open={true} >
                <motion.div
                    initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                    animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    exit={{ backgroundColor: "rgba(0,0,0,0)" }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100vw", height: "100vh", }}>
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        className="bg-white rounded p-2 mx-auto" style={{ width: "400px", maxWidth: "100%" }}>
                        {children}
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary" onClick={() => {
                                setnameEditOpen(false); setmessageEditOpen(false); settitleEditOpen(false)
                            }}>Close</button>
                        </div>
                    </motion.div>
                </motion.div>
            </dialog>}
        </AnimatePresence>
    }

    return (
        <>
            <Container value={nameEditOpen}>
                <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" className="p-1 w-100 mb-1" />
            </Container>
            <Container value={titleEditOpen}>
                <input type="text" name="name" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Tittle" className="p-1 w-100 mb-1" />
            </Container>
            <Container value={messageEditOpen}>
                <textarea name="name" value={message} onChange={(e) => setmessage(e.target.value)} style={{height:"150px"}} placeholder="Message" className="p-1 w-100 mb-1" />
            </Container>
        </>
    )
}