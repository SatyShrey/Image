import { AnimatePresence, motion } from "framer-motion";
import { useValues } from "./Global";

export default function SideNav() {
  const { setnameEditOpen, settitleEditOpen,
    setmessageEditOpen, navOpen, setnavOpen } = useValues();
  return (
    <AnimatePresence>
      {navOpen && <dialog open={true} >
        <motion.div
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          transition={{ duration: 0.3 }}
          style={{ width: "100vw", height: "100vh", }} className="d-flex justify-content-end">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }} transition={{ duration: 0.3 }}
            className="bg-dark d-flex flex-column border-primary rounded-top-3 overflow-hidden" style={{ width: "270px", maxWidth: "100%",borderLeft:"1px solid" }}>
            <div className="bg-primary p-1">
              <button className="btn p-2 btn-close" onClick={() => setnavOpen(false)} />
            </div>
            <nav className="flex-grow-1 d-flex gap-2 flex-column p-2">
              <button className="btn btn-info" onClick={() => setnameEditOpen(true)}>Edit Name</button>
              <button className="btn btn-info" onClick={() => settitleEditOpen(true)}>Edit Title</button>
              <button className="btn btn-info" onClick={() => setmessageEditOpen(true)}>Edit Message</button>
              <label className="btn btn-info" htmlFor="pic-1">Change Photo</label>
            </nav>
          </motion.div>
        </motion.div>
      </dialog>}
    </AnimatePresence>
  )
}