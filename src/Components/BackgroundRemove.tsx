import { useState, type ChangeEvent, } from "react";
import { removeBackground } from "@imgly/background-removal";
import LoadingScreen from "./LoadingScreen";

export default function BackgroundRemover() {
  const [preview, setPreview] = useState(null);
  const [processed, setProcessed] = useState('');
  const [loading, setloading] = useState(false);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    try {
      setloading(true);
      const file = files[0]
      setPreview(URL.createObjectURL(file) as any);
      const resultBlob = await removeBackground(file);
      const resultUrl = URL.createObjectURL(resultBlob);
      setProcessed(resultUrl as string);
    } catch (error: any) {
      console.error(error.message)
    } finally { setloading(false) }
  };

  if (loading) { return <LoadingScreen text="Removing background
    ..." type="circle" /> }

  return (
    <div style={{ textAlign: "center" }} className=" flex-grow-1 overflow-y-scroll">
      <h2>Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {preview && (
        <div style={{ marginTop: "20px" }}>
          <h3>Original Image</h3>
          <img src={preview} alt="original" width="250" />
        </div>
      )}

      {processed && (
        <div style={{ marginTop: "20px" }}>
          <h3>Background Removed</h3>
          <img src={processed} alt="processed" width="250" />
        </div>
      )}
    </div>
  );
}