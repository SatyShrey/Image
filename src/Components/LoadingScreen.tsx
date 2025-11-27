export default function LoadingScreen() {
    return (
        <dialog open>
            <div className="h-100 w-100 d-flex justify-content-center align-items-center">
                <div className="text-center bg-white p-2 rounded">
                    <div className="loading-circle"></div>
                    <span>Loading...</span>
                </div>
            </div>
        </dialog>
    )
}