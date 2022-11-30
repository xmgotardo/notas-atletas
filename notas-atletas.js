let atletas = [
   {
     nome: "Cesar Abascal",
     notas: [10, 9.34, 8.42, 10, 7.88]
   },
   {
     nome: "Fernando Puntel",
     notas:  [8, 10, 10, 7, 9.33]
   },
   {
     nome: "Daiane Jelinsky",
     notas: [7, 10, 9.5, 9.5, 8]
   },
   {
     nome: "Bruno Castro",
     notas: [10, 10, 10, 9, 9.5]
   }
  ];

function fazAbraCadabra(matriz) {
   matriz.forEach((atleta) => {
      atleta.notas.sort((menor, maior) => {
         return menor - maior;
      });

      let notasComputadas = atleta.notas.slice(1, 4);

      let soma = 0;
      notasComputadas.forEach((valor) => {
         soma += valor;
      });

      atleta.media = (soma / notasComputadas.length).toFixed(15);

      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas}`);
      console.log(`Média Válida: ${atleta.media}`);
      console.log();
   });
   return matriz;
};

fazAbraCadabra(atletas);