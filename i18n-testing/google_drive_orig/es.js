/*

HOW-TO
IMPORTANT: Please don’t change the text in here.

The text that needs to be translated is in the English snippets document.

After you’ve read this, only translate dark bold text that’s below this point.

If the Document is Pink: It means that something in it is out of date. That means that something major changed in the English version and hasn’t been updated here. You can find the snippet that’s old because its name will look like this: sampleSnippetName_v0.0

Fixing old snippets: Find that same name in the English snippets document and write a new translation for it in this document. After that’s all done, change the name that’s in red to match the name in the document of English snippets.

If you’ve changed stuff, but the text style doesn’t look right: Don’t worry. It usually takes a couple minutes for the style to update itself. If you try to close and re-open the page and the text style still looks wrong, let one of us know.

*** (Not done yet) Any snippets that are completely missing will have their names here ***


*/

export default {

  version:  `0.1`,
  langName: `Español`,   // Change this to the name of your language (written in your language)
  langCode: `es`,

  header: {},

  footer: {
    'header_v0':    `Cliff Effects Herriamienta`,
    'cfbCredit_v0': [
      `Made with `,
      { name: `__heartIcon__` },
      ` by Code for Boston`, 
    ],
  },

  homePage: {
    'appName_v0':          `Cliff Effects Herriamienta`,
    'prototypeNote_v0':    `GUIDANCE PROTOYPE*`,
    'cautionaryNote_v1':   `*Esto es una prototypa y no debe usarse para tomar decisiones financieras`,
    'toFirstInputPage_v1': `Empieza`,
    'toAboutPage_v1':      `Ayuda Mas`,
  },

  aboutPage: {
    'aboutPageHeader_v0': `About the Cliff Effects Tool`,

    'whatForHeader_v0':   `What is this tool for?`,
    'whatForImportantNote_v0': [
      {
        name: `__importantNote__`,
        text: `Important Note:`,
      },
      ` This application is a minimum viable product. It should not be used as the sole tool to understand a client's SNAP or Section 8 financial situation, or for any other public assistance program.`,
    ],
    'whatFor_v0': [
      `This tool can help show how a change in income affects how much someone receives in public assistance from SNAP (Supplemental Nutrition Assistance Program) and Section 8 Housing Voucher benefits. It was designed for the case managers at `,
      { name: `__projectHope__` },
      ` with the aim of helping to predict changes in their clients' benefits.`,
    ],

    'whyHeader_v0': `Why is this tool important?`,
    'why1_v0':      `A cliff effect occurs when a slight change in a household’s circumstances - say, a slight pay raise - disproportionately lowers their benefits. The household is working to increase what they earn, but they end up with a net loss that actually puts them further behind. These cliff effects prevent many families from actually getting off of public assistance programs.`,
    'why2_v0': `Cliff effects are also difficult to predict. The interactions between income, household size, many other criteria, as well as the effects of the programs themselves impact each other in unexpected ways. We're exploring ways to deal with this issue of complexity and help families better understand and predict their situation.`,

    'videoLinkText_v0':    `Two-minute video describing cliff effects`,
    'quantLinkText_v0':    `Quantitative scenarios demonstrating cliff effects`,
    'benefitsLinkText_v0': `Breakdown of different benefits offered in MA`,

    'howToUseHeader_v0': `How do I use this tool?`,
    'howtoUse_v0':       `Go step-by-step to add information about a client's current benefits, household, income, and other relevant information. This information will be used to predict the client's approximate benefit amount. When you reach the end, change the “Future Income” amount to see how a change in earned income will cause a change in benefit amount. Currently, the SNAP and Section 8 Housing Voucher programs are both available. Note that predictions may not directly match up with a client’s current benefit amount. The app’s focus is the amount of change that occurs in benefits when there are changes in earned income.`,
    'howToUseNote_v0': [
      `Please note that this app does not store user data, so `,
      {
        name: `__refreshWarning__`,
        text: `if you refresh the page the data you've entered will be lost.`,
      },
      ` Each time you go through the app, it's a clean slate.`,
    ],

    'whoMadeThisHeader_v0': `Who is behind this?`,
    'whoMadeThis1_v0':      [
      `This application is part of a project made possible by a Boston Foundation Open Door Grant to the University of Massachusetts Boston's `,
      { name: `__centerForSocialPolicy__` },
      `, in close partnership with `,
      { name: `__projectHope__` },
      ` and `,
      { name: `__codeForBoston__` },
      `. The Center for Social Policy is the lead partner for the `,
      { name: `__onSolidGroundCoalition__` },
      `.`,
    ],
    'whoMadeThis2_v0': [
      `The code base is being maintained on `,
      { name: `__github__` },
      ` by `,
      { name: `__codeForBoston__` },
      ` volunteers. For more information or to report a bug, please contact `,
      { name: `__contactEmail__` },
      `.`,
    ],
    'whoMadeThis3_v0': [
      `Here's a special thank you to all the Code for Boston volunteers who brought you this application, especially `,
      { name: `__namesExceptLast__` },
      `, and `,
      { name: `__lastName__` },
      `.`,
    ],
  },

  visitPage: {
    'previous_v0':  `Previous`,
    'next_v0':      `Next`,
    'newClient_v0': `New Client`,

    stepBar: {
      'currentBenefits_v1': `Beneficios Actuales`,
      'household_v1':       `Hogar`,
      'currentIncome_v1':   `Ingreso`,
      'currentExpenses_v1': `Gastos`,
      'predictions_v1':     `Predictions`,
    },

    formHelpers: {
      'weekly_v0':   `Weekly`,
      'monthly_v0':  `Monthly`,
      'yearly_v0':   `Yearly`,
      'yesLabel_v0': `Yes`,
      'noLabel_v0':  `No`,
    },

    currentBenefits: {
      'currentBenefits_v0': `Current Benefits`,
      'selectBenefits_v0':  `Select the benefits you currently receive`,
      'hasSection8_v1': {
        label: `Tiene Section 8 Housing?`,
        hint:  `Section 8 dispone asistencia de vivienda de alquiler.`,
      },
      'hasSnap_v1': {
        label: `Tiene SNAP?`,
        hint:  `SNAP dispone asistencia con comprando comida`,
      },
    },

    household: {
      'title_v0':           `Household`,
      'clarifier_v0':       `Information about the members of your household.`,
      'householdHeader_v0': `Household`,
      'householdIntro_v0':  `Information about the members of your household.`,
      'role_v0':            `Role`,
      'age_v0':             `Age`,
      'disabled_v0':        `Disabled`,
      'headOfHousehold_v0': `Head of Household`,
      'addMember_v0':       `Add a member`,
      'spouse_v0':          `Spouse of Head of Household`,
      'childOther_v0':      `Child/Other Household Member`,
      'previous_v0':        `Previous`,
      'next_v0':            `Next`,
    },

    currentIncome: {
      'title_v0':                  `Current Household Income`,
      'clarifier_v0':              `Income that you collected in the past 12 months.`,
      'explainSnapCalculation_v0': `This prototype will attempt to make its own calculations for SNAP amount`,
      'earnedIncome_v1':           {
        label: `Ingreso ganado`,
        hint:  `Ingreso ganado es cuantos su y su familia ganiaron de trabajando`,
      },
      'TAFDC_v0': {
        label: `TAFDC`,
        hint:  `Transitional Aid to Families with Dependent Children dispone asistencia termino corto financiera a familias con hijos`,
      },
      'SSI_v0': {
        label: `SSI`,
        hint:  `Supplemental Security Income es una programa federal que dispone financial y cuidado de salud asistencia por personas de 65 años y mas, o personas who are blind or disabled`,
      },
      'SSDI_v1': {
        label: `SSDI`,
        hint:  `Social Security Disability Income es una programa federal para ayudar personas con disabilities`,
      },
      'childSupport_v1': {
        label: `Manutención de los hijos recibio`,
        hint:  `Manutención de los hijos es dinero recibio de una marido pasado para ayudar su hijo`,
      },
      'unemployment_v1': {
        label: `Desempleado`,
        hint:  `Benfeicios desempleado dispone ingresos a personas he sido despedido`,
      },
      'workersComp_v1': {
        label: `Trabajadore's compensación`,
        hint:  `Worker's compensación dispone asistencia para personas que he sido herido en trabajo`,
      },
      'pension_v1': {
        label: `Pension`,
        hint:  `Un pension dispone ingresos a jubilados, usualamente de sus empleadores pasados`,
      },
      'socialSecurity_v1': {
        label: `Social security`,
        hint:  `Social Security es una programa federal que dispone asistencia a jubilados`,
      },
      'alimony_v1': {
        label: `Pension alimenticia`,
        hint:  `Alimenticia es dinero pago de un marido a el otra despues un divorcio`,
      },
      'otherIncome_v1': {
        label: `Otros ingresos`,
        hint:  `Por favor sume ingreso puede haber ganado desde otros fuentes que no fueron listados anteriormente`,
      },
    },

    currentExpenses: {
      'title_v0':                    `Current Household Expenses`,
      unreimbursedNonMedicalChildCare: {
        'sectionHeading_v0':    `Reasonable Unreimbursed Non-Medical Child(ren) Care`,
        'subheading_v0':        `A "child" is a person 12 or younger. Don't include amounts that are paid for by other benefit programs.`,
        'columnExpenseType_v0': `Expense`,
        'childDirectCare_v0':   {
          label: `Direct care costs`,
          hint:  `How much do you pay for child care out of pocket?`,
        },
        'childBeforeAndAfterSchoolCare_v0': {
          label: `Before- and after-school care`,
          hint:  `How much do you pay for child care for times before or after school?`,
        },
        'childTransportation_v0': {
          label: `Transportation costs`,
          hint:  `How much do you pay for transportation?`,
        },
        'childOtherCare_v0': {
          label: `Other care`,
          hint:  `How much do you pay for other child care?`,
        },
        'doEarnBecauseOfChildCare_v0': `Does child care allow you to make additional income?`,
        'earnedBecauseOfChildCare_v0': `Income made possible by childcare expenses`,
      },
      childSupport: {
        'sectionHeading_v0':      `Child Support`,
        'columnExpenseType_v0':   `Expense`,
        'childSupportPaidOut_v0': {
          legallyObligated: `Legally obligated`,
          childSupport:     ` child support`,
        },
      },
      housing: {
        'sectionHeading_v0':      `Housing`,
        'monthlyContractRent_v0': {
          label: `Monthly Contract Rent (the total rent for your apartment)`,
          hint:  `The total rent for your apartment`,
        },
        'monthlyRentShare_v0': {
          label: `Your Monthly Rent Share (how much of the total rent you have to pay)`,
          hint:  `How much of the total rent you have to pay`,
        },
        'utilitiesSubheading_v0': `Which of these utilities do you pay for?`,
        'climateControl_v0':      {
          label: `Heating or cooling (e.g. A/C during summer)`,
          hint:  `How much do you pay if you have a separate bill for heating and/or cooling`,
        },
        'nonHeatElectricity_v0': {
          label: `Electricity for non-heating purposes`,
          hint:  `How much do you pay for any electric usage (other than for heat)`,
        },
        'phone_v0': {
          label: `Telephone service`,
          hint:  `How much do you pay for basic telephone service`,
        },
        'fuelAssistance_v0': {
          labelText: `Do you get Fuel Assistance?`,
          hint:      `Fuel Assistance helps you pay for heating fuel`,
        },
      },
    },

    predictions: {},
  },
};


