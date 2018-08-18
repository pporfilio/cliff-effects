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

  version:  `2.1`,
  langName: `Kreyol`,   // Change this to the name of your language (written in your language)
  langCode: `ht`,

  header: {},

  footer: {
    'header_v1':    `Cliff Effects Tool`,
    'cfbCredit_v0': [
      `Made with `,
      { name: `__heartIcon__` },
      ` by Code for Boston`, 
    ],
  },

  homePage: {
    'appName_v0':          `Cliff Effects Tool`,
    'prototypeNote_v0':    `GUIDANCE PROTOYPE*`,
    'cautionaryNote_v0':   `*This is a prototype and should not be used to make financial decisions`,
    'toFirstInputPage_v0': `Get Started`,
    'toAboutPage_v0':      `Learn More`,
  },

  aboutPage: {
    'aboutPageHeader_v0': `About the Cliff Effects Tool`,

    'whatForHeader_v0':   `What is this tool for?`,
    'whatForImportantNote_v0': [
      {
        name: `__importantNote__`,
        text: `Important Note:`,
      },
      ` Aplikasyon sa a se yon minimom aktif pwodwi. Li pa ta sipoze itilize kom sel enstriman pou konprann yon kliyan SNAP ou Seksyon 8 sitiyasyon finansye, ou pou lot pwogram asistans piblik`,
    ],
    'whatFor_v0': [
      `Enstriman ka ede montre koman yon chanjman nan revni ka afekte konbyen yon moun resevwa nan asistans piblik de SNAP(Pwogram siplemante asistans nitrisyon) e Seksyon 8    benefis kay`,
      { name: `__projectHope__` },
      `avek objektif pou ede nou we davans chanjman nan benefis kliyan yo.`,
    ],

    'whyHeader_v0': `Poukisa enstriman sa a enpotan?`,
    'why1_v0':      `Yon efe de klif rive le gen yon leje chanjman nan sikonstans lakay la- pa examp, yon leje ogmantasyon kob- ap fe benefis yo diminy de fason ki pa menm . Kay la ap travay pou ogmante lajan yo fe a, men yo fini pa pedi nan montan final la sa ki fe yo fe bak pi plis. Efe de klif  sa yo anpeche anpil fanmiy soti nan pwogram asistans piblik`,
    



'why2_v1': `Efe de klif yo difisil pou prevwa, Enteraksyon ant revni, kantite moun ki nan kay la, anpil lot krite,anplis efe pwogram yo yo menm ki afekte yonn lot nan fason ke nou pa atann. Nou ap chache fason pou nou fe fas ak komplex pwoblem  sa a e ede fanmiy yo konprann e prevwa sitiyasyon yo.`,

    'videoLinkText_v1':    `2 minit videyo ki pale de cliff effects`,
    'quantLinkText_v1':    `Kantitativ prezantasyon ki demontre cliff effects`,
    'benefitsLinkText_v0': `Detay de diferant benefis ki ofri nan MA’, ’

`,
'howToUseHeader_v1':` Koman mwen ka itilize enstriman sa a?`,

    'howtoUse_v1':       `Ale etap pa etap pou adisyone enfomasyon konsenan  aktyel benefis kliyan an,kay la, revni, e lot enfomasyon.Enfomasyon sa a ap sevi pou prevwa apepre montan ke kliyan an ap resevwa. Le ou fini, chanje “ fiti revni” an pou we koman chanjman nan revni an ka koz yon chanjman nan kantiti benefis lan. Aktyelman, SNAP e Seksyon 8 sibvansyon pwogram kay yo disponib. Note ke previzyon yo ka pa direkteman korespond avek aktyel montan benefis lan. Fokis aplikasyon an se kantite chanjman ki fet nan benefis le gen chanjman nan revni ke moun yo genyen.`,
    'howToUseNote_v1': [
      `Tanpri pran note ke aplikasyon sa a pa kenbe data `,
      {
        name: `__refreshWarning__`,
        text: `if you refresh the page the data you've entered will be lost.`,
      },
      ` Each time you go through the app, it's a clean slate.`,
    ],

    'whoMadeThisHeader_v0': `Who is behind this?`,
    'whoMadeThis1_v0':      [
      `This application is part of a project made pssible by a Boston Foundation Open Door Grant to the University of Massachusetts Boston's `,
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
      'currentBenefits_v0': `Current Benefits`,
      'household_v0':       `Household`,
      'currentIncome_v0':   `Income`,
      'currentExpenses_v0': `Expenses`,
      'predictions_v0':     `Predictions`,
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
      'hasSection8_v0': {
        label: `Do you have Section 8 Housing?`,
        hint:  `Section 8 provides rental housing assistance.`,
      },
      'hasSnap_v0': {
        label: `Do you have SNAP?`,
        hint:  `SNAP provides assistance with buying food`,
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
      'earnedIncome_v0':           {
        label: `Earned income`,
        hint:  `Earned income is how much you and your family get paid from working`,
      },
      'TAFDC_v0': {
        label: `TAFDC`,
        hint:  `Transitional Aid to Families with Dependent Children provides short-term financial assistance to families with children`,
      },
      'SSI_v0': {
        label: `SSI`,
        hint:  `Supplemental Security Income is a federal program that provides financial and health care assistance to people 65 and over, or people who are blind or disabled`,
      },
      'SSDI_v0': {
        label: `SSDI`,
        hint:  `Social Security Disability Income is a federal program to help people with disabilities`,
      },
      'childSupport_v0': {
        label: `Child support recieved`,
        hint:  `Child support is money paid to you by a former spouse to help your child`,
      },
      'unemployment_v0': {
        label: `Unemployment`,
        hint:  `Unemployment benefits provide income to people who have been laid off`,
      },
      'workersComp_v0': {
        label: `Worker's compensation`,
        hint:  `Worker's Compensation provides assistance for people who have been injured on the job`,
      },
      'pension_v0': {
        label: `Pension`,
        hint:  `A pension provides income to retirees, usually from their former employers`,
      },
      'socialSecurity_v0': {
        label: `Social security`,
        hint:  `Social Security is a federal program that provides assistance to retirees`,
      },
      'alimony_v0': {
        label: `Alimony`,
        hint:  `Alimony is money paid by one spouse to the other after a divorce`,
      },
      'otherIncome_v0': {
        label: `Other income`,
        hint:  `Please note income you may have from sources that are not listed above`,
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


