export default function ErrorScreen({error}:{error:string}) {
    return (
        <dialog open>
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="text-center bg-white p-2 rounded">
                    <span className="text-danger">{error}</span>
                </div>
            </div>
        </dialog>
    )
}