const perguntas = [
    {
      pergunta: "Quem foi o líder da Alemanha durante a Primeira Guerra Mundial?",
      respostas: [
        "Kaiser Wilhelm II",
        "Adolf Hitler",
        "Otto von Bismarck",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual foi o evento imediato que desencadeou a entrada dos Estados Unidos na Primeira Guerra Mundial?",
      respostas: [
        "Ataque a Pearl Harbor",
        "Afundamento do Lusitania",
        "Bombardeio de Londres",
      ],
      correta: 1,
    },
    {
      pergunta: "Em que ano a Liga das Nações foi criada como uma tentativa de prevenir futuros conflitos globais?",
      respostas: [
        "1918",
        "1920",
        "1935",
      ],
      correta: 1,
    },
    {
      pergunta: "Quem era o líder do partido nazista durante a Segunda Guerra Mundial?",
      respostas: [
        "Joseph Goebbels",
        "Heinrich Himmler",
        "Adolf Hitler",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual país sofreu mais baixas humanas durante a Segunda Guerra Mundial?",
      respostas: [
        "Estados Unidos",
        "União Soviética",
        "Alemanha",
      ],
      correta: 1,
    },
    {
      pergunta: "Em que ano a ONU (Organização das Nações Unidas) foi fundada após a Segunda Guerra Mundial?",
      respostas: [
        "1945",
        "1950",
        "1960",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual foi a principal causa da Guerra do Pacífico durante a Segunda Guerra Mundial?",
      respostas: [
        "Invasão da Manchúria",
        "Bombardeio de Pequim",
        "Ataque a Pearl Harbor",
      ],
      correta: 2,
    },
    {
      pergunta: "O que foi a Blitzkrieg na estratégia militar alemã durante a Segunda Guerra Mundial?",
      respostas: [
        "Guerra submarina",
        "Guerra relâmpago",
        "Guerra de trincheiras",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual cidade japonesa foi alvo do segundo bombardeio atômico durante a Segunda Guerra Mundial?",
      respostas: [
        "Nagasaki",
        "Hiroshima",
        "Osaka",
      ],
      correta: 0,
    },
    {
      pergunta: "Qual tratado encerrou oficialmente a Segunda Guerra Mundial em 1945?",
      respostas: [
        "Tratado de Versalhes",
        "Tratado de Tóquio",
        "Tratado de São Francisco",
      ],
      correta: 2,
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector("template")
  
    const corretas = new Set()
    const totalDePergunta = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePergunta
  
  //loop ou laço de repetição.
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   
   quizItem.querySelector('h3').textContent = item.pergunta
  for(let respostas of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = respostas
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(respostas)
     dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
  
     mostrarTotal.textContent = corretas.size + ' de ' + totalDePergunta
     
     }
     quizItem.querySelector('dl').appendChild(dt)
    }
  
  quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
    }