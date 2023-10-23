// Esta función toma un objeto 'file' como entrada y devuelve una parte específica de su ruta.

export function getFilePath(file) {
  // Obtenemos la ruta completa del archivo desde el objeto 'file'.
  const filePath = file.path;

  // Dividimos la ruta en segmentos utilizando "/" como separador.
  const fileSplit = filePath.split("/");

  // Devolvemos una cadena que contiene el segundo y tercer segmento de la ruta.
  // Esto asume que la ruta tiene al menos tres segmentos.
  return `${fileSplit[1]}/${fileSplit[2]}`;
}