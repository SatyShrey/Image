
export default function Background({ type = "heart", length = 100, blur = 0, background = "transparent" }: { type?: "flower" | "heart" | "joy" | "stars" | "congrats", length?: number, blur?: number, background?: string }) {
    const arrInts = Array.from({ length }, () => Math.floor(Math.random() * 100) + 1);

    return (
        <>
            <div className=" position-absolute" style={{
                top: 0, bottom: 0, left: 0, right: 0,
                 overflow: "hidden"
            }}>
                {
                    arrInts.map((item, index) => {
                        return <span
                            key={index}
                            className=" position-absolute"
                            style={{
                                filter: `blur(${blur}px)`,
                                top: `${Math.random() * 100}%`,
                                left: item + "%",
                                 rotate: `${Math.random() * 100}deg`,
                            }}
                        >
                            {type == "flower" && <>🌻</>}
                            {type == "heart" && <>❤️</>}
                            {type == "joy" && <>🎉</>}
                            {type == "stars" && <>✨</>}
                            {type == "congrats" && <>💐</>}
                        </span>
                    })
                }
            </div>
            <div className=" position-absolute" style={{
                top: 0, bottom: 0, left: 0, right: 0,
                background,
            }}>

            </div>
        </>
    )
}