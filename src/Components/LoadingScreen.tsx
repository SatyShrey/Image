export default function LoadingScreen({ text, type }: { text: string, type: "circle" | "bar" | "dots" | "balls" }) {
    return (
        <dialog open>
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="text-center bg-white p-2 rounded">
                    {type === 'circle' && <div className="loading-circle mx-auto" />}
                    {type === 'bar' && <div className="loading-bar rounded-4 bg-dark">
                        <span className=" position-absolute top-0 bg-primary rounded-circle"></span>
                    </div> }
                    <span>{text}</span>
                </div>
            </div>
        </dialog>
    )
}