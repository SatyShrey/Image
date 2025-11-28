import { useState, type ChangeEvent,} from "react";
import { removeBackground } from "@imgly/background-removal";

export default function BackgroundRemover() {
  const [preview, setPreview] = useState(null);
  const [processed, setProcessed] = useState('');

  const handleFileChange = async (event:ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const file=files[0]

    // Show original preview
    setPreview(URL.createObjectURL(file) as any);

    // Remove background
    const resultBlob = await removeBackground(file);
    const resultUrl = URL.createObjectURL(resultBlob);
    setProcessed(resultUrl as string);
  };

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