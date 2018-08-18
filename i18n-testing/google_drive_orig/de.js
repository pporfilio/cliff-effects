
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

  version:  `0.1`,
  langName: `Deutsch`,   // Change this to the name of your language (written in your language)
  langCode: `de`,

  header: {},

  footer: {
    'header_v0':    `Cliff Effects Werkzeug`,
    'cfbCredit_v1': [
      `Mit `,
      { name: `__heartIcon__` },
      ` von Code for Boston gemacht`, 
    ],
  },

  homePage: {
    'appName_v0':          `Cliff Effects Werkzeug`,
    'prototypeNote_v1':    `Ein Prototyp für Beratungshilfe*`,
    'cautionaryNote_v1':   `*Dieses Werkzeug ist ein Prototyp.  Bitte diesen Prototyp nicht benutzen, Ihre Entscheidungen fest zu machen.`,
    'toFirstInputPage_v1': `Beginnen`,
    'toAboutPage_v1':      `Mehr lernen`,
  },

  aboutPage: {
    'aboutPageHeader_v0': `Über dieses Cliff Effects Werkzeug`,

    'whatForHeader_v1':   `Wozu benutzt man dieses Werkzeug?`,
    'whatForImportantNote_v1': [
      {
        name: `__importantNote__`,
        text: `Wichtige Anmerkung: `,
      },
      `Diese Anwendung ist ein Minimum Viable Product (minimal überlebensfähiges Produkt). Sie sollte nicht als das einzige Werkzeug benutzt werden, um die SNAP- oder Section-8- (oder irgendein anderes Sozialhilfeprogramm-) finanzielle Situation eines Klienten zu verstehen.`,
    ],
    'whatFor_v2': [
      `Dieses Werkzeug kann zeigen helfen, wie eine Einkommensveränderung sich auf die Sozialhilfe von SNAP (Supplemental Nutrition Assistance Program = Programm für ergänzende Ernährungshilfe) und Section 8 Housing Voucher (= Wohnungsgutschein) auswirkt. Es wurde für die Sozialarbeiter an dem `,
      { name: `__projectHope__` },
      ` entworfen, um ihnen zu helfen, die Veränderungen von den Unterstützungen der Klienten vorherzusehen.`,
    ],

    'whyHeader_v1': `Warum ist dieses Werkzeug wichtig?`,
    'why1_v0':      `Ein Cliff Effect sich ereignet, als eine kleine Veränderung von der Situation eines Haushalts (z.B. eine oberflächliche Lohnerhöhung) den Wert der Unterstützung in einer unangemessenen Weise senkt. Die Familie arbeitet, um ihre Einkommen sich zu verbessern, aber am Ende bekommt sie einen Nettoverlust, der sie eigentlich in eine schwierigere Situation stellt. Diese Cliff Effects hindern viele Familien daran, das Bekommen von Sozialhilfe eigentlich zu enden.`,
    'why2_v0': `Die Cliff Effects sind schwer vorherzusehen. Die Interaktionen zwischen dem Einkommen, der Anzahl der Personen im Haushalt, vielen verschiedenen anderen Kriterien und den Auswirkungen der Programmen selbst haben Auswirkungen aufeinander in unerwarteten Weisen. Wir suchen Methoden, um dieses Problem sich mit der Komplexität zu befassen und den Familien zu helfen, ihre Situationen besser zu verstehen und vorherzusehen.`,

    'videoLinkText_v0':    `Ein zweiminutenlanges Video über Cliff Effects`,
    'quantLinkText_v0':    `Manche quantitative Szenarios, die Cliff Effects demonstrieren`,
    'benefitsLinkText_v1': `Eine Aufgliederung von verschiedenen Sozialhilfeprogrammen im Bundesstaat Massachusetts`,

    'howToUseHeader_v1': `Wie benutze ich dieses Werkzeug?`,
    'howtoUse_v0':       `Gehen Sie Schritt für Schritt, Informationen über eines Klienten gegenwärtigen Unterstützungen, Haushalt, Einkommen und andere wichtige Information in das Formular auszufüllen. Diese Informationen werden benutzt werden, um die ungefähre Unterstützung des Klienten vorherzusehen. Als Sie zum Ende kommen, wechseln Sie den Betrag vom 'Einkommen in Zukunft', um die daraus resultierende Veränderung des Unterstützungsbetrag zu sehen. Zu dieser Zeit können Sie Auswirkungen für die Programmen SNAP und Section 8 Housing Voucher sehen. Bitte bemerken Sie, daß die Vorhersagen sich vielleicht nicht direkt zu dem gegenwärtigen Unterstützungsbetrag eines Klienten passen. Das Ziel der Anwendung ist der Betrag von dem Unterstützungswechsel, das sich ereignet, als es manche Einkommenwechsel gibt.`,
    'howToUseNote_v1': [
      `Bitte bemerken Sie, daß diese Anwendung die Benutzerdaten nicht behaltet. `,
      {
        name: `__refreshWarning__`,
        text: `Wenn Sie die Webseite wieder aufnehmen, wird Ihre Daten verloren werden. `,
      },
      `Jedes Mal, wenn Sie die Anwendung verwenden, gibt die Anwendung Ihnen ein neues, leeres Formular.`,
    ],

    'whoMadeThisHeader_v1': `Wer entwickelt diese Anwendung?`,
    'whoMadeThis1_v0':      [
      `Diese Anwendung ist ein Teil eines Projektes, das möglich mit dem Geben einen Open Door Grant (Zuschuß) von der Stiftung Boston Foundation an das Center for Social Policy an der University of Massachusetts Boston ist. Das `,
      { name: `__centerForSocialPolicy__` },
      `, arbeitet mit den Organisationen `,
      { name: `__projectHope__` },
      ` und `,
      { name: `__codeForBoston__` },
      `. Das Center for Social Policy ist der Hauptpartner für das `,
      { name: `__onSolidGroundCoalition__` },
      `.`,
    ],
    'whoMadeThis2_v1': [
      `Die Codebasis wird auf `,
      { name: `__github__` },
      ` von den Freiwilligen von `,
      { name: `__codeForBoston__` },
      ` aufrechterhalten. Für weitere Auskunft oder einen Programmfehler zu melden, treten Sie bitte in Verbindung mit `,
      { name: `__contactEmail__` },
      `.`,
    ],
    'whoMadeThis3_v1': [
      `Wir möchten den folgenden Freiwilligen von Code for Boston besonders danken: `,
      { name: `__namesExceptLast__` },
      ` und `,  // Does German have commas?
                // Yes it does, and the rules are pretty specific.  My comma here was actually a mistake, so I’ve deleted it.
      { name: `__lastName__` },
      `.`,
    ],
  },

  visitPage: {
    'previous_v1':  `Vorherige Seite`,
    'next_v1':      `Nächste Seite`,
    'newClient_v1': `Neuer Klient`,

    stepBar: {
      'currentBenefits_v1': `Gegenwärtige Sozialhilfe`,
      'household_v1':       `Haushalt`,
      'currentIncome_v1':   `Einkommen`,
      'currentExpenses_v1': `Kosten (des Haushalts)`,
      'predictions_v1':     `Prognosen`,
    },

    formHelpers: {
      'weekly_v1':   `Wöchentlich`,
      'monthly_v1':  `Monatlich`,
      'yearly_v1':   `Jährlich`,
      'yesLabel_v1': `Ja`,
      'noLabel_v1':  `Nein`,
    },

    currentBenefits: {
      'currentBenefits_v1': `Gegenwärtige Sozialhilfe`,
      'selectBenefits_v0':  `Auswählen Sie jene Sozialhilfeprogrammen, die Sie in der Gegenwart bekommen.`, // ‘Sozialhilfen’ or ‘Sozialhilfeprogrammen’ ?
      'hasSection8_v0': {
        label: `Haben Sie Section 8 Housing?`,
        hint:  `Section 8 gibt Hilfe für die Miete`,
      },
      'hasSnap_v1': {
        label: `Haben Sie SNAP?`,
        hint:  `SNAP gibt Hilfe für das Essenkaufen`,
      },
    },

    household: {
      'title_v1':           `Haushalt`,
      'clarifier_v1':       `Daten über die Mitglieder von Ihrem Haushalt.`,
      'householdHeader_v1': `Haushalt`,
      'householdIntro_v1':  `Daten über die Mitglieder von Ihrem Haushalt.`,
      'role_v1':            `Rolle`,
      'age_v1':             `Alter`,
      'disabled_v1':        `Behindert`,
      'headOfHousehold_v1': `Haushaltsvorstand`,
      'addMember_v1':       `Fügen Sie ein Familienmitglied hinzu`,
      'spouse_v1':          `Ehepartner des Haushaltsvorstandes`,
      'childOther_v1':      `Kind/Anderes Haushaltsmitglied`,
      'previous_v1':        `Vorherige Seite`,
      'next_v1':            `Nächste Seite`,
    },

    currentIncome: {
      'title_v1':                  `Gegenwärtiges Haushaltseinkommen`,
      'clarifier_v1':              `Einkommen, das Sie in den vorherigen 12 Monaten bekommen haben.`,
      'explainSnapCalculation_v1': `Dieser Prototyp wird versuchen, seine eigenen Berechnungen für den SNAP-Betrag zu machen`,
      'earnedIncome_v0':           {
        label: `Einkommen von der Arbeit`,
        hint:  `Earned income is how much you and your family get paid from working`, // In German, this hint is already self-explanatory from the label
      },
      'TAFDC_v1': {
        label: `TAFDC`,
        hint:  `TAFDC (Transitional Aid to Families with Dependent Children = Übergangshilfe für Familien mit unselbständigen Kindern) ist ein Programm von dem Bundesstaat Massachusetts, das Familien mit Kindern während einer kurzen Zeit hilft`,
      },
      'SSI_v1': {
        label: `SSI`,
        hint:  `Supplemental Security Income (= zusätzliches Sicherheitseinkommen) ist ein Programm von der amerikanischen Bundesregierung, das finanzielle und medizinische Hilfe den Leuten gibt, die blind, behindert oder älter als 65 Jahre sind`,
      },
      'SSDI_v0': {
        label: `SSDI`,
        hint:  `Social Security Disability Income (= Sozialversicherung für den Behinderten) ist ein Programm von der amerikanischen Bundesregierung, das behinderten Leuten hilft`,
      },
      'childSupport_v1': {
        label: `Bekommene Kinderunterstützung`,
        hint:  `Kinderunterstützung ist Geld, das Ihr ehemaliger Ehepartner Ihnen gibt, um Ihre Kinder zu unterstützen`,
      },
      'unemployment_v0': {
        label: `Arbeitslosenunterstützung`, // -versicherung???
        hint:  `Arbeitslosenunterstützung hilft den Leuten, die ihre Arbeit verloren haben`,
      },
      'workersComp_v1': {
        label: `Arbeitsunfallversicherung`,
        hint:  `Arbeitsunfallversicherung hilft den Leuten, die einen Unfall bei der Arbeit haben`,
      },
      'pension_v1': {
        label: `Rente`,
        hint:  `Die Rente gibt den Rentnern ein Einkommen, das von den ehemaligen Arbeitgebern bezahlt wird`,
      },
      'socialSecurity_v0': {
        label: `Social security`,
        hint:  `Social Security (= Staatliche Rentenversicherung) ist ein Programm von der amerikanischen Bundesregierung, das den Rentnern die Einkommenshilfe gibt`,
      },
      'alimony_v1': {
        label: `Unterhaltszahlung`,
        hint:  `Unterhaltszahlung ist Geld, das eine Person der zweiten Person nach einer Ehescheidung bezahlt`,
      },
      'otherIncome_v1': {
        label: `Anderes Einkommen`,
        hint:  `Bitte bemerken Sie hier irgendwelches Einkommen aus anderen Quellen, die Sie nicht schon bemerkt haben`,
      },
    },

    currentExpenses: {
      'title_v1':                    `Gegenwärtige Haushaltskosten`,
      unreimbursedNonMedicalChildCare: {
        'sectionHeading_v0':    `Angemessene Kinderbetreuung, die nicht zurückgezahlte und nicht medizinische ist`,
        'subheading_v1':        `Ein "Kind" ist ein Mensch, der jünger als 12 Jahre ist. Bitte nicht einfügen Beträge, die andere Sozialprogrammen bezahlen.`,
        'columnExpenseType_v1': `Kosten`,
        'childDirectCare_v1':   {
          label: `Direkte Betreuungskosten`,
          hint:  `Wieviel bezahlen Sie aus Ihrer eigenen Tasche?`,
        },
        'childBeforeAndAfterSchoolCare_v1': {
          label: `Betreuungskosten für die Zeiten außerhalb der Schulzeit`,
          hint:  `Wieviel bezahlen Sie für die Kinderbetreuung für jene Zeiten außerhalb der Schulzeit?`,
        },
        'childTransportation_v1': {
          label: `Transportkosten`,
          hint:  `Wieviel bezahlen Sie für den Transport (der Kinder)?`,
        },
        'childOtherCare_v1': {
          label: `Andere Betreuungskosten`,
          hint:  `Wieviel bezahlen Sie für andere Kinderbetreuungskosten?`,
        },
        'doEarnBecauseOfChildCare_v1': `Gibt die Kinderbetreuung Ihnen die Möglichkeit, anderes Einkommen zu machen?`,
        'earnedBecauseOfChildCare_v0': `Einkommen, das die Kinderbetreuung möglich macht`,
      },
      childSupport: {
        'sectionHeading_v1':      `Kinderunterstützung`,
        'columnExpenseType_v1':   `Kosten`,
        'childSupportPaidOut_v1': {
          legallyObligated: `Gesetzlich verpflichtete`,
          childSupport:     ` Kinderunterstützung`,
        },
      },
      housing: {
        'sectionHeading_v1':      `Wohnung`,
        'monthlyContractRent_v1': {
          label: `Monatliche Vertragsmiete (die Gesamtmiete für Ihre Wohnung)`,
          hint:  `Die Gesamtmiete für Ihre Wohnung`,
        },
        'monthlyRentShare_v0': {
          label: `Ihrer monatliche Mietanteil (Wieviel Sie von der Gesamtmiete bezahlen müssen)`,
          hint:  `Wieviel müssen Sie von der Gesamtmiete bezahlen?`,
        },
        'utilitiesSubheading_v1': `Für welche Rechnungen bezahlen Sie?`,
        'climateControl_v0':      {
          label: `Die Heizung oder das Kühlsystem (z.B. die Klimaanlage im Sommer)`,
          hint:  `Wieviel bezalhen Sie, wenn Sie eine gesonderte Rechnung für die Heizung und/oder das Kühlsystem haben?`, 
        },
        'nonHeatElectricity_v1': {
          label: `Stromrechnung für die Zwecke außer der Heizung`,
          hint:  `Wieviel bezahlen Sie für irgendwelche Stromrechnung (außer der Stromrechnung für die Heizung)`,
        },
        'phone_v1': {
          label: `Der Telefondienst`,
          hint:  `Wieviel bezahlen Sie für den grundlegenden Telefondienst?`,
        },
        'fuelAssistance_v1': {
          labelText: `Bekommen Sie Treibstoffunterstützung?`,
          hint:      `Die Treibstoffunterstützung hilft Ihnen mit den Erdgas- oder Ölkosten`,
        },
      },
    },

    predictions: {},
  },
};


