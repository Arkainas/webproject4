const articles = [
    {
      title: "Inte klart med ersättare för Ribbenvik",
      summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
      link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Drogs in i inhägnad – dödades av 40 krokodiler",
      summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm, enligt…",
      link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
      published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      topic: ["Ekonomi"]
    },
    {
      title: "Regionpolitiker: Mer stöd från staten behövs",
      summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.",
      link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["Politik"]
    },
    {
      title: "Två avlidna hittade i bostad i Sandviken",
      summary: "▸ En man och en kvinna har hittats avlidna i en bostad i Sandviken, skriver polisen på sin hemsida. Dödsorsaken är oklar.",
      link: "https://www.aftonbladet.se/nyheter/a/dwPPP1/tva-avlidna-hittade-i-bostad-i-sandviken",
      published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      topic: ["Miljo"]
    },
    {
      title: "Inte klart med ersättare för Ribbenvik",
      summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
      link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Drogs in i inhägnad – dödades av 40 krokodiler",
      summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm, enligt…",
      link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
      published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Regionpolitiker: Mer stöd från staten behövs",
      summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.",
      link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["Politik"]
    },
    {
      title: "Två avlidna hittade i bostad i Sandviken",
      summary: "▸ En man och en kvinna har hittats avlidna i en bostad i Sandviken, skriver polisen på sin hemsida. Dödsorsaken är oklar.",
      link: "https://www.aftonbladet.se/nyheter/a/dwPPP1/tva-avlidna-hittade-i-bostad-i-sandviken",
      published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Inte klart med ersättare för Ribbenvik",
      summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
      link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["Religion"]
    },
    {
      title: "Drogs in i inhägnad – dödades av 40 krokodiler",
      summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm, enligt…",
      link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
      published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      topic: ["Ekonomi"]
    },
    {
      title: "Regionpolitiker: Mer stöd från staten behövs",
      summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.",
      link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["Politik"]
    },
    {
      title: "Två avlidna hittade i bostad i Sandviken",
      summary: "▸ En man och en kvinna har hittats avlidna i en bostad i Sandviken, skriver polisen på sin hemsida. Dödsorsaken är oklar.",
      link: "https://www.aftonbladet.se/nyheter/a/dwPPP1/tva-avlidna-hittade-i-bostad-i-sandviken",
      published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      topic: ["Idrott"]
    },
    {
      title: "Inte klart med ersättare för Ribbenvik",
      summary: "▸ Regeringen och SD har ännu inte hittat någon ersättare för Migrationsverkets avgående generaldirektör Mikael Ribbenvik.",
      link: "https://www.aftonbladet.se/nyheter/a/8JWWL2/inte-klart-med-ersattare-for-ribbenvik",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Drogs in i inhägnad – dödades av 40 krokodiler",
      summary: "▸ En 72-årig man har dödats av omkring 40 krokodiler sedan han dragits in i en inhägnad på familjens reptilfarm, enligt…",
      link: "https://www.aftonbladet.se/nyheter/a/bgWW6e/drogs-in-i-inhagnad-dodades-av-40-krokodiler",
      published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      topic: ["SamhalleKonflikter"]
    },
    {
      title: "Regionpolitiker: Mer stöd från staten behövs",
      summary: "▸ Regeringen behöver skjuta till pengar för att välfärden inte ska drabbas drastiskt.",
      link: "https://www.aftonbladet.se/nyheter/a/y6XXyR/regionpolitiker-mer-stod-fran-staten-behovs",
      published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      topic: ["Politik"]
    }
  ];
  