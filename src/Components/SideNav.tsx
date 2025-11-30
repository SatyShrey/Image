import { AnimatePresence, motion } from "framer-motion";
import { useValues } from "./Global";
import { ImagePlus } from "lucide-react";

export default function SideNav() {
  const { setname, settitle,
    setmessage, navOpen, setnavOpen,name,title,message,image1 } = useValues();
  return (
    <AnimatePresence>
      {navOpen && <dialog open={true} className=" d-md-none" >
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
            className="bg-dark d-flex flex-column border-info overflow-hidden" style={{ width: "100%", maxWidth: "100%", borderLeft: "1px solid", }}>
            <div className="bg-info p-1">
              <button className="btn p-2 btn-close" onClick={() => setnavOpen(false)} />
            </div>
            <div className="flex-grow-1 d-flex flex-column p-2 overflow-y-scroll">
              <label className="rounded-circle mx-auto overflow-hidden border border-info flex-shrink-0 position-relative pointer" htmlFor="pic-1" style={{width:"150px",height:"150px"}}>
                <img src={image1 as string} alt="image" className="w-100" />
                <span className=" d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0 text-info" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <ImagePlus size={50}/>
                </span>
              </label>
              <h6 className="text-info m-1">Edit Header</h6>
                <input type="text" name="name" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Tittle" className="px-2 w-100 mb-2 border border-info rounded-2 focus-ring focus-ring-info" style={{height:"45px",}}/>
              <h6 className="text-info m-1">Edit Name</h6>
              <input type="text" name="name" value={name} onChange={(e) => setname(e.target.value)} placeholder="Name" className="px-2 w-100 mb-2 border border-info rounded-2 focus-ring focus-ring-info" style={{height:"45px",}} />
              <h6 className="text-info m-1">Edit Message</h6>
                <textarea name="name" value={message} onChange={(e) => setmessage(e.target.value)} placeholder="Message" className="px-2 w-100 mb-2 border border-info rounded-2 focus-ring focus-ring-info" style={{height: "150px"}} />
            </div>
          </motion.div>
        </motion.div>
      </dialog>}
    </AnimatePresence>
    
  )
}