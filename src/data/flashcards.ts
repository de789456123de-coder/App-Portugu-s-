import { Flashcard } from '../types';

const m1: Flashcard[] = [
  {
    id: 'fc1-01', moduleId: 'modulo1',
    front: 'Qual a diferença entre compreensão e interpretação textual?',
    back: 'Compreensão: apreender o que o texto diz explicitamente, sem ir além do escrito.\nInterpretação: relacionar o texto com conhecimentos externos, fazer inferências e identificar intenções implícitas.',
  },
  {
    id: 'fc1-02', moduleId: 'modulo1',
    front: 'O que é leitura literal?',
    back: 'Leitura que se restringe ao que está explicitamente escrito no texto, sem inferências ou interpretações além do enunciado.',
  },
  {
    id: 'fc1-03', moduleId: 'modulo1',
    front: 'O que é leitura inferencial?',
    back: 'Leitura que vai além do explícito, deduzindo informações implícitas a partir do contexto, do conhecimento prévio e das pistas deixadas pelo autor.',
  },
  {
    id: 'fc1-04', moduleId: 'modulo1',
    front: 'Qual a diferença entre tema e tese?',
    back: 'Tema: o assunto central abordado no texto (aquilo sobre o qual o texto fala).\nTese: a posição, ideia ou ponto de vista defendido pelo autor em relação ao tema.',
  },
  {
    id: 'fc1-05', moduleId: 'modulo1',
    front: 'O que é argumento em um texto?',
    back: 'Razão, prova ou justificativa apresentada pelo autor para sustentar e defender sua tese. Pode ser de autoridade, de exemplificação, estatístico, comparativo etc.',
  },
  {
    id: 'fc1-06', moduleId: 'modulo1',
    front: 'O que é pressuposto?',
    back: 'Informação implícita que precisa ser verdadeira para que o enunciado faça sentido. O enunciador assume responsabilidade pelo pressuposto.\nEx.: "Ele parou de fumar" → pressupõe que ele fumava.',
  },
  {
    id: 'fc1-07', moduleId: 'modulo1',
    front: 'O que é subentendido?',
    back: 'Informação implícita que o emissor transmite sem assumir responsabilidade explícita por ela. É deduzida pelo receptor com base no contexto e na situação comunicativa.',
  },
  {
    id: 'fc1-08', moduleId: 'modulo1',
    front: 'O que é inferência?',
    back: 'Conclusão lógica obtida a partir de informações do texto combinadas com o conhecimento prévio do leitor. Vai além do explícito sem contradizer o texto.',
  },
  {
    id: 'fc1-09', moduleId: 'modulo1',
    front: 'O que é intertextualidade?',
    back: 'Relação estabelecida entre dois ou mais textos quando um faz referência explícita ou implícita a outro, dialogando com ele (citação, paródia, alusão, epígrafe etc.).',
  },
  {
    id: 'fc1-10', moduleId: 'modulo1',
    front: 'O que é coerência textual?',
    back: 'Propriedade do texto que garante sua unidade de sentido e lógica interna — as ideias não se contradizem e formam um todo compreensível.',
  },
  {
    id: 'fc1-11', moduleId: 'modulo1',
    front: 'Como identificar a ideia principal de um parágrafo?',
    back: 'Geralmente está na frase tópica (primeira ou última do parágrafo). As demais frases são argumentos, exemplos ou detalhes que a desenvolvem.',
  },
  {
    id: 'fc1-12', moduleId: 'modulo1',
    front: 'O que é linguagem figurada?',
    back: 'Uso das palavras em sentido não literal (conotativo). Principais figuras: metáfora (comparação implícita), metonímia (parte pelo todo), hipérbole (exagero), ironia (dizer o contrário).',
  },
  {
    id: 'fc1-13', moduleId: 'modulo1',
    front: 'Qual a diferença entre narrador e autor?',
    back: 'Autor: pessoa real que escreve o texto.\nNarrador: voz fictícia criada pelo autor para contar a história. Pode ser personagem (1ª pessoa) ou observador externo (3ª pessoa).',
  },
  {
    id: 'fc1-14', moduleId: 'modulo1',
    front: 'O que é ponto de vista no texto?',
    back: 'A perspectiva a partir da qual o narrador ou autor apresenta os fatos. Influencia a seleção de informações, o tom e a posição ideológica do texto.',
  },
  {
    id: 'fc1-15', moduleId: 'modulo1',
    front: 'Em questões de interpretação, quando uma alternativa está errada?',
    back: 'Quando vai além do que o texto afirma (extrapola), contradiz o texto, distorce uma informação parcialmente correta ou usa linguagem absoluta ("sempre", "nunca") sem respaldo textual.',
  },
];

