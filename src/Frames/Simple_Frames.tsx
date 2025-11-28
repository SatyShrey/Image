import { useValues } from "../Components/Global"
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";

export function Frame1() {
  const { image1, title, message, name, } = useValues()
  return (
    <div style={{ width: "340px", backgroundImage: `url(${bg1})`, backgroundSize: "cover" }} className="p-4 pt-0 border boder-1">
      <div style={{ fontSize: "40px", WebkitTextStrokeColor: "skyblue", WebkitTextStrokeWidth: "2px", textShadow: "10px 10px 10px black" }} className="fw-bolder text-warning" >{title}</div>
      <div className="rounded-circle overflow-hidden mb-2" style={{ width: "200px", height: "200px", margin: "auto", border: "2px ridge skyblue" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <div className="fw-bolder fs-2 text-info">{name}</div>}
      <div className="text-warning" style={{ fontSize: "small" }}>{message}</div>
    </div>
  )
}

export function Frame2() {
  const { image1, title, message, name } = useValues()
  return (
    <div className="border border-warning text-center text-black p-3 pt-0" style={{ width: "340px", backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}>
      <div className="text-info fw-bolder text-center" style={{ fontSize: "40px", WebkitTextStrokeColor: "pink", WebkitTextStrokeWidth: "2px", textShadow: "10px 10px 10px black" }}>{title}</div>
      <div className="mb-1 border border-warning overflow-hidden mx-auto bg-black" style={{ width: "210px", height: "260px" }} >
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <div className="bg-danger-subtle fs-3 fw-bold edu-hand">{name}</div>}
      <div className="nunito" style={{ backgroundColor: "#ffffff90" }}>{message}</div>
    </div>
  )
}

export function Frame3() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "linear-gradient(pink,#fefefe)", border: "2px dashed #555" }} className="p-3 text-center">
      <div className="text-danger fw-bold" style={{ fontSize: "30px" }}>{title}</div>
      <div style={{ width: "200px", height: "200px", margin: "auto", borderRadius: "50%", overflow: "hidden", border: "2px ridge #f00" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-danger fw-bold mt-2 fs-2 caveat">{name}</p>}
      <p className="text-dark">{message}</p>
    </div>
  )
}

export function Frame4() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "linear-gradient(to bottom right,pink,aqua,pink)", border: "1px solid #ffff", }} className="p-3  text-center">
      <div className="text-danger fw-bold text-primary-emphasis mb-2" style={{ fontSize: "30px" }}>{title}</div>
      <div className=" position-relative" style={{ width: "fit-content", margin: "auto" }}>
        <div style={{ width: "190px", height: "230px", margin: "auto", borderRadius: "15px", overflow: "hidden", border: "2px solid #000000" }}>
          <img src={image1 as string} alt="pic" className="w-100" />
        </div>
        <span className="position-absolute rounded-4"
          style={{ bottom: 0, right: 0, top: "40%", left: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.8))" }}></span>
        <span className="position-absolute fs-2" style={{ bottom: 0, right: 0 }}>🎁</span>
        <span className="position-absolute fs-2" style={{ bottom: 0, left: 0 }}>🎂</span>
        <span className="position-absolute d-flex justify-content-center" style={{ top: "-14px", right: 0, left: 0 }}>🌸🌸🌸🌸🌸</span>
      </div>
      {name && <div className=" text-primary-emphasis fw-bold mt-2">{name}</div>}
      <div className="text-dark patrick-hand">{message}</div>
    </div>
  )
}

export function Frame5() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", backgroundColor: "#d0dbe1" }} className="p-3 text-dark position-relative border border-1 border-white">
      <div className="position-absolute bottom-0" style={{ left: 0,right:0,top:"4px" }}>
        <div className="h-50 rounded-circle" style={{borderTop:"2px solid #f7f7f7ff"}}></div>
        <div className="h-50 bg-white rounded-top-circle"></div>
      </div>
      <div className="fw-bold gochi-hand mb-1" style={{fontSize:"35px"}}>{title}</div>
      <div className="position-relative mx-auto rounded-circle p-1" style={{ width: "220px", height: "220px", background: "linear-gradient(to right,black,blue)" }}>
        <div className="rounded-circle w-100 h-100 overflow-hidden">
          <span className=" position-absolute fs-1" style={{top:0,left:"-20px"}}>✨</span>
          <span className=" position-absolute fs-1" style={{top:"50%",right:"-40px"}}>✨</span>
          <img src={image1 as string} alt="image" className="w-100" />
          <div className=" position-absolute d-flex justify-content-center w-100 p-1 pb-4 fw-semibold" style={{ background: "linear-gradient(#d0dbe1,white)",left:0,bottom:"-20px"}}>{name}</div>
        </div>
      </div>
      <div className="m-auto position-relative w-25 mb-2 mt-3" style={{border:"1px solid #a6a6a6ff"}}></div>
      <div style={{fontSize:"small"}} className="position-relative nunito fw-medium text-dark">{message}</div>
    </div>
  )
}