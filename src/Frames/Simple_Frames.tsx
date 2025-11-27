import { useValues } from "../Components/Global"

//Frame 1 - simple frame
export default function Frame1() {
  const { image1, background1, title, message, name } = useValues()
  const backgroundImage = `url(${background1})`
  return (
    <div style={{ width: "340px", backgroundImage, backgroundSize: "cover" }} className="p-2 border boder-1">
      <p style={{ fontSize: "30px" }} className="text-warning stroke xbold">{title}</p>
      <div className="rounded-circle border-2 border overflow-hidden mb-2" style={{ width: "260px", height: "260px", margin: "auto" }}>
        <img src={image1 as string} alt="pic" className="w-100" id="pic" />
      </div>
      {name && <p className="p-1 bg-warning text-black" style={{ margin: "auto", width: "fit-content", fontWeight: "500" }} id="name">{name}</p>}
      <p className="text-warning mt-2" style={{ fontSize: "small" }} id="wish">{message}</p>
    </div>
  )
}

// Frame 2 - Minimalist card with shadow
export function Frame2() {
  const { image1, background1, title, message, name } = useValues()
  const backgroundImage = `url(${background1})`
  return (
    <div style={{ width: "340px", backgroundImage, boxShadow: "0 4px 12px rgba(0,0,0,0.2)", borderRadius: "12px" }} className="p-2 border border-1">
      <h2 className="text-primary text-center">{title}</h2>
      <div className="rounded-2 overflow-hidden mb-2" style={{ width: "240px", height: "290px", margin: "auto" }}>
        <img src={image1 as string} alt="pic" className="w-100" id="pic" />
      </div>
      {name && <p className="text-center fw-bold text-warning">{name}</p>}
      <p className="text-primary bg-black text-center small">{message}</p>
    </div>
  )
}

// Frame 3 - Glassmorphism style
export function Frame3() {
  const { image1, background1, title, message, name } = useValues()
  const backgroundImage = `url(${background1})`
  return (
    <div style={{ width: "340px", backgroundImage, backdropFilter: "blur(10px)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)" }} className="p-3">
      <h3 className="text-light text-center">{title}</h3>
      <div className="rounded-circle border border-light mx-auto overflow-hidden" style={{ width: "200px", height: "200px" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-light text-center mt-2">{name}</p>}
      <p className="text-light text-center">{message}</p>
    </div>
  )
}

// Frame 4 - Retro neon style
export function Frame4() {
  const { image1, title, message, name } = useValues()
  return (
    <div style={{ width: "340px", backgroundColor: "#111", border: "2px solid #0ff", borderRadius: "8px" }} className="p-3 text-center">
      <h2 style={{ color: "#0ff", textShadow: "0 0 10px #0ff" }}>{title}</h2>
      <div className="rounded mb-2 border border-info mx-auto overflow-hidden" style={{ width: "220px", height: "250px" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>

      {name && <p style={{ color: "#f0f", textShadow: "0 0 5px #f0f" }}>{name}</p>}
      <p style={{ color: "#ff0" }}>{message}</p>
    </div>
  )
}

// Frame 5 - Elegant bordered card
export function Frame5() {
  const { image1,title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "#fff", border: "3px double #333", borderRadius: "10px" }} className="p-3">
      <h2 className="text-dark text-center">{title}</h2>
      <div className="rounded shadow-sm mb-2 overflow-hidden mx-auto" style={{ width: "210px", height: '250px' }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-center text-secondary">{name}</p>}
      <p className="text-center text-muted">{message}</p>
    </div>
  )
}

// Frame 6 - Gradient background
export function Frame6() {
  const { image1,title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "linear-gradient(135deg, #ff9a9e, #fad0c4)", borderRadius: "15px" }} className="p-3 text-center">
      <h2 className="fw-bold">{title}</h2>
      <div className="rounded-circle shadow-lg mb-2 overflow-hidden mx-auto" style={{ width: "200px", height: "200px" }} >
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="bg-white text-dark px-2 rounded">{name}</p>}
      <p className="text-dark">{message}</p>
    </div>
  )
}

// Frame 7 - Polaroid photo style
export function Frame7() {
  const { image1,title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "#fafafa", border: "1px solid #ddd", boxShadow: "0 6px 12px rgba(0,0,0,0.2)" }} className="p-3 text-center">
      <h3 className="text-dark">{title}</h3>
      <div style={{ width: "200px", height: "240px" }} className="overflow-hidden mx-auto my-1">
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="fw-bold">{name}</p>}
      <p className="text-muted">{message}</p>
    </div>
  )
}

// Frame 8 - Dark mode sleek
export function Frame8() {
  const { image1,title, message, name } = useValues()
  return (
    <div className="border border-warning px-2 pt-1 text-center" style={{ width: "340px", background: "#222", color: "#eee" }}>
      <h2 className="text-warning text-center">{title}</h2>
      <div className="rounded mb-1 border border-warning overflow-hidden mx-auto" style={{ width: "210px",height:"260px" }} >
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className=" text-info">{name}</p>}
      <p className="">{message}</p>
    </div>
  )
}

// Frame 9 - Circular frame emphasis
export function Frame9() {
  const { image1,title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "#fefefe", border: "2px dashed #555", borderRadius: "20px" }} className="p-3 text-center">
      <h2 className="text-danger">{title}</h2>
      <div style={{ width: "200px", height: "200px", margin: "auto", borderRadius: "50%", overflow: "hidden", border: "4px solid #f00" }}>
        <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-danger fw-bold mt-2">{name}</p>}
      <p className="text-secondary">{message}</p>
    </div>
  )
}

// Frame 10 - Modern card with hover effect
export function Frame10() {
  const { image1,title, message, name } = useValues()
  return (
    <div style={{ width: "340px", background: "#fff", borderRadius: "12px", transition: "transform 0.3s", cursor: "pointer" }} className="p-2 border border-success border-2 hover:scale-105">
      <h2 className="text-success text-center">{title}</h2>
      <div  className="rounded mb-1 shadow mx-auto overflow-hidden" style={{ width: "230px",height:"270px" }} >
      <img src={image1 as string} alt="pic" className="w-100" />
      </div>
      {name && <p className="text-center text-success bg-black p-1">{name}</p>}
      <p className="text-muted text-center">{message}</p>
    </div>
  )
}