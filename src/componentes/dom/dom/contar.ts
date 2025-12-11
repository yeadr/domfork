export function countWords(id : string){
    const parragrafo = document.getElementById(id);
    if (parragrafo){
      const texto = parragrafo.textContent || "";
      const cantidad = texto.length;
      const cantidadStr: string = cantidad.toString();
      parragrafo!.innerHTML= cantidadStr;
    }
}
