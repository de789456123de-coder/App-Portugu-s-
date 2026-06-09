import { Lesson } from '../types';

export const modulo5bLessons: Lesson[] = [
  {
    id: 'm5b-l1',
    title: 'Sinais de Pontuação (5.4)',
    duration: '16 min',
    sections: [
      {
        type: 'text',
        content:
          'Os sinais de pontuação organizam o texto escrito, indicam pausas, entonação, separação de ideias e relações sintáticas. Um erro de pontuação pode mudar completamente o sentido de uma frase — e a banca explora isso.',
      },
      {
        type: 'subtitle',
        content: 'Vírgula — Quando USAR',
      },
      {
        type: 'table',
        content: 'Usos obrigatórios da vírgula',
        headers: ['Contexto', 'Exemplo'],
        rows: [
          ['Aposto explicativo', '"São Paulo, a maior cidade do país, sedia o evento."'],
          ['Vocativo', '"João, venha aqui." / "Venha aqui, João."'],
          ['Adjunto adverbial deslocado', '"Ontem à tarde, o presidente assinou o decreto."'],
          ['Oração adjetiva explicativa', '"Os alunos, que estudaram bastante, foram aprovados."'],
          ['Oração adverbial antecipada', '"Embora chovesse, o jogo foi realizado."'],
          ['Enumeração de termos', '"Comprou leite, pão, ovos e manteiga."'],
          ['Orações coordenadas (geral)', '"Estudou muito, mas não passou."'],
          ['Elipse do verbo', '"Eu prefiro café; ela, chá."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Vírgula — Quando NÃO USAR',
      },
      {
        type: 'table',
        content: 'Proibições da vírgula',
        headers: ['Contexto proibido', 'Errado', 'Correto'],
        rows: [
          ['Entre sujeito e verbo', '"O candidato, foi aprovado."', '"O candidato foi aprovado."'],
          ['Entre verbo e obj. direto', '"Comprou, o livro ontem."', '"Comprou o livro ontem."'],
          ['Entre verbo e obj. indireto', '"Gostou, do presente."', '"Gostou do presente."'],
          ['Antes de "que" obj. direto', '"Disse, que viria."', '"Disse que viria."'],
          ['Antes de "e" (mesmos sujeitos)', '"Pedro, e Maria saíram."', '"Pedro e Maria saíram."'],
        ],
      },
      {
        type: 'warning',
        label: 'Armadilha clássica',
        content:
          'Sujeito longo ≠ vírgula obrigatória:\n"O candidato que estudou muito durante meses foi aprovado." ✓ (sem vírgula — sujeito + verbo, sem aposto nem oração explicativa)\n\nA vírgula entre sujeito e verbo é SEMPRE errada, independentemente do tamanho do sujeito.',
      },
      {
        type: 'subtitle',
        content: 'Ponto e Vírgula',
      },
      {
        type: 'text',
        content:
          'Indica pausa maior que a vírgula e menor que o ponto. Usos principais:\n• Separar orações coordenadas longas ou que já contêm vírgulas internas\n• Separar itens de uma enumeração em lista\n• Antes de conjunções adversativas em períodos longos: "Estudou muito; todavia, os resultados foram frustrantes."',
      },
      {
        type: 'subtitle',
        content: 'Dois-Pontos',
      },
      {
        type: 'text',
        content:
          'Introduz: citação direta, enumeração, explicação ou conclusão do que foi dito antes.',
      },
      {
        type: 'example',
        label: 'Usos dos dois-pontos',
        content:
          'Citação: O autor afirmou: "A leitura transforma.".\nEnumeração: Os documentos necessários são: RG, CPF e comprovante de residência.\nExplicação: Não compareceu: estava doente.\nConclusão: Estudou, praticou, revisou: passou.',
      },
      {
        type: 'subtitle',
        content: 'Travessão e Parênteses',
      },
      {
        type: 'table',
        content: 'Travessão vs. Parênteses',
        headers: ['Sinal', 'Uso', 'Efeito'],
        rows: [
          ['Travessão (—)', 'Explicação com mais destaque que parênteses', 'Destaca a informação inserida'],
          ['Travessão (—)', 'Marcação de fala no diálogo literário', 'Substitui as aspas'],
          ['Parênteses ( )', 'Explicação, dado secundário ou discreto', 'Minimiza a informação inserida'],
          ['Reticências (...)', 'Pausa expressiva, suspense, pensamento incompleto', 'Gera expectativa, hesitação'],
        ],
      },
      {
        type: 'tip',
        label: 'Aspas em concursos',
        content:
          'As aspas marcam: citação direta, ironia, destaque de palavra (neologismo, estrangeirismo, gíria). Em questões de interpretação, quando uma palavra está entre aspas, suspeite de sentido irônico ou metafórico.',
      },
    ],
  },
  {
    id: 'm5b-l2',
    title: 'Concordância Verbal I — Regras Gerais (5.5)',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'A CONCORDÂNCIA VERBAL é o ajuste do verbo ao seu sujeito em número (singular/plural) e pessoa (1ª, 2ª, 3ª). É um dos temas mais cobrados em concursos — especialmente os casos especiais.',
      },
      {
        type: 'subtitle',
        content: 'Regra Geral',
      },
      {
        type: 'text',
        content:
          'O verbo concorda com o sujeito em número e pessoa. Sujeito singular → verbo singular. Sujeito plural → verbo plural.',
      },
      {
        type: 'subtitle',
        content: 'Sujeito Composto',
      },
      {
        type: 'table',
        content: 'Sujeito composto — regras',
        headers: ['Situação', 'Concordância', 'Exemplo'],
        rows: [
          ['Antes do verbo', 'Plural', '"Pedro e Maria chegaram."'],
          ['Depois do verbo', 'Plural ou com o mais próximo', '"Chegaram Pedro e Maria." / "Chegou Pedro e Maria."'],
          ['Núcleos sinônimos', 'Singular ou plural', '"A alegria e a felicidade tomou/tomaram conta dele."'],
          ['Núcleos em gradação', 'Com o último', '"Um dia, uma semana, um mês passou."'],
          ['Com "nem... nem..."', 'Plural', '"Nem Pedro nem Maria compareceram."'],
          ['Com "ou... ou..."', 'Plural (se excludente: singular)', '"Ou Pedro ou Maria virá." (um deles)'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Sujeito Coletivo',
      },
      {
        type: 'text',
        content:
          'Sujeito coletivo (sem especificador) → verbo no singular. Com especificador → singular ou plural.',
      },
      {
        type: 'example',
        label: 'Sujeito coletivo',
        content:
          '"A multidão gritou." ✓ (coletivo sozinho → singular)\n"A multidão de torcedores gritou/gritaram." ✓ (com especificador → ambos aceitos)\n"A maioria dos alunos passou/passaram." ✓ (com especificador → ambos aceitos)\n"Grande parte dos votos foi/foram anulada(os)." ✓',
      },
      {
        type: 'subtitle',
        content: 'Sujeito com "quem" e Sujeito Oracional',
      },
      {
        type: 'table',
        content: 'Casos especiais',
        headers: ['Construção', 'Regra', 'Exemplo'],
        rows: [
          ['"Fui eu quem..."', 'Verbo na 1ª ou 3ª pessoa', '"Fui eu quem fiz / quem fez."'],
          ['"Fomos nós quem..."', 'Plural ou 3ª sing.', '"Fomos nós quem fizemos / quem fez."'],
          ['Sujeito oracional', 'Verbo no singular', '"É preciso que todos estudem." (É = sing.)'],
          ['"Que" relativo', 'Concorda com antecedente', '"Fui eu que fiz." / "Foram eles que fizeram."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Verbos Impessoais',
      },
      {
        type: 'table',
        content: 'Verbos impessoais — sempre no singular',
        headers: ['Verbo', 'Uso impessoal', 'Exemplo'],
        rows: [
          ['Haver (= existir)', 'Sempre singular', '"Há muitos candidatos." ✓ / "Haviam..." ✗'],
          ['Haver (= fazer tempo)', 'Sempre singular', '"Há dois anos que não o vejo."'],
          ['Fazer (= tempo/clima)', 'Sempre singular', '"Faz calor." / "Fazia três dias..."'],
          ['Ser (horas/datas)', 'Concorda com a hora', '"É uma hora." / "São três horas."'],
        ],
      },
      {
        type: 'warning',
        label: 'O erro mais cobrado',
        content:
          '"Haviam muitas pessoas na festa." ✗\n→ Correto: "Havia muitas pessoas na festa." ✓\n\n"Haver" no sentido de "existir" é IMPESSOAL — sempre singular. Nunca se faz o verbo concordar com "muitas pessoas".',
      },
    ],
  },
  {
    id: 'm5b-l3',
    title: 'Concordância Verbal II — Casos Especiais',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'Além das regras gerais, existem casos especiais que aparecem frequentemente em provas de concurso. Memorize-os com atenção.',
      },
      {
        type: 'subtitle',
        content: 'Sujeito Posposto (após o verbo)',
      },
      {
        type: 'text',
        content:
          'Quando o sujeito vem DEPOIS do verbo, a concordância pode ser com o sujeito (obrigatória) ou com o núcleo mais próximo (facultativa, na linguagem literária).',
      },
      {
        type: 'example',
        label: 'Sujeito posposto',
        content:
          '"Saíram os alunos." ✓ (concorda com sujeito: alunos = plural)\n"Saiu os alunos." ✓ (facultativo — concordância com o mais próximo, aceito em literatura)\n\n"Chegaram carta e telefonema." ✓ ou "Chegou carta e telefonema." ✓\n→ Com sujeito composto posposto: ambas as formas são aceitas.',
      },
      {
        type: 'subtitle',
        content: 'Verbos "Ser" e "Parecer" com Predicativo',
      },
      {
        type: 'table',
        content: 'Concordância do verbo "ser"',
        headers: ['Construção', 'Regra', 'Exemplo'],
        rows: [
          ['Sujeito = pronome pessoal', 'Concorda com o pronome', '"Tudo são flores." / "Flores é tudo." ✓'],
          ['Sujeito = nome de obra/lugar', 'Sing. quando o predicativo é sing.', '"Os Sertões é uma obra fundamental."'],
          ['Horas, datas, distâncias', 'Concorda com a expressão numérica', '"São oito horas." / "É meio-dia."'],
          ['Com numeral', 'Verbo no singular ou plural', '"Dois e dois é/são quatro."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Com "A Maioria", "A Maior Parte", "A Metade"',
      },
      {
        type: 'text',
        content:
          'Expressões partitivas (a maioria de, a maior parte de, a metade de, a maior parte de, um terço de...) admitem concordância com o COLETIVO (singular) ou com o ESPECIFICADOR (plural).',
      },
      {
        type: 'example',
        label: 'Partitivos',
        content:
          '"A maioria dos deputados votou/votaram a favor." ✓ (ambos aceitos)\n"Metade dos alunos faltou/faltaram." ✓\n"Um terço da população não tem/têm acesso à internet." ✓\n\nRegra prática: se o especificador (palavra após "de") estiver longe do verbo, prefira o singular para evitar ambiguidade.',
      },
      {
        type: 'subtitle',
        content: 'Com Pronomes Indefinidos',
      },
      {
        type: 'table',
        content: 'Pronomes indefinidos e concordância',
        headers: ['Pronome', 'Concordância', 'Exemplo'],
        rows: [
          ['Nenhum(a)', 'Singular', '"Nenhum dos candidatos passou."'],
          ['Algum(a)', 'Singular', '"Algum aluno chegou cedo."'],
          ['Cada', 'Singular', '"Cada aluno tem sua pasta."'],
          ['Todo(a)', 'Singular ou plural', '"Todo/Todos os alunos saíram."'],
          ['Qualquer', 'Singular', '"Qualquer um deles serve."'],
        ],
      },
      {
        type: 'tip',
        label: 'Dica de ouro',
        content:
          'Em caso de dúvida entre singular e plural, opte pelo singular — é sempre a forma mais segura na norma culta escrita formal. A concordância com o especificador (plural) é aceita, mas menos recomendada em textos formais.',
      },
    ],
  },
  {
    id: 'm5b-l4',
    title: 'Concordância Nominal (5.5)',
    duration: '13 min',
    sections: [
      {
        type: 'text',
        content:
          'A CONCORDÂNCIA NOMINAL é o ajuste de artigos, adjetivos, pronomes e numerais ao substantivo a que se referem, em gênero e número. Tem regras gerais e casos especiais muito cobrados.',
      },
      {
        type: 'subtitle',
        content: 'Regra Geral',
      },
      {
        type: 'text',
        content:
          'O adjetivo concorda em gênero e número com o substantivo. Com mais de um substantivo, o adjetivo pode ir ao plural ou concordar com o mais próximo.',
      },
      {
        type: 'table',
        content: 'Adjetivo com vários substantivos',
        headers: ['Posição do adjetivo', 'Regra', 'Exemplo'],
        rows: [
          ['Antes dos subst.', 'Concorda com o mais próximo', '"Bela casa e jardim." ✓'],
          ['Depois dos subst. (gêneros ≠)', 'Plural masculino', '"Casa e jardim bonitos." ✓'],
          ['Depois dos subst. (mesmo gênero)', 'Plural do gênero', '"Casa e sala bonitas." ✓'],
          ['Depois de 1 subst.', 'Concorda com ele', '"Uma mulher elegante." ✓'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Casos Especiais — Palavras Invariáveis',
      },
      {
        type: 'table',
        content: 'Palavras que não variam em certos usos',
        headers: ['Palavra', 'Regra', 'Exemplos'],
        rows: [
          ['É bom / É ruim / É necessário', 'Invariável sem artigo; varia com artigo', '"Água é bom para a saúde." ✓ / "A água é boa para a saúde." ✓'],
          ['É proibido / É permitido', 'Invariável sem artigo antes do subst.', '"É proibido entrada de animais." ✓'],
          ['Meio (advérbio)', 'Invariável quando modifica adjetivo', '"Ela estava meio cansada." ✓ (não "meia")'],
          ['Meio (adjetivo/numeral)', 'Varia', '"Comi meia maçã." ✓'],
          ['Bastante (advérbio)', 'Invariável', '"Ela é bastante inteligente." ✓'],
          ['Bastante (adjetivo = suficiente)', 'Varia', '"Há bastantes motivos para agir." ✓'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Casos Especiais — Palavras que Variam',
      },
      {
        type: 'table',
        content: 'Palavras que sempre variam',
        headers: ['Palavra', 'Regra', 'Exemplo'],
        rows: [
          ['Obrigado(a)', 'Concorda com quem fala', '"Obrigado." (homem) / "Obrigada." (mulher)'],
          ['Próprio(a)', 'Concorda com o referente', '"Ela própria assinou." ✓'],
          ['Mesmo(a)', 'Concorda com o referente', '"Os alunos mesmos resolveram." ✓'],
          ['Anexo(a)', 'Concorda com o que está junto', '"Segue anexa a documentação." ✓'],
          ['Incluso(a)', 'Concorda com o que está incluído', '"Seguem inclusos os relatórios." ✓'],
          ['Quite(s)', 'Concorda com o substantivo', '"Estamos quites." ✓'],
        ],
      },
      {
        type: 'warning',
        label: 'Erro clássico: "anexo"',
        content:
          '"Segue em anexo os documentos." ✗\n→ Correto: "Seguem anexos os documentos." ✓ ou "Segue em anexo o documento." ✓\n\n"Em anexo" é locução prepositiva invariável — se usar essa forma, o verbo concorda com o sujeito, mas "anexo" não varia.',
      },
      {
        type: 'tip',
        label: 'Meio vs. meia',
        content:
          '"Meio" advérbio (= um pouco) modifica adjetivo e é INVARIÁVEL:\n"Ela estava meio confusa." ✓ (não "meia confusa")\n"Eles estavam meio perdidos." ✓ (não "meios perdidos")\n\n"Meio" adjetivo/numeral modifica substantivo e VARIA:\n"Quero meia porção." ✓ / "Bebi meio copo." ✓',
      },
    ],
  },
  {
    id: 'm5b-l5',
    title: 'Regência Verbal (5.6)',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'REGÊNCIA é a relação de dependência entre um termo regente (verbo ou nome) e seu complemento. A regência verbal define se o verbo é transitivo direto (sem preposição), indireto (com preposição) ou intransitivo.',
      },
      {
        type: 'subtitle',
        content: 'Transitividade Verbal',
      },
      {
        type: 'table',
        content: 'Tipos de verbos quanto à transitividade',
        headers: ['Tipo', 'Estrutura', 'Exemplo'],
        rows: [
          ['Intransitivo (VInt)', 'Não pede complemento', '"O sol brilha."'],
          ['Transitivo direto (VTD)', 'Pede OD (sem preposição)', '"Comprei um livro."'],
          ['Transitivo indireto (VTI)', 'Pede OI (com preposição)', '"Gosto de música."'],
          ['Transitivo direto e indireto (VTDI)', 'Pede OD + OI', '"Dei o livro ao aluno."'],
          ['De ligação (VL)', 'Liga sujeito ao predicativo', '"Ele parece cansado."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Verbos que Mudam de Sentido com a Regência',
      },
      {
        type: 'table',
        content: 'Verbos com dupla regência',
        headers: ['Verbo', 'Regência', 'Sentido', 'Exemplo'],
        rows: [
          ['Assistir', 'VTD (assistir alguém)', 'Prestar assistência', '"O médico assistiu o paciente."'],
          ['Assistir', 'VTI (assistir a)', 'Ver, presenciar', '"Assisti ao jogo." ✓ / Assisti o jogo ✗'],
          ['Aspirar', 'VTD (aspirar algo)', 'Inalar, absorver', '"O aspirador aspirou a poeira."'],
          ['Aspirar', 'VTI (aspirar a)', 'Desejar, almejar', '"Aspiro a um cargo melhor." ✓'],
          ['Visar', 'VTD (visar algo)', 'Mirar, autenticar', '"Visou o cheque."'],
          ['Visar', 'VTI (visar a)', 'Ter como objetivo', '"O projeto visa a melhorar o ensino." ✓'],
          ['Querer', 'VTD (querer alguém)', 'Amar', '"Quero muito minha família."'],
          ['Querer', 'VTI (querer a)', 'Sentir saudade/afeto formal', '"Quero bem a todos."'],
          ['Preferir', 'VTDI (prefer. X a Y)', 'Dar preferência', '"Prefiro café a chá." ✓ (não "do que")'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Principais Verbos e Suas Regências',
      },
      {
        type: 'table',
        content: 'Verbos VTI e VTDI',
        headers: ['Verbo', 'Preposição', 'Exemplo'],
        rows: [
          ['gostar', 'de', '"Gosto de estudar."'],
          ['precisar', 'de', '"Preciso de ajuda."'],
          ['depender', 'de', '"Depende de esforço."'],
          ['obedecer', 'a', '"Obedece às regras." ✓ (não "obedece as")'],
          ['responder', 'a (processo)', '"Responde a processo."'],
          ['informar', 'a / sobre / de', '"Informou o fato ao diretor."'],
          ['implicar', 'em (resultado)', '"O erro implica em punição."'],
          ['esquecer/lembrar', 'de (pron.) / sem prep. (direto)', '"Lembro o fato." / "Lembro-me do fato."'],
        ],
      },
      {
        type: 'warning',
        label: 'Preferir... mais do que ✗',
        content:
          '"Prefiro café mais do que chá." ✗ — Pleonasmo vicioso. "Preferir" já carrega a ideia de comparação.\nCorrigo: "Prefiro café a chá." ✓\n\nDa mesma forma: "mais melhor", "mais pior", "mais menor", "mais maior" são pleonasmos.\nCorreto: "melhor", "pior", "menor", "maior" — já são superlativos.',
      },
      {
        type: 'tip',
        label: '"Onde" vs. "aonde"',
        content:
          '"Onde" = lugar em que (estado, permanência) → com verbos que não pedem "a"\n"Aonde" = lugar a que (destino, movimento) → com verbos que pedem "a" (ir, chegar, voltar...)\n\n"A cidade onde moro." ✓ | "A cidade aonde fui." ✓\n"Aonde você está?" ✗ → "Onde você está?" ✓',
      },
    ],
  },
  {
    id: 'm5b-l6',
    title: 'Regência Nominal (5.6)',
    duration: '11 min',
    sections: [
      {
        type: 'text',
        content:
          'REGÊNCIA NOMINAL é a relação entre um nome (substantivo, adjetivo ou advérbio) e seu complemento, que sempre vem introduzido por preposição. Muitos erros de crase vêm de desconhecimento da regência nominal.',
      },
      {
        type: 'subtitle',
        content: 'Principais Nomes e Suas Preposições',
      },
      {
        type: 'table',
        content: 'Regência de substantivos',
        headers: ['Nome', 'Preposição', 'Exemplo'],
        rows: [
          ['amor', 'a / por', '"amor à pátria" / "amor pelo próximo"'],
          ['dúvida', 'sobre / em / acerca de', '"dúvida sobre o assunto"'],
          ['medo', 'de', '"medo de altura"'],
          ['necessidade', 'de', '"necessidade de mudança"'],
          ['respeito', 'a / por', '"respeito às leis"'],
          ['direito', 'a / de', '"direito à saúde" / "direito de escolha"'],
          ['acesso', 'a', '"acesso à informação"'],
        ],
      },
      {
        type: 'table',
        content: 'Regência de adjetivos',
        headers: ['Adjetivo', 'Preposição', 'Exemplo'],
        rows: [
          ['apto', 'a / para', '"apto ao cargo" / "apta para trabalhar"'],
          ['capaz', 'de', '"capaz de resolver"'],
          ['contrário', 'a', '"contrário à proposta"'],
          ['favorável', 'a', '"favorável à mudança"'],
          ['necessário', 'a', '"necessário ao desenvolvimento"'],
          ['preferível', 'a', '"preferível ao silêncio"'],
          ['satisfeito', 'com / de', '"satisfeito com o resultado"'],
          ['semelhante', 'a', '"semelhante ao anterior"'],
          ['habituado', 'a', '"habituado à rotina"'],
          ['ansioso', 'por / de', '"ansioso por novidades"'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Regência Nominal e a Crase',
      },
      {
        type: 'text',
        content:
          'Quando o nome exige a preposição "a" e o complemento é um substantivo feminino com artigo, ocorre a CRASE. Portanto, conhecer a regência nominal é o passo 1 para acertar a crase.',
      },
      {
        type: 'example',
        label: 'Regência + Crase',
        content:
          '"Tenho direito A + A saúde." → "Tenho direito À saúde." ✓\n(direito exige "a" + substantivo feminino com artigo = crase)\n\n"Estou habituado A + A rotina." → "Estou habituado à rotina." ✓\n(habituado exige "a" + feminino com artigo = crase)',
      },
    ],
  },
  {
    id: 'm5b-l7',
    title: 'Emprego do Sinal de Crase (5.7)',
    duration: '15 min',
    sections: [
      {
        type: 'text',
        content:
          'A CRASE é a fusão da preposição "a" com o artigo "a" (ou "as"), resultando em "à" (ou "às"). Não é uma letra diferente — é uma contração. Para haver crase, devem ocorrer simultaneamente duas condições.',
      },
      {
        type: 'subtitle',
        content: 'As Duas Condições da Crase',
      },
      {
        type: 'example',
        label: 'Regra fundamental',
        content:
          'CRASE = preposição "a" + artigo definido "a"\n\nCondição 1: o TERMO ANTES exige a preposição "a" (regência verbal ou nominal)\nCondição 2: o TERMO DEPOIS admite o artigo feminino "a/as"\n\nTeste prático: substitua o substantivo feminino por um masculino.\nSe ficar "ao" → havia artigo → use CRASE: "à"\nSe ficar "a" (sem artigo) → não havia artigo → sem crase\n\n"Fui à escola." → "Fui AO colégio." ✓ → havia artigo → crase obrigatória ✓\n"Fui a pé." → "Fui A cavalo." ✓ (sem artigo) → sem crase ✓',
      },
      {
        type: 'subtitle',
        content: 'Crase OBRIGATÓRIA',
      },
      {
        type: 'table',
        content: 'Casos obrigatórios',
        headers: ['Contexto', 'Exemplo'],
        rows: [
          ['Antes de subst. feminino com artigo', '"Fui à farmácia."'],
          ['Locução adverbial feminina', '"às vezes", "à tarde", "à noite", "à esquerda"'],
          ['Locução prepositiva feminina', '"à beira de", "à custa de", "à frente de"'],
          ['Locução conjuntiva feminina', '"à medida que", "à proporção que"'],
          ['Antes de "moda de / maneira de"', '"bife à parmegiana", "à moda francesa"'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Crase PROIBIDA',
      },
      {
        type: 'table',
        content: 'Casos proibidos',
        headers: ['Contexto', 'Exemplo correto'],
        rows: [
          ['Antes de verbo', '"Começou a chover." (não "à chover")'],
          ['Antes de palavra masculina', '"Fui a pé." / "Chegou a tempo."'],
          ['Antes de pronome pessoal', '"Dirigi-me a ela." (não "à ela")'],
          ['Antes de pronome dem. este/esse/aquele', '"Refiro-me a este fato."'],
          ['Antes de pronome indef.', '"Entreguei a alguém."'],
          ['Antes de palavra no plural sem artigo', '"Gosto de viagens a cidades históricas."'],
          ['Com "casa" sem artigo (lugar onde reside)', '"Fui a casa." (própria casa, sem artigo)'],
          ['Com "terra" (em oposição ao mar)', '"Os marinheiros foram a terra."'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Crase FACULTATIVA',
      },
      {
        type: 'table',
        content: 'Casos facultativos',
        headers: ['Contexto', 'Ambas as formas'],
        rows: [
          ['Antes de nome de mulher (próprio)', '"Entreguei a/à Maria."'],
          ['Antes de pronome possessivo feminino', '"Refiro-me a/à sua proposta."'],
          ['Com "até" (= até a)', '"Fui até a/à praia."'],
        ],
      },
      {
        type: 'tip',
        label: 'Segundo teste: troque por "para a"',
        content:
          'Se puder substituir "a" por "para a" e o sentido se mantiver → provavelmente é crase:\n"Fui à escola." → "Fui para a escola." ✓ → crase ✓\n"Cheguei a tempo." → "Cheguei para a tempo." ✗ → sem crase ✓',
      },
    ],
  },
  {
    id: 'm5b-l8',
    title: 'Colocação dos Pronomes Átonos (5.8)',
    duration: '14 min',
    sections: [
      {
        type: 'text',
        content:
          'A COLOCAÇÃO PRONOMINAL define a posição dos pronomes oblíquos átonos (me, te, se, o, a, lhe, nos, vos, os, as, lhes) em relação ao verbo: antes (próclise), depois (ênclise) ou no meio (mesóclise).',
      },
      {
        type: 'subtitle',
        content: 'Próclise — Pronome ANTES do Verbo',
      },
      {
        type: 'text',
        content:
          'A próclise é OBRIGATÓRIA quando há palavras atrativas antes do verbo.',
      },
      {
        type: 'table',
        content: 'Palavras que atraem o pronome (próclise obrigatória)',
        headers: ['Palavra atrativa', 'Exemplo'],
        rows: [
          ['Palavras negativas (não, nunca, jamais, nem, nada, ninguém)', '"Não me diga isso." ✓'],
          ['Pronomes relativos (que, quem, cujo...)', '"Foi ele quem me chamou." ✓'],
          ['Pronomes indefinidos (alguém, tudo, todos...)', '"Alguém me avisou." ✓'],
          ['Pronomes demonstrativos (este, isso, aquilo...)', '"Isso me preocupa." ✓'],
          ['Advérbios (aqui, já, bem, mal, sempre, ainda...)', '"Sempre me lembro de você." ✓'],
          ['Conjunções subordinativas (quando, porque, embora...)', '"Quando me viu, sorriu." ✓'],
          ['Preposição "em" + gerúndio', '"Em se tratando de trabalho, é sério." ✓'],
        ],
      },
      {
        type: 'subtitle',
        content: 'Ênclise — Pronome DEPOIS do Verbo',
      },
      {
        type: 'text',
        content:
          'A ênclise é a colocação padrão na língua escrita formal quando não há palavras atrativas.',
      },
      {
        type: 'table',
        content: 'Casos de ênclise',
        headers: ['Contexto', 'Exemplo'],
        rows: [
          ['Início de frase (norma culta)', '"Diga-me a verdade." ✓ (nunca pronome no início)'],
          ['Verbo no imperativo afirmativo', '"Ajude-me, por favor." ✓'],
          ['Verbo no infinitivo', '"É preciso ajudá-lo." ✓'],
          ['Verbo no gerúndio (sem "em")', '"Estou dizendo-lhe a verdade." ✓'],
          ['Pausa antes do verbo (vírgula)', '"Terminada a prova, entregou-a." ✓'],
        ],
      },
      {
        type: 'warning',
        label: 'Início de frase — nunca pronome átono',
        content:
          '"Me diga a verdade." ✗ (início de frase)\n"Se me diga a verdade." ✗ (ainda assim errado com SE isolado)\n→ Correto: "Diga-me a verdade." ✓\n\nNa norma culta escrita, pronome átono NUNCA inicia frase ou oração. Na fala coloquial brasileira é comum, mas em concurso é erro.',
      },
      {
        type: 'subtitle',
        content: 'Mesóclise — Pronome NO MEIO do Verbo',
      },
      {
        type: 'text',
        content:
          'A mesóclise ocorre exclusivamente com verbos no FUTURO DO PRESENTE e no FUTURO DO PRETÉRITO, quando não há palavra atrativa.',
      },
      {
        type: 'example',
        label: 'Mesóclise',
        content:
          '"Convidar-te-ei para a festa." (futuro do presente = convidarei)\n"Dir-te-ia a verdade." (futuro do pretérito = diria)\n\nSe houver palavra atrativa, usa-se próclise mesmo no futuro:\n"Nunca te convidarei." ✓ (não mesóclise, pois "nunca" atrai)\n"Quando te vir, direi." ✓ (conjunção temporal atrai)',
      },
      {
        type: 'subtitle',
        content: 'Locução Verbal — Posição do Pronome',
      },
      {
        type: 'table',
        content: 'Pronome em locução verbal',
        headers: ['Contexto', 'Posição', 'Exemplo'],
        rows: [
          ['Sem palavra atrativa', 'Depois do auxiliar OU depois do principal', '"Vou convidá-lo." / "Vou-o convidar." ✓'],
          ['Com palavra atrativa', 'Antes do auxiliar (próclise)', '"Não o vou convidar." / "Não vou convidá-lo." ✓'],
          ['Infinitivo/gerúndio como principal', 'Ênclise ao principal', '"Estava dizendo-lhe a verdade." ✓'],
        ],
      },
      {
        type: 'tip',
        label: 'Resumo prático para prova',
        content:
          '1. Há palavra atrativa antes do verbo? → Próclise obrigatória\n2. Início de frase / imperativo afirmativo / infinitivo / gerúndio sem "em"? → Ênclise\n3. Futuro do presente ou futuro do pretérito SEM atrativa? → Mesóclise\n4. Nunca use pronome átono no início absoluto de frase.',
      },
    ],
  },
];
