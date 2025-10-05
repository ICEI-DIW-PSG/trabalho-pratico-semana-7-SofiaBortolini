const dados = [
  {
    id: 1,
    titulo: "Pacotes para Rio de Janeiro",
    imagem: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fHww",
    local: "Rio de Janeiro, Flamengo",
    distancia: "4,55km do centro",
    nota: 7,
    estrelas: 4,
    wifi: true,
    voo: "Voo direto SP -> RJ",
    hospedagem: "Rio da Lapa",
    preco: "R$ 516,00",
    descricao: " 13/11/2025 até 16/11/2025<br> Hospedagem com café da manhã incluso",
  },
  {
    id: 2,
    titulo: "Pacotes para Porto Seguro",
    imagem: "https://portosegurobahia.com.br/wp-content/uploads/2021/04/porto-seguro-bahia-1500x844-1.jpg",
    local: "Porto Seguro, Bahia",
    distancia: "3,2km do centro",
    nota: 8,
    estrelas: 3,
    wifi: true,
    voo: "Voo direto SP -> BPS",
    hospedagem: "Astral Mucugê Pousada",
    preco: "R$ 1.137,00",
    descricao: "10/12/2025 até 15/12/2025<br> Hospedagem com café da manhã incluso",
  },
  {
    id: 3,
    titulo: "Pacotes para Maceió",
    imagem: "https://dicasmaceioemaragogi.com.br/wp-content/uploads/sites/17/2021/07/maceio-cidade-brasil.jpg",
    local:"Maceió, Alagoas",
    distancia:"2,8km do centro",
    nota: 9,
    estrelas: 4,
    wifi: true,
    voo: "Voo direto SP -> MCZ",
    hospedagem: "Reymar Express",
    preco: "R$ 1.548,00",
    descricao:"29/03/2026 até 03/04/2026<br> Hospedagem com café da manhã incluso"
}
]

const container = document.getElementById("cards-container");

if (container) {
    dados.forEach(destino => {
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "card h-100";

        card.innerHTML = `
        <img src="${destino.imagem}" class="card-img-top" alt="Imagem de ${destino.titulo}">
        <div class="card-body">
           <h5 class="card-title">${destino.titulo}</h5>
           <p class="card-text">${destino.descricao}</p>
           <a href="detalhes.html?id=${destino.id}" class="btn btn-primary">Ver detalhes</a>
        </div>   
        `;

        col.appendChild(card);
        container.appendChild(col);
    })
}


function getIdFromUrl(){
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
}
const detalhesContainer = document.getElementById("detalhes-container");

if (detalhesContainer){
    const id = getIdFromUrl();
    const destino = dados.find(d => d.id === id);

    if (destino){
        detalhesContainer.innerHTML = `
        <div class="card mb-4">
        <img src="${destino.imagem}" class="card-img-top" alt="${destino.titulo}">
        <div class="card-body">
        <h3 class="card-title mb-3">${destino.titulo}</h3>

        <p><strong>Local:</strong> ${destino.local}</p>
        <p><strong>Distância do centro:</strong>${destino.distancia}</p>
        <p><strong>Nota:</strong>${destino.nota}</p>
        <p><strong>Estrela:</strong>${'★'.repeat(destino.estrelas)} (${destino.estrelas})</p>
        <p><strong>Wi-fi:</strong>${destino.wifi? 'Disponível' : 'Não disponível'}</p>
        <p><strong>Voo:</strong>${destino.voo}</p>
        <p><strong>Hospedagem:</strong>${destino.hospedagem}</p>
        <p><strong>Período:</strong>${destino.descricao}</p>
        <p><strong>Preço por pessoa:</strong>${destino.preco}</p>

    
        <a href="index.html" class="btn btn-primary">Voltar</a>
          </div>
        </div>
        `;
    
    } else {
        detalhesContainer.innerHTML= "<p>Destino não encontrado.</p>";
    }
}