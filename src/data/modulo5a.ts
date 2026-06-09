import { Lesson } from '../types';

export const modulo5aLessons: Lesson[] = [
  {
    id: 'm5a-l1',
    title: 'Substantivo e Artigo',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'As classes de palavras (ou classes gramaticais) são categorias que agrupam palavras com características morfológicas e sintáticas semelhantes. Compreendê-las é a base para entender toda a estrutura do período.',
      },
      {
        type: 'subtitle',
        content: 'Substantivo',
      },
      {
        type: 'text',
        content:
          'O SUBSTANTIVO é a classe de palavras que nomeia seres, objetos, lugares, sentimentos, ações e estados. É o núcleo do sujeito e do objeto na oração.',
      },
      {
        type: 'table',
        content: 'Classificação dos substantivos',
        headers: ['Critério', 'Tipo', 'Exemplos'],
        rows: [
          ['Referência', 'Próprio', 'Brasil, Maria, Amazônia'],
          ['Referência', 'Comum', 'país, pessoa, rio'],
          ['Existência', 'Concreto', 'mesa, vento, alma (têm existência própria)'],
          ['Existência', 'Abstrato', 'amor, justiça, beleza (dependem de outros)'],
          ['Estrutura', 'Simples (1 radical)', 'casa, flor, luz'],
          ['Estrutura', 'Composto (2+ radicais)', 'guarda-chuva, pé-de-moleque'],
          ['Formação', 'Primitivo', 'pedra, ferro, água'],
          ['Formação', 'Derivado', 'pedreiro, ferreiro, aguaceiro'],
          ['Quantidade', 'Coletivo', 'cardume (peixes), frota (navios), matilha (lobos)'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Flexão do Substantivo',
      },
      {
        type: 'table',
        content: 'Plural dos compostos',
        headers: ['Formação', 'Plural', 'Exemplos'],
        rows: [
          ['Subst. + Subst.', 'Ambos vão ao plural', 'couve-flores → couves-flores'],
          ['Subst. + Adj.', 'Ambos vão ao plural', 'amor-perfeito → amores-perfeitos'],
          ['Adj. + Subst.', 'Ambos vão ao plural', 'baixo-relevo → baixos-relevos'],
          ['Verbo + Subst.', 'Só o substantivo', 'guarda-chuva → guarda-chuvas'],
          ['Verbo + Verbo', 'Só o 2º elemento', 'pontapé → pontapés (exceto: beija-flores)'],
          ['Palavra invariável + Subst.', 'Só o substantivo', 'bem-estar → bens-estares (exceção: abaixo-assinado → abaixo-assinados)'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Artigo',
      },
      {
        type: 'text',
        content:
          'O ARTIGO determina o substantivo, indicando se ele é conhecido (definido) ou desconhecido (indefinido) pelo interlocutor. Também indica gênero e número.',
      },
      {
        type: 'table',
        content: 'Artigos',
        headers: ['Tipo', 'Masc. sing.', 'Masc. pl.', 'Fem. sing.', 'Fem. pl.'],
        rows: [
          ['Definido', 'o', 'os', 'a', 'as'],
          ['Indefinido', 'um', 'uns', 'uma', 'umas'],
        ],
      },
      {
        type: 'tip',
        label: 'Usos do artigo em provas',
        content:
          'A presença ou ausência do artigo antes de nomes próprios é regional: no Brasil, usamos "a Maria chegou" (com artigo); em Portugal, "Maria chegou" (sem). Em provas de concurso, atenção ao contexto e à norma culta prevista no edital.',
      },
    ],
  },
  {
    id: 'm5a-l2',
    title: 'Adjetivo e Numeral',
    duration: '12 min',
    sections: [
      {
        type: 'subtitle',
        content: 'Adjetivo',
      },
      {
        type: 'text',
        content:
          'O ADJETIVO qualifica ou caracteriza o substantivo, podendo indicar qualidade, estado, origem, aspecto ou relação. Concorda em gênero e número com o substantivo que modifica.',
      },
      {
        type: 'table',
        content: 'Classificação dos adjetivos',
        headers: ['Tipo', 'Descrição', 'Exemplos'],
        rows: [
          ['Simples', 'Um único radical', 'bonito, alto, verde'],
          ['Composto', 'Dois ou mais radicais', 'azul-marinho, luso-brasileiro'],
          ['Primitivo', 'Não deriva de outra palavra', 'bom, mau, belo'],
          ['Derivado', 'Deriva de substantivo ou verbo', 'amoroso, trabalhador, feliz'],
          ['Pátrio', 'Indica procedência/origem', 'brasileiro, paulistano, europeu'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Locução Adjetiva',
      },
      {
        type: 'text',
        content:
          'A LOCUÇÃO ADJETIVA é formada por preposição + substantivo e equivale a um adjetivo. Muito cobrada em concursos em questões de substituição.',
      },
      {
        type: 'example',
        label: 'Locuções adjetivas',
        content:
          'de pedra → pétrio | de ouro → áureo | de ferro → férreo\nde leite → lácteo | de luz → lúcido | do sol → solar\nde escola → escolar | do mar → marítimo | de noite → noturno\nde verão → estival | do campo → campestre | de criança → infantil',
      },
      {
        type: 'subtitle',
        content: 'Grau do Adjetivo',
      },
      {
        type: 'table',
        content: 'Grau do adjetivo',
        headers: ['Grau', 'Tipo', 'Formação', 'Exemplo'],
        rows: [
          ['Comparativo', 'Superioridade', 'mais... (do) que', 'mais alto do que'],
          ['Comparativo', 'Igualdade', 'tão... quanto/como', 'tão alto quanto'],
          ['Comparativo', 'Inferioridade', 'menos... (do) que', 'menos alto do que'],
          ['Superlativo', 'Relativo superioridade', 'o mais... de/entre', 'o mais alto da turma'],
          ['Superlativo', 'Relativo inferioridade', 'o menos... de/entre', 'o menos alto'],
          ['Superlativo', 'Absoluto analítico', 'muito + adjetivo', 'muito alto'],
          ['Superlativo', 'Absoluto sintético', '-íssimo / -imo', 'altíssimo / supremo'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Numeral',
      },
      {
        type: 'table',
        content: 'Tipos de numerais',
        headers: ['Tipo', 'O que indica', 'Exemplos'],
        rows: [
          ['Cardinal', 'Quantidade absoluta', 'um, dois, cem, mil, zero'],
          ['Ordinal', 'Posição em série', 'primeiro, segundo, décimo, centésimo'],
          ['Multiplicativo', 'Múltiplo de quantidade', 'dobro, triplo, quádruplo, décuplo'],
          ['Fracionário', 'Fração de quantidade', 'metade, terço, quarto, décimo'],
          ['Coletivo', 'Conjunto específico', 'dúzia (12), dezena (10), grosa (144), lustro (5 anos)'],
        ],
      },
    ],
  },
  {
    id: 'm5a-l3',
    title: 'Pronome: Tipos e Usos',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'O PRONOME é a classe de palavras que substitui ou acompanha o substantivo, fazendo referência às pessoas do discurso ou a seres já mencionados. É um dos temas mais cobrados em concursos de nível médio e superior.',
      },
      {
        type: 'subtitle',
        content: 'Pronomes Pessoais',
      },
      {
        type: 'table',
        content: 'Pronomes pessoais do caso reto',
        headers: ['Pessoa', 'Singular', 'Plural'],
        rows: [
          ['1ª', 'eu', 'nós'],
          ['2ª', 'tu', 'vós'],
          ['3ª', 'ele / ela', 'eles / elas'],
        ],
      },
      {
        type: 'table',
        content: 'Pronomes pessoais oblíquos',
        headers: ['Posição', 'Átonos (sem ênfase)', 'Tônicos (com preposição)'],
        rows: [
          ['1ª sing.', 'me', 'mim, comigo'],
          ['2ª sing.', 'te', 'ti, contigo'],
          ['3ª sing.', 'o, a, lhe', 'ele, ela, si, consigo'],
          ['1ª pl.', 'nos', 'nós, conosco'],
          ['2ª pl.', 'vos', 'vós, convosco'],
          ['3ª pl.', 'os, as, lhes', 'eles, elas, si'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Pronomes de Tratamento',
      },
      {
        type: 'table',
        content: 'Principais pronomes de tratamento',
        headers: ['Pronome', 'Uso', 'Abreviatura'],
        rows: [
          ['Vossa Excelência (V. Ex.ª)', 'Presidente, ministros, parlamentares, magistrados', 'V. Ex.ª'],
          ['Vossa Magnificência (V. Mag.ª)', 'Reitores de universidades', 'V. Mag.ª'],
          ['Vossa Senhoria (V. S.ª)', 'Diretores, chefes, tratamento geral formal', 'V. S.ª'],
          ['Vossa Reverendíssima', 'Sacerdotes em geral', 'V. Rev.ma'],
          ['Vossa Eminência', 'Cardeais', 'V. Em.ª'],
          ['Vossa Santidade', 'Papa', '—'],
        ],
      },
      {
        type: 'warning',
        label: 'Concordância com pronomes de tratamento',
        content:
          'Os pronomes de tratamento SEMPRE pedem o verbo na 3ª pessoa: "Vossa Excelência ASSINOU o documento." — não "assinou" concordando com "vossa" (2ª pessoa). Isso é um erro clássico e muito cobrado.',
      },
      {
        type: 'subtitle',
        content: 'Pronomes Demonstrativos',
      },
      {
        type: 'table',
        content: 'Demonstrativos',
        headers: ['Pronome', 'Posição', 'Exemplos'],
        rows: [
          ['este/esta/isto', 'Próximo ao falante (1ª pessoa)', '"Este livro aqui é meu."'],
          ['esse/essa/isso', 'Próximo ao ouvinte (2ª pessoa) ou já mencionado', '"Esse que você tem é bonito."'],
          ['aquele/aquela/aquilo', 'Distante de ambos ou mencionado antes', '"Aquilo que disse ontem é verdade."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Pronomes Relativos',
      },
      {
        type: 'table',
        content: 'Pronomes relativos',
        headers: ['Pronome', 'Antecedente', 'Exemplo'],
        rows: [
          ['que', 'Pessoas ou coisas', '"O livro que li era excelente."'],
          ['quem', 'Pessoas (com preposição)', '"O aluno de quem falei chegou."'],
          ['cujo/cuja', 'Posse (= de + pronome)', '"O autor cuja obra li é brasileiro."'],
          ['onde', 'Lugar', '"A cidade onde nasci fica no sul."'],
          ['quando', 'Tempo', '"No dia quando tudo mudou..."'],
          ['como', 'Modo', '"A maneira como age é suspeita."'],
          ['quanto(s)/quanta(s)', 'Após todo, tudo, tanto, tamanho', '"Tudo quanto disse era mentira."'],
        ],
      },
      {
        type: 'tip',
        label: 'Cujo — erro frequente',
        content:
          '"Cujo" indica posse e NUNCA é acompanhado de artigo depois:\nCORRETO: "O autor cujo livro li..." ✓\nERRADO: "O autor cujo O livro li..." ✗\n\nAlém disso, o substantivo após "cujo" deve concordar com o possuído, não com o possuidor.',
      },
    ],
  },
  {
    id: 'm5a-l4',
    title: 'Verbo: Classes, Flexões e Vozes',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'O VERBO é a classe de palavras que exprime ação, estado, fenômeno da natureza ou fato. É o núcleo do predicado e o elemento que recebe mais flexões na língua portuguesa.',
      },
      {
        type: 'subtitle',
        content: 'Classificação dos Verbos',
      },
      {
        type: 'table',
        content: 'Tipos de verbos',
        headers: ['Tipo', 'Definição', 'Exemplos'],
        rows: [
          ['Regular', 'Radical invariável; desinências padrão', 'amar, vender, partir'],
          ['Irregular', 'Radical ou desinências alteram', 'ser, ir, ter, fazer, poder, querer'],
          ['Defectivo', 'Faltam formas de conjugação', 'falir, reaver, colorir (não têm 1ª pess. sing. do pres. ind.)'],
          ['Abundante', 'Têm duas formas no particípio', 'entregar: entregado/entregue; pagar: pagado/pago'],
          ['Auxiliar', 'Formam locuções verbais', 'ter, haver, ser, estar, poder, dever, ir'],
          ['Pronominal', 'Se conjugam com pronome reflexivo', 'arrepender-se, queixar-se, suicidar-se'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Formas Nominais do Verbo',
      },
      {
        type: 'table',
        content: 'Formas nominais',
        headers: ['Forma', 'Terminação', 'Função', 'Exemplo'],
        rows: [
          ['Infinitivo', '-ar, -er, -ir, -or', 'Substantivo / verbo', '"Estudar é importante."'],
          ['Gerúndio', '-ando, -endo, -indo', 'Advérbio / adjetivo', '"Estudando, aprende-se."'],
          ['Particípio', '-ado, -ido (reg.)', 'Adjetivo / voz passiva', '"A prova foi corrigida."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Vozes Verbais',
      },
      {
        type: 'text',
        content:
          'A VOZ VERBAL indica a relação entre o sujeito e a ação expressa pelo verbo. É um dos temas mais cobrados em concursos — especialmente a transformação entre voz ativa e passiva.',
      },
      {
        type: 'table',
        content: 'Vozes verbais',
        headers: ['Voz', 'O sujeito', 'Estrutura', 'Exemplo'],
        rows: [
          ['Ativa', 'Pratica a ação', 'Sujeito + V. + Objeto', '"A professora corrigiu as provas."'],
          ['Passiva analítica', 'Sofre a ação', 'Sujeito + ser/estar + particípio + por/de', '"As provas foram corrigidas pela professora."'],
          ['Passiva sintética', 'Sofre a ação', 'Verbo + se (pronome apassivador)', '"Corrigiram-se as provas."'],
          ['Reflexiva', 'Pratica e sofre a ação', 'Sujeito + verbo + se', '"Ele se machucou."'],
        ],
      },
      {
        type: 'example',
        label: 'Transformação ativa → passiva',
        content:
          'ATIVA: "O governo aprovou a lei."\n↓ transformação\nPASSIVA ANALÍTICA: "A lei foi aprovada pelo governo."\n\nRegra: Objeto direto → Sujeito paciente\nSujeito agente → Agente da passiva (precedido de "por/pelo/pela")\nVerbo: conjugar "ser" no mesmo tempo + particípio do verbo original',
      },
      {
        type: 'warning',
        label: 'Particípio regular vs. irregular',
        content:
          'Verbos abundantes têm dois particípios:\n• Regular (com ter/haver): "tinha entregado", "havia chegado"\n• Irregular (com ser/estar): "foi entregue", "está chegado"\n\nErro clássico: "foi entregado" ✗ → correto: "foi entregue" ✓',
      },
    ],
  },
  {
    id: 'm5a-l5',
    title: 'Advérbio, Preposição, Conjunção e Interjeição',
    duration: '13 min',
    sections: [
      {
        type: 'subtitle',
        content: 'Advérbio',
      },
      {
        type: 'text',
        content:
          'O ADVÉRBIO modifica o verbo, o adjetivo ou outro advérbio, indicando circunstâncias. É invariável (não flexiona em gênero nem número — exceto: mesmo, próprio, todo, bastante, meio em alguns casos).',
      },
      {
        type: 'table',
        content: 'Classificação dos advérbios',
        headers: ['Circunstância', 'Exemplos'],
        rows: [
          ['Modo', 'bem, mal, assim, devagar, rapidamente, -mente'],
          ['Tempo', 'hoje, ontem, amanhã, já, ainda, sempre, nunca, cedo, tarde'],
          ['Lugar', 'aqui, ali, lá, aí, onde, longe, perto, dentro, fora'],
          ['Intensidade', 'muito, pouco, bastante, demais, tão, mais, menos, quase'],
          ['Afirmação', 'sim, certamente, efetivamente, realmente, decerto'],
          ['Negação', 'não, nunca, jamais, tampouco, nem'],
          ['Dúvida', 'talvez, quiçá, porventura, acaso, provavelmente'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Preposição',
      },
      {
        type: 'text',
        content:
          'A PREPOSIÇÃO é a palavra invariável que liga dois elementos da oração, estabelecendo relação de subordinação entre eles. Divide-se em essenciais (sempre preposições) e acidentais (palavras de outras classes que funcionam como preposições).',
      },
      {
        type: 'example',
        label: 'Preposições essenciais e locuções',
        content:
          'Essenciais: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás\n\nLocuções prepositivas: abaixo de, acerca de, acima de, ao lado de, além de, antes de, apesar de, a fim de, em vez de, por causa de, graças a',
      },
      {
        type: 'subtitle',
        content: 'Conjunção',
      },
      {
        type: 'text',
        content:
          'A CONJUNÇÃO liga orações ou termos de mesma função sintática. Divide-se em COORDENATIVAS (ligam orações independentes) e SUBORDINATIVAS (ligam oração subordinada à principal).',
      },
      {
        type: 'table',
        content: 'Conjunções coordenativas',
        headers: ['Tipo', 'Exemplos'],
        rows: [
          ['Aditiva', 'e, nem, mas também, como também, bem como, não só...mas'],
          ['Adversativa', 'mas, porém, contudo, todavia, entretanto, no entanto'],
          ['Alternativa', 'ou, ora...ora, quer...quer, seja...seja, já...já'],
          ['Conclusiva', 'logo, portanto, por isso, por conseguinte, assim'],
          ['Explicativa', 'porque, pois (antes do verbo), que, porquanto'],
        ],
      },
      {
        type: 'table',
        content: 'Conjunções subordinativas',
        headers: ['Tipo', 'Exemplos'],
        rows: [
          ['Integrante', 'que, se (introduzem subst. subordinadas)'],
          ['Causal', 'porque, já que, visto que, como, pois que'],
          ['Concessiva', 'embora, ainda que, mesmo que, por mais que, apesar de que'],
          ['Condicional', 'se, caso, desde que, contanto que, a menos que'],
          ['Final', 'para que, a fim de que, que (= para que)'],
          ['Temporal', 'quando, enquanto, assim que, logo que, antes que, depois que'],
          ['Comparativa', 'como, assim como, tal qual, tanto quanto, do que'],
          ['Consecutiva', 'que (após tão/tanto/tamanho), de modo que, de forma que'],
          ['Conformativa', 'conforme, segundo, consoante, como (= conforme)'],
          ['Proporcional', 'à medida que, ao passo que, quanto mais...mais'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Interjeição',
      },
      {
        type: 'text',
        content:
          'A INTERJEIÇÃO exprime emoções, sentimentos ou reações espontâneas do falante. É uma palavra invariável que equivale a uma frase. Pode ser seguida de ponto de exclamação.',
      },
      {
        type: 'table',
        content: 'Tipos de interjeição',
        headers: ['Sentimento', 'Exemplos'],
        rows: [
          ['Alegria/entusiasmo', 'Viva! Eba! Oba! Bravo!'],
          ['Dor/tristeza', 'Ai! Ui! Oh! Ah!'],
          ['Surpresa', 'Nossa! Puxa! Caramba! Oh!'],
          ['Chamamento', 'Psiu! Ei! Olá! Oi!'],
          ['Silêncio', 'Psiu! Silêncio! Basta!'],
          ['Aprovação', 'Bravo! Isso! Muito bem!'],
          ['Saudação', 'Olá! Salve! Oi! Adeus!'],
        ],
      },
    ],
  },
  {
    id: 'm5a-l6',
    title: 'Coordenação entre Orações e Termos (5.2)',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'As ORAÇÕES COORDENADAS são independentes entre si — cada uma tem sentido completo. Podem ser ligadas sem conjunção (assindéticas) ou com conjunção (sindéticas). Cada tipo de conjunção cria um efeito de sentido diferente.',
      },
      {
        type: 'subtitle',
        content: 'Orações Coordenadas Assindéticas',
      },
      {
        type: 'text',
        content:
          'Não são introduzidas por conjunção. São separadas por vírgula, ponto e vírgula ou ponto. Indicam sequência, enumeração ou contraste.',
      },
      {
        type: 'example',
        label: 'Assindéticas',
        content:
          '"Entrou, sentou, abriu o livro, começou a ler."\n→ Quatro orações coordenadas assindéticas — indicam sequência de ações.\n\n"O dia estava frio; a chuva caía; ninguém saia."\n→ Assindéticas separadas por ponto e vírgula — justaposição de cenas.',
      },
      {
        type: 'subtitle',
        content: 'Orações Coordenadas Sindéticas e Seus Efeitos',
      },
      {
        type: 'table',
        content: 'Sindéticas: tipos e efeitos',
        headers: ['Tipo', 'Conjunções', 'Efeito de sentido'],
        rows: [
          ['Aditiva', 'e, nem, não só...mas também', 'Acréscimo, soma de ideias'],
          ['Adversativa', 'mas, porém, contudo, todavia, entretanto', 'Contraste, ressalva, oposição'],
          ['Alternativa', 'ou...ou, ora...ora, quer...quer', 'Escolha, alternância, exclusão'],
          ['Conclusiva', 'logo, portanto, por conseguinte, assim', 'Conclusão lógica a partir do anterior'],
          ['Explicativa', 'pois (antes do verbo), porque, que, porquanto', 'Justificativa, motivo, explicação'],
        ],
      },
      {
        type: 'example',
        label: 'Diferença de sentido pelo conector',
        content:
          'Estuda muito E conseguirá passar. → adição (consequência natural)\nEstuda muito MAS não consegue passar. → adversativa (frustração esperada)\nEstuda muito, LOGO passará. → conclusão lógica\nEstude, POIS o concurso está próximo. → explicativa (justifica o imperativo)',
      },
      {
        type: 'subtitle',
        content: 'Coordenação entre TERMOS da Oração',
      },
      {
        type: 'text',
        content:
          'A coordenação não ocorre apenas entre orações — também pode ocorrer entre termos (sujeito, objeto, adjunto) da mesma oração.',
      },
      {
        type: 'example',
        label: 'Coordenação entre termos',
        content:
          'Sujeitos coordenados:\n"Pedro e Maria chegaram cedo."\n\nObjetos coordenados:\n"Comprou livros, canetas e cadernos."\n\nAdjuntos coordenados:\n"Trabalha com dedicação e competência."\n\n→ Em todos os casos, os termos coordenados têm a mesma função sintática e são ligados por conjunção ou separados por vírgula.',
      },
      {
        type: 'warning',
        label: 'Vírgula antes de "e" — quando usar?',
        content:
          'Usa-se vírgula antes de "e" quando:\n1. Os sujeitos das orações são diferentes: "Ele saiu, e ela ficou."\n2. A oração com "e" tiver sentido adversativo: "Tentou muito, e não conseguiu."\n3. Para evitar ambiguidade.\n\nNão se usa vírgula antes de "e" que liga dois termos de mesma função sintática: "Pedro e Maria chegaram." ✓',
      },
    ],
  },
  {
    id: 'm5a-l7',
    title: 'Subordinação entre Orações e Termos (5.3)',
    duration: '16 min',
    sections: [
      {
        type: 'text',
        content:
          'As ORAÇÕES SUBORDINADAS dependem de uma oração principal para ter sentido completo. Classificam-se em substantivas, adjetivas e adverbiais — conforme a função que exercem na oração principal.',
      },
      {
        type: 'subtitle',
        content: 'Orações Subordinadas Substantivas',
      },
      {
        type: 'text',
        content:
          'Exercem a função de um SUBSTANTIVO (sujeito, objeto, complemento nominal, predicativo, aposto). São introduzidas pelas conjunções integrantes "que" e "se".',
      },
      {
        type: 'table',
        content: 'Tipos de subordinadas substantivas',
        headers: ['Tipo', 'Função', 'Exemplo'],
        rows: [
          ['Subjetiva', 'Sujeito da principal', '"É necessário QUE você estude."'],
          ['Objetiva direta', 'Objeto direto', '"Quero QUE você venha."'],
          ['Objetiva indireta', 'Objeto indireto', '"Preciso DE QUE você me ajude."'],
          ['Completiva nominal', 'Complemento nominal', '"Tenho certeza DE QUE passou."'],
          ['Predicativa', 'Predicativo do sujeito', '"A verdade é QUE ela mentiu."'],
          ['Apositiva', 'Aposto', '"Só quero uma coisa: QUE você seja feliz."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Orações Subordinadas Adjetivas',
      },
      {
        type: 'text',
        content:
          'Exercem a função de ADJETIVO — qualificam ou caracterizam um substantivo da oração principal (chamado de antecedente). São introduzidas por pronomes relativos.',
      },
      {
        type: 'table',
        content: 'Restritiva vs. Explicativa',
        headers: ['Tipo', 'Função', 'Pontuação', 'Exemplo'],
        rows: [
          ['Restritiva', 'Restringe/identifica o antecedente — sem ela o sentido muda', 'Sem vírgula', '"Os alunos QUE estudaram passaram." (só os que estudaram)'],
          ['Explicativa', 'Acrescenta info. adicional — sem ela o sentido não muda', 'Entre vírgulas', '"Os alunos, QUE estudaram, passaram." (todos estudaram)'],
        ],
      },
      {
        type: 'warning',
        label: 'A vírgula muda o sentido',
        content:
          '"Os funcionários que chegaram atrasados foram advertidos."\n→ Restritiva: APENAS os atrasados foram advertidos (os outros, não).\n\n"Os funcionários, que chegaram atrasados, foram advertidos."\n→ Explicativa: TODOS chegaram atrasados e foram advertidos.',
      },
      {
        type: 'subtitle',
        content: 'Orações Subordinadas Adverbiais',
      },
      {
        type: 'text',
        content:
          'Exercem a função de ADVÉRBIO — indicam circunstâncias (causa, consequência, condição, concessão, finalidade, tempo, modo, comparação, proporção) da oração principal.',
      },
      {
        type: 'table',
        content: 'Tipos de subordinadas adverbiais',
        headers: ['Tipo', 'Conjunções', 'Exemplo'],
        rows: [
          ['Causal', 'porque, já que, visto que, como', '"Saiu PORQUE estava doente."'],
          ['Consecutiva', 'de modo que, tão...que', '"Gritou tanto QUE ficou rouco."'],
          ['Condicional', 'se, caso, desde que', '"SE estudar, passará."'],
          ['Concessiva', 'embora, ainda que, mesmo que', '"EMBORA chovesse, saíram."'],
          ['Final', 'para que, a fim de que', '"Estudou PARA QUE passasse."'],
          ['Temporal', 'quando, enquanto, assim que', '"QUANDO chegou, todos aplaudiram."'],
          ['Conformativa', 'conforme, segundo, como', '"Fez CONFORME foi orientado."'],
          ['Comparativa', 'como, assim como, do que', '"Corre MAIS RÁPIDO DO QUE imaginava."'],
          ['Proporcional', 'à medida que, quanto mais', '"À MEDIDA QUE crescia, amadurecia."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Orações Reduzidas',
      },
      {
        type: 'text',
        content:
          'As orações reduzidas não têm conjunção e usam o verbo em forma nominal (infinitivo, gerúndio ou particípio). Podem ser desenvolvidas para a forma com conjunção.',
      },
      {
        type: 'example',
        label: 'Reduzidas → desenvolvidas',
        content:
          'Reduzida de infinitivo:\n"Para vencer, é preciso treinar muito."\n→ desenvolvida: "Para que se vença, é preciso treinar muito." (final)\n\nReduzida de gerúndio:\n"Chegando ao local, encontrou a porta fechada."\n→ desenvolvida: "Quando chegou ao local, encontrou a porta fechada." (temporal)\n\nReduzida de particípio:\n"Terminada a prova, o candidato entregou a folha."\n→ desenvolvida: "Depois que a prova foi terminada, o candidato entregou a folha." (temporal)',
      },
      {
        type: 'tip',
        label: 'Coordenação vs. Subordinação',
        content:
          'Para distinguir: substitua a oração por "isso" (pronominalização).\n\n"Quero QUE você venha." → "Quero ISSO." ✓ → é subordinada substantiva objetiva direta\n\n"Estudou muito, MAS não passou." → "Estudou muito, MAS ISSO." ✗ → é coordenada adversativa',
      },
    ],
  },
];
