const dados = [
  {
    "id": 1,
    "titulo": "Pacotes para Rio de Janeiro",
    "descricao": " 13/11/2025 até 16/11/2025<br> Voo direto SP -> RJ<br> Hospedagem: Rio da Lapa<br> R$ 516,00 por pessoa",
    "imagem": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww"
  },
  {
    "id": 2,
    "titulo": "Pacotes para Porto Seguro",
    "descricao": " 10/12/2025 até 15/12/2025<br>  Voo direto SP -> BPS<br> Hospedagem: Astral Mucugê Pousada<br> R$ 1.137,00 por pessoa",
    "imagem": "https://portosegurobahia.com.br/wp-content/uploads/2021/04/porto-seguro-bahia-1500x844-1.jpg"
  },
  {
    "id": 3,
    "titulo": "Pacotes para Maceió",
    "descricao": "29/03/2026 até 03/04/2026<br> Voo direto SP -> MCZ<br> Hospedagem: Reymar Express<br> R$1.548,00 por pessoa",
    "imagem": "https://dicasmaceioemaragogi.com.br/wp-content/uploads/sites/17/2021/07/maceio-cidade-brasil.jpg"
  }
]
const container = document.getElementById("cards-container");

dados.forEach(destino => {
    const col = document.createElement("div");
    col.className= "col-md-4";

     const card = document.createElement("div");
    card.className= "card h-100";

    card.innerHTML = `
    <img src = "${destino.imagem}" class="card-img-top" alt="Imagem de ${destino.titulo}">
 <div class="card-body">
    <h5 class="card-title">${destino.titulo}</h5>
    <p class="card-text">${destino.descricao}</p>
    <a href= "detalhes.html?id=${destino.id}" class="btn btn-primary">Ver detalhes</a>
 </div>
    `;

    col.appendChild(card);
    container.appendChild(col);
});