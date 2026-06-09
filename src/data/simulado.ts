import { Exercise } from '../types';

export const simuladoFinal: Exercise[] = [
  // ── Tópico 1 ──
  {
    id: 'sim-01',
    type: 'multiple_choice',
    difficulty: 'medium',
    context:
      '"A geração atual tem acesso a mais informação do que qualquer outra na história. Paradoxalmente, nunca se leu tão pouco de forma aprofundada."',
    question: 'O que se pode INFERIR a partir do uso de "paradoxalmente" no texto?',
    options: [
      'Mais informação leva necessariamente a mais leitura',
      'Acesso à informação e leitura aprofundada são fenômenos opostos na atualidade',
      'A geração atual lê mais do que as anteriores',
      'A leitura aprofundada é um hábito crescente entre os jovens',
    ],
    correctAnswer: 1,
    explanation:
      '"Paradoxalmente" indica contradição: ter mais acesso à informação, mas ler menos profundamente. A inferência correta é que esses dois fenômenos coexistem de forma contraditória na sociedade atual.',
  },
  // ── Tópico 2 ──
  {
    id: 'sim-02',
    type: 'multiple_choice',
    difficulty: 'medium',
    context:
      '"Prezado senhor, venho por meio desta solicitar a V. Sa. a gentileza de apreciar o pedido de licença abaixo discriminado. Atenciosamente."',
    question: 'O trecho acima é um exemplo de qual gênero textual?',
    options: [
      'Notícia jornalística',
      'Requerimento ou carta formal',
      'Artigo de opinião',
      'Crônica literária',
    ],
    correctAnswer: 1,
    explanation:
      'Requerimento/carta formal: vocativo com pronome de tratamento ("V. Sa."), linguagem respeitosa e formal, fecho padronizado ("Atenciosamente"), objetivo de solicitar algo a uma autoridade. Todos esses são marcadores do gênero formal/oficial.',
  },
  // ── Tópico 3 ──
  {
    id: 'sim-03',
    type: 'multiple_choice',
    difficulty: 'medium',
    question:
      'Assinale a alternativa em que TODAS as palavras estão grafadas corretamente segundo o Acordo Ortográfico vigente:',
    options: [
      'idéia, assembléia, heroico, jiboia',
      'ideia, assembleia, heróico, jibóia',
      'ideia, assembleia, heroico, jiboia',
      'idéia, assembleia, herói, jiboia',
    ],
    correctAnswer: 2,
    explanation:
      'Pelo Novo Acordo (2009): "ideia" e "assembleia" perdem o acento (ditongos abertos EI/OI em paroxítonas). "Heroico" perde o acento (ditongo OI em paroxítona). "Jiboia" perde o acento. Mas "herói" (oxítona) e "troféu" mantêm. A alternativa C está correta em todas as grafias.',
  },
  // ── Tópico 4 ──
  {
    id: 'sim-04',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"O projeto foi amplamente debatido; ________, sua aprovação não foi unânime."',
    question: 'Qual conector preserva o sentido adversativo e se encaixa adequadamente?',
    options: ['portanto', 'além disso', 'visto que', 'todavia'],
    correctAnswer: 3,
    explanation:
      '"Todavia" é conector adversativo (= mas, porém, contudo) — introduz ideia que contrasta com "amplamente debatido". "Portanto" é conclusivo; "além disso" é aditivo; "visto que" é causal. Apenas "todavia" mantém a relação de contraste/oposição.',
  },
  // ── Tópico 4 (tempos verbais) ──
  {
    id: 'sim-05',
    type: 'multiple_choice',
    difficulty: 'hard',
    context: '"Se o candidato ________ mais, teria sido aprovado na primeira fase."',
    question: 'Qual forma verbal preenche corretamente a lacuna?',
    options: ['estudaria', 'estudou', 'tivesse estudado', 'estudaria ter'],
    correctAnswer: 2,
    explanation:
      'Oração condicional com "se" referindo-se ao passado: usa-se o PRETÉRITO MAIS-QUE-PERFEITO DO SUBJUNTIVO ("tivesse estudado") na condicional e o FUTURO DO PRETÉRITO COMPOSTO ("teria sido") na principal. Nunca se usa "ria" na oração com "se".',
  },
  // ── Tópico 5.1 ──
  {
    id: 'sim-06',
    type: 'multiple_choice',
    difficulty: 'medium',
    context: '"O autor, cuja obra li durante as férias, ganhou o prêmio literário."',
    question: 'O pronome relativo "cujo" indica que:',
    options: [
      'O autor foi lido pelo narrador',
      'A obra pertence ao autor e foi lida pelo narrador',
      'O prêmio pertence à obra',
      '"Cujo" pode ser substituído por "que o" sem alteração',
    ],
    correctAnswer: 1,
    explanation:
      '"Cujo" indica posse: "cuja obra" = a obra DO autor. O autor é o possuidor; a obra é o possuído. "Cujo" concorda com o possuído (obra = feminino singular → "cuja"). Não pode ser substituído por "que o" — essa substituição seria incorreta porque "cujo" já inclui a preposição de posse.',
  },
  // ── Tópico 5.2 ──
  {
    id: 'sim-07',
    type: 'multiple_choice',
    difficulty: 'medium',
    context: '"Estudou durante anos, mas não conseguiu a aprovação desejada."',
    question: 'A oração coordenada iniciada por "mas" é classificada como:',
    options: ['Conclusiva', 'Adversativa', 'Explicativa', 'Alternativa'],
    correctAnswer: 1,
    explanation:
      '"Mas" é conjunção coordenativa adversativa — introduz ideia que contrasta ou se opõe à anterior (estudou muito × não conseguiu). Conclusiva usaria "portanto/logo"; explicativa usaria "pois/porque" antes do verbo; alternativa usaria "ou/ora...ora".',
  },
  // ── Tópico 5.3 ──
  {
    id: 'sim-08',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"Os servidores que participaram do treinamento receberam certificados."',
    question:
      'Se adicionarmos vírgulas ao redor de "que participaram do treinamento", o sentido da frase:',
    options: [
      'Permanece exatamente o mesmo',
      'Indica que apenas alguns servidores participaram',
      'Passa a indicar que todos os servidores participaram do treinamento',
      'Torna a frase gramaticalmente incorreta',
    ],
    correctAnswer: 2,
    explanation:
      'Sem vírgulas = adjetiva RESTRITIVA: apenas os que participaram receberam certificados. Com vírgulas = adjetiva EXPLICATIVA: todos os servidores participaram e todos receberam certificados. A vírgula transforma completamente o sentido — um dos conceitos mais cobrados em concordância/pontuação.',
  },
  // ── Tópico 5.4 ──
  {
    id: 'sim-09',
    type: 'multiple_choice',
    difficulty: 'medium',
    question: 'Em qual alternativa o uso da vírgula está INCORRETO?',
    options: [
      'O presidente, que discursou por duas horas, foi bastante aplaudido.',
      'Comprou cadernos, canetas, lápis e borrachas.',
      'O candidato que estudou, foi aprovado.',
      'Ontem à tarde, o diretor assinou os documentos.',
    ],
    correctAnswer: 2,
    explanation:
      '"O candidato que estudou, foi aprovado" — vírgula entre sujeito e verbo é PROIBIDA. "O candidato que estudou" é o sujeito completo (com oração adjetiva restritiva) e não admite vírgula antes do verbo "foi". As demais estão corretas: A) explicativa entre vírgulas ✓; B) enumeração ✓; D) adjunto adverbial deslocado ✓.',
  },
  // ── Tópico 5.5 ──
  {
    id: 'sim-10',
    type: 'multiple_choice',
    difficulty: 'hard',
    context: '"________ muitos interessados no processo seletivo este ano."',
    question: 'Qual alternativa preenche corretamente a lacuna?',
    options: ['Existem', 'Houveram', 'Haviam', 'Tiveram'],
    correctAnswer: 0,
    explanation:
      '"Existem" concorda com "muitos interessados" (plural) ✓. "Haver" com sentido de existir é IMPESSOAL — deveria ser "Há" (singular), não "Houveram" nem "Haviam". "Tiveram" não se aplica ao sentido existencial. Logo, a única forma correta é "Existem" (verbo pessoal que admite concordância com o sujeito).',
  },
  // ── Tópico 5.6 ──
  {
    id: 'sim-11',
    type: 'multiple_choice',
    difficulty: 'medium',
    question: 'Assinale a frase com regência verbal CORRETA:',
    options: [
      'O cidadão deve obedecer as leis do país.',
      'Assisti o filme indicado pelo professor.',
      'O projeto visa à melhoria da qualidade de vida.',
      'Prefiro estudar mais do que ficar ocioso.',
    ],
    correctAnswer: 2,
    explanation:
      '"Visar a" (ter como objetivo) é VTI → pede "a" + artigo feminino = crase ✓. Erros: A) "obedecer" é VTI → "obedecer ÀS leis" ✓; B) "assistir" (ver) é VTI → "assisti AO filme" ✓; D) "preferir" já é comparativo → "prefiro X A Y" (não "mais do que").',
  },
  // ── Tópico 5.7 ──
  {
    id: 'sim-12',
    type: 'multiple_choice',
    difficulty: 'medium',
    question: 'Em qual das alternativas o emprego da crase está CORRETO?',
    options: [
      'Dirigiu-se à alguém que estava na entrada.',
      'Chegou à tempo para a reunião.',
      'Encaminhou o processo à Secretaria de Educação.',
      'Referiu-se à esta proposta com entusiasmo.',
    ],
    correctAnswer: 2,
    explanation:
      '"À Secretaria" ✓: verbo "encaminhar" pede "a" + "Secretaria" (feminino, admite artigo) = crase. Erros: A) nunca crase antes de pronome indefinido "alguém"; B) "a tempo" é locução adverbial sem artigo → sem crase; D) nunca crase antes de pronome demonstrativo "esta".',
  },
  // ── Tópico 5.8 ──
  {
    id: 'sim-13',
    type: 'multiple_choice',
    difficulty: 'hard',
    question: 'Assinale a alternativa com colocação pronominal adequada à norma culta ESCRITA:',
    options: [
      'Me disseram que a reunião foi cancelada.',
      'Disseram-me que a reunião foi cancelada.',
      'Disseram me que a reunião foi cancelada.',
      'Me-disseram que a reunião foi cancelada.',
    ],
    correctAnswer: 1,
    explanation:
      '"Disseram-me" = ênclise ao verbo no pretérito perfeito, sem palavra atrativa antes ✓. Pronome átono NUNCA inicia frase na norma culta escrita (elimina A). C não tem hífen (grafia errada). D coloca hífen antes do verbo (estrutura inexistente). Ênclise é a posição correta aqui.',
  },
  // ── Tópico 6.1 ──
  {
    id: 'sim-14',
    type: 'multiple_choice',
    difficulty: 'medium',
    context:
      '"O político tinha uma raposa no gabinete — alguém que, sorrindo, preparava sua queda."',
    question: 'A palavra "raposa" está empregada em sentido:',
    options: [
      'Denotativo — refere-se ao animal mamífero da família Canidae',
      'Conotativo — representa alguém astuto e traiçoeiro',
      'Técnico — denominação científica do assessor político',
      'Literal — descreve um animal presente no local',
    ],
    correctAnswer: 1,
    explanation:
      'Uso CONOTATIVO: "raposa" não é o animal, mas representa metaforicamente uma pessoa astuta e traiçoeira. O contexto confirma: "sorrindo" e "preparava sua queda" — comportamento humano, não animal. Isso é linguagem figurada/conotativa, muito comum em textos literários e jornalísticos.',
  },
  // ── Tópico 6.2 ──
  {
    id: 'sim-15',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"Embora os resultados sejam animadores, a equipe não deve relaxar os esforços."',
    question:
      'Assinale a alternativa que reescreve o período mantendo o mesmo sentido e correção gramatical:',
    options: [
      'Os resultados são animadores, portanto a equipe não deve relaxar os esforços.',
      'Apesar de os resultados serem animadores, a equipe não deve relaxar os esforços.',
      'Como os resultados são animadores, a equipe não deve relaxar os esforços.',
      'Quando os resultados são animadores, a equipe não deve relaxar os esforços.',
    ],
    correctAnswer: 1,
    explanation:
      '"Apesar de os resultados serem animadores" = concessiva (mesmo valor de "embora") ✓. Erros: A) "portanto" é conclusivo — muda a relação lógica para consequência, não concessão; C) "como" (= já que) é causal — sentido completamente diferente; D) "quando" é temporal — não expressa a concessão.',
  },
  // ── Tópico 6.3 ──
  {
    id: 'sim-16',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"O relatório foi concluído pela equipe técnica na última semana."',
    question: 'A reescrita na voz ativa, mantendo o mesmo tempo verbal, é:',
    options: [
      'A equipe técnica concluiu o relatório na última semana.',
      'A equipe técnica conclui o relatório na última semana.',
      'O relatório a equipe técnica concluiu na última semana.',
      'A equipe técnica havia concluído o relatório na última semana.',
    ],
    correctAnswer: 0,
    explanation:
      'Passiva analítica → ativa: sujeito paciente ("o relatório") vira OD; agente da passiva ("pela equipe técnica") vira sujeito; verbo: "foi concluído" (pretérito perfeito passivo) → "concluiu" (pretérito perfeito ativo). A é a única que mantém o pretérito perfeito e a correção.',
  },
  // ── Tópico 6.4 ──
  {
    id: 'sim-17',
    type: 'multiple_choice',
    difficulty: 'medium',
    context:
      '"Ei, vi que vc não veio na reunião hoje. Tudo bem? A gente decide sobre o projeto semana que vem."',
    question:
      'Se esse texto fosse reescrito como uma mensagem de e-mail profissional (semiformal), qual versão seria mais adequada?',
    options: [
      'Notei sua ausência na reunião de hoje. Caso necessário, podemos agendar uma conversa para alinharmos as decisões sobre o projeto na próxima semana.',
      'Percebi que você não compareceu à reunião. Gostaria de saber se está tudo bem e informo que definiremos o projeto na semana seguinte.',
      'Oi! Vi que você faltou na reunião. Espero que esteja bem. Podemos resolver o projeto logo.',
      'Em razão de sua ausência na reunião ora realizada, comunicamos que as deliberações acerca do projeto em epígrafe ficam adiadas para a semana subsequente.',
    ],
    correctAnswer: 1,
    explanation:
      'Nível semiformal (e-mail profissional): linguagem padrão culta sem gírias, direta, cordial, sem formalidade excessiva. A está correta mas levemente formal demais para semiformal. C mantém informalidade ("Oi!"). D é excessivamente formal/burocrático ("ora realizada", "em epígrafe"). B é o melhor equilíbrio semiformal.',
  },
  // ── Questão integrada ──
  {
    id: 'sim-18',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"Não me parece prudente que os candidatos ignorem os temas recorrentes das provas anteriores."',
    question:
      'Nessa frase, a colocação pronominal, a concordância verbal e a regência estão todas corretas. Qual palavra atrativa justifica a próclise de "me"?',
    options: [
      'O verbo "parece" no presente do indicativo',
      'A negação "Não" que precede o verbo',
      'O pronome "os" que antecede "candidatos"',
      'A conjunção "que" que introduz a subordinada',
    ],
    correctAnswer: 1,
    explanation:
      '"Não" é palavra negativa — uma das categorias de palavras ATRATIVAS que obrigam a próclise. Por isso "me" vem antes de "parece": "Não ME parece" ✓. Se não houvesse o "não", a forma padrão seria "Parece-ME" (ênclise). A negação é a mais cobrada das palavras atrativas.',
  },
  // ── Questão integrada 2 ──
  {
    id: 'sim-19',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"A comissão, composta por especialistas renomados, avaliará os projetos submetidos."',
    question:
      'O trecho "composta por especialistas renomados" exerce a função de:',
    options: [
      'Oração subordinada adjetiva explicativa reduzida de particípio',
      'Oração subordinada adverbial causal reduzida de particípio',
      'Adjunto adnominal na forma de locução prepositiva',
      'Oração principal do período',
    ],
    correctAnswer: 0,
    explanation:
      '"Composta por especialistas renomados" é oração adjetiva EXPLICATIVA (entre vírgulas, acrescenta informação sobre "a comissão") na forma REDUZIDA DE PARTICÍPIO ("composta" = que foi composta). Não é causal porque não expressa motivo — apenas caracteriza a comissão.',
  },
  // ── Questão final ──
  {
    id: 'sim-20',
    type: 'multiple_choice',
    difficulty: 'hard',
    context:
      '"Ao chegarmos à sede da empresa, fomos informados de que a reunião havia sido transferida."',
    question:
      'Assinale a alternativa que reescreve o período com correção e sentido equivalente:',
    options: [
      'Quando chegamos à sede da empresa, informaram-nos de que a reunião havia sido transferida.',
      'Quando chegamos à sede da empresa, nos informaram que a reunião tinha transferido.',
      'Ao chegarmos à sede da empresa, foram informados de que a reunião havia sido transferida.',
      'Chegando à sede da empresa, fomos informados que a reunião havia sido transferida.',
    ],
    correctAnswer: 0,
    explanation:
      'A está correta: "Quando chegamos" (temporal desenvolvida) = "Ao chegarmos" (temporal reduzida); "informaram-nos" (voz ativa, ênclise correta, sem palavra atrativa) = "fomos informados" (voz passiva); "de que" mantido (regência de "informar"). Erros: B) "nos informaram" no início ✗ e regência; C) troca "fomos" por "foram" (sujeito diferente); D) perde a preposição "de" da regência.',
  },
];
