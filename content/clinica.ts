/**
 * Fonte única de verdade do conteúdo do site.
 *
 * Tudo que aparece na página, no JSON-LD e nos metadados sai daqui — assim
 * texto visível e dados estruturados nunca saem de sincronia (é exatamente
 * o que o Google verifica quando valida rich results).
 */

export const TELEFONE_E164 = '+553136570600'
export const TELEFONE_EXIBICAO = '(31) 3657-0600'

export const WHATSAPP_E164 = '+5531995830442'
export const WHATSAPP_EXIBICAO = '(31) 99583-0442'
export const WHATSAPP_URL =
  'https://wa.me/5531995830442?text=' +
  encodeURIComponent('Olá, Odonto SOS! Preciso de atendimento de urgência.')

export const EMAIL = 'odontosos@odontosos.com.br'
export const INSTAGRAM = 'https://www.instagram.com/clinicaodontososbh'

/**
 * Perfil da Empresa no Google.
 *
 * PENDENTE DANILO: colar aqui o link curto do perfil (formato
 * https://g.page/... ou https://maps.app.goo.gl/...). Enquanto vazio, é
 * omitido do `sameAs` do JSON-LD — declarar URL errada é pior que não
 * declarar, porque o Google usa esse campo para confirmar que o site e o
 * perfil são a mesma empresa.
 */
export const PERFIL_GOOGLE = ''

export const SITE_URL = 'https://www.odontosos.com.br'

export const ENDERECO = {
  logradouro: 'Rua Cláudio Manoel, 223',
  bairro: 'Funcionários',
  cidade: 'Belo Horizonte',
  estado: 'MG',
  cep: '30140-100',
  pais: 'BR',
  latitude: -19.935028,
  longitude: -43.929663
} as const

export const ENDERECO_COMPLETO = `${ENDERECO.logradouro} - ${ENDERECO.bairro}, ${ENDERECO.cidade} - ${ENDERECO.estado}, ${ENDERECO.cep}`