const m2: Flashcard[] = [
  {
    id: 'fc2-01', moduleId: 'modulo2',
    front: 'Quais são os 5 tipos textuais?',
    back: '1. Narração — conta uma história\n2. Descrição — retrata características\n3. Dissertação — defende ou expõe ideias\n4. Injunção — instrui / ordena\n5. Exposição — explica / informa',
  },
  {
    id: 'fc2-02', moduleId: 'modulo2',
    front: 'Qual a diferença entre tipo e gênero textual?',
    back: 'Tipo textual: categoria abstrata definida por estrutura e função (narração, descrição...).\nGênero textual: forma concreta de uso social, com nome e suporte definidos (notícia, conto, receita, ofício...).',
  },
  {
    id: 'fc2-03', moduleId: 'modulo2',
    front: 'O que é texto narrativo?',
    back: 'Tipo textual que conta uma história com personagens, enredo (conflito e desfecho), tempo, espaço e narrador. Verbos predominantes: pretérito.',
  },
  {
    id: 'fc2-04', moduleId: 'modulo2',
    front: 'O que é texto dissertativo-argumentativo?',
    back: 'Tipo textual que defende um ponto de vista (tese) sobre um tema, usando argumentos para convencer o leitor. Estrutura: introdução, desenvolvimento, conclusão.',
  },
  {
    id: 'fc2-05', moduleId: 'modulo2',
    front: 'O que é texto injuntivo?',
    back: 'Tipo textual que instrui ou ordena como realizar uma ação. Exemplos: receitas, manuais, bulas, regulamentos. Verbos no imperativo ou infinitivo.',
  },
  {
    id: 'fc2-06', moduleId: 'modulo2',
    front: 'O que é notícia?',
    back: 'Gênero jornalístico informativo que relata fatos recentes de interesse público com objetividade. Responde: Quem? O quê? Quando? Onde? Como? Por quê?',
  },
  {
    id: 'fc2-07', moduleId: 'modulo2',
    front: 'O que é editorial?',
    back: 'Gênero jornalístico opinativo que expressa a posição oficial do veículo de comunicação sobre um tema de relevância. Não tem assinatura.',
  },
  {
    id: 'fc2-08', moduleId: 'modulo2',
    front: 'O que é crônica?',
    back: 'Gênero literário-jornalístico que trata de fatos cotidianos com leveza, humor ou lirismo. É curta, publicada em jornais/revistas, e mistura narração, descrição e opinião.',
  },
  {
    id: 'fc2-09', moduleId: 'modulo2',
    front: 'O que é artigo de opinião?',
    back: 'Gênero argumentativo assinado em que o autor defende um ponto de vista sobre tema polêmico usando argumentos e evidências. Diferente do editorial: tem autoria.',
  },
  {
    id: 'fc2-10', moduleId: 'modulo2',
    front: 'O que é conto?',
    back: 'Gênero narrativo literário curto, com poucos personagens, enredo único, tempo concentrado e desfecho geralmente surpreendente ou revelador.',
  },
  {
    id: 'fc2-11', moduleId: 'modulo2',
    front: 'O que é memorando?',
    back: 'Gênero formal usado na comunicação interna de organizações para tratar de assuntos administrativos. É objetivo, breve e segue formato padronizado.',
  },
  {
    id: 'fc2-12', moduleId: 'modulo2',
    front: 'O que é ofício?',
    back: 'Gênero formal usado na comunicação externa entre órgãos públicos ou destes com particulares. Mais formal que o memorando; exige tratamento cerimonial.',
  },
  {
    id: 'fc2-13', moduleId: 'modulo2',
    front: 'O que é resenha?',
    back: 'Gênero que apresenta e avalia criticamente uma obra (livro, filme, peça), descrevendo seu conteúdo e emitindo julgamento fundamentado.',
  },
  {
    id: 'fc2-14', moduleId: 'modulo2',
    front: 'O que é reportagem?',
    back: 'Gênero jornalístico mais aprofundado que a notícia; investiga e contextualiza um tema com múltiplas fontes, dados e análise. Pode ter viés interpretativo.',
  },
  {
    id: 'fc2-15', moduleId: 'modulo2',
    front: 'Qual a diferença entre conto, novela e romance?',
    back: 'Conto: curto, enredo único, poucos personagens.\nNovela: médio, vários episódios encadeados, personagens recorrentes.\nRomance: longo, múltiplos conflitos, ampla galeria de personagens e espaços.',
  },
];

