export function changuesize(id: string){
    const tabla = document.getElementById(id);
    if (tabla){
      tabla.style.height = "100px";
      tabla.style.width = "1000px";
    }
}
