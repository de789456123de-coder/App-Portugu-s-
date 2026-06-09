import { Lesson } from '../types';

export const modulo3Lessons: Lesson[] = [
  {
    id: 'm3-l1',
    title: 'Uso de X e CH',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'Um dos maiores problemas ortográficos do português é saber quando usar X ou CH, pois ambos podem representar o mesmo som /ʃ/ (como em "chuva" ou "xícara"). Existem regras confiáveis para a maioria dos casos.',
      },
      {
        type: 'subtitle',
        content: 'Casos em que se usa X',
      },
      {
        type: 'table',
        content: 'Regras do X',
        headers: ['Contexto', 'Exemplos'],
        rows: [
          ['Após ditongo (ai, ei, ou...)', 'peixe, caixa, feixe, frouxo, baixo'],
          ['Após sílaba inicial "en-"', 'enxada, enxame, enxoval, enxuto, enxofre'],
          ['Após sílaba inicial "me-"', 'mexer, mexilhão, México'],
          ['Palavras de origem indígena', 'xará, xingamento, xerimbabo, xique-xique'],
          ['Palavras de origem africana', 'xingar, xodó, abacaxi'],
          ['Início de palavras com som de "ch"', 'xícara, xarope, xenofobia, xerife'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Casos em que se usa CH',
      },
      {
        type: 'text',
        content:
          'Usa-se CH em palavras de origem grega, latina e francesa, e em palavras que não se encaixam nas regras do X.',
      },
      {
        type: 'example',
        label: 'Palavras com CH',
        content:
          'De origem grega: archa → archa, psicologia, chave (lat.)\nDe origem francesa: chique, champanhe, chef, chá\nOutras: chuva, chumbo, chão, cheio, cheiro, choro, achacar, mochila, rancho, tocha, velho → velha (não se aplica aqui)',
      },
      {
        type: 'tip',
        label: 'Palavras que enganam',
        content:
          'Xale ✓ (não "chale") | Enxergar ✓ (após "en-") | Mexer ✓ (após "me-") | Relaxar ✓ (após ditongo "la" → mas é exceção — vem do latim) | Mecha ✓ (origem francesa) | Fecha ✓ (do latim "ferire")\n\nDica: na dúvida, pense na origem ou memorize os contextos do X.',
      },
      {
        type: 'warning',
        label: 'X com outros sons',
        content:
          'O X não tem apenas o som de CH. Pode ter:\n• Som de S: próximo, máximo, trouxe, auxílio\n• Som de Z: exame, exato, exibir, êxito\n• Som de KS: táxi, sexo, texto, fixo\n• Som de CH: xícara, peixe, caixa\n\nEm provas, questões podem perguntar sobre o som do X em determinada palavra.',
      },
    ],
  },
  {
    id: 'm3-l2',
    title: 'Uso de S, SS, Ç, Z e X',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'A representação do som /s/ e /z/ no português é um campo minado ortográfico. Conheça as regras para cada letra e os contextos que determinam o uso correto.',
      },
      {
        type: 'subtitle',
        content: 'SS — entre vogais, som de /s/ forte',
      },
      {
        type: 'text',
        content:
          'O SS só aparece entre vogais e sempre tem som de /s/ (nunca de /z/). Não pode iniciar palavras.',
      },
      {
        type: 'example',
        label: 'Exemplos com SS',
        content:
          'passar, assunto, possível, ressalva, prosseguir, rússia, osso, grosso\n\nDerivações: pro + gresso → progresso | a + sento → assento | e + sencial → essencial',
      },
      {
        type: 'subtitle',
        content: 'S entre vogais — som de /z/',
      },
      {
        type: 'text',
        content:
          'Quando o S aparece sozinho entre vogais, o som é de /z/. Isso explica por que "casa" soa diferente de "cassa".',
      },
      {
        type: 'example',
        label: 'S com som de Z',
        content:
          'casa, fase, base, causa, poesia, riso, camisa, besouro, presente\n\n→ Perceba: "casa" (som /z/) vs. "cassa" (som /s/)',
      },
      {
        type: 'subtitle',
        content: 'Ç — cedilha',
      },
      {
        type: 'text',
        content:
          'O Ç (cedilha) representa o som /s/ diante de A, O, U. Nunca antes de E ou I (nesses casos, use apenas C).',
      },
      {
        type: 'table',
        content: 'Cedilha',
        headers: ['Contexto', 'Correto', 'Errado'],
        rows: [
          ['Antes de A', 'caça, praça, maçaneta', 'caca, praca'],
          ['Antes de O', 'coração, açougue, toço', 'coracao'],
          ['Antes de U', 'açúcar, façanha, alçar', 'acucar'],
          ['Antes de E/I', 'cedo, cinema (usa C)', 'çedo ✗, çinema ✗'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Sufixos importantes',
      },
      {
        type: 'table',
        content: 'Sufixos com S ou Z',
        headers: ['Sufixo', 'Usa S ou Z?', 'Exemplos'],
        rows: [
          ['-oso / -osa', 'S', 'gostoso, carinhosa, perigoso'],
          ['-esa / -eza', 'S para cargo; Z para abstrato', 'francesa / beleza, frieza, pobreza'],
          ['-izar', 'Z', 'realizar, civilizar, organizar'],
          ['-isar', 'S (quando derivado de base com S)', 'avisar (aviso), analisar (análise)'],
          ['-ção / -são', 'Depende da base', 'direção / divisão, tensão'],
        ],
      },
      {
        type: 'tip',
        label: 'Regra da derivação',
        content:
          'Se a palavra primitiva tem S, a derivada também terá S: analisar (← análise). Se tem Z, a derivada também: realizar (← real). Se tem T ou D, geralmente → ção/são: eleger → eleição, dividir → divisão.',
      },
      {
        type: 'warning',
        label: 'Pares que confundem',
        content:
          'cozer (cozinhar) ✓ vs. coser (costurar) ✓\ncassar (anular) vs. caçar (caçada)\nconsertar (reparar) vs. concertar (harmonizar)\nchassê (passo de dança) vs. chassi (estrutura de carro)',
      },
    ],
  },
  {
    id: 'm3-l3',
    title: 'Uso de G e J',
    duration: '10 min',
    sections: [
      {
        type: 'text',
        content:
          'G e J concorrem pelo som /ʒ/ (como em "gelo" e "hoje"). As regras ajudam a definir quando cada um deve ser usado.',
      },
      {
        type: 'subtitle',
        content: 'Quando usar G',
      },
      {
        type: 'table',
        content: 'Regras do G',
        headers: ['Contexto', 'Exemplos'],
        rows: [
          ['Sufixo -agem', 'viagem, garagem, linguagem, coragem, homenagem'],
          ['Sufixo -igem', 'origem, vertigem, virgem'],
          ['Sufixo -ugem', 'ferrugem, penugem, lanugem'],
          ['Sufixo -ágio / -égio / -ógio', 'estágio, colégio, relógio, elogio'],
          ['Palavras com G antes de E/I', 'gel, gelo, gênio, girar, agir, fingir'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Quando usar J',
      },
      {
        type: 'table',
        content: 'Regras do J',
        headers: ['Contexto', 'Exemplos'],
        rows: [
          ['Palavras de origem tupi/africana', 'jiboia, canjica, manjerona, jiló'],
          ['Formas verbais de trazer/jazer', 'trouxe → não, mas: jazo, jaz, jazem'],
          ['Após as sílabas "ri-", "al-", etc.', 'hoje, laje, suje, granja, ajeitar'],
          ['Verbos terminados em -jar', 'viajar → viajei, manjei, arranjar'],
        ],
      },
      {
        type: 'example',
        label: 'Verbos em -jar vs. -gear',
        content:
          'Verbos terminados em -JAR mantêm o J em todas as formas:\nviajar → viajo, viajei, viajando ✓\n\nVerbos terminados em -GEAR mantêm o G:\npagear → pageia, pageei ✗ → na prática: "folhear" → folheio ✓',
      },
      {
        type: 'tip',
        label: 'Palavras que enganam',
        content:
          'Hoje ✓ (J, não G) | Laje ✓ (J) | Viagem ✓ (G, sufixo -agem) | Viajem ✗ (forma verbal: que eles viajem ✓) | Garagem ✓ (G) | Herege ✓ (G) | Jeito ✓ (J)',
      },
    ],
  },
  {
    id: 'm3-l4',
    title: 'Hífen: Regras Completas',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'O hífen é um dos temas mais cobrados em concursos, especialmente após o Novo Acordo Ortográfico (2009). As regras são muitas, mas organizadas por categoria ficam acessíveis.',
      },
      {
        type: 'subtitle',
        content: 'Regra Geral: vogal final = vogal inicial',
      },
      {
        type: 'text',
        content:
          'Se o prefixo termina em vogal e o segundo elemento começa com a MESMA vogal → usa hífen.\nSe o prefixo termina em vogal e o segundo elemento começa com vogal DIFERENTE → não usa hífen (aglutina).',
      },
      {
        type: 'example',
        label: 'Exemplos',
        content:
          'anti + inflamatório → anti-inflamatório ✓ (i + i = mesma vogal → hífen)\nauto + escola → autoescola ✓ (o + e = vogais diferentes → sem hífen)\nanti + aéreo → antiaéreo ✓ (i + a = diferentes → sem hífen)\ncontra + ataque → contraataque ✓ (a + a = mesma → hífen)',
      },
      {
        type: 'subtitle',
        content: 'Prefixo termina em consoante',
      },
      {
        type: 'text',
        content:
          'Se o prefixo termina em consoante e o segundo elemento começa com a MESMA consoante → usa hífen.\nSe começa com consoante diferente ou vogal → sem hífen (aglutina).',
      },
      {
        type: 'example',
        label: 'Prefixo em consoante',
        content:
          'sub + biblioteca → sub-biblioteca ✓ (b + b = mesmo → hífen)\nab + normal → abnormal ✓ (b + n = diferentes → sem hífen)\nsub + reitor → sub-reitor ✓ (b + r = r especial → com hífen pois r dobra o som)\nsub + solo → subsolo ✓ (b + s: sem hífen mas o S não duplica pois não está entre vogais)',
      },
      {
        type: 'subtitle',
        content: 'Prefixos que SEMPRE usam hífen',
      },
      {
        type: 'table',
        content: 'Prefixos com hífen sempre',
        headers: ['Prefixo', 'Exemplos'],
        rows: [
          ['ex- (anterior)', 'ex-presidente, ex-namorado, ex-aluno'],
          ['vice-', 'vice-presidente, vice-diretor'],
          ['pré-, pró-, pós- (tônicos)', 'pré-natal, pró-ativo, pós-graduação'],
          ['grão- / grã-', 'grão-mestre, grã-duquesa'],
          ['recém-', 'recém-nascido, recém-chegado'],
          ['sem-', 'sem-teto, sem-vergonha'],
          ['além-, aquém-, bem-, mal-', 'além-mar, aquém-fronteira, bem-vindo, mal-educado'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Prefixos que NUNCA usam hífen',
      },
      {
        type: 'text',
        content:
          'Des-, in-, re-, dis- nunca usam hífen: desaprender, impossível, reeditar, discordar. (A menos que haja encontro de mesma vogal: re + eleição = reeleição — sem hífen.)',
      },
      {
        type: 'warning',
        label: 'Cuidado com mal- e bem-',
        content:
          'mal- usa hífen quando o segundo elemento começa com vogal, L ou H:\nmal-educado ✓ | mal-humorado ✓ | malfeito ✓ (sem hífen, pois começa com F)\n\nbem- usa hífen quando o segundo elemento começa com vogal ou H:\nbem-humorado ✓ | bem-estar ✓ | benfeitor ✓ (sem hífen)',
      },
    ],
  },
  {
    id: 'm3-l5',
    title: 'Homófonas, Parônimas e Novo Acordo',
    duration: '12 min',
    sections: [
      {
        type: 'text',
        content:
          'Palavras que se parecem na escrita ou no som são armadilhas clássicas de concurso. Conheça os principais pares e as mudanças trazidas pelo Novo Acordo Ortográfico.',
      },
      {
        type: 'subtitle',
        content: 'Palavras Homófonas',
      },
      {
        type: 'text',
        content:
          'HOMÓFONAS têm o mesmo som, mas grafia e significado diferentes.',
      },
      {
        type: 'table',
        content: 'Principais homófonas',
        headers: ['Par', 'Significados'],
        rows: [
          ['mal / mau', 'mal = advérbio/substantivo | mau = adjetivo (oposto de bom)'],
          ['mais / mas', 'mais = adição/comparação | mas = adversativo (porém)'],
          ['a / há / à', 'a = artigo/preposição | há = verbo haver | à = crase'],
          ['cozer / coser', 'cozer = cozinhar | coser = costurar'],
          ['conserto / concerto', 'conserto = reparo | concerto = apresentação musical'],
          ['comprimento / cumprimento', 'comprimento = medida | cumprimento = saudação'],
          ['descrição / discrição', 'descrição = ato de descrever | discrição = prudência'],
          ['iminente / eminente', 'iminente = que está prestes a ocorrer | eminente = notável, elevado'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Palavras Parônimas',
      },
      {
        type: 'text',
        content:
          'PARÔNIMAS têm grafia e som PARECIDOS, mas significados diferentes. São mais traiçoeiras que as homófonas porque a semelhança é parcial.',
      },
      {
        type: 'table',
        content: 'Principais parônimas',
        headers: ['Par', 'Significados'],
        rows: [
          ['flagrante / fragrante', 'flagrante = evidente, em flagra | fragrante = perfumado'],
          ['ratificar / retificar', 'ratificar = confirmar | retificar = corrigir'],
          ['tráfego / tráfico', 'tráfego = circulação de veículos | tráfico = comércio ilegal'],
          ['aprender / apreender', 'aprender = aprender algo | apreender = confiscar'],
          ['emigrar / imigrar', 'emigrar = sair do país | imigrar = entrar no país'],
          ['deferir / diferir', 'deferir = conceder/aprovar | diferir = ser diferente/adiar'],
          ['infligir / infringir', 'infligir = aplicar pena | infringir = transgredir'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Principais Mudanças do Novo Acordo Ortográfico (2009)',
      },
      {
        type: 'table',
        content: 'Novo Acordo',
        headers: ['Mudança', 'Antes', 'Depois'],
        rows: [
          ['Trema eliminado', 'agüentar, lingüiça', 'aguentar, linguiça'],
          ['Acento no hiato ei/oi', 'assembléia, idéia, heróico', 'assembleia, ideia, heroico'],
          ['Acento diferencial some', 'pára (verbo) / para', 'para (ambos sem acento)'],
          ['Hífen com prefixo', 'anti-social, co-autor', 'antissocial, coautor'],
          ['Acento no i/u tônico após ditongo', 'feiúra, baiúca', 'feiura, baiuca'],
        ],
      },
      {
        type: 'tip',
        label: 'Acentos que PERMANECEM',
        content:
          'Ainda se acentua: pôde (passado) vs. pode (presente) | pôr (verbo) vs. por (preposição) | péla, pélo (formas de pelar) vs. pela, pelo (preposição + artigo) — exceto os diferenciadores que o acordo eliminou.',
      },
      {
        type: 'warning',
        label: 'Atenção em provas',
        content:
          'Muitas questões ainda trazem a forma antiga como alternativa tentadora. Ex.: "idéia" com acento é ERRO desde 2009. Memorize: assembleia, ideia, época (nunca épóca), heroico, jiboia (sem trema).',
      },
    ],
  },
];
