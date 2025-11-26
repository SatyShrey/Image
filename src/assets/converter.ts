import html2canvas from 'html2canvas';
const convertImage = (div: HTMLElement,filename:string) => {
    if (!div) { return alert("Select a frame") }
    html2canvas(div).then(async (canvas) => {
      try {
        const dataUrl = canvas.toDataURL("image/png");
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const handle = await window.showSaveFilePicker({
          suggestedName: `${filename.replaceAll(' ','-')}.png`,
          types: [{ description: "PNG", accept: { "image/png": [".png"] } }],
        });

        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
      } catch (error) {
        console.log(error);
      }
    });
  }
  export default convertImage;