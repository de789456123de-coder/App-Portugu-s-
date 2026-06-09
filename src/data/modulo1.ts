import { Lesson } from '../types';

export const modulo1Lessons: Lesson[] = [
  {
    id: 'm1-l1',
    title: 'Compreensão vs. Interpretação',
    duration: '12 min',
    sections: [
      {
        type: 'text',
        content:
          'Toda prova de concurso que cobra "interpretação de texto" na verdade avalia dois processos distintos: a compreensão e a interpretação. Confundir os dois é um dos erros mais comuns dos candidatos.',
      },
      {
        type: 'subtitle',
        content: 'O que é Compreensão?',
      },
      {
        type: 'text',
        content:
          'Compreender um texto significa capturar o que ele diz de forma EXPLÍCITA — o sentido literal das palavras, das frases e dos parágrafos. Não há necessidade de ir além do que está escrito.',
      },
      {
        type: 'example',
        label: 'Exemplo de compreensão',
        content:
          'Texto: "O governo anunciou um aumento de 10% no salário mínimo."\n\nQuestão de compreensão: "Qual foi o percentual de aumento anunciado?"\nResposta: 10% — a informação está explícita no texto.',
      },
      {
        type: 'subtitle',
        content: 'O que é Interpretação?',
      },
      {
        type: 'text',
        content:
          'Interpretar vai além do literal: é extrair sentidos IMPLÍCITOS, inferências, intenções do autor, pressupostos e subentendidos. A resposta não está escrita diretamente no texto — precisa ser construída pelo leitor com base nos dados fornecidos.',
      },
      {
        type: 'example',
        label: 'Exemplo de interpretação',
        content:
          'Texto: "O governo anunciou um aumento de 10% no salário mínimo, mas os sindicatos consideraram o reajuste insuficiente diante de uma inflação de 12%."\n\nQuestão de interpretação: "O que se pode concluir sobre a relação entre o reajuste e o poder de compra dos trabalhadores?"\nResposta: O aumento não compensou a inflação, portanto o poder de compra diminuiu — conclusão que exige raciocínio, não está explícita.',
      },
      {
        type: 'tip',
        label: 'Estratégia para concurso',
        content:
          'Questões que pedem o que o texto "AFIRMA", "INFORMA" ou "DECLARA" são de COMPREENSÃO — busque a informação literal. Questões que pedem o que "SE PODE CONCLUIR", "SE DEPREENDE" ou "SE INFERE" são de INTERPRETAÇÃO — raciocine além do explícito.',
      },
      {
        type: 'subtitle',
        content: 'Paráfrase vs. Inferência',
      },
      {
        type: 'text',
        content:
          'A PARÁFRASE reescreve o que o texto disse com outras palavras, sem alterar o sentido. É o recurso mais usado nas alternativas corretas de questões de compreensão.\n\nA INFERÊNCIA constrói uma conclusão lógica a partir das informações do texto. Pode ir além do dito, mas não pode contradizê-lo.',
      },
      {
        type: 'example',
        label: 'Paráfrase vs. Inferência',
        content:
          'Texto original: "Maria saiu cedo, pois precisava chegar antes do horário de pico."\n\nParáfrase: "Maria partiu com antecedência a fim de evitar o trânsito intenso." ✓\n\nInferência válida: "Maria conhece os horários de maior movimento na cidade." ✓\n\nInferência inválida: "Maria estava atrasada para o trabalho." ✗ (não se pode concluir isso)',
      },
      {
        type: 'warning',
        label: 'Armadilha frequente em concursos',
        content:
          'Alternativas que exageram, generalizam ou invertem o sentido do texto estão sempre ERRADAS. Ex.: o texto diz "alguns políticos" e a alternativa generaliza para "todos os políticos" — isso invalida a opção imediatamente.',
      },
    ],
  },
  {
    id: 'm1-l2',
    title: 'Estratégias de Leitura Eficiente',
    duration: '10 min',
    sections: [
      {
        type: 'text',
        content:
          'Ler bem em prova não é ler devagar palavra por palavra. Exige técnica. Existem três modalidades de leitura que o candidato precisa dominar.',
      },
      {
        type: 'subtitle',
        content: 'Leitura de Reconhecimento (Skimming)',
      },
      {
        type: 'text',
        content:
          'É a leitura rápida para captar a ideia geral do texto. Passe os olhos pelo título, primeiro parágrafo, primeiras frases de cada parágrafo e último parágrafo. Em 30 segundos você saberá do que trata o texto.',
      },
      {
        type: 'subtitle',
        content: 'Leitura de Busca (Scanning)',
      },
      {
        type: 'text',
        content:
          'Usada para localizar uma informação específica sem ler todo o texto. Quando a questão pergunta um dado (data, nome, percentual), use o scanning: procure visualmente aquela informação no texto.',
      },
      {
        type: 'subtitle',
        content: 'Leitura Analítica',
      },
      {
        type: 'text',
        content:
          'Leitura completa e reflexiva, parágrafo a parágrafo, para responder questões de interpretação profunda. Identifique: o tema (assunto), a tese (posição do autor), os argumentos e a progressão do texto.',
      },
      {
        type: 'tip',
        label: 'Método prático para provas',
        content:
          '1. Leia as QUESTÕES antes do texto (skimming nas perguntas).\n2. Faça o skimming do texto para captar o tema.\n3. Releia com atenção os trechos relevantes para cada questão.\n4. Confirme sua resposta voltando ao texto — nunca responda de memória.',
      },
      {
        type: 'subtitle',
        content: 'Palavras-chave e mapa de ideias',
      },
      {
        type: 'text',
        content:
          'Sublinhe as palavras-chave de cada parágrafo. Elas revelam o tema e os subtemas. No final da leitura você terá um "esqueleto" do texto que facilita responder qualquer questão.',
      },
      {
        type: 'example',
        label: 'Mapa de ideias',
        content:
          'Parágrafo 1 → PROBLEMA: desmatamento na Amazônia\nParágrafo 2 → CAUSA: expansão agropecuária\nParágrafo 3 → CONSEQUÊNCIA: perda de biodiversidade\nParágrafo 4 → SOLUÇÃO: políticas de fiscalização\n\nCom esse mapa, qualquer questão sobre o texto fica fácil de localizar.',
      },
    ],
  },
  {
    id: 'm1-l3',
    title: 'Tema, Tese e Argumento',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'Três conceitos fundamentais organizam qualquer texto dissertativo — os mais cobrados em concursos. Saber identificá-los com precisão é essencial.',
      },
      {
        type: 'subtitle',
        content: 'Tema',
      },
      {
        type: 'text',
        content:
          'O TEMA é o assunto geral sobre o qual o texto fala. Pode ser expresso em poucas palavras, geralmente um sintagma nominal (sem verbo). É a resposta para: "Do que trata esse texto?"',
      },
      {
        type: 'example',
        label: 'Identificando o tema',
        content:
          '"A violência urbana no Brasil tem crescido de forma alarmante nas últimas décadas, afetando principalmente as populações periféricas..."\n\nTema: violência urbana no Brasil ✓\n(Não confunda com tese: o tema não toma partido — apenas nomeia o assunto)',
      },
      {
        type: 'subtitle',
        content: 'Tese',
      },
      {
        type: 'text',
        content:
          'A TESE é o ponto de vista, a posição ou a opinião do autor sobre o tema. É uma afirmação que pode ser defendida ou contestada. Aparece geralmente no primeiro ou no último parágrafo.',
      },
      {
        type: 'example',
        label: 'Identificando a tese',
        content:
          'Tema: violência urbana\n\nTese: "A violência urbana só será reduzida de forma sustentável com investimento em educação e geração de emprego, não apenas com policiamento ostensivo."\n\n→ Tese = posição do autor + o que ele defende sobre o tema',
      },
      {
        type: 'subtitle',
        content: 'Argumento',
      },
      {
        type: 'text',
        content:
          'ARGUMENTO é tudo que o autor usa para provar ou sustentar a tese. Pode ser: dado estatístico, exemplo concreto, citação de autoridade, comparação, causa/consequência, analogia.',
      },
      {
        type: 'table',
        content: 'Tipos de argumento',
        headers: ['Tipo', 'Definição', 'Exemplo'],
        rows: [
          ['Estatístico', 'Usa números e pesquisas', '"80% dos crimes ocorrem em áreas sem iluminação"'],
          ['Autoridade', 'Cita especialistas ou fontes', '"Segundo o IBGE..."'],
          ['Exemplificação', 'Casos concretos', '"Como ocorreu em Medellín, Colômbia..."'],
          ['Causalidade', 'Relação causa-efeito', '"A falta de emprego leva ao crime"'],
          ['Analogia', 'Comparação para explicar', '"Assim como um incêndio precisa de combustível..."'],
        ],
      },
      {
        type: 'tip',
        label: 'Como a banca cobra isso',
        content:
          'A banca pode perguntar: "Qual é a tese defendida pelo autor?" ou "O argumento usado no 2º parágrafo é de que tipo?" — treine identificar cada elemento nos textos que você lê.',
      },
      {
        type: 'warning',
        label: 'Cuidado com a diferença',
        content:
          'Tema ≠ Tese ≠ Argumento. O tema é o assunto (substantivo). A tese é uma afirmação sobre o assunto (tem verbo e posição). O argumento é a prova da tese (sustenta, exemplifica ou demonstra).',
      },
    ],
  },
  {
    id: 'm1-l4',
    title: 'Inferências, Pressupostos e Subentendidos',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'Todo texto comunica mais do que diz literalmente. As informações não explícitas se dividem em três categorias: inferências, pressupostos e subentendidos. Dominar essa distinção é decisivo em provas de alto nível.',
      },
      {
        type: 'subtitle',
        content: 'Inferência',
      },
      {
        type: 'text',
        content:
          'A INFERÊNCIA é uma conclusão lógica que o leitor constrói a partir das informações do texto, combinadas com seu conhecimento de mundo. Não está explícita, mas é autorizada pelo texto.',
      },
      {
        type: 'example',
        label: 'Exemplo de inferência',
        content:
          '"Pedro chegou ao escritório com a gravata afrouxada, os olhos vermelhos e os cabelos despenteados."\n\nInferência válida: Pedro passou por um momento difícil ou está cansado.\nInferência inválida: Pedro foi demitido. ✗ (o texto não autoriza essa conclusão)',
      },
      {
        type: 'subtitle',
        content: 'Pressuposto',
      },
      {
        type: 'text',
        content:
          'O PRESSUPOSTO é uma informação que o enunciado toma como dada, verdadeira, antes mesmo de ser proferido. Está embutido na estrutura da frase e não pode ser negado sem destruir o sentido.',
      },
      {
        type: 'example',
        label: 'Exemplos de pressupostos',
        content:
          '"João parou de fumar." → Pressuposto: João fumava antes.\n"Quando você conseguir o emprego..." → Pressuposto: existe a expectativa de que você conseguirá.\n"O Brasil ainda enfrenta problemas educacionais." → Pressuposto: o Brasil já enfrentou problemas educacionais antes.',
      },
      {
        type: 'subtitle',
        content: 'Subentendido',
      },
      {
        type: 'text',
        content:
          'O SUBENTENDIDO é a mensagem implícita que depende do contexto e da intenção do falante. Ao contrário do pressuposto, pode ser negado pelo locutor sem contradição lógica. Está mais ligado ao contexto pragmático.',
      },
      {
        type: 'example',
        label: 'Exemplo de subentendido',
        content:
          'Um funcionário diz ao chefe: "Já são 18h30."\nLiteral: informa o horário.\nSubentendido: está na hora de ir embora / já passou do horário de trabalho.\n\nO funcionário pode negar: "Eu estava só informando o horário." — sem contradição lógica.',
      },
      {
        type: 'table',
        content: 'Resumo comparativo',
        headers: ['Conceito', 'O que é', 'Pode ser negado?'],
        rows: [
          ['Inferência', 'Conclusão lógica construída pelo leitor', 'Sim, se o raciocínio for inválido'],
          ['Pressuposto', 'Informação dada como certa na estrutura', 'Não sem destruir o enunciado'],
          ['Subentendido', 'Mensagem implícita dependente do contexto', 'Sim, pelo locutor'],
        ],
      },
      {
        type: 'tip',
        label: 'Em concursos',
        content:
          'Quando a questão pergunta "o que se pressupõe" — busque o que está embutido na estrutura da frase. Quando pergunta "o que se pode concluir/inferir" — raciocine com base nos dados do texto. Quando há ironia ou linguagem figurada, o subentendido é o alvo.',
      },
    ],
  },
  {
    id: 'm1-l5',
    title: 'Linguagem Figurada e Intenção Comunicativa',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'A linguagem pode ser DENOTATIVA (sentido literal, objetivo) ou CONOTATIVA (sentido figurado, subjetivo). Reconhecer essa distinção é fundamental para interpretar corretamente textos literários, jornalísticos e publicitários.',
      },
      {
        type: 'subtitle',
        content: 'Principais Figuras de Linguagem em Provas',
      },
      {
        type: 'table',
        content: 'Figuras de linguagem',
        headers: ['Figura', 'Definição', 'Exemplo'],
        rows: [
          ['Metáfora', 'Comparação implícita sem "como"', '"A vida é uma viagem."'],
          ['Comparação', 'Comparação explícita com "como"', '"Ela era forte como um touro."'],
          ['Metonímia', 'Substituição por parte, todo ou relação', '"Ler Machado de Assis" (= obras dele)'],
          ['Ironia', 'Diz o oposto do que pensa', '"Que aluno dedicado!" (para preguiçoso)'],
          ['Hipérbole', 'Exagero intencional', '"Já te falei um milhão de vezes."'],
          ['Eufemismo', 'Suaviza o que é negativo', '"Ele nos deixou" (= morreu)'],
          ['Antítese', 'Contraste entre ideias opostas', '"Guerra e paz"'],
          ['Personificação', 'Atribui qualidades humanas ao inanimado', '"O vento suspirou."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Intenção Comunicativa',
      },
      {
        type: 'text',
        content:
          'Todo texto tem uma INTENÇÃO: informar, persuadir, entreter, instruir ou emocionar. Identificar a intenção do autor ajuda a interpretar o tom e as escolhas linguísticas do texto.',
      },
      {
        type: 'example',
        label: 'Identificando intenção',
        content:
          'Texto 1 (notícia): "O índice de desemprego caiu 0,3% em março." → Intenção: INFORMAR\n\nTexto 2 (editorial): "Não podemos aceitar mais um mês com índices tão alarmantes." → Intenção: PERSUADIR\n\nTexto 3 (crônica): "O desempregado sonha. Sonha com um emprego que talvez nunca venha." → Intenção: EMOCIONAR',
      },
      {
        type: 'warning',
        label: 'Ironia em concursos',
        content:
          'A ironia é a figura mais cobrada em provas de interpretação. Para identificá-la, observe o contexto: quando elogios são usados em situações negativas ou vice-versa, há ironia. Questões que pedem o "efeito de sentido" de uma expressão frequentemente envolvem ironia.',
      },
      {
        type: 'tip',
        label: 'Dica final',
        content:
          'Ao ler o texto na prova, pergunte-se: "O que o autor quer que eu pense ou sinta?" Essa pergunta simples revela a intenção comunicativa e ajuda a eliminar alternativas que contradizem o propósito do texto.',
      },
    ],
  },
];
