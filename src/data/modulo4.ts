import { Lesson } from '../types';

export const modulo4Lessons: Lesson[] = [
  {
    id: 'm4-l1',
    title: 'Referenciação Textual',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'A coesão textual é o conjunto de recursos linguísticos que garante a ligação e a continuidade entre as partes de um texto. Sem coesão, as frases ficam soltas — sem coesão, não há texto, apenas um amontoado de sentenças.',
      },
      {
        type: 'subtitle',
        content: 'Referência Endofórica e Exofórica',
      },
      {
        type: 'text',
        content:
          'A REFERÊNCIA ENDOFÓRICA remete a elementos dentro do próprio texto. A REFERÊNCIA EXOFÓRICA remete a elementos fora do texto, no contexto situacional (só funciona se o interlocutor compartilhar esse contexto).',
      },
      {
        type: 'example',
        label: 'Endofórica vs. Exofórica',
        content:
          'Endofórica: "O presidente viajou ao exterior. Ele retornou ontem."\n→ "Ele" remete a "o presidente" — elemento dentro do texto.\n\nExofórica: "Traga aquilo aqui."\n→ "aquilo" só faz sentido se locutor e interlocutor estiverem no mesmo contexto físico.',
      },
      {
        type: 'subtitle',
        content: 'Anáfora e Catáfora',
      },
      {
        type: 'text',
        content:
          'ANÁFORA: o elemento coesivo retoma algo que já foi mencionado antes no texto (referência retrospectiva). É o mecanismo mais comum.\n\nCATÁFORA: o elemento coesivo antecipa algo que será mencionado depois (referência prospectiva). Gera expectativa no leitor.',
      },
      {
        type: 'example',
        label: 'Anáfora e Catáfora',
        content:
          'ANÁFORA:\n"Maria chegou atrasada. Ela havia perdido o ônibus."\n→ "Ela" retoma "Maria" — referência para trás.\n\nCATÁFORA:\n"Isto é fato: a crise econômica afeta a todos."\n→ "Isto" antecipa "a crise econômica afeta a todos" — referência para frente.',
      },
      {
        type: 'subtitle',
        content: 'Tipos de Referência',
      },
      {
        type: 'table',
        content: 'Mecanismos de referenciação',
        headers: ['Tipo', 'Recurso', 'Exemplo'],
        rows: [
          ['Referência pronominal', 'Pronome substitui o nome', '"João chegou. Ele sorriu."'],
          ['Referência lexical', 'Sinônimo, hiperônimo, nome genérico', '"O cão latiu. O animal assustou todos."'],
          ['Referência zero (elipse)', 'Omissão do elemento', '"Cheguei, [eu] vi e [eu] venci."'],
          ['Nominalização', 'Verbo/adj. vira substantivo', '"Aprovaram a lei. A aprovação foi comemorada."'],
        ],
      },
      {
        type: 'tip',
        label: 'Em concursos',
        content:
          'Questões cobram: "A que elemento do texto se refere o pronome X?" ou "Qual expressão retoma o termo Y?" Para responder, identifique se é anáfora (volte ao texto antes) ou catáfora (avance no texto depois).',
      },
      {
        type: 'warning',
        label: 'Referência ambígua — erro de coesão',
        content:
          '"Pedro falou com Paulo quando ele chegou."\n→ "ele" pode retomar Pedro ou Paulo — referência AMBÍGUA. Em concursos, a banca pode perguntar o motivo da ambiguidade ou pedir reescrita que a elimine.',
      },
    ],
  },
  {
    id: 'm4-l2',
    title: 'Substituição, Elipse e Repetição',
    duration: '12 min',
    sections: [
      {
        type: 'text',
        content:
          'Além da referenciação, o texto usa substituição e elipse para evitar repetições desnecessárias e garantir fluidez. Entender esses mecanismos é essencial para questões de reescrita.',
      },
      {
        type: 'subtitle',
        content: 'Substituição Lexical',
      },
      {
        type: 'text',
        content:
          'Usa-se uma palavra ou expressão diferente para retomar um elemento já mencionado, mantendo o sentido. Recursos usados: sinônimos, hiperônimos, antonomásias e nomes genéricos.',
      },
      {
        type: 'table',
        content: 'Recursos de substituição lexical',
        headers: ['Recurso', 'O que é', 'Exemplo'],
        rows: [
          ['Sinônimo', 'Palavra de sentido equivalente', '"o veículo... o automóvel"'],
          ['Hiperônimo', 'Palavra de sentido mais amplo', '"o cachorro... o animal"'],
          ['Hipônimo', 'Palavra de sentido mais específico', '"a flor... a rosa"'],
          ['Nome genérico', 'Substantivo genérico neutro', '"coisa, fato, questão, ponto"'],
          ['Antonomásia', 'Epíteto que substitui o nome', '"O Poeta Nacional (= Drummond)"'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Elipse',
      },
      {
        type: 'text',
        content:
          'A ELIPSE é a omissão de um termo que pode ser recuperado pelo contexto. É um recurso de economia linguística e fluidez. O elemento omitido é chamado de "elemento elidido".',
      },
      {
        type: 'example',
        label: 'Tipos de elipse',
        content:
          'Elipse de sujeito:\n"Fui ao mercado, comprei frutas e voltei para casa."\n→ O sujeito "eu" está elidido nas três orações.\n\nElipse do predicado:\n"Alguns alunos passaram; outros, [passaram] com dificuldade."\n\nElipse do objeto:\n"Você trouxe os documentos? — Trouxe [os documentos]."',
      },
      {
        type: 'subtitle',
        content: 'Repetição como Recurso Estilístico',
      },
      {
        type: 'text',
        content:
          'Ao contrário da repetição desnecessária (que empobrece o texto), a REPETIÇÃO INTENCIONAL pode ser usada como recurso expressivo: enfatizar uma ideia, criar ritmo ou dar coerência temática a um parágrafo.',
      },
      {
        type: 'example',
        label: 'Repetição expressiva',
        content:
          '"Tudo passa. Passa a dor. Passa a alegria. Passa o medo. E passa também o amor."\n→ A repetição de "passa" cria ritmo e intensifica a ideia de transitoriedade — efeito estilístico intencional.',
      },
      {
        type: 'tip',
        label: 'Questão clássica de concurso',
        content:
          'A banca apresenta um texto com vários pronomes e pede a substituição por substantivos equivalentes — ou apresenta um texto redundante e pede reescrita mais coesa. Treine identificar o referente de cada pronome antes de responder.',
      },
    ],
  },
  {
    id: 'm4-l3',
    title: 'Conectores: Adição, Oposição e Conclusão',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'Os CONECTORES (ou elementos de sequenciação) são palavras ou expressões que estabelecem relações lógicas entre as partes do texto. São fundamentais para a coesão sequencial e para o sentido global do discurso.',
      },
      {
        type: 'subtitle',
        content: 'Conectores Aditivos',
      },
      {
        type: 'text',
        content:
          'Acrescentam uma ideia à outra. Equivalem ao "+ (mais)" lógico.',
      },
      {
        type: 'table',
        content: 'Conectores aditivos',
        headers: ['Conector', 'Registro', 'Exemplo'],
        rows: [
          ['e', 'Qualquer', '"Estudou e passou."'],
          ['nem', 'Negativo', '"Não leu nem estudou."'],
          ['também', 'Qualquer', '"Sabe inglês e também fala francês."'],
          ['além disso', 'Formal', '"O produto é barato. Além disso, é eficiente."'],
          ['ademais / outrossim', 'Muito formal', '"O réu é culpado; ademais, tem antecedentes."'],
          ['não só... mas também', 'Enfático', '"Não só aprovou, mas também foi o 1º."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Adversativos',
      },
      {
        type: 'text',
        content:
          'Introduzem uma ideia que se opõe, contrasta ou restringe a ideia anterior. Equivalem ao "mas" lógico.',
      },
      {
        type: 'table',
        content: 'Conectores adversativos',
        headers: ['Conector', 'Nuance', 'Exemplo'],
        rows: [
          ['mas', 'Geral', '"Tentou, mas não conseguiu."'],
          ['porém', 'Formal', '"Estava cansado; porém, continuou."'],
          ['contudo', 'Formal', '"Choveu muito; contudo, o evento ocorreu."'],
          ['todavia', 'Formal/literário', '"Esperava o pior; todavia, tudo correu bem."'],
          ['entretanto', 'Formal', '"Trabalhou muito; entretanto, não foi promovido."'],
          ['no entanto', 'Formal', '"É inteligente; no entanto, é descuidado."'],
          ['ainda assim', 'Concessivo-adversativo', '"Sabia do risco; ainda assim, arriscou."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Conclusivos',
      },
      {
        type: 'text',
        content:
          'Introduzem uma conclusão que decorre logicamente das ideias anteriores.',
      },
      {
        type: 'table',
        content: 'Conectores conclusivos',
        headers: ['Conector', 'Registro', 'Exemplo'],
        rows: [
          ['logo', 'Formal/lógico', '"Penso, logo existo."'],
          ['portanto', 'Formal', '"Não estudou; portanto, não passou."'],
          ['assim', 'Geral', '"Trabalhou muito; assim, merece o prêmio."'],
          ['por isso', 'Geral', '"Estava doente; por isso, faltou."'],
          ['por conseguinte', 'Muito formal', '"Infringiu a lei; por conseguinte, será punido."'],
          ['então', 'Informal/oral', '"Não queres ir? Então fica."'],
        ],
      },
      {
        type: 'warning',
        label: 'Armadilha clássica',
        content:
          '"Mas" e "porém" são adversativos, não conclusivos. "Logo" pode ser conclusivo ("penso, logo existo") ou temporal ("logo chego"). O contexto define o sentido — questões de concurso exploram essa ambiguidade.',
      },
    ],
  },
  {
    id: 'm4-l4',
    title: 'Conectores: Causa, Consequência, Condição e Tempo',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'Além dos conectores de adição, oposição e conclusão, existem os que expressam relações lógicas de causa, consequência, condição, concessão e tempo — fundamentais para a estruturação do argumento.',
      },
      {
        type: 'subtitle',
        content: 'Conectores Causais',
      },
      {
        type: 'text',
        content:
          'Introduzem a causa ou o motivo de algo. A oração causal responde à pergunta "por quê?"',
      },
      {
        type: 'table',
        content: 'Conectores causais',
        headers: ['Conector', 'Exemplo'],
        rows: [
          ['porque', '"Faltou porque estava doente."'],
          ['pois', '"Não saiu, pois chovia."'],
          ['já que', '"Já que você insiste, vá em frente."'],
          ['visto que', '"Visto que há provas, é culpado."'],
          ['uma vez que', '"Uma vez que a lei mudou, o contrato é inválido."'],
          ['como (= já que)', '"Como ele mentiu, perdeu a confiança."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Consecutivos',
      },
      {
        type: 'text',
        content:
          'Introduzem a consequência de uma ação ou situação. Geralmente formam pares com intensificadores.',
      },
      {
        type: 'table',
        content: 'Conectores consecutivos',
        headers: ['Estrutura', 'Exemplo'],
        rows: [
          ['tão... que', '"Estava tão cansado que dormiu na cadeira."'],
          ['tanto... que', '"Comeu tanto que ficou mal."'],
          ['de modo que', '"Estudou muito, de modo que passou."'],
          ['de forma que', '"Explicou de forma que todos entenderam."'],
          ['de tal maneira que', '"Gritou de tal maneira que assustou a todos."'],
          ['a ponto de', '"Estava nervoso a ponto de tremer."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Condicionais',
      },
      {
        type: 'table',
        content: 'Conectores condicionais',
        headers: ['Conector', 'Nuance', 'Exemplo'],
        rows: [
          ['se', 'Condição geral', '"Se estudar, passará."'],
          ['caso', 'Hipótese', '"Caso não possa, avise."'],
          ['desde que', 'Condição necessária', '"Pode ir, desde que volte cedo."'],
          ['contanto que', 'Condição restritiva', '"Aceito, contanto que seja justo."'],
          ['a menos que', 'Condição excludente', '"Vou, a menos que chova."'],
          ['salvo se', 'Exceção condicional', '"Virá, salvo se estiver doente."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Concessivos',
      },
      {
        type: 'text',
        content:
          'Introduzem uma ideia que se admite, mas que não impede a ocorrência da oração principal. Expressam a estrutura "apesar de X, Y acontece mesmo assim".',
      },
      {
        type: 'table',
        content: 'Conectores concessivos',
        headers: ['Conector', 'Exemplo'],
        rows: [
          ['embora', '"Embora chovesse, saíram."'],
          ['ainda que', '"Ainda que seja difícil, tentarei."'],
          ['mesmo que', '"Mesmo que reprove, não desistirei."'],
          ['apesar de (que)', '"Saiu, apesar de estar doente."'],
          ['por mais que', '"Por mais que tente, não consegue."'],
          ['conquanto', '"Conquanto seja rico, é infeliz." (formal)'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Conectores Temporais',
      },
      {
        type: 'table',
        content: 'Conectores temporais',
        headers: ['Conector', 'Relação', 'Exemplo'],
        rows: [
          ['quando', 'Simultaneidade', '"Quando chegou, todos aplaudiram."'],
          ['enquanto', 'Simultaneidade durativa', '"Enquanto estudava, ouvia música."'],
          ['assim que / logo que', 'Imediatamente após', '"Assim que terminar, avise."'],
          ['antes que', 'Anterioridade', '"Ligue antes que ela saia."'],
          ['depois que / após', 'Posterioridade', '"Depois que comeu, saiu."'],
          ['desde que (temporal)', 'Duração desde', '"Melhorou desde que parou de fumar."'],
        ],
      },
      {
        type: 'tip',
        label: 'Concessiva vs. Adversativa',
        content:
          'A CONCESSIVA admite o obstáculo antes de apresentar a ação principal: "Embora chovesse [obstáculo admitido], sairam [ação principal]." \nA ADVERSATIVA apenas contrapõe: "Choveu, mas saíram."\nA diferença é sutil mas cobrada em provas — na concessiva há uma expectativa de que a ação não ocorreria.',
      },
    ],
  },
  {
    id: 'm4-l5',
    title: 'Tempos e Modos Verbais na Coesão',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'A escolha dos tempos e modos verbais é um poderoso mecanismo de coesão. A correlação temporal entre as orações sinaliza sequência, simultaneidade ou anterioridade; o modo verbal sinaliza certeza, dúvida, possibilidade ou ordem.',
      },
      {
        type: 'subtitle',
        content: 'Os Modos Verbais',
      },
      {
        type: 'table',
        content: 'Modos verbais',
        headers: ['Modo', 'O que expressa', 'Exemplo'],
        rows: [
          ['Indicativo', 'Certeza, fato real', '"Ele estuda todos os dias."'],
          ['Subjuntivo', 'Dúvida, desejo, hipótese', '"Espero que ele estude." / "Se ele estudasse..."'],
          ['Imperativo', 'Ordem, pedido, conselho', '"Estude agora!" / "Por favor, estude."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Tempos do Indicativo e seus Efeitos',
      },
      {
        type: 'table',
        content: 'Tempos do indicativo',
        headers: ['Tempo', 'Uso principal', 'Efeito expressivo'],
        rows: [
          ['Presente', 'Ação atual ou habitual', 'Presente histórico: narra o passado como presente para dar vivacidade'],
          ['Pretérito perfeito', 'Ação concluída no passado', 'Ação pontual, terminada'],
          ['Pretérito imperfeito', 'Ação contínua ou habitual no passado', 'Duração, habitualidade, cortesia'],
          ['Pretérito mais-que-perfeito', 'Ação anterior a outra passada', '"Quando chegou, já tinham saído."'],
          ['Futuro do presente', 'Ação futura provável', '"Amanhã irei ao médico."'],
          ['Futuro do pretérito', 'Ação hipotética ou futura no passado', '"Se pudesse, viajaria." / Cortesia: "Poderia ajudar?"'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Correlação de Tempos Verbais',
      },
      {
        type: 'text',
        content:
          'A CORRELAÇÃO TEMPORAL é o uso harmônico dos tempos verbais nas orações de uma mesma frase. Quebrar a correlação gera incoerência temporal.',
      },
      {
        type: 'example',
        label: 'Correlação correta vs. incorreta',
        content:
          'CORRETO:\n"Quando ele chegou [pret. perfeito], todos já tinham saído [pret. mais-que-perfeito]."\n→ A ação de sair é anterior à de chegar — correlação correta.\n\nINCORRETO:\n"Quando ele chegou [pret. perfeito], todos já saíram [pret. perfeito]."\n→ Parece que chegada e saída foram simultâneas — correlação quebrada.',
      },
      {
        type: 'subtitle',
        content: 'O Subjuntivo e a Coesão',
      },
      {
        type: 'text',
        content:
          'O modo subjuntivo aparece em orações subordinadas e sinaliza hipótese, dúvida ou desejo. Sua correlação com o indicativo da oração principal também obedece a regras:',
      },
      {
        type: 'table',
        content: 'Correlação com o subjuntivo',
        headers: ['Oração principal', 'Oração subordinada', 'Exemplo'],
        rows: [
          ['Presente do indicativo', 'Presente do subjuntivo', '"Quero que ele venha."'],
          ['Pretérito imperfeito / condicional', 'Imperfeito do subjuntivo', '"Queria que ele viesse." / "Seria bom que viesse."'],
          ['Futuro do presente', 'Futuro do subjuntivo', '"Quando ele vier, avisarei."'],
          ['Imperativo', 'Presente do subjuntivo', '"Diga que ele venha logo."'],
        ],
      },
      {
        type: 'warning',
        label: 'Erro clássico de correlação verbal',
        content:
          '"Se eu teria [ERRADO — futuro do pretérito] mais tempo, estudaria mais."\n→ Correto: "Se eu tivesse [imperfeito do subjuntivo] mais tempo, estudaria mais."\n\nNa oração condicional com "se", NUNCA se usa futuro do pretérito (ria/ria). Use sempre o imperfeito do subjuntivo (sse).',
      },
    ],
  },
];
