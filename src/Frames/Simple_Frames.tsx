import { Flower } from "lucide-react";
import { useValues } from "../Components/Global"
import bg1  from "../assets/bg1.jpg";
import bg2  from "../assets/bg2.png";

export function Frame1() {
  const { image1, title, message, name, setmessageEditOpen, settitleEditOpen, setnameEditOpen } = useValues()
  return (
    <div style={{ width: "340px", backgroundImage:`url(${bg1})`, backgroundSize: "cover" }} className="px-2 border boder-1 rounded-4">
      <div style={{ fontSize: "50px", WebkitTextStrokeColor: "skyblue", WebkitTextStrokeWidth: "2px", textShadow: "10px 10px 10px black" }} className="fw-bolder text-warning" onClick={()=>settitleEditOpen(true)}>{title}</div>
      <label className="rounded-circle overflow-hidden mb-2" style={{ width: "200px", height: "200px", margin: "auto", border: "2px ridge skyblue" }} htmlFor="pic-1">
        <img src={image1 as string} alt="pic" className="w-100" />
      </label>
      {name && <div className="fw-bolder fs-1 text-info" onClick={() => setnameEditOpen(true)}>{name}</div>}
      <div className="text-warning mb-3" onClick={() => setmessageEditOpen(true)} style={{ fontSize: "small" }}>{message}</div>
    </div>
  )
}

export function Frame2() {
  const { image1, title, message, name } = useValues()
  return (
    <div className="border border-warning text-center text-black rounded-3" style={{ width: "340px",backgroundImage:`url(${bg2})`, backgroundSize: "cover" }}>
      <div className="text-info fw-bolder text-center" style={{ fontSize: "40px", WebkitTextStrokeColor: "pink", WebkitTextStrokeWidth: "2px", textShadow: "10px 10px 10px black" }}>{title}</div>
      <div className="mb-1 border border-warning overflow-hidden mx-auto bg-black" style={{ width: "210px", height: "260px" }} >
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <div className="bg-danger-subtle fs-1 fw-bold edu-hand">{name}</div>}
      <div className="px-1 py-2 nunito" style={{backgroundColor:"#ffffff90"}}>{message}</div>
    </div>
  )
}

export function Frame3() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "linear-gradient(pink,#fefefe)", border: "2px dashed #555", borderRadius: "20px" }} className="p-3 text-center">
      <div className="text-danger fw-bold" style={{fontSize:"30px"}}>{title}</div>
      <div style={{ width: "200px", height: "200px", margin: "auto", borderRadius: "50%", overflow: "hidden", border: "2px ridge #f00" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-danger fw-bold mt-2 fs-1 caveat">{name}</p>}
      <p className="text-dark">{message}</p>
    </div>
  )
}

export function Frame4() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "linear-gradient(to bottom right,pink,aqua,pink)", border: "1px solid #ffff",}} className="p-2 rounded-4 text-center">
      <div className="text-danger fw-bold text-primary-emphasis" style={{fontSize:"30px"}}>{title}</div>
      <div className=" position-relative" style={{width:"fit-content",margin:"auto"}}>
        <div style={{ width: "190px", height: "230px", margin: "auto", borderRadius: "15px", overflow: "hidden", border: "2px ridge #000000" }}>
        <img src={image1 as string} alt="pic" className="h-100" />
      </div>
        <Flower size={30} color="rgba(255, 204, 0, 1)" className="position-absolute z-1" style={{bottom:"-5px",right:"-5px"}} />
        <Flower size={30} color="rgba(255, 204, 0, 1)" className="position-absolute z-1" style={{top:"-5px",left:"-5px"}} />
      </div>
      {name && <div className=" text-primary-emphasis fw-bold mt-2 fs-1 caveat">🎂{name}🎂</div>}
      <div className="text-dark patrick-hand">{message}</div>
    </div>
  )
}