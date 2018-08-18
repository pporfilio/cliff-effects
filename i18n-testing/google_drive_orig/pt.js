/*
HOW-TO
IMPORTANT: Please don’t change the text in here.

The text that needs to be translated is in the English snippets document.

After you’ve read this, only translate dark bold text that’s below this point.

If the Document is Pink: It means that something in it is out of date. That means that something major changed in the English version and hasn’t been updated here. You can find the snippet that’s old because its name will look like this: sampleSnippetName_v0.0.

Fixing old snippets: Find that same name in the English snippets document and write a new translation for it in this document. After that’s all done, change the name that’s in red to match the name in the document of English snippets.

If you’ve changed stuff, but the text style doesn’t look right: Don’t worry. It usually takes a couple minutes for the style to update itself. If you try to close and re-open the page and the text style still looks wrong, let one of us know.

*** (Not done yet) Any snippets that are completely missing will have their names here ***


*/

export default {

  version:  `0.3`,
  langName: `Portugues`,   // Change this to the name of your language (written in your language)
  langCode: `pt`,

  header: {},

  footer: {
    'header_v1':    `Ferramenta de Efeitos de Precipícios Fiscais`,
    'cfbCredit_v1': [
      `Feito com `,
      { name: `__heartIcon__` },
      ` pelo Code for Boston`, 
    ],
  },

  homePage: {
    'appName_v1':          `Ferramenta de Efeitos de Precipícios Fiscais`,
    'prototypeNote_v1':    `PROTÓTIPO DE ORIENTAÇÃO*`,
    'cautionaryNote_v1':   `*Este é um protótipo e não deve ser usado para tomar decisões financeiras`,
    'toFirstInputPage_v1': `Comece Agora`,
    'toAboutPage_v1':      `Conheça Mais`,
  },

  aboutPage: {
    'aboutPageHeader_v1': `Sobre Ferramenta de Efeitos de Precipícios Fiscais`,

    'whatForHeader_v1':   `Para que serve essa ferramenta?`,
    'whatForImportantNote_v1': [
      {
        name: `__importantNote__`,
        text: `Nota importante:`,
      },
      ` Esta aplicação é um produto mínimo viável. Não deve ser usado como a única ferramenta para entender a situação financeira do SNAP ou da Seção 8 do cliente, ou para qualquer outro programa de assistência pública.`,
    ],
    'whatFor_v2': [
      `Esta ferramenta pode ajudar a mostrar como uma mudança na renda afeta o quanto alguém recebe na assistência pública dos benefícios do SNAP (Eng. Programa de Assistência Suplementar à Nutrição) e da Seção 8 Benefícios de comprovante de hospedagem. Esta aplicação foi projetada pelos gestores responsáveis`,
      { name: `__projectHope__` },
      ` com o objetivo de ajudar a prever mudanças nos benefícios de seus clientes.`,
    ],

    'whyHeader_v1': `Por que essa ferramenta é importante?`,
    'why1_v1':      `Um efeito de precipício fiscal ocorre quando uma ligeira mudança nas circunstâncias de um ocupante da casa - digamos, um ligeiro aumento salarial - desproporcionalmente reduz seus benefícios. o agregado familiar está trabalhando para aumentar o que ganham, mas eles acabam com uma perda líquida que realmente os coloca mais para trás. Estes efeitos precipitantes impedem muitas famílias escapem de programas de assistência pública.`,
    'why2_v1': `Efeitos de precipício também são difíceis de prever. As interações entre renda, o número de ocupantes da casa, muitos outros critérios, bem como os efeitos dos próprios programas, impactam-se de formas inesperadas. Estamos explorando maneiras de lidar com essa questão de complexidade e ajudar as famílias a entender melhor e prever sua situação.`,

    'videoLinkText_v1':    `Vídeo de dois minutos para descrever os efeitos do precipício fiscal`,
    'quantLinkText_v1':    `Cenários quantitativos demonstrando efeitos de precipício fiscal`,
    'benefitsLinkText_v1': `Desagregação dos diferentes benefícios oferecidos no MA`,

    'howToUseHeader_v1': `Como usar essa ferramenta?`,
    'howtoUse_v1':       `Vá passo a passo para adicionar informações sobre os benefícios atuais de um cliente, ocupantes da casa, renda e outras informações relevantes. Esta informação será usada para prever o valor do benefício aproximado do cliente. Quando você chegar ao final, altere o valor da "Renda futura" para ver como uma mudança na renda auferida causará uma mudança no valor do benefício. Atualmente, os programas SNAP e Section 8 Comprovante de hospedagem estão disponíveis. Observe que as previsões podem não corresponder diretamente ao valor do benefício atual de um cliente. O foco do aplicativo é a quantidade de mudança que ocorre nos benefícios quando há alterações na receita auferida.`,
    'howToUseNote_v1': [
      `Por favor, note que este aplicativo não armazena dados do usuário.`,
      {
        name: `__refreshWarning__`,
        text: `se você atualizar a página, os dados que você digitou serão perdidos.`,
      },
      ` Cada vez que você usa o aplicativo, os formulários estão completamente em branco.`,
    ],

    'whoMadeThisHeader_v1': `Quem está por trás disso?`,
    'whoMadeThis1_v0.1':      [
      `Esta aplicação faz parte de um projeto tornado possível por a Fundação do Boston Open Door concedido pela Universidade de Massachusetts`,
      { name: `__centerForSocialPolicy__` },
      `, em estreita parceria com`,
      { name: `__projectHope__` },
      ` e `,
      { name: `__codeForBoston__` },
      `. O Centro de Políticas Sociais é o principal parceiro para o`,
      { name: `__onSolidGroundCoalition__` },
      `.`,
    ],
    'whoMadeThis2_v1': [
      `O código base está sendo mantido em `,
      { name: `__github__` },
      ` por `,
      { name: `__codeForBoston__` },
      ` Voluntários. Para mais informações ou para relatar um erro, entre em contato`,
      { name: `__contactEmail__` },
      `.`,
    ],
    'whoMadeThis3_v1': [
      `Aqui está um agradecimento especial a todos os voluntários do Code for Boston que fizeram este aplicativo, especialmente`,
      { name: `__namesExceptLast__` },
      `, e `,
      { name: `__lastName__` },
      `.`,
    ],
  },

  visitPage: {
    'previous_v1':  `Anterior`,
    'next_v1':      `Próximo`,
    'newClient_v1': `Novo Cliente`,

    stepBar: {
      'currentBenefits_v1': `Benefícios Atuais`,
      'household_v1':       `Agregado Familiar`,
      'currentIncome_v1':   `Renda`,
      'currentExpenses_v1': `Despesas`,
      'predictions_v1':     `Previsões`,
    },

    formHelpers: {
      'weekly_v1':   `Semanal`,
      'monthly_v1':  `Por mês`,
      'yearly_v1':   `Anual`,
      'yesLabel_v1': `Sim`,
      'noLabel_v1':  `Não`,
    },

    currentBenefits: {
      'currentBenefits_v1': `Benefícios Atuais`,
      'selectBenefits_v1':  `Selecione os benefícios que você recebe atualmente`,
      'hasSection8_v1': {
        label: `Você tem Seção 8 Habitação?`,
        hint:  `Seção 8 fornece assistência habitacional para aluguel.`,
      },
      'hasSnap_v1': {
        label: `Você tem SNAP?`,
        hint:  `SNAP fornece assistência na compra de alimentos`,
      },
    },

    household: {
      'title_v0.1':           `Casa`,
      'clarifier_v1':       `Informações sobre os membros do seu agregado familiar.`,
      'householdHeader_v0.1': `Casa`,
      'householdIntro_v1':  `Informações sobre os membros do seu agregado familiar.`,
      'role_v1':            `Função`,
      'age_v1':             `Idade`,
      'disabled_v1':        `Desativado`,
      'headOfHousehold_v1': `Chefe de família`,
      'addMember_v1':       `Adicionar um membro`,
      'spouse_v1':          `Cônjuge do Chefe de Família`,
      'childOther_v1':      `Membro da criança / outro agregado familiar`,
      'previous_v1':        `Anterior`,
      'next_v1':            `Próximo`,
    },

    currentIncome: {
      'title_v1':                  `Renda Doméstica Atual`,
      'clarifier_v1':              `Renda que você coletou nos últimos 12 meses.`,
      'explainSnapCalculation_v1': `Este protótipo tentará fazer seus próprios cálculos para o valor do SNAP`,
      'earnedIncome_v1':           {
        label: `Renda ganha`,
        hint:  `Renda ganhada é quanto você e sua família são pagos pelo trabalho`,
      },
      'TAFDC_v1': {
        label: `TAFDC`,
        hint:  `Ajuda transitória a famílias com filhos dependentes oferece assistência financeira de curto prazo a famílias com filhos`,
      },
      'SSI_v1': {
        label: `SSI`,
        hint:  `Supplemental Security Income é um programa federal que fornece assistência financeira e de saúde a pessoas com 65 anos ou mais, ou pessoas cegas ou incapacitadas.`,
      },
      'SSDI_v1': {
        label: `SSDI`,
        hint:  `Renda de invalidez previdenciária é um programa federal para ajudar pessoas com deficiência`,
      },
      'childSupport_v1': {
        label: `Apoio à criança recebido`,
        hint:  `O apoio à criança é dinheiro pago a você por um ex-cônjuge para ajudar seu filho`,
      },
      'unemployment_v1': {
        label: `Desemprego`,
        hint:  `Benefícios de desemprego fornecem renda para pessoas que foram demitidas`,
      },
      'workersComp_v1': {
        label: `Compensação dos trabalhadores`,
        hint:  `Workers Compensation fornece assistência para pessoas que foram feridas no trabalho`,
      },
      'pension_v1': {
        label: `Pensão`,
        hint:  `Uma pensão fornece renda aos aposentados, geralmente de seus antigos empregadores`,
      },
      'socialSecurity_v1': {
        label: `Seguro Social`,
        hint:  `Segurança Social é um programa federal que presta assistência aos aposentados`,
      },
      'alimony_v1': {
        label: `Pensão alimentícia`,
        hint:  `Pensão alimentícia é dinheiro pago por um cônjuge para o outro depois de um divórcio`,
      },
      'otherIncome_v1': {
        label: `Outros rendimentos`,
        hint:  `Por favor, note renda que você pode ter de fontes que não estão listadas acima`,
      },
    },

    currentExpenses: {
      'title_v1':                    `Despesas domésticas atuais`,
      unreimbursedNonMedicalChildCare: {
        'sectionHeading_v1':    `Cuidados infantis não médicos razoáveis e não reembolsados`,
        'subheading_v1':        `Uma "criança" é uma pessoa de 12 anos ou menos. Não inclua valores pagos por outros programas de benefícios.`,
        'columnExpenseType_v1': `Despesa`,
        'childDirectCare_v1':   {
          label: `Custos com atendimento direto`,
          hint:  `Quanto você paga pelo cuidado da criança fora do bolso?`,
        },
        'childBeforeAndAfterSchoolCare_v1': {
          label: `Cuidados antes e depois da escola`,
          hint:  `Quanto você paga por creches por períodos antes ou depois da escola??`,
        },
        'childTransportation_v1': {
          label: `Custos de transporte`,
          hint:  `Quanto você paga pelo transporte?`,
        },
        'childOtherCare_v1': {
          label: `Outro cuidado`,
          hint:  `Quanto você paga por outros cuidados infantis?`,
        },
        'doEarnBecauseOfChildCare_v1': `O cuidado da criança permite que você faça uma renda adicional?`,
        'earnedBecauseOfChildCare_v1': `Renda tornada possível por despesas de assistência à infância`,
      },
      childSupport: {
        'sectionHeading_v1':      `Apoio à Criança`,
        'columnExpenseType_v1':   `Despesa`,
        'childSupportPaidOut_v1': {
          legallyObligated: `Legalmente obrigado`,
          childSupport:     ` apoio infantil`,
        },
      },
      housing: {
        'sectionHeading_v1':      `Habitação`,
        'monthlyContractRent_v1': {
          label: `Aluguel mensal de contrato (a renda total do seu apartamento)`,
          hint:  `A renda total do seu apartamento`,
        },
        'monthlyRentShare_v1': {
          label: `Sua parcela mensal de aluguel (quanto do aluguel total você tem que pagar)`,
          hint:  `Quanto da renda total você tem que pagar`,
        },
        'utilitiesSubheading_v1': `De quais destes utilitários você paga?`,
        'climateControl_v1':      {
          label: `Aquecimento ou resfriamento (por exemplo, A / C durante o verão)`,
          hint:  `Quanto você paga se tiver uma conta separada para aquecimento e / ou resfriamento?`,
        },
        'nonHeatElectricity_v1': {
          label: `Eletricidade para fins de não aquecimento`,
          hint:  `Quanto você paga por qualquer uso elétrico (além do calor)?`,
        },
        'phone_v1': {
          label: `Serviço telefônico`,
          hint:  `Quanto você paga pelo serviço telefônico básico?`,
        },
        'fuelAssistance_v1': {
          labelText: `Você recebe assistência de combustível?`,
          hint:      `Combustível ajuda você a pagar pelo combustível de aquecimento`,
        },
      },
    },

    predictions: {},
  },
};


