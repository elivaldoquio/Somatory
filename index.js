function solucao(lista) {

  let totalAcumulado = 0;
  for (let i = 0; i < lista.length; i++) {
    totalAcumulado = totalAcumulado + lista[i];
  }

  console.log(totalAcumulado);
}
const lista = [1, 2, 3, 4];
solucao(lista)
