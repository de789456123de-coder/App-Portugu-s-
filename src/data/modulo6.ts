import { Lesson } from '../types';

export const modulo6Lessons: Lesson[] = [
  {
    id: 'm6-l1',
    title: 'Significação das Palavras — Denotação e Conotação (6.1)',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'A SIGNIFICAÇÃO das palavras é o estudo do sentido que elas carregam nos diferentes contextos de uso. Compreender como as palavras significam é fundamental para interpretar, reescrever e substituir trechos com precisão.',
      },
      {
        type: 'subtitle',
        content: 'Denotação e Conotação',
      },
      {
        type: 'table',
        content: 'Denotação vs. Conotação',
        headers: ['Conceito', 'Definição', 'Exemplo'],
        rows: [
          ['Denotação', 'Sentido literal, objetivo, registrado no dicionário', '"A raposa vive na floresta."'],
          ['Conotação', 'Sentido figurado, subjetivo, dependente do contexto', '"Aquele homem é uma raposa." (= esperto, astuto)'],
        ],
      },
      {
        type: 'text',
        content:
          'A linguagem DENOTATIVA predomina em textos técnicos, científicos e jornalísticos — onde a precisão é exigida. A linguagem CONOTATIVA predomina em textos literários, publicitários e coloquiais — onde a expressividade importa.',
      },
      {
        type: 'subtitle',
        content: 'Polissemia e Homonímia',
      },
      {
        type: 'table',
        content: 'Polissemia vs. Homonímia',
        headers: ['Fenômeno', 'O que é', 'Exemplo'],
        rows: [
          ['Polissemia', 'Uma palavra com vários sentidos relacionados entre si', '"manga": parte da roupa / fruta / tubo — sentidos relacionados'],
          ['Homonímia', 'Palavras iguais na forma, mas com origens e sentidos distintos', '"são" (saudável) ≠ "são" (forma de ser) ≠ "São" (santo)'],
          ['Homógrafas', 'Mesma escrita, pronúncia diferente', '"colher" (utensílio) vs. "colher" (verbo: coletar)'],
          ['Homófonas', 'Mesmo som, escrita diferente', '"acento" vs. "assento"'],
          ['Homônimas perfeitas', 'Mesma escrita E mesmo som', '"canto" (canção) vs. "canto" (ângulo)'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Sinonímia, Antonímia e Hiperonímia',
      },
      {
        type: 'table',
        content: 'Relações de sentido',
        headers: ['Relação', 'Definição', 'Exemplo'],
        rows: [
          ['Sinonímia', 'Palavras de sentido igual ou próximo', 'bonito = belo = formoso = lindo'],
          ['Antonímia', 'Palavras de sentido contrário', 'bonito ≠ feio | quente ≠ frio'],
          ['Hiperonímia', 'Palavra de sentido mais amplo (gênero)', '"animal" é hiperônimo de "cachorro"'],
          ['Hiponímia', 'Palavra de sentido mais específico (espécie)', '"cachorro" é hipônimo de "animal"'],
          ['Holonímia', 'Palavra que designa o todo', '"rosto" é holônimo de "nariz"'],
          ['Meronímia', 'Palavra que designa a parte', '"nariz" é merônimo de "rosto"'],
        ],
      },
      {
        type: 'warning',
        label: 'Sinonímia perfeita é rara',
        content:
          'Palavras sinônimas raramente são intercambiáveis em todos os contextos. "Bonito" e "belo" são sinônimos, mas carregam registros diferentes: "belo" é mais formal/literário. Em questões de substituição, verifique sempre: sentido, registro e contexto.',
      },
      {
        type: 'tip',
        label: 'Em concursos',
        content:
          'Questões de "6.1 Significação" geralmente pedem:\n• "A palavra X, no contexto, significa..." → analise o contexto, não o sentido isolado\n• "Assinale o sinônimo adequado para X no trecho" → teste a substituição na frase\n• "A expressão Y está empregada em sentido figurado/literal?" → identifique denotação/conotação',
      },
    ],
  },
  {
    id: 'm6-l2',
    title: 'Sentido Contextual, Polissemia e Neologismos (6.1)',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'O CONTEXTO é o elemento decisivo para determinar o sentido exato de uma palavra. Fora do contexto, muitas palavras são ambíguas. Em provas, a resposta sobre significação deve sempre ser fundamentada no trecho analisado.',
      },
      {
        type: 'subtitle',
        content: 'Campo Semântico e Campo Lexical',
      },
      {
        type: 'table',
        content: 'Campo semântico vs. lexical',
        headers: ['Conceito', 'Definição', 'Exemplo'],
        rows: [
          ['Campo semântico', 'Conjunto de sentidos de uma mesma palavra', '"Cabeça": parte do corpo / líder / inteligência / topo'],
          ['Campo lexical', 'Conjunto de palavras relacionadas a um tema', 'Escola: aluno, professor, quadro, aula, nota, reprovar'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Neologismo, Arcaísmo e Estrangeirismo',
      },
      {
        type: 'table',
        content: 'Variação histórica do léxico',
        headers: ['Fenômeno', 'O que é', 'Exemplos'],
        rows: [
          ['Neologismo', 'Palavra nova criada para nomear nova realidade', 'selfie, deletar, postar, tuitar, stalker'],
          ['Arcaísmo', 'Palavra em desuso, pertencente a épocas passadas', 'vossa mercê, outrossim, alhures, porquanto'],
          ['Estrangeirismo', 'Palavra de língua estrangeira usada no português', 'download, show, marketing, hambúrguer, sofá'],
          ['Neologismo semântico', 'Palavra antiga com sentido novo', '"surfar" na internet; "navegar" na web'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Eufemismo e Disfemismo',
      },
      {
        type: 'table',
        content: 'Eufemismo vs. Disfemismo',
        headers: ['Recurso', 'O que faz', 'Exemplo'],
        rows: [
          ['Eufemismo', 'Suaviza termo desagradável ou tabu', '"ele nos deixou" (= morreu); "necessidades fisiológicas" (= urinar/defecar)'],
          ['Disfemismo', 'Intensifica negativamente (efeito oposto)', '"esticar as canelas" (= morrer); "encheu o saco" (= importunou)'],
        ],
      },
      {
        type: 'example',
        label: 'Sentido contextual — questão típica',
        content:
          'Texto: "O candidato demonstrou grande desenvoltura ao responder as perguntas da banca."\n\nQuestão: "A palavra \'desenvoltura\' pode ser substituída, sem alteração de sentido, por:"\nA) timidez  B) habilidade  C) lentidão  D) insegurança\n\nResposta: B — "desenvoltura" = facilidade, habilidade, desinibição. O contexto (responder bem a perguntas) confirma sentido positivo. ✓',
      },
    ],
  },
  {
    id: 'm6-l3',
    title: 'Substituição de Palavras sem Alterar o Sentido (6.2)',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'A SUBSTITUIÇÃO de palavras é um dos recursos mais cobrados em concursos. A questão apresenta um trecho e pede que se substitua uma palavra ou expressão por outra equivalente — sem alterar o sentido e sem criar incorreção gramatical.',
      },
      {
        type: 'subtitle',
        content: 'Os Três Critérios da Substituição Válida',
      },
      {
        type: 'table',
        content: 'Critérios de substituição',
        headers: ['Critério', 'O que verificar', 'Armadilha comum'],
        rows: [
          ['Sentido', 'O sinônimo tem o mesmo sentido no contexto?', 'Sinônimos parciais que mudam a nuance'],
          ['Registro', 'Formal/informal/técnico — é compatível?', 'Substituir formal por informal em texto jurídico'],
          ['Correção gramatical', 'A substituição mantém a concordância, regência e pontuação?', 'Mudar preposição exigida (regência) ao trocar o verbo'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Substituição de Conectores',
      },
      {
        type: 'text',
        content:
          'A substituição de conectores é das questões mais cobradas. O conector substituto deve manter a mesma relação lógica (causal, adversativa, conclusiva etc.).',
      },
      {
        type: 'table',
        content: 'Substituições de conectores',
        headers: ['Original', 'Pode substituir por', 'Relação'],
        rows: [
          ['"mas"', '"porém", "contudo", "todavia", "entretanto"', 'Adversativa'],
          ['"porque"', '"já que", "visto que", "uma vez que", "pois"', 'Causal'],
          ['"portanto"', '"logo", "assim", "por conseguinte", "por isso"', 'Conclusiva'],
          ['"embora"', '"ainda que", "mesmo que", "apesar de que"', 'Concessiva'],
          ['"se"', '"caso", "desde que" (+ subjuntivo)', 'Condicional'],
          ['"quando"', '"assim que", "logo que", "no momento em que"', 'Temporal'],
        ],
      },
      {
        type: 'warning',
        label: 'Substituição que altera a relação lógica',
        content:
          '"Estudou muito, MAS não passou." (adversativa)\n→ "Estudou muito, PORTANTO não passou." ✗ — muda para conclusiva, alterando o sentido\n→ "Estudou muito; CONTUDO, não passou." ✓ — mantém a adversativa\n\nEm provas, alternativas que trocam a relação lógica estão ERRADAS mesmo que a substituição pareça sinônima.',
      },
      {
        type: 'subtitle',
        content: 'Substituição de Locuções por Palavras (e vice-versa)',
      },
      {
        type: 'example',
        label: 'Equivalências',
        content:
          'Locução → palavra:\n"com frequência" → "frequentemente"\n"de forma clara" → "claramente"\n"sem dúvida alguma" → "indubitavelmente"\n\nLocução adjetiva → adjetivo:\n"de criança" → "infantil"\n"de ouro" → "áureo"\n"do sol" → "solar"\n"de noite" → "noturno"\n\nOração subordinada → locução:\n"Quando terminou" → "Ao terminar" (reduzida de infinitivo)\n"Porque estava cansado" → "Por estar cansado" (reduzida de infinitivo)',
      },
    ],
  },
  {
    id: 'm6-l4',
    title: 'Substituição de Trechos — Voz e Discurso (6.2)',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'Além da substituição de palavras, as questões de concurso exploram a substituição de TRECHOS inteiros — transformando a voz verbal, o discurso (direto/indireto) ou a estrutura sintática sem perda de sentido.',
      },
      {
        type: 'subtitle',
        content: 'Transformação de Voz: Ativa ↔ Passiva',
      },
      {
        type: 'table',
        content: 'Ativa → Passiva analítica',
        headers: ['Passo', 'Regra', 'Aplicação'],
        rows: [
          ['1', 'OD vira sujeito paciente', '"aprovaram a lei" → "a lei..."'],
          ['2', 'Verbo: ser + particípio (mesmo tempo)', '"aprovaram" (pret. perf.) → "foi aprovada"'],
          ['3', 'Sujeito vira agente da passiva (por/pelo/pela)', '"o congresso" → "pelo Congresso"'],
        ],
      },
      {
        type: 'example',
        label: 'Transformações de voz',
        content:
          'ATIVA: "O presidente assinou o decreto."\nPASSIVA ANALÍTICA: "O decreto foi assinado pelo presidente."\nPASSIVA SINTÉTICA: "Assinou-se o decreto." (com "se" apassivador)\n\nATIVA: "Os pesquisadores divulgarão os resultados amanhã."\nPASSIVA: "Os resultados serão divulgados pelos pesquisadores amanhã."\n\nATENÇÃO: verbos intransitivos e pronominais NÃO formam voz passiva.',
      },
      {
        type: 'subtitle',
        content: 'Discurso Direto → Indireto',
      },
      {
        type: 'text',
        content:
          'A transformação de discurso direto em indireto exige ajustes sistemáticos: pronomes, verbos, advérbios de tempo e lugar, e pontuação.',
      },
      {
        type: 'table',
        content: 'Transformações no discurso indireto',
        headers: ['No discurso direto', 'No discurso indireto'],
        rows: [
          ['"eu / nós" (fala)', '"ele / ela / eles" (narrador)'],
          ['"você / tu" (fala)', '"eu / o narrador" (quem perguntava)'],
          ['Presente do ind.', 'Imperfeito do ind. (quando o verbum dicendi é passado)'],
          ['Pretérito perfeito', 'Pretérito mais-que-perfeito'],
          ['Futuro do presente', 'Futuro do pretérito'],
          ['Imperativo', 'Infinitivo (com "que")'],
          ['"aqui", "agora", "hoje"', '"ali", "então", "naquele dia"'],
          ['Aspas e travessão', 'Conjunção "que" / "se" (interrogativa)'],
        ],
      },
      {
        type: 'example',
        label: 'Direto → Indireto',
        content:
          'DIRETO: O professor disse: "Vocês devem entregar a prova amanhã."\nINDIRETO: O professor disse que eles deveriam entregar a prova no dia seguinte.\n\nDIRETO: Ela perguntou: "Você vai à festa hoje?"\nINDIRETO: Ela perguntou se ele/eu iria à festa naquele dia.',
      },
      {
        type: 'subtitle',
        content: 'Oração Desenvolvida ↔ Reduzida',
      },
      {
        type: 'table',
        content: 'Transformações oração desenvolvida ↔ reduzida',
        headers: ['Desenvolvida', 'Reduzida', 'Tipo'],
        rows: [
          ['"Quando ele chegou,"', '"Ao chegar,"', 'Temporal → infinitivo'],
          ['"Depois que terminou,"', '"Terminada a tarefa,"', 'Temporal → particípio'],
          ['"Porque estava cansado,"', '"Por estar cansado,"', 'Causal → infinitivo'],
          ['"Para que você entenda,"', '"Para você entender,"', 'Final → infinitivo'],
          ['"Embora soubesse,"', '"Sabendo,"', 'Concessiva → gerúndio (aprox.)'],
        ],
      },
    ],
  },
  {
    id: 'm6-l5',
    title: 'Reorganização de Orações (6.3)',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'REORGANIZAR uma oração ou período significa alterar a ordem dos seus elementos mantendo o sentido original e a correção gramatical. É uma habilidade que une sintaxe, coesão e estilo.',
      },
      {
        type: 'subtitle',
        content: 'Inversão da Ordem Direta',
      },
      {
        type: 'text',
        content:
          'A ORDEM DIRETA é: Sujeito + Verbo + Complemento + Adjuntos. A ORDEM INVERSA desloca elementos para fins de ênfase, estilo ou coesão textual.',
      },
      {
        type: 'example',
        label: 'Inversões possíveis',
        content:
          'Ordem direta:\n"O governo anunciou novas medidas econômicas ontem."\n\nOrdem inversa (adjunto antecipado):\n"Ontem, o governo anunciou novas medidas econômicas."\n→ Ênfase no tempo.\n\nOrdem inversa (predicado antecipado):\n"Novas medidas econômicas o governo anunciou ontem."\n→ Ênfase no objeto (uso literário/enfático).\n\nRegra: a inversão é válida desde que não crie ambiguidade e que a concordância seja mantida.',
      },
      {
        type: 'subtitle',
        content: 'Deslocamento de Adjuntos Adverbiais',
      },
      {
        type: 'text',
        content:
          'Os adjuntos adverbiais são os elementos mais móveis da oração. Podem aparecer antes do sujeito, entre sujeito e verbo (entre vírgulas) ou após o complemento.',
      },
      {
        type: 'example',
        label: 'Posições do adjunto adverbial',
        content:
          '"Com dedicação, o candidato estudou para o concurso." ✓\n"O candidato, com dedicação, estudou para o concurso." ✓\n"O candidato estudou para o concurso com dedicação." ✓\n\nTodas as versões têm o mesmo sentido — apenas a ênfase e o ritmo mudam.\n\nAtenção: adjunto entre sujeito e verbo EXIGE vírgulas:\n"O candidato com dedicação estudou..." ✗ (parece que "com dedicação" restringe "o candidato")\n"O candidato, com dedicação, estudou..." ✓',
      },
      {
        type: 'subtitle',
        content: 'Reorganização por Substituição de Estrutura',
      },
      {
        type: 'table',
        content: 'Equivalências estruturais',
        headers: ['Estrutura original', 'Estrutura equivalente'],
        rows: [
          ['"apesar de que chovesse"', '"embora chovesse" / "mesmo que chovesse"'],
          ['"em razão de o fato de"', '"porque" / "por causa de"'],
          ['"no momento em que"', '"quando" / "assim que"'],
          ['"com o objetivo de"', '"para" / "a fim de"'],
          ['"tendo em vista que"', '"visto que" / "uma vez que"'],
          ['"a despeito de"', '"apesar de" / "não obstante"'],
        ],
      },
      {
        type: 'warning',
        label: 'O que pode mudar ao reorganizar',
        content:
          'Ao reorganizar, verifique:\n1. A concordância — sujeito posposto pode gerar dúvida\n2. A pontuação — adjunto deslocado exige vírgula\n3. O sentido — a inversão não pode criar ambiguidade\n4. A regência — trocar conector pode mudar a preposição exigida',
      },
    ],
  },
  {
    id: 'm6-l6',
    title: 'Reorganização de Períodos — Fusão e Separação (6.3)',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'Além de reorganizar a ordem dos termos, as questões de concurso pedem a transformação de períodos: juntar dois períodos em um, separar um período longo em dois, ou converter período simples em composto (e vice-versa).',
      },
      {
        type: 'subtitle',
        content: 'Período Simples ↔ Período Composto',
      },
      {
        type: 'example',
        label: 'Conversão simples ↔ composto',
        content:
          'SIMPLES → COMPOSTO:\n"O trabalho do médico é salvar vidas."\n→ "O médico trabalha para salvar vidas." (oração final reduzida)\n→ "O médico trabalha para que vidas sejam salvas." (oração final desenvolvida)\n\nCOMPOSTO → SIMPLES:\n"Depois que terminou a prova, o candidato saiu."\n→ "Terminada a prova, o candidato saiu." (particípio = período simples com adjunto)\n\n"Quando chegou ao local, percebeu que estava atrasado."\n→ "Ao chegar ao local, percebeu o atraso." (simplificação com nominalização)',
      },
      {
        type: 'subtitle',
        content: 'Fusão de Períodos',
      },
      {
        type: 'text',
        content:
          'Dois períodos independentes podem ser fundidos usando um conector que explicita a relação lógica entre eles.',
      },
      {
        type: 'example',
        label: 'Fusão com conectores',
        content:
          'SEPARADOS:\n"A empresa investiu em tecnologia. Os custos de produção caíram significativamente."\n\nFUSÃO (causal):\n"Como a empresa investiu em tecnologia, os custos de produção caíram." ✓\n\nFUSÃO (consecutiva):\n"A empresa investiu tanto em tecnologia que os custos de produção caíram." ✓\n\nFUSÃO (temporal):\n"Após investir em tecnologia, a empresa viu os custos de produção caírem." ✓\n\n→ Cada fusão ressalta uma relação lógica diferente — a escolha afeta o sentido.',
      },
      {
        type: 'subtitle',
        content: 'Coordenadas ↔ Subordinadas',
      },
      {
        type: 'table',
        content: 'Transformação coordenada ↔ subordinada',
        headers: ['Coordenada', 'Subordinada equivalente'],
        rows: [
          ['"Estudou muito e passou." (aditiva)', '"Estudou tanto que passou." (consecutiva)'],
          ['"Estava doente, mas compareceu." (adversativa)', '"Embora estivesse doente, compareceu." (concessiva)'],
          ['"Não foi, pois estava doente." (explicativa)', '"Não foi porque estava doente." (causal)'],
          ['"Esforce-se e vencerá." (imperativa + aditiva)', '"Se você se esforçar, vencerá." (condicional)'],
        ],
      },
      {
        type: 'tip',
        label: 'O que a banca verifica na reorganização',
        content:
          '1. O sentido foi preservado? (relação lógica mantida)\n2. A gramática está correta? (concordância, regência, pontuação)\n3. Não houve acréscimo ou supressão de informação?\n4. O registro é adequado ao gênero do texto original?\n\nQuando a banca pede "reescrita que mantém o sentido", toda alternativa que acrescenta, suprime ou distorce é errada.',
      },
    ],
  },
  {
    id: 'm6-l7',
    title: 'Reescrita por Gênero Textual (6.4)',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'Reescrever um texto para outro gênero significa adaptar o conteúdo à nova função social, ao novo suporte e ao novo interlocutor. O CONTEÚDO pode ser o mesmo; a FORMA muda radicalmente.',
      },
      {
        type: 'subtitle',
        content: 'O Mesmo Fato em Quatro Gêneros',
      },
      {
        type: 'example',
        label: 'Fato: incêndio em prédio comercial',
        content:
          'NOTÍCIA:\n"Um incêndio destruiu parte de um prédio comercial no centro de São Paulo na tarde de quinta-feira. Ninguém ficou ferido, segundo o Corpo de Bombeiros, que controlou as chamas em duas horas."\n→ Linguagem direta, tempo passado, lide com os dados essenciais.\n\nCRÔNICA:\n"O fogo tinha sua lógica própria. Devorava papéis, memórias, contratos — tudo que os homens insistem em chamar de importante. E lá embaixo, na calçada, a multidão olhava como se assistisse a um espetáculo."\n→ Linguagem literária, reflexiva, subjetiva, metafórica.\n\nCARNA FORMAL (ofício de comunicação interna):\n"Informamos que, em virtude do sinistro ocorrido em 05/06/2026 nas dependências do edifício sede, as atividades da empresa ficarão suspensas até nova comunicação."\n→ Linguagem impessoal, formal, verbo no futuro, vocabulário técnico.\n\nPOST DE REDE SOCIAL:\n"Gente, incêndio no centro de SP agora! 😱 Alguém sabe o que aconteceu? #saopauloalerta"\n→ Linguagem informal, exclamativa, emojis, hashtags, pergunta ao público.',
      },
      {
        type: 'subtitle',
        content: 'O Que Muda ao Trocar de Gênero',
      },
      {
        type: 'table',
        content: 'Elementos que se adaptam',
        headers: ['Elemento', 'Notícia', 'Crônica', 'Ofício', 'Post digital'],
        rows: [
          ['Pessoa verbal', '3ª pessoa', '1ª ou 3ª', '1ª pl. / impessoal', '1ª pessoa'],
          ['Tempo verbal', 'Pretérito', 'Variado', 'Presente/futuro', 'Presente'],
          ['Vocabulário', 'Padrão/neutro', 'Literário/figurado', 'Técnico/formal', 'Coloquial/gíria'],
          ['Estrutura', 'Pirâmide invertida', 'Livre/narrativa', 'Padrão oficial', 'Curta/fragmentada'],
          ['Pontuação', 'Padrão', 'Expressiva', 'Padrão formal', 'Emojis/reticências'],
          ['Objetivo', 'Informar', 'Reflexão/emoção', 'Comunicar/oficializar', 'Engajar/compartilhar'],
        ],
      },
      {
        type: 'tip',
        label: 'Estratégia para questões de reescrita por gênero',
        content:
          'Identifique os marcadores do gênero pedido:\n• Notícia → lide, objetividade, pirâmide invertida\n• Crônica → subjetividade, linguagem figurada, reflexão cotidiana\n• Ofício/carta → vocativo formal, fecho padronizado, impessoalidade\n• Texto científico → impessoalidade, terminologia técnica, verbos no presente\n• Post/chat → informalidade, abreviações, recursos visuais',
      },
    ],
  },
  {
    id: 'm6-l8',
    title: 'Reescrita por Nível de Formalidade (6.4)',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'O NÍVEL DE FORMALIDADE é a adequação da linguagem ao contexto comunicativo. Nem a linguagem mais formal é "melhor" que a informal — cada uma tem seu lugar. O erro é usar o registro inadequado ao contexto.',
      },
      {
        type: 'subtitle',
        content: 'Os Quatro Registros',
      },
      {
        type: 'table',
        content: 'Níveis de formalidade',
        headers: ['Nível', 'Contexto', 'Características', 'Exemplo'],
        rows: [
          ['Informal', 'Amigos, família, redes sociais', 'Gírias, abreviações, frases curtas, contrações', '"Cara, que saudade! Quando a gente se vê?"'],
          ['Semiformal', 'E-mail profissional, reunião', 'Padrão culto, direto, sem gírias, cordial', '"Olá, tudo bem? Podemos marcar uma reunião?"'],
          ['Formal', 'Documentos, cartas oficiais, discursos', 'Padrão culto estrito, frases elaboradas, vocabulário preciso', '"Venho, por meio desta, solicitar..."'],
          ['Técnico/científico', 'Artigos, laudos, relatórios', 'Terminologia específica, impessoalidade, objetividade máxima', '"O espécime apresenta características fenotípicas..."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'O Mesmo Conteúdo em Quatro Registros',
      },
      {
        type: 'example',
        label: 'Pedido de reunião — 4 versões',
        content:
          'INFORMAL:\n"Ei, precisava bater um papo com vc sobre o projeto. Tá na boa amanhã de tarde?"\n\nSEMIFORMAL:\n"Olá, João. Gostaria de conversar sobre o projeto. Você tem disponibilidade amanhã à tarde?"\n\nFORMAL:\n"Prezado João, solicito sua atenção para uma reunião a fim de discutirmos o andamento do projeto. Informo minha disponibilidade para o período vespertino de amanhã."\n\nTÉCNICO/OFICIAL:\n"Senhor João Silva, comunico a necessidade de reunião para análise do status do Projeto X, conforme previsto no cronograma vigente. Solicito confirmação de disponibilidade para 14h do dia 10/06/2026."',
      },
      {
        type: 'subtitle',
        content: 'Marcadores Linguísticos de Formalidade',
      },
      {
        type: 'table',
        content: 'Marcadores formais vs. informais',
        headers: ['Aspecto', 'Formal', 'Informal'],
        rows: [
          ['Pronome de tratamento', 'Vossa Senhoria, o senhor/a senhora', 'você, tu, cê'],
          ['Verbo', 'Conjugação plena, subjuntivo', 'Simplificação, indicativo no lugar do subjuntivo'],
          ['Vocabulário', 'Preciso, técnico, sem gírias', 'Gírias, expressões idiomáticas, neologismos'],
          ['Estrutura frasal', 'Períodos longos, subordinação', 'Frases curtas, coordenação simples'],
          ['Negação', '"Não tenho disponibilidade"', '"Num posso não"'],
          ['Concordância', 'Estrita norma culta', 'Variante coloquial aceita'],
          ['Conectores', 'Todavia, outrossim, não obstante', 'Mas, aí, daí, então'],
        ],
      },
      {
        type: 'warning',
        label: 'Erro de registro — inadequação',
        content:
          'Em questões de reescrita, uma alternativa pode estar gramaticalmente correta mas INADEQUADA ao registro do texto original. Ex.: substituir "no entanto" por "mas aí" em um ofício oficial — correto na fala, inadequado no gênero formal.\n\nA banca cobra essa adequação: a reescrita deve manter não só o sentido, mas também o registro.',
      },
      {
        type: 'tip',
        label: 'Checklist de reescrita para concurso',
        content:
          '✓ O sentido foi preservado?\n✓ A relação lógica entre as ideias foi mantida?\n✓ A gramática está correta (concordância, regência, pontuação)?\n✓ O registro é adequado ao gênero e ao contexto?\n✓ Não houve acréscimo ou supressão de informação?\n✓ A coesão foi mantida ou melhorada?\n\nSe tudo estiver marcado, a reescrita está correta.',
      },
    ],
  },
];
