import { Lesson } from '../types';

export const modulo2Lessons: Lesson[] = [
  {
    id: 'm2-l1',
    title: 'Tipos Textuais',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'TIPO TEXTUAL é a forma como o discurso se organiza internamente — sua estrutura lógica e linguística. São apenas cinco tipos básicos, e todo texto (de qualquer gênero) é construído a partir deles, podendo combinar mais de um.',
      },
      {
        type: 'subtitle',
        content: '1. Narração',
      },
      {
        type: 'text',
        content:
          'Conta eventos que se sucedem no tempo. Envolve personagens, tempo, espaço, conflito e desfecho. Usa verbos de ação no pretérito. O narrador pode ser de 1ª ou 3ª pessoa.',
      },
      {
        type: 'example',
        label: 'Características da narração',
        content:
          'Elementos: Quem? (personagens) + O quê? (enredo) + Quando? (tempo) + Onde? (espaço) + Como/Por quê? (conflito e desfecho)\n\nMarcadores típicos: "Era uma vez...", "De repente...", "No dia seguinte...", "Então..."\n\nVerbo dominante: pretérito perfeito e imperfeito ("foi", "estava", "chegou")',
      },
      {
        type: 'subtitle',
        content: '2. Descrição',
      },
      {
        type: 'text',
        content:
          'Apresenta características de pessoas, objetos, lugares ou situações. Não há progressão temporal — a cena é estática. Usa adjetivos, verbos de estado (ser, estar, parecer) e linguagem sensorial.',
      },
      {
        type: 'example',
        label: 'Marcas da descrição',
        content:
          '"A praça era pequena e silenciosa. As árvores centenárias projetavam sombras frescas sobre os bancos de ferro enferrujado. O cheiro de jasmim impregnava o ar da tarde."\n\n→ Ausência de ação; acúmulo de imagens sensoriais (visão, olfato); adjetivos abundantes.',
      },
      {
        type: 'subtitle',
        content: '3. Dissertação / Argumentação',
      },
      {
        type: 'text',
        content:
          'Expõe e defende um ponto de vista sobre um tema. Estrutura básica: introdução (tese) + desenvolvimento (argumentos) + conclusão (síntese ou proposta). É o tipo mais cobrado em concursos.',
      },
      {
        type: 'example',
        label: 'Estrutura dissertativa',
        content:
          'Introdução: apresenta o tema e enuncia a tese\n→ "A educação financeira deve ser obrigatória nas escolas públicas."\n\nDesenvolvimento: argumentos que sustentam a tese\n→ dados, exemplos, causas, consequências\n\nConclusão: reafirma a tese + proposta ou síntese\n→ "Portanto, incluir a educação financeira no currículo é investir no futuro do país."',
      },
      {
        type: 'subtitle',
        content: '4. Exposição',
      },
      {
        type: 'text',
        content:
          'Explica ou informa sobre um tema de forma objetiva e neutra, sem defender uma posição. Presente em textos científicos, enciclopédias, manuais e aulas. Usa linguagem impessoal e vocabulário técnico.',
      },
      {
        type: 'subtitle',
        content: '5. Injunção',
      },
      {
        type: 'text',
        content:
          'Instrui, ordena ou orienta o leitor a realizar ações. Usa verbos no imperativo ou infinitivo. Presente em receitas, manuais, bulas, regulamentos e leis.',
      },
      {
        type: 'example',
        label: 'Injunção',
        content:
          '"Misture os ingredientes até obter uma massa homogênea. Leve ao forno preaquecido a 180°C por 40 minutos."\n\n→ Verbos no imperativo/infinitivo; sequência lógica de ações; ausência de subjetividade.',
      },
      {
        type: 'table',
        content: 'Resumo dos tipos textuais',
        headers: ['Tipo', 'Objetivo', 'Verbos', 'Gêneros típicos'],
        rows: [
          ['Narração', 'Contar eventos', 'Pretérito (ação)', 'Conto, romance, crônica'],
          ['Descrição', 'Caracterizar', 'Ser/estar (estado)', 'Retrato, relato, guia'],
          ['Dissertação', 'Argumentar/defender', 'Presente (tese)', 'Artigo, editorial, redação'],
          ['Exposição', 'Explicar/informar', 'Presente (impessoal)', 'Artigo científico, enciclopédia'],
          ['Injunção', 'Instruir/ordenar', 'Imperativo/infinitivo', 'Receita, manual, lei'],
        ],
      },
      {
        type: 'warning',
        label: 'Texto heterogêneo',
        content:
          'A maioria dos textos reais MISTURA tipos. Uma crônica pode narrar e descrever ao mesmo tempo. Um artigo de opinião pode expor e argumentar. A banca pergunta qual é o tipo PREDOMINANTE.',
      },
    ],
  },
  {
    id: 'm2-l2',
    title: 'Gêneros Textuais — Conceito e Função',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'GÊNERO TEXTUAL é uma prática social de linguagem — um modelo reconhecível de texto que cumpre uma função comunicativa específica em uma determinada esfera da atividade humana.',
      },
      {
        type: 'subtitle',
        content: 'Tipo vs. Gênero: a diferença fundamental',
      },
      {
        type: 'table',
        content: 'Tipo vs. Gênero',
        headers: ['Critério', 'Tipo Textual', 'Gênero Textual'],
        rows: [
          ['Quantidade', 'Apenas 5 tipos', 'Centenas de gêneros'],
          ['O que define', 'Estrutura interna', 'Função social + contexto'],
          ['Exemplo', 'Narração', 'Conto, romance, notícia, fofoca...'],
          ['Estabilidade', 'Fixo e formal', 'Dinâmico, evolui com a sociedade'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Elementos que definem um gênero',
      },
      {
        type: 'text',
        content:
          'Todo gênero é definido por três elementos:\n\n1. FUNÇÃO SOCIAL — para que serve? (informar, entreter, instruir, vender...)\n2. SUPORTE — onde circula? (jornal, celular, cartaz, tribunal...)\n3. INTERLOCUTORES — quem escreve e para quem? (jornalista → leitor geral; advogado → juiz...)',
      },
      {
        type: 'example',
        label: 'Análise de gênero: E-mail profissional',
        content:
          'Função social: comunicar informações no ambiente de trabalho\nSuportes: cliente de e-mail, webmail\nInterlocutores: funcionário → colega/cliente/chefe\nCaracterísticas: saudação formal, linguagem semiformal, assinatura\nTipo predominante: exposição ou injunção',
      },
      {
        type: 'subtitle',
        content: 'Gêneros novos e emergentes',
      },
      {
        type: 'text',
        content:
          'Com a internet, surgiram novos gêneros: tweet, post de rede social, meme, podcast, story, comentário de vídeo. Eles têm estrutura própria e adaptam linguagem ao suporte digital.',
      },
      {
        type: 'tip',
        label: 'O que a banca cobra',
        content:
          'A banca frequentemente apresenta um texto e pergunta: "Que gênero textual é esse?" ou "Qual é a função social desse gênero?" Analise: onde o texto circularia? Para quem é destinado? Qual é seu objetivo?',
      },
    ],
  },
  {
    id: 'm2-l3',
    title: 'Gêneros Formais e Oficiais',
    duration: '12 min',
    sections: [
      {
        type: 'text',
        content:
          'Os gêneros formais e oficiais circulam nas esferas jurídica, administrativa, empresarial e acadêmica. Exigem registro formal, estrutura definida e linguagem padronizada.',
      },
      {
        type: 'subtitle',
        content: 'Ofício',
      },
      {
        type: 'text',
        content:
          'Comunicação escrita entre órgãos públicos ou entre órgão público e particular. Estrutura obrigatória: local e data, número do ofício, vocativo, corpo do texto, fecho (respeitosamente/atenciosamente) e assinatura.',
      },
      {
        type: 'example',
        label: 'Estrutura do ofício',
        content:
          'Ofício nº 42/2024 – DAAF\nBrasília, 9 de junho de 2024.\n\nAo Sr. Diretor do Departamento X,\n\nAssunto: Solicitação de documentos.\n\nSenhor Diretor,\nTemos a honra de solicitar o encaminhamento...\n\nAtenciosamente,\nNome e Cargo',
      },
      {
        type: 'subtitle',
        content: 'Ata',
      },
      {
        type: 'text',
        content:
          'Registro fiel e resumido dos acontecimentos de uma reunião. Deve conter: data, local, participantes, assuntos tratados, decisões tomadas e assinaturas. Usa linguagem impessoal e verbos no pretérito.',
      },
      {
        type: 'subtitle',
        content: 'Requerimento',
      },
      {
        type: 'text',
        content:
          'Pedido formal dirigido a uma autoridade. Estrutura: vocativo (Ilmo. Sr. Diretor...), identificação do requerente, pedido fundamentado, data e assinatura. Linguagem respeitosa e objetiva.',
      },
      {
        type: 'subtitle',
        content: 'Relatório Técnico',
      },
      {
        type: 'text',
        content:
          'Documento que expõe resultados de atividades, pesquisas ou inspeções. Estrutura típica: introdução, metodologia, desenvolvimento/resultados, conclusão e recomendações.',
      },
      {
        type: 'table',
        content: 'Gêneros formais comparados',
        headers: ['Gênero', 'Função', 'Linguagem', 'Fecho típico'],
        rows: [
          ['Ofício', 'Comunicação entre órgãos', 'Formal/impessoal', 'Atenciosamente'],
          ['Ata', 'Registro de reunião', 'Formal/pretérito', 'Assinaturas'],
          ['Requerimento', 'Pedido a autoridade', 'Formal/respeitosa', 'Nestes termos, pede deferimento'],
          ['Relatório', 'Expor resultados', 'Técnica/impessoal', 'Conclusão + recomendações'],
        ],
      },
      {
        type: 'warning',
        label: 'Atenção ao fecho',
        content:
          '"Respeitosamente" é usado para autoridades superiores ao remetente. "Atenciosamente" é usado para autoridades de mesmo nível ou inferiores. Essa distinção já foi cobrada em provas.',
      },
    ],
  },
  {
    id: 'm2-l4',
    title: 'Gêneros Jornalísticos',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'Os gêneros jornalísticos circulam em jornais, revistas e portais de notícia. Variam entre relato objetivo dos fatos e opinião fundamentada.',
      },
      {
        type: 'subtitle',
        content: 'Notícia',
      },
      {
        type: 'text',
        content:
          'Relata um fato recente de forma objetiva. Segue a "pirâmide invertida": as informações mais importantes vêm primeiro (lide: Quem? O quê? Quando? Onde? Como? Por quê?). Linguagem direta, sem opinião.',
      },
      {
        type: 'example',
        label: 'Lide de notícia',
        content:
          '"O Senado Federal aprovou, na noite de segunda-feira, o projeto de lei que regulamenta o trabalho remoto no Brasil, com 52 votos a favor e 18 contrários."\n\n→ Quem: Senado / O quê: aprovação do projeto / Quando: segunda-feira / Onde: Senado / Como: 52 x 18 votos',
      },
      {
        type: 'subtitle',
        content: 'Reportagem',
      },
      {
        type: 'text',
        content:
          'Aprofunda um tema além do fato imediato. Inclui contexto, causas, consequências, entrevistas e análise. É mais longa que a notícia e pode trazer a perspectiva do repórter (sem ser opinião aberta).',
      },
      {
        type: 'subtitle',
        content: 'Editorial',
      },
      {
        type: 'text',
        content:
          'Texto de opinião que expressa a posição institucional do veículo de comunicação (não assina com nome individual). Argumentativo, usa a 1ª pessoa do plural ou impessoal.',
      },
      {
        type: 'subtitle',
        content: 'Artigo de Opinião',
      },
      {
        type: 'text',
        content:
          'Texto assinado por um colunista ou especialista que defende uma tese sobre tema de relevância. Diferente do editorial: é individual, pode ser mais subjetivo e usa argumentos pessoais.',
      },
      {
        type: 'subtitle',
        content: 'Crônica',
      },
      {
        type: 'text',
        content:
          'Texto literário publicado em jornal. Parte de um fato cotidiano e o transforma em reflexão poética, humorística ou filosófica. Linguagem acessível, tom pessoal, curta extensão.',
      },
      {
        type: 'table',
        content: 'Gêneros jornalísticos',
        headers: ['Gênero', 'Objetivo', 'Opinião?', 'Assinatura'],
        rows: [
          ['Notícia', 'Relatar fato', 'Não', 'Opcional'],
          ['Reportagem', 'Aprofundar tema', 'Implícita', 'Sim'],
          ['Editorial', 'Opinar (jornal)', 'Sim', 'Não (institucional)'],
          ['Artigo', 'Opinar (autor)', 'Sim', 'Sim'],
          ['Crônica', 'Reflexão literária', 'Subjetiva', 'Sim'],
        ],
      },
    ],
  },
  {
    id: 'm2-l5',
    title: 'Gêneros Literários e do Cotidiano',
    duration: '10 min',
    sections: [
      {
        type: 'text',
        content:
          'Além dos gêneros formais e jornalísticos, o candidato precisa reconhecer gêneros literários e os gêneros do cotidiano — especialmente os digitais, cada vez mais presentes em provas.',
      },
      {
        type: 'subtitle',
        content: 'Conto',
      },
      {
        type: 'text',
        content:
          'Narrativa curta de ficção com poucos personagens, unidade de ação e desfecho marcado. Foco na concentração: tudo é relevante, nada é supérfluo. Muito usado em textos de prova pela extensão manejável.',
      },
      {
        type: 'subtitle',
        content: 'Crônica Literária',
      },
      {
        type: 'text',
        content:
          'Difere da crônica jornalística por ter maior elaboração literária. Parte do cotidiano para alcançar reflexões universais. Tom leve, linguagem acessível, mistura narração e dissertação.',
      },
      {
        type: 'subtitle',
        content: 'Poema',
      },
      {
        type: 'text',
        content:
          'Texto com linguagem intensamente conotativa, que explora ritmo, sonoridade e imagens. Não precisa ter rima (verso livre). Em provas, questões de poema geralmente envolvem figuras de linguagem e sentido de expressões.',
      },
      {
        type: 'subtitle',
        content: 'Gêneros do Cotidiano',
      },
      {
        type: 'table',
        content: 'Gêneros cotidianos',
        headers: ['Gênero', 'Função', 'Características'],
        rows: [
          ['Receita', 'Instruir como preparar', 'Ingredientes + modo de preparo (injunção)'],
          ['Bula', 'Informar sobre medicamento', 'Técnica, impessoal, estruturada'],
          ['Anúncio', 'Persuadir a comprar/usar', 'Imperativo, imagens, slogan'],
          ['E-mail', 'Comunicar no trabalho', 'Assunto, saudação, corpo, assinatura'],
          ['Post/Tweet', 'Compartilhar informação', 'Curto, informal, hashtags'],
          ['Meme', 'Humor/crítica social', 'Imagem + texto, referências culturais'],
        ],
      },
      {
        type: 'tip',
        label: 'Gêneros digitais em provas',
        content:
          'Os gêneros digitais (post, meme, e-mail, chat) têm aparecido cada vez mais em provas de concurso. Identifique: linguagem informal, abreviações, emojis, referências à internet — esses são marcadores do gênero digital.',
      },
      {
        type: 'warning',
        label: 'Gênero ≠ Tipo',
        content:
          'Uma receita é um gênero (prática social de cozinha) do tipo injunção (estrutura de instrução). Uma crônica é um gênero (coluna de jornal/literatura) que mistura os tipos narração e dissertação. Nunca confunda os dois níveis.',
      },
    ],
  },
];
