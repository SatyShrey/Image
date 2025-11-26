import { useValues } from "../Components/Global"

export default function Frame1() {
  const { image1, background1, title, message,name } = useValues()
  return (
    <div style={{ width: "340px", backgroundImage: `url(${background1})`, backgroundSize: "cover" }} className="p-2 border boder-1">
      <p style={{ fontSize: "30px" }} className="text-warning stroke xbold">{title}</p>
      <div className="rounded-circle border-2 border overflow-hidden mb-2" style={{ width: "260px", height: "260px", margin: "auto" }}>
        <img src={image1 as string} alt="pic" className="w-100" id="pic" />
      </div>
      {name &&<p className="p-1 bg-warning text-black" style={{ margin: "auto", width: "fit-content", fontWeight: "500" }} id="name">{name}</p>}
      <p className="text-warning mt-2" style={{ fontSize: "small" }} id="wish">{message}</p>
    </div>
  )
}