const m3: Flashcard[] = [
  {
    id: 'fc3-01', moduleId: 'modulo3',
    front: 'Quando usar X e quando usar CH?',
    back: 'X: após ditongos (caixa, peixe), após EN inicial (enxada, enxame), palavras de origem africana/indígena (xará, abacaxi).\nCH: palavras de origem francesa/grega (chave, cheque, chocolate, chiclete).',
  },
  {
    id: 'fc3-02', moduleId: 'modulo3',
    front: 'Quando usar S e quando usar Z?',
    back: 'S: sufixos -oso/-esa/-isa (gostoso, marquesa, poetisa), após ditongo (coisa, lousa).\nZ: sufixos -izar/-ização (realizar), -ez/-eza de substantivos abstratos (rigidez, beleza), após ditongo tônico (prazo).',
  },
  {
    id: 'fc3-03', moduleId: 'modulo3',
    front: 'Quando usar SS e quando usar Ç?',
    back: 'SS: entre vogais, nunca no início (passo, necessário).\nÇ: após A, O, U quando o som é /s/ (caçar, poço, açúcar). Nunca antes de E ou I (use S nesses casos: cesta, sinal).',
  },
  {
    id: 'fc3-04', moduleId: 'modulo3',
    front: 'Quando usar G e quando usar J?',
    back: 'G: antes de E e I em palavras de origem latina/grega (gente, girar, geometria, gelatina).\nJ: em palavras de origem árabe, tupi, africana ou em formas verbais de verbos terminados em -jar (viajar → viaje).',
  },
  {
    id: 'fc3-05', moduleId: 'modulo3',
    front: 'Regra do hífen com prefixos: quando usar?',
    back: 'USA hífen: prefixo terminado em vogal + palavra começando com H ou mesma vogal (anti-higiênico, micro-ondas, semi-inconsciente).\nNÃO usa: prefixo + consoante diferente de H ou S (antepor, antevisto, bissexual).',
  },
  {
    id: 'fc3-06', moduleId: 'modulo3',
    front: 'O que são palavras homófonas?',
    back: 'Palavras com a mesma pronúncia mas grafia e/ou significado diferentes.\nExemplos: acender (fogo) / ascender (subir); conserto (reparo) / concerto (show); cela (prisão) / sela (arreio).',
  },
  {
    id: 'fc3-07', moduleId: 'modulo3',
    front: 'O que são palavras parônimas?',
    back: 'Palavras com pronúncia e grafia semelhantes mas significados distintos.\nExemplos: infligir (impor pena) / infringir (violar lei); comprimento (tamanho) / cumprimento (saudação); descrição / discrição.',
  },
  {
    id: 'fc3-08', moduleId: 'modulo3',
    front: 'O que mudou com o Novo Acordo Ortográfico (2009)?',
    back: '• Eliminou o trema em palavras de origem portuguesa (agüentar → aguentar).\n• Retirou acento diferencial de pares como pêlo/pelo, pêra/pera, péla/pela.\n• Manteve o acento em "pôr" (verbo) e "pôde" (passado de poder).\n• Regras de hífen foram reorganizadas.',
  },
  {
    id: 'fc3-09', moduleId: 'modulo3',
    front: 'Quando usar letras maiúsculas obrigatoriamente?',
    back: '• Início de período ou verso.\n• Nomes próprios (pessoas, lugares, instituições, datas festivas).\n• Títulos de obras e siglas.\n• Após dois-pontos em discurso direto.\n• Tratamentos como Vossa Excelência (abreviados: V. Ex.ª).',
  },
  {
    id: 'fc3-10', moduleId: 'modulo3',
    front: '"Mas" ou "mais"? Quando usar cada um?',
    back: '"Mas" = conjunção adversativa (equivale a "porém, contudo"). Ex.: Estudei, mas não passei.\n"Mais" = advérbio de intensidade ou pronome (oposto de "menos"). Ex.: Preciso estudar mais.',
  },
  {
    id: 'fc3-11', moduleId: 'modulo3',
    front: 'Qual o plural de palavras terminadas em -ão?',
    back: 'Três possibilidades:\n-ões (leão → leões) — mais comum\n-ães (pão → pães, cão → cães)\n-ãos (irmão → irmãos, cidadão → cidadãos)\nAlgumas aceitam duas formas: anão → anões ou anãos.',
  },
  {
    id: 'fc3-12', moduleId: 'modulo3',
    front: '"Exceção" ou "excessão"? Como se escreve?',
    back: '"Exceção" — com Ç.\nAtenção ao par: excesso (com SS, substantivo), mas exceção (com Ç, a regra específica). Analogia: excepcional → exceção.',
  },
  {
    id: 'fc3-13', moduleId: 'modulo3',
    front: '"Ao invés de" e "em vez de" são sinônimos?',
    back: 'Tecnicamente não:\n"Ao invés de" = sentido contrário (fez o oposto do esperado).\n"Em vez de" = substituição, no lugar de.\nEm concursos, a distinção é cobrada. Prefira "em vez de" quando indicar substituição.',
  },
  {
    id: 'fc3-14', moduleId: 'modulo3',
    front: 'Como se escrevem os advérbios terminados em -mente?',
    back: 'Formados a partir do feminino do adjetivo (ou forma única) + -mente.\nEx.: lenta + mente = lentamente; feliz + mente = felizmente.\nQuando dois advérbios seguidos, o -mente aparece só no último: clara e objetivamente.',
  },
  {
    id: 'fc3-15', moduleId: 'modulo3',
    front: '"Por que", "porque", "por quê" e "porquê" — como usar?',
    back: '"Por que": pergunta ou explicação sem ênfase (Por que foi embora?).\n"Porque": resposta/causa (Fui porque precisava).\n"Por quê": no fim de frase ou antes de pausa (Não sei por quê).\n"Porquê": substantivo (Não entendo o porquê disso).',
  },
];

