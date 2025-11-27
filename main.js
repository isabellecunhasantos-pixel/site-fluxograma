const storyNodes = {
  inicio: {
    text: `
      <h2>A viagem</h2>
        <div class="escolhaViagem">
        <img src="img/madrid.jpeg" alt="Madrid" class="story-img-travel">
        <img src="img/goias.jpeg" alt="Interior de Goiás" class="story-img-travel">
      </div>
      <p>
        Uma mulher, recém divorciada, muito rica e dona de uma marca famosa, decide fazer uma viagem pós término.
      </p>
      <h3>Qual o destino da viagem?</h3>
    `,
    choices: [
      { text: "Madrid", next: "madrid" },
      { text: "Interior de Goiás", next: "goias" },
    ],
  },

  madrid: {
    text: `
      <h2>Madrid</h2>
      <img src="img/estadio.jpeg" alt="Estádio" class="story-img">
      <p>Ela foi ver um jogo de futebol em Madrid. Lá ficou próxima de um jogador.</p>
      <h3>O que ela deve fazer?</h3>
    `,
    choices: [
      { text: "Se aproximar do jogador", next: "aproximar" },
      { text: "Se afastar do jogador", next: "afastar" },
    ],
  },

  aproximar: {
    text: `
      <h2>Aproximar</h2>
            <img src="img/festa.jpeg" alt="After" class="story-img">
      <p>Ele a leva, depois do jogo, a um after de um cantor famoso.</p>
      <h3>Ela aceita o convite?</h3>
    `,
    choices: [
      { text: "Ela aceita", next: "aceitar" },
      { text: "Ela recusa", next: "recusar" },
    ],
  },

  aceitar: {
    text: `
      <h2>Aceitar</h2>
      <p>O jogador se apaixona por ela, porém descobre que ela teria tido uma recaída com seu ex-marido.</p>
      <h3>Então ele termina tudo com ela.</h3>
    `,
    choices: [{ text: "Voltar ao início da história", next: "inicio" }],
  },

  recusar: {
    text: `
      <h2>Recusar</h2>
      <p>Ela não aceita o convite.</p>
      <h3>E termina sua viagem, voltando para casa.</h3>
    `,
    choices: [{ text: "Voltar ao início da história", next: "inicio" }],
  },

  afastar: {
    text: `
      <h2>Se afastar</h2>
      <p>Ela decide se afastar do jogador. Muda de ideia e vai para o Interior de Goiás.</p>
    `,
    choices: [{ text: "Ir para Goiás", next: "goias" }],
  },

  goias: {
    text: `
      <h2>Interior de Goiás</h2>
            <img src="img/show.jpeg" alt="Show" class="story-img">
      <p>
        Ela foi a um show de um cantor e viu seu ex-marido fazendo um feat com ele.
        Ao final, eles se reencontram e ele a leva para um after.
      </p>
      <h3>Ela vai aceitar o convite?</h3>
    `,
    choices: [
      {
        text: "Não ir e lembrar das red flags do antigo relacionamento conturbado.",
        next: "recusarG",
      },
      { text: "Aceitar e ir ao after.", next: "aceitarG" },
    ],
  },

  recusarG: {
    text: `
      <h2>Recusar</h2>
      <h3>Ela recusa o convite e decide focar em sua carreira.</h3>
    `,
    choices: [{ text: "Voltar ao início da história", next: "inicio" }],
  },

  aceitarG: {
    text: `
      <h2>Aceitar</h2>
      <h3>
        Ela volta com o marido e depois de um tempo decidem ter um filho chamado José Mário.
        Seu marido larga a amante cantora de sertanejo e vive uma vida tranquila com sua esposa,
        que vira uma dançarina de samba.
      </h3>
    `,
    choices: [{ text: "Voltar ao início da história", next: "inicio" }],
  },
};

function showNode(nodeKey) {
  const node = storyNodes[nodeKey];

  const storyDiv = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");

  storyDiv.innerHTML = node.text;

  choicesDiv.innerHTML = "";

  if (!node.choices) {
    const endMessage = document.createElement("p");
    endMessage.textContent = "Fim da história.";
    endMessage.style.marginTop = "20px";
    endMessage.style.opacity = "0.8";
    choicesDiv.appendChild(endMessage);
    return;
  }

  node.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.classList.add("choice-btn");
    btn.textContent = choice.text;
    btn.onclick = () => showNode(choice.next);
    choicesDiv.appendChild(btn);
  });
}

// Inicia a história
showNode("inicio");
