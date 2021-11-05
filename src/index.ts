function sumaArreglos() {
  let letra: string[] = new Array(3);
  let numero: number[] = new Array(3);
  let suma: any[] = new Array(6);
  let indice: number;
  for (indice = 0; indice < 3; indice++) {
    letra[indice] = String(prompt("ingrese una letra"));
    numero[indice] = Number(prompt("ingrese un numero"));
  }
  let i: number;
  indice = 0;
  for (i = 0; i < 6; i++) {
    suma[i] = letra[indice];
    i++;
    suma[i] = numero[indice];
    indice++;
  }
  i = Number(prompt("ingrese la posicion que desea averiguar"));
  console.log("en la posicion", i, "se encuentra", suma[i]);
}

sumaArreglos();