const m4: Flashcard[] = [
  {
    id: 'fc4-01', moduleId: 'modulo4',
    front: 'O que é referenciação anafórica?',
    back: 'Retomada de um elemento já mencionado anteriormente no texto. Exemplos: pronomes (ele, este), sinônimos, expressões nominais ("o referido autor", "tal proposta").',
  },
  {
    id: 'fc4-02', moduleId: 'modulo4',
    front: 'O que é referenciação catafórica?',
    back: 'Antecipação de um elemento que será mencionado adiante no texto. Exemplos: "o seguinte", "a saber", "assim:", "o que veremos depois".',
  },
  {
    id: 'fc4-03', moduleId: 'modulo4',
    front: 'O que é elipse como mecanismo de coesão?',
    back: 'Omissão de um elemento (sujeito, verbo ou complemento) que pode ser recuperado pelo contexto sem perda de sentido.\nEx.: "Comprei o livro. Li em dois dias." [Eu] está omitido no segundo período.',
  },
  {
    id: 'fc4-04', moduleId: 'modulo4',
    front: 'Quais conectivos indicam adição?',
    back: 'E, também, além disso, ademais, ainda, bem como, não só... mas também, não apenas... mas ainda, outrossim, do mesmo modo.',
  },
  {
    id: 'fc4-05', moduleId: 'modulo4',
    front: 'Quais conectivos indicam oposição/contraste?',
    back: 'Mas, porém, contudo, todavia, entretanto, no entanto, ao passo que, enquanto (oposição), apesar de, embora, ainda que, mesmo que (concessão).',
  },
  {
    id: 'fc4-06', moduleId: 'modulo4',
    front: 'Quais conectivos indicam conclusão?',
    back: 'Logo, portanto, assim, por isso, consequentemente, por conseguinte, destarte, dessa forma, dessa maneira, em suma, em conclusão.',
  },
  {
    id: 'fc4-07', moduleId: 'modulo4',
    front: 'Quais conectivos indicam causa?',
    back: 'Porque, pois (antes do verbo), visto que, uma vez que, já que, como (causal, antes da oração principal), dado que, porquanto.',
  },
  {
    id: 'fc4-08', moduleId: 'modulo4',
    front: 'Quais conectivos indicam condição?',
    back: 'Se, caso, desde que, contanto que, a menos que, a não ser que, salvo se, exceto se, desde que.',
  },
  {
    id: 'fc4-09', moduleId: 'modulo4',
    front: 'Quais conectivos indicam tempo?',
    back: 'Quando, enquanto, antes que, depois que, assim que, logo que, tão logo, desde que (temporal), até que, mal (temporal), sempre que.',
  },
  {
    id: 'fc4-10', moduleId: 'modulo4',
    front: 'Qual a função do pretérito imperfeito do indicativo?',
    back: 'Expressa ações passadas que eram habituais, contínuas ou simultâneas a outro fato passado.\nTambém usado para expressar polidez (Queria pedir um favor) ou futuro do passado (Disse que viria).',
  },
  {
    id: 'fc4-11', moduleId: 'modulo4',
    front: 'Qual a diferença entre pretérito perfeito e imperfeito?',
    back: 'Perfeito: ação concluída em momento determinado (Ontem estudei muito).\nImperfeito: ação habitual, contínua ou incompleta no passado (Antes, eu estudava todo dia).',
  },
  {
    id: 'fc4-12', moduleId: 'modulo4',
    front: 'Qual a diferença entre modo indicativo e subjuntivo?',
    back: 'Indicativo: expressa certeza, fatos reais e objetivos (Ele estuda).\nSubjuntivo: expressa dúvida, hipótese, desejo, possibilidade, sentimento (Espero que ele estude / Se ele estudasse...).',
  },
  {
    id: 'fc4-13', moduleId: 'modulo4',
    front: 'Para que serve o futuro do subjuntivo?',
    back: 'Expressa ação futura hipotética, geralmente em orações condicionais ou temporais futuras.\nEx.: "Se você vier, avise." / "Quando você terminar, me chame."',
  },
  {
    id: 'fc4-14', moduleId: 'modulo4',
    front: 'O que é progressão temática?',
    back: 'O modo como o texto avança: cada novo enunciado parte de informação já conhecida (tema) para introduzir informação nova (rema), garantindo continuidade e desenvolvimento das ideias.',
  },
  {
    id: 'fc4-15', moduleId: 'modulo4',
    front: 'Como diferenciar "pois" como causa e "pois" como explicação?',
    back: '"Pois" causal: vem depois da oração principal (Não foi à aula, pois estava doente).\n"Pois" explicativo: vem antes da principal ou justifica um imperativo (Venha logo, pois o tempo é curto).',
  },
];

