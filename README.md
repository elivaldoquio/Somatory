# Somatory
Este é um projeto que tem a finalidade de somar infinitos números dentro de uma lista de uma números.

O projeto é executado através de algum  editor de código, por exemplo o VScode.
Para isso seria necessário abrir o terminal do VScode e utilizar o comando "node./indexjs".

Para estruturar o projeto foi necessário criar linhas de comando que constam a criação de  uma função, a qual contém  um "for de C" que é uma estrutura de repetição que percorre o array (lista de números) e efetua o somatório dos ítens do mesmo. Ela utiliza o comprimento do array como referência para efetuar o somatório.


uor (let i = 0; i < lista.length; i++) {
  totalAcumulado = totalAcumulado + lista[i];
    }
    
    console.log(totalAcumulado)
    }
    const lista = [ 1,2,3,4 ]
    solucao(lista)
