$(document).ready(function () {
  $("#btnClick").on("click", function () {
    $("#msg").text("Botão clicado! 🎉");
  });
});

$(() => {
  $("#navbar").load("components/navbar.html");
});

$(() => {
  $("#aside").load("components/aside.html");
});

$(() => {
  $("#quick-access").load("components/quick-access.html");
});

$(() => {
  $("#main-news").load("components/main-news.html");
});

$(() => {
  $("#carousel").load("components/carousel.html");
});

$("#footer").load("components/footer.html", () => {
  const selection = ["Recrutamento Interno", "Indique um colega"];

  const career = [
    "LOAD - Hub de aprendizagem",
    "Biblioteca",
    "Cursos externos",
    "Treinamentos obrigatórios",
  ];

  const performance = ["Ciclo de performance - Gestão de Desempenho"];

  const remuneration = [
    "Demonstrativo",
    "Remuneração variável",
    "Programa PLR",
  ];

  const services = [
    "Agendamento visitantes",
    "Base do Conhecimento",
    "Central de Serviços TI - Help Desk",
    "Cadastro de BP no SAP",
    "Contratação de terceiros",
    "Canais de atendimentos tributos",
    "Compras",
    "Gestão de fornecedores",
    "Gestão de Prestadores de Serviços",
    "Logística e Documentos",
    "Manutenção e Serviços Prediais",
    "Jurídico Societário",
    "Segurança Corporativo",
    "Regularização e Imobiliário",
    "Projetos Prediais",
    "Reservas de Salas",
    "Prevenção a Fraudes",
    "Sinistro Auto - Apoio Sucursais",
    "Selos de Estacionamento",
    "Viagens Corporativas",
    "Vistória Prévias",
  ];

  const benefits = [
    "Alimentação e refeição",
    "Assistência social",
    "Bem estar e parcerias",
    "Bolsa de estudos",
    "Creches e Babá",
    "Farmácia",
    "Férias",
    "Saúde e Odonto",
    "Previdência",
    "Transporte e mobilidade",
  ];

  const technologies = [
    "Status Page - Sistemas e Ambiente",
    "Capacitação Tech",
    "Programa de Formação da TI",
    "Espaço de Arquitetura",
    "Contatos - Segurança da Informação",
    "Programas de Inovação - Oxigênio",
    "Programa Melhoria Contínua",
    "Transformação Ágil e Digital",
  ];

  const programs = [
    "Juntos Diversidade e Inclusão",
    "Jovem aprendiz",
    "Pesquisas Institucionais",
    "Saúde Integral",
  ];

  const directives = [
    "Documentos Corporativos",
    "Condições e Manuais",
    "Formulários",
    "Políticas e Normas Internas",
  ];

  const culture = [
    "Comunicação interna e engajamento",
    "Cultura",
    "Guia de marca e apresentações institucionais",
    "Personas",
    "Temporada 25-30",
    "Temporadas anteriores",
    "Podcasts",
  ];

  const contacts = ["Lista de Contatos", "Organograma", "Sucursais"];

  const systems = ["Organograma", "Sucursais"];

  selection.forEach((item) => {
    $("#selection-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  career.forEach((item) => {
    $("#career-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  performance.forEach((item) => {
    $("#performance-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  remuneration.forEach((item) => {
    $("#remuneration-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  benefits.forEach((item) => {
    $("#benefits-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  services.forEach((item) => {
    $("#services-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  technologies.forEach((item) => {
    $("#technologies-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  programs.forEach((item) => {
    $("#programs-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  directives.forEach((item) => {
    $("#directives-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  culture.forEach((item) => {
    $("#culture-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  contacts.forEach((item) => {
    $("#contacts-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });

  systems.forEach((item) => {
    $("#systems-footer").append(
      `<li class="fs-8 text-muted small">${item}</li>`
    );
  });
});