const m5a: Flashcard[] = [
  {
    id: 'fc5a-01', moduleId: 'modulo5a',
    front: 'Quais são as 10 classes de palavras do português?',
    back: 'Variáveis: substantivo, artigo, adjetivo, numeral, pronome, verbo.\nInvariáveis: advérbio, preposição, conjunção, interjeição.',
  },
  {
    id: 'fc5a-02', moduleId: 'modulo5a',
    front: 'O que é substantivo? Quais suas subclassificações?',
    back: 'Nomeia seres, objetos, lugares, ações e sentimentos.\nSubclasses: próprio/comum, concreto/abstrato, simples/composto, primitivo/derivado, coletivo.',
  },
  {
    id: 'fc5a-03', moduleId: 'modulo5a',
    front: 'O que é adjetivo e o que é locução adjetiva?',
    back: 'Adjetivo: palavra que qualifica ou classifica o substantivo (bonito, federal, azul).\nLocução adjetiva: expressão preposicionada com valor de adjetivo (de ouro = áureo; da tarde = vespertino).',
  },
  {
    id: 'fc5a-04', moduleId: 'modulo5a',
    front: 'Quais são os tipos de pronome?',
    back: '• Pessoais (retos: eu, tu, ele; oblíquos: me, te, se, o, lhe)\n• Possessivos (meu, teu, seu)\n• Demonstrativos (este, esse, aquele)\n• Relativos (que, o qual, cujo, onde)\n• Indefinidos (alguém, ninguém, todo)\n• Interrogativos (quem, que, qual)',
  },
  {
    id: 'fc5a-05', moduleId: 'modulo5a',
    front: 'Qual a diferença entre "este/esse/aquele"?',
    back: '"Este": perto de quem fala (1ª pessoa).\n"Esse": perto de quem ouve (2ª pessoa) ou retomada imediata.\n"Aquele": longe de ambos (3ª pessoa) ou elemento mais distante no texto.',
  },
  {
    id: 'fc5a-06', moduleId: 'modulo5a',
    front: 'O que é advérbio? Quais as principais circunstâncias?',
    back: 'Modifica o verbo, adjetivo ou outro advérbio.\nCircunstâncias: tempo (ontem), lugar (aqui), modo (rapidamente), intensidade (muito), negação (não), afirmação (sim), dúvida (talvez).',
  },
  {
    id: 'fc5a-07', moduleId: 'modulo5a',
    front: 'O que é preposição? Cite as principais.',
    back: 'Palavra invariável que liga termos, estabelecendo relação de dependência.\nPrincipais: a, ante, após, até, com, contra, de, desde, em, entre, para, perante, por, sem, sob, sobre, trás.\nContraídas: ao, do, no, pelo, num, duma...',
  },
  {
    id: 'fc5a-08', moduleId: 'modulo5a',
    front: 'Qual a diferença entre conjunção coordenativa e subordinativa?',
    back: 'Coordenativa: liga orações independentes entre si (e, mas, ou, porém, logo).\nSubordinativa: liga uma oração dependente (subordinada) à principal (que, porque, se, quando, embora, para que).',
  },
  {
    id: 'fc5a-09', moduleId: 'modulo5a',
    front: 'Quais são as conjunções coordenativas e suas classificações?',
    back: 'Aditivas: e, nem, não só... mas também\nAdversativas: mas, porém, contudo, todavia, entretanto\nAlternativas: ou, ora... ora, seja... seja\nExplicativas: pois (anteposto), porque, que\nConclusivas: logo, portanto, assim, pois (posposto)',
  },
  {
    id: 'fc5a-10', moduleId: 'modulo5a',
    front: 'O que é oração subordinada substantiva?',
    back: 'Exerce função de substantivo (sujeito, objeto direto, objeto indireto, complemento nominal, aposto ou predicativo) em relação à oração principal.\nEx.: "É preciso [que você estude]." (sujeito)',
  },
  {
    id: 'fc5a-11', moduleId: 'modulo5a',
    front: 'O que é oração subordinada adjetiva restritiva vs. explicativa?',
    back: 'Restritiva: sem vírgulas; restringe, identifica um subconjunto do antecedente. Ex.: Os alunos que estudaram passaram.\nExplicativa: entre vírgulas; acrescenta informação a algo já determinado. Ex.: Os alunos, que estudaram, passaram.',
  },
  {
    id: 'fc5a-12', moduleId: 'modulo5a',
    front: 'Quais são os tipos de oração subordinada adverbial?',
    back: 'Causal, consecutiva, condicional, concessiva, comparativa, conformativa, final, temporal, proporcional.\nCada uma é introduzida por conjunção específica (embora = concessiva; porque = causal; para que = final etc.).',
  },
  {
    id: 'fc5a-13', moduleId: 'modulo5a',
    front: 'O que é período simples e período composto?',
    back: 'Simples: um único verbo (ou locução verbal) — uma única oração.\nComposto por coordenação: orações independentes.\nComposto por subordinação: uma oração depende da outra.',
  },
  {
    id: 'fc5a-14', moduleId: 'modulo5a',
    front: 'Quais são as vozes verbais?',
    back: 'Ativa: sujeito pratica a ação (O menino leu o livro).\nPassiva analítica: sujeito sofre a ação (O livro foi lido pelo menino).\nPassiva sintética: pronome "se" + verbo na 3ª pessoa (Leu-se o livro).\nReflexiva: sujeito pratica e sofre a ação.',
  },
  {
    id: 'fc5a-15', moduleId: 'modulo5a',
    front: 'O que é locução verbal? Quais os tipos de verbo auxiliar?',
    back: 'Dois ou mais verbos formando um único núcleo verbal. O verbo principal fica no infinitivo, gerúndio ou particípio.\nAuxiliares modais: poder, dever, querer, precisar.\nAuxiliares aspectuais: começar a, continuar, acabar de, estar (+ gerúndio).',
  },
];

