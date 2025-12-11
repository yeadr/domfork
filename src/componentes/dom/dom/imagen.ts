export function imagen(id:string){
  const contenedor = document.getElementById(id)!;
  const img = document.createElement('img');
  img.src = 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d\n';
  img.style.width = '300px';
  img.style.height = '300px';
  contenedor.appendChild(img)
}
