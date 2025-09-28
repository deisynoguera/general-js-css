// Mostrar el ancho actual de la ventana y el estado de los media queries
export function logMediaQuery() {
  const width = window.innerWidth;
  let columns;
  if (width <= 600) {
    columns = 1;
  } else if (width <= 1024) {
    columns = 2;
  } else {
    columns = 3;
  }
  console.log(`Ancho actual de la pantalla: ${width}px, columnas: ${columns}`);
}