const m5b: Flashcard[] = [
  {
    id: 'fc5b-01', moduleId: 'modulo5b',
    front: 'Quando o uso de vírgula é obrigatório?',
    back: '• Isolar vocativo (João, venha cá)\n• Isolar aposto explicativo\n• Isolar adjunto adverbial deslocado\n• Isolar oração adjetiva explicativa\n• Separar elementos de enumeração\n• Isolar orações intercaladas',
  },
  {
    id: 'fc5b-02', moduleId: 'modulo5b',
    front: 'Quando NÃO se usa vírgula?',
    back: 'NUNCA separe:\n• Sujeito do verbo\n• Verbo do objeto direto\n• Verbo do objeto indireto\n• Substantivo do adjetivo (restritivo)\n• Preposição do seu complemento',
  },
  {
    id: 'fc5b-03', moduleId: 'modulo5b',
    front: 'Regra básica da concordância verbal',
    back: 'O verbo concorda em número e pessoa com o sujeito.\nSimples: O aluno estuda / Os alunos estudam.\nComposto antes do verbo: sujeitos pós-verbais podem concordar com o mais próximo (Chegou o aluno e a professora).',
  },
  {
    id: 'fc5b-04', moduleId: 'modulo5b',
    front: 'Quando o verbo "haver" fica no singular?',
    back: 'Quando é impessoal (não tem sujeito):\n• Sentido de existir: "Há muitos candidatos" (não "Hão")\n• Indicar tempo decorrido: "Há dois anos que não te vejo"\n• Locução "haja vista" também fica invariável.',
  },
  {
    id: 'fc5b-05', moduleId: 'modulo5b',
    front: 'O verbo "ser" em predicado nominal — quando varia?',
    back: 'Concorda com o predicativo, não com o sujeito, quando o sujeito é pronome indefinido (tudo, nada, isto, isso, aquilo).\nEx.: Tudo são flores. / Aquilo eram problemas.\nMas: A maioria é estudante (concorda com "maioria").',
  },
  {
    id: 'fc5b-06', moduleId: 'modulo5b',
    front: 'Regra básica de concordância nominal',
    back: 'Artigo, adjetivo, numeral e pronome concordam em gênero e número com o substantivo.\nEx.: Os belos quadros antigos foram restaurados.\nAdjetivo pós-nominal com vários substantivos: concorda com o mais próximo ou vai para o plural.',
  },
  {
    id: 'fc5b-07', moduleId: 'modulo5b',
    front: 'Regência do verbo "assistir"',
    back: '"Ver/presenciar" → transitivo indireto + preposição A (Assisti ao jogo).\n"Ajudar/caber" → transitivo indireto + A (A lei assiste ao trabalhador).\n"Residir" → transitivo indireto + EM.\nErro comum: "assisti o jogo" (sem preposição).',
  },
  {
    id: 'fc5b-08', moduleId: 'modulo5b',
    front: 'Regência do verbo "ir": "a" ou "para"?',
    back: '"Ir a" → destino com retorno previsto (Fui à escola / Vou ao mercado).\n"Ir para" → destino com permanência ou definitivo (Ele foi para o Canadá e ficou lá).\nRegra geral: uso de "a" é o padrão formal para deslocamentos cotidianos.',
  },
  {
    id: 'fc5b-09', moduleId: 'modulo5b',
    front: 'O que é crase e quando ocorre?',
    back: 'Fusão do artigo feminino "a" + preposição "a" = "à".\nOcorre diante de palavras femininas que admitem artigo "a".\nTeste: substitua por palavra masculina. Se usar "ao" → usa crase. Ex.: Fui à escola (Fui ao colégio ✓).',
  },
  {
    id: 'fc5b-10', moduleId: 'modulo5b',
    front: 'Quando a crase é PROIBIDA?',
    back: '• Antes de palavras masculinas (a pé, a cavalo)\n• Antes de verbos (começou a chover)\n• Antes de pronomes pessoais, demonstrativos sem substantivo (a ele, a esta)\n• Antes de "uma", "alguma", "nenhuma"\n• Antes de nomes de cidades sem artigo (fui a Brasília)',
  },
  {
    id: 'fc5b-11', moduleId: 'modulo5b',
    front: 'Quando a crase é FACULTATIVA?',
    back: '• Antes de pronomes possessivos femininos (à/a sua casa)\n• Antes de nomes de localidades que admitem artigo (à/a Lisboa)\n• Em locuções adverbiais femininas de modo (à/a vontade, à/a toa)',
  },
  {
    id: 'fc5b-12', moduleId: 'modulo5b',
    front: 'O que é próclise? Quando ocorre?',
    back: 'Pronome átono ANTES do verbo.\nOcorre com palavras atrativas:\n• Negação (Não me diga)\n• Pronome relativo (que, o qual)\n• Conjunção subordinativa (quando, embora)\n• Advérbios (sempre, talvez, jamais)\n• Pronomes indefinidos/demonstrativos (todos, isso)',
  },
  {
    id: 'fc5b-13', moduleId: 'modulo5b',
    front: 'O que é ênclise? Quando ocorre?',
    back: 'Pronome átono APÓS o verbo (verbo-pronome).\nÉ obrigatória: no início absoluto de período (Diga-me...), após vírgula que segue pausa, com verbo no imperativo afirmativo.\nNunca use ênclise com verbo no futuro ou no início de período.',
  },
  {
    id: 'fc5b-14', moduleId: 'modulo5b',
    front: 'O que é mesóclise? Quando ocorre?',
    back: 'Pronome átono NO MEIO do verbo (verbo-pronome-terminação).\nOcorre APENAS com verbos no futuro do presente ou futuro do pretérito na norma culta:\nEx.: Far-me-á (fará + me), Dar-te-ia (daria + te).',
  },
  {
    id: 'fc5b-15', moduleId: 'modulo5b',
    front: 'Concordância com "a maioria de", "a maior parte de", "um grupo de"',
    back: 'O verbo pode concordar com o núcleo do sujeito ou com o substantivo da expressão partitiva.\nPreferência: verbo no singular (A maioria dos candidatos foi aprovada).\nAmbas as formas são aceitas (foi / foram).',
  },
];