/** Link de rota: usa a busca do Maps pelo endereço, funciona em iOS e Android. */
export const ROTA_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ENDERECO_COMPLETO
)}`

export const MAPA_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.747845081203!2d-43.92966338446836!3d-19.935027943615154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c1a8f63a65%3A0xf73112f63fc6dbf1!2sR.%20Cl%C3%A1udio%20Manoel%2C%20223%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030140-100!5e0!3m2!1spt-BR!2sbr!4v1638402518655!5m2!1spt-BR!2sbr'

/** Menu principal. "Trabalhe conosco" fica só no rodapé, por decisão do cliente. */
export const MENU = [
  { label: 'Urgências', href: '#urgencias' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Como chegar', href: '#como-chegar' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' }
] as const

export const HERO = {
  h1: 'Dentista 24 horas em Belo Horizonte',
  subtitulo:
    'Urgências odontológicas todos os dias, inclusive finais de semana e feriados.',
  texto:
    'Está com dor de dente ou precisa de atendimento imediato? A Odonto SOS conta com dentistas de plantão 24 horas para avaliar sua situação e realizar os procedimentos de urgência indicados para cada caso.'
} as const

export const URGENCIAS = {
  titulo: 'Urgências odontológicas',
  texto:
    'Urgência odontológica é todo procedimento que precisa de atendimento imediato para aliviar o sofrimento do paciente. O objetivo é estabilizar o quadro na hora e, em um momento adequado, permitir que você procure o seu dentista para resolver o problema em definitivo.'
} as const

/**
 * Fotos reais da clínica, recuperadas do site anterior e otimizadas
 * (1,4 MB → 220 KB e 8,2 MB → 260 KB).
 *
 * As outras duas imagens do site antigo eram de banco de imagens (um raio-X e
 * uma bandeja de instrumentos) e foram descartadas: o cliente pediu
 * explicitamente para não usar imagem genérica.
 *
 * PENDENTE DANILO: enviar foto da FACHADA, que não existe no acervo atual.
 */
export const FOTOS = {
  consultorio: {
    src: '/images/clinica/consultorio.jpg',
    alt: 'Consultório odontológico da Odonto SOS, com cadeira e equipamentos para atendimento de urgência',
    width: 1440,
    height: 1070
  },
  recepcao: {
    src: '/images/clinica/recepcao.jpg',
    alt: 'Recepção da Odonto SOS em Belo Horizonte, com balcão de atendimento e sala de espera',
    width: 1440,
    height: 973
  }
} as const

export const SITUACOES = [
  'Dor de dente intensa',
  'Dente quebrado',
  'Restauração ou curativo que soltou',
  'Inchaço e infecção odontológica',
  'Sangramento',
  'Trauma e avulsão dentária',
  'Problemas com coroas e provisórios',
  'Avaliação odontológica de urgência'
] as const

export const SITUACOES_OBSERVACAO =
  'O procedimento indicado depende da avaliação clínica realizada no atendimento. Situações de maior complexidade podem exigir encaminhamento para um especialista.'

export const SOBRE = {
  titulo: 'Conheça a Odonto SOS',
  paragrafos: [
    'A Odonto SOS é uma clínica dedicada a urgências odontológicas. Funcionamos 24 horas por dia, todos os dias da semana, inclusive finais de semana e feriados.',
    `Estamos localizados no bairro ${ENDERECO.bairro}, em ${ENDERECO.cidade}, com equipe de plantão e estrutura destinada ao atendimento de urgência.`,
    'Atendemos pacientes particulares e convênios.'
  ]
} as const

/**
 * Convênios atendidos. `nome` é obrigatório: aparece como texto abaixo da
 * logo e como `alt` da imagem — sem isso o Google só vê um arquivo PNG.
 *
 * PENDENTE DANILO: confirmar quais destes 21 seguem ativos hoje.
 */
export const CONVENIOS = [
  { nome: 'Amil Dental', logo: '/images/logos/logo_amil.png' },
  { nome: 'Bradesco Dental', logo: '/images/logos/logo_bradesco.png' },
  { nome: 'Copass Saúde', logo: '/images/logos/logo_copass.png' },
  { nome: 'GEAP Saúde', logo: '/images/logos/logo_geap.png' },
  { nome: 'Inpao Dental', logo: '/images/logos/logo_inpao.png' },
  { nome: 'IPSM', logo: '/images/logos/logo_ipsm.png' },
  { nome: 'MetLife', logo: '/images/logos/logo_metlife.png' },
  { nome: 'OdontoPrev', logo: '/images/logos/logo_odontoprev.png' },
  { nome: 'Plan-Assiste', logo: '/images/logos/logo_plan_assiste.png' },
  { nome: 'Porto Saúde', logo: '/images/logos/logo_porto_saude.png' },
  { nome: 'Rede Odonto', logo: '/images/logos/logo_rede_odonto.png' },
  { nome: 'Saúde Caixa', logo: '/images/logos/logo_saude_caixa.png' },
  { nome: 'Unna Odonto', logo: '/images/logos/logo_unna.png' },
  { nome: 'Bacen Saúde', logo: '/images/logos/logo_bacen.png' },
  { nome: 'Hapvida', logo: '/images/logos/logo_hapvida.png' },
  { nome: 'Interodonto', logo: '/images/logos/logo_interodonto.png' },
  { nome: 'Unimed Odonto', logo: '/images/logos/logo_unimedodonto.png' },
  { nome: 'Primavida', logo: '/images/logos/logo_primavida.png' },
  { nome: 'SulAmérica Odonto', logo: '/images/logos/logo_sulamericaodonto.png' },
  { nome: 'Golden Cross', logo: '/images/logos/logo_goldencross.png' },
  { nome: 'TRT', logo: '/images/logos/logo_trt.png' }
] as const

export const CONVENIOS_OBSERVACAO =
  'Consulte previamente a cobertura do seu plano para o atendimento odontológico de urgência.'

/**
 * Dúvidas frequentes. Alimenta a seção visível E o JSON-LD FAQPage —
 * um array só, então pergunta e resposta nunca divergem entre os dois.
 *
 * PENDENTE DANILO: revisar cada resposta. Foram redigidas de forma
 * conservadora, a partir do que ele já confirmou por escrito, e de
 * propósito não prometem prazo, preço nem resolução na primeira consulta.
 */
export const FAQ = [
  {
    pergunta: 'A Odonto SOS funciona realmente 24 horas?',
    resposta:
      'Sim. A clínica atende 24 horas por dia, todos os dias da semana, inclusive finais de semana e feriados, com dentistas de plantão.'
  },
  {
    pergunta: 'Precisa agendar o atendimento?',
    resposta:
      'Não é necessário agendar. O atendimento é de urgência e por ordem de chegada, considerando a gravidade de cada caso. Se puder, ligue antes para avisar que está a caminho.'
  },
  {
    pergunta: 'Quais situações são consideradas urgências odontológicas?',
    resposta:
      'Dor de dente intensa, dente quebrado, restauração ou curativo que soltou, inchaço e infecção odontológica, sangramento, trauma e avulsão dentária, problemas com coroas e provisórios, além de avaliação odontológica de urgência.'
  },
  {
    pergunta: 'A clínica atende convênios?',
    resposta:
      'Sim, atendemos pacientes particulares e convênios. Consulte previamente a cobertura do seu plano para o atendimento odontológico de urgência.'
  },
  {
    pergunta: 'Crianças podem ser atendidas?',
    resposta:
      'Sim. Crianças são atendidas em situações de urgência odontológica, acompanhadas por um responsável.'
  },
  {
    pergunta: 'Todo problema pode ser resolvido na primeira consulta?',
    resposta:
      'O atendimento de urgência tem como objetivo aliviar a dor e estabilizar o quadro. O procedimento indicado depende da avaliação clínica, e casos de maior complexidade podem exigir continuidade do tratamento com o seu dentista ou encaminhamento para um especialista.'
  },
  {
    pergunta: 'Onde fica a clínica?',
    resposta: `A Odonto SOS fica na ${ENDERECO.logradouro}, bairro ${ENDERECO.bairro}, em ${ENDERECO.cidade} - ${ENDERECO.estado}, CEP ${ENDERECO.cep}.`
  },
  {
    pergunta: 'Como entrar em contato durante a madrugada?',
    resposta: `O telefone ${TELEFONE_EXIBICAO} e o WhatsApp ${WHATSAPP_EXIBICAO} funcionam 24 horas, incluindo durante a madrugada.`
  }
] as const

export const TRABALHE_CONOSCO = {
  titulo: 'Trabalhe conosco',
  texto:
    'Se você se identifica com a Odonto SOS e quer fazer parte da nossa equipe, envie seu currículo para o e-mail abaixo.',
  assunto: 'Currículo'
} as const