const m6: Flashcard[] = [
  {
    id: 'fc6-01', moduleId: 'modulo6',
    front: 'Qual a diferença entre denotação e conotação?',
    back: 'Denotação: sentido literal, objetivo e primário da palavra, registrado no dicionário (fogo = combustão).\nConotação: sentido figurado, subjetivo e contextual (fogo nos olhos = paixão; ele é um gelo = frieza).',
  },
  {
    id: 'fc6-02', moduleId: 'modulo6',
    front: 'O que é polissemia?',
    back: 'Propriedade de uma palavra ter múltiplos significados relacionados à mesma origem etimológica.\nEx.: "banco" = assento / instituição financeira / banco de areia / banco de dados.',
  },
  {
    id: 'fc6-03', moduleId: 'modulo6',
    front: 'Qual a diferença entre sinonímia e antonímia?',
    back: 'Sinonímia: relação entre palavras de sentido igual ou semelhante (belo/bonito, rápido/veloz).\nAntonímia: relação entre palavras de sentido oposto (quente/frio, amor/ódio, subir/descer).',
  },
  {
    id: 'fc6-04', moduleId: 'modulo6',
    front: 'O que é campo semântico?',
    back: 'Conjunto de palavras pertencentes à mesma área de significação ou relacionadas a um mesmo tema.\nEx.: campo semântico de "hospital": médico, paciente, enfermeira, cirurgia, leito, diagnóstico.',
  },
  {
    id: 'fc6-05', moduleId: 'modulo6',
    front: 'O que é neologismo?',
    back: 'Palavra nova criada para nomear realidade antes inexistente ou não nomeada na língua.\nPode ocorrer por criação (selfie, tuitar), empréstimo linguístico (deletar, mouse) ou extensão semântica (navegar = usar internet).',
  },
  {
    id: 'fc6-06', moduleId: 'modulo6',
    front: 'O que é eufemismo?',
    back: 'Substituição de uma palavra ou expressão desagradável, tabu ou ofensiva por outra mais suave.\nEx.: "passou desta para melhor" (morreu); "colaborador" (funcionário demitido); "necessidades fisiológicas" (urinar/defecar).',
  },
  {
    id: 'fc6-07', moduleId: 'modulo6',
    front: 'Como transformar voz ativa em passiva analítica?',
    back: '1. Objeto direto → sujeito paciente\n2. Verbo → ser + particípio\n3. Sujeito ativo → agente da passiva (por + sujeito)\nEx.: "A professora corrigiu as provas" → "As provas foram corrigidas pela professora".',
  },
  {
    id: 'fc6-08', moduleId: 'modulo6',
    front: 'Como transformar discurso direto em indireto?',
    back: '1. Elimine aspas/travessão\n2. Use conjunção "que" após verbo de elocução\n3. Ajuste pronomes pessoais (eu → ele)\n4. Ajuste tempo verbal (presente → imperfeito; perfeito → mais-que-perfeito)\nEx.: Ela disse: "Vou sair." → Ela disse que ia sair.',
  },
  {
    id: 'fc6-09', moduleId: 'modulo6',
    front: 'O que é inversão sintática e quando é válida na reescrita?',
    back: 'Alteração da ordem canônica (S + V + O) sem mudar o sentido.\nÉ válida quando: não altera o sentido, a pontuação é ajustada, e o adjunto/oração deslocado está corretamente separado por vírgula.\nEx.: "O relatório foi aprovado ontem" → "Ontem, o relatório foi aprovado."',
  },
  {
    id: 'fc6-10', moduleId: 'modulo6',
    front: 'Quando a fusão de dois períodos é válida na reescrita?',
    back: 'Quando as orações têm relação lógica clara (causa, consequência, adição, oposição) que pode ser expressa por um conectivo, sem ambiguidade.\nEx.: "Estudou muito. Passou no concurso." → "Estudou muito, portanto passou no concurso."',
  },
  {
    id: 'fc6-11', moduleId: 'modulo6',
    front: 'Quando a separação de um período em dois é válida?',
    back: 'Quando as ideias são suficientemente independentes e a separação não cria ambiguidade.\nEx.: "Embora estivesse cansado, terminou o trabalho." → "Estava cansado. Ainda assim, terminou o trabalho."',
  },
  {
    id: 'fc6-12', moduleId: 'modulo6',
    front: 'O que muda ao reescrever um texto de linguagem formal para informal?',
    back: 'Formal → informal:\n• Substitui vocabulário técnico por coloquial\n• Admite gírias e expressões idiomáticas\n• Reduz estruturas sintáticas complexas\n• Usa 2ª pessoa (você) em vez de tratamento cerimonioso\n• Admite frases incompletas',
  },
  {
    id: 'fc6-13', moduleId: 'modulo6',
    front: 'Quais critérios garantem equivalência na substituição de palavras?',
    back: '1. Sentido equivalente no contexto (não no dicionário)\n2. Mesmo registro (formal/informal)\n3. Mesma função gramatical\n4. Mesma carga semântica (denotação/conotação)\n5. Ausência de redundância ou mudança de foco',
  },
  {
    id: 'fc6-14', moduleId: 'modulo6',
    front: 'O que define o nível de formalidade de um texto?',
    back: '• Vocabulário (técnico vs. coloquial)\n• Estrutura sintática (complexa vs. simples)\n• Concordância (estrita vs. flexível)\n• Uso de pronomes de tratamento\n• Impessoalidade (3ª pessoa vs. 1ª)\n• Ausência/presença de gírias e marcadores conversacionais',
  },
  {
    id: 'fc6-15', moduleId: 'modulo6',
    front: 'Como reescrever um fato jornalístico como crônica?',
    back: '• Adicione subjetividade e ponto de vista pessoal\n• Use linguagem mais literária (metáforas, ironia)\n• Reduza dados objetivos, amplie reflexão\n• Mude o foco: do fato em si para o impacto humano\n• Admita humor, nostalgia ou crítica velada\n• Aproxime o leitor com linguagem mais coloquial',
  },
];

export const FLASHCARDS_DATA: Record<string, Flashcard[]> = {
  modulo1: m1,
  modulo2: m2,
  modulo3: m3,
  modulo4: m4,
  modulo5a: m5a,
  modulo5b: m5b,
  modulo6: m6,
};

export const ALL_FLASHCARDS: Flashcard[] = [
  ...m1, ...m2, ...m3, ...m4, ...m5a, ...m5b, ...m6,
];
