// src/pages/WineList.jsx
import React from 'react';

const wines = [
    {
      id: 1,
      name: "DATTILO Val Di Neto Rosso IGT",
      Cantina: "Ceraudo",
      image: "https://www.ceraudo.it/wp-content/uploads/dattilo.jpg",
      description:
        "Il Dattilo di Ceraudo è un vino rosso che esprime con fierezza l’anima della Calabria. Viene prodotto nell’omonima contrada da uve autoctone di Gaglioppo coltivate in regime biologico e affina per 18 mesi in botti di rovere.",
      price: "€45,00",
      quantity: 40,
    },
    {
      id: 2,
      name: "ALAEI BIO – DOP CIRÒ BIANCO",
      Cantina: "Senatore",
      image:
        "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMTElMkZBbGFlaS1CSU9sb2dvLmpwZyZjYWNoZU1hcmtlcj0xNjkyOTU0MDQ1LTE2NDk4JnRva2VuPTgyNzgzZGQwODZhOTU1MmY.q.jpg",
      description:
        "Nel nome la dedica al Dio mito Apollo, il cui tempio è situato laddove sorgeva l’antica città di Krimisa. Ottenuto da uve Greco bianco biologiche, cultivar antica arrivata a noi in epoca magno greca. La selezione e la raccolta rigorosamente a mano, seguite da un’accurata vinificazione, fanno esprimere a questo antico vitigno profumi, sapori e colori importanti. Abbinare con primi piatti delicati, carni bianche e pesce. Servire ad una temperatura di 10-12 °C. Conservare in un luogo fresco per non modificare il bouquet.",
      price: "€20,00",
      quantity:10
    },
    {
      id: 3,
      name: "ALIKIA BIO – IGP BIANCO",
      Cantina: "Senatore",
      image:
        "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDYlMkZBbGlraWEtQklPbG9nby02MDB4NjAwLmpwZyZjYWNoZU1hcmtlcj0xNzA5MDU5NjYyLTE0OTY3JnRva2VuPTI2MzIyMzhmYTIxNzBmZGM.q.jpg",
      description:
        "Racchiude il simposio tra un vitigno autoctono, il Greco bianco, ed un vitigno alloctono nordico, il Traminer. Le uve sono raccolte rigorosamente a mano e coltivate biologicamente con ridotta produzione per ceppo nei nostri vigneti. Un vino dal colore tenue, fresco e fruttato con sentori floreali. Per la sua delicatezza ed eleganza è dedicato a palati qualificati, si abbina ai piatti freschi della cucina mediterranea e ad antipasti leggeri.Servire ad una temperatura di 10-12 °C. Conservare in un luogo fresco per non modificare il bouquet.",
      price: "€28,00",
      quantity: 20
    },
  
    {
      id: 4,
      name: "SILÒ BIO – IGP  BIANCO",
      Cantina: "Senatore",
      image:
        "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDYlMkZTaWwlMjVDMyUyNUIyLUJJTy1sb2dvLTYwMHg2MDAuanBnJmNhY2hlTWFya2VyPTE3MDkwNTk2NjItMTUwOTkmdG9rZW49ZmIzMDFkZjY5MzFlNWQ2ZQ.q.jpg",
      description:
        "Nella fonetica ricorda il nome del territorio, ma nella sostanza racchiude l’insieme di cultivar autoctone, alloctone nazionali ed internazionali. Prodotto da uve Chardonnay, Sauvignon Blanc, Incrocio Manzoni e Greco bianco, coltivate biologicamente con ridotta produzione per ceppo nei nostri vigneti. La selezione e la raccolta rigorosamente a mano, seguite da un’attenta vinificazione e da un breve affinamento in botti di media grandezza, ne fanno un vino di pregio. Colore con riflessi dorati, profumo intenso e fruttato, gusto pieno e morbido, rappresentano le particolarità distintive inconfondibili del Silò. Si abbina egregiamente con piatti a base di pesce, primi delicati e carni bianche.Servire ad una temperatura di 10-12 °C.",
      price: "€30,00",
    },
    {
      id: 5,
      name: "PUNTALICE BIO – DOP CIRÒ ROSATO",
      Cantina: "Senatore",
      image:
        "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDYlMkZQdW50YWxpY2UtQklPLWxvZ28tNjAweDYwMC5qcGcmY2FjaGVNYXJrZXI9MTcwOTA1OTY2Mi0xNDMxMCZ0b2tlbj02MmQ5NmQ3NGU1ZTMwYTdl.q.jpg",
      description:
        "Il Puntalice rappresenta la tradizione dei vini della nostra Famiglia ed è quello che, negli anni, ha ricevuto maggiori riconoscimenti in tutto il Mondo. Ottenuto da uve Gaglioppo biologiche, coltivate con ridotta produzione per ceppo nei nostri vigneti in Cirò. La selezione e la raccolta rigorosamente a mano, seguite da un’attenta vinificazione, ne fanno un vino di pregio. Colore “rosa petalo”, profumo intenso e floreale, gusto pieno, caldo, morbido e persistente.Servire ad una temperatura di 12-14 °C con primi piatti leggeri, a base di pesce e carni bianche.Conservare in un luogo fresco per non modificare il bouquet.",
      price: "€25,00",
    },
    {
      id: 6,
      name: "ARCANO BIO – DOP CIRÒ ROSSO",
      Cantina: "Senatore",
      image:
        "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDclMkZBcmNhbm8tQklPbG9nby02MDB4NjAwLmpwZyZjYWNoZU1hcmtlcj0xNjkyOTU0MDQ1LTgwMjcmdG9rZW49NjdmZThhZjdlZGRkYzIzNQ.q.jpg",
      description:
        "Ottenuto da uve Gaglioppo biologiche, coltivate con ridotta produzione per ceppo nei nostri vigneti in Cirò.La selezione e la raccolta rigorosamente a mano, seguite da un’attenta vinificazione e da un accurato affinamento in botti di media grandezza, ne fanno un vino dal colore rosso con riflessi tendenti al granato; un profumo speziato ed un gusto pieno, morbido ed equilibrato.Servire ad una temperatura di 18-20 °C con i primi piatti della cucina mediterranea e secondi piatti di carne ed arrosti.",
        price: "€45,00"
    },
    {
        id: 6,
        name: "Cassiodoro- ROSSO",
        Cantina: "Senatore",
        image:
          "https://www.senatorevini.com/home/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGd3d3LnNlbmF0b3JldmluaS5jb20lMkZob21lJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE4JTJGMDYlMkZDYXNzaW9kb3JvLVNlbmF0b3ItNjAweDYwMC5qcGcmY2FjaGVNYXJrZXI9MTcwOTA1OTY2Mi0xMjIyOSZ0b2tlbj1kNDdlYTFmODgyMzRlZGFi.q.jpg",
        description:
          "Ottenuto da uve Gaglioppo biologiche, coltivate con ridotta produzione per ceppo nei nostri vigneti in Cirò.La selezione e la raccolta rigorosamente a mano, seguite da un’attenta vinificazione e da un accurato affinamento in botti di media grandezza, ne fanno un vino dal colore rosso con riflessi tendenti al granato; un profumo speziato ed un gusto pieno, morbido ed equilibrato.Servire ad una temperatura di 18-20 °C con i primi piatti della cucina mediterranea e secondi piatti di carne ed arrosti.",
          price: "€55,00"
      },

      {
        id: 7,
        name: "Cires - DOC Rosso",
        Cantina: "Masseria Falvo",
        image:
          "https://enotecaagusto.com/wp-content/uploads/2020/11/cires-510x510.jpg",
        description:
          "DOC Terre di Cosenza - BIOLOGICO - bianco - Malvasia - subzona Pollino Vino biologico. Ottenuto da un vitigno autoctono di Malvasia Bianca coltivato alle falde del Pollino, nel territorio di Saracena. Lasciato ad affinare per 9 mesi sulle fecce fini, viene commercializzato dopo 12 mesi.",
          price:"€25,00"
      },

    {
      id: 7,
      name: "SPART  - BIO  - Bianco",
      Cantina: "Masseria Falvo",
      image:
        "https://enotecaagusto.com/wp-content/uploads/2020/04/Spart_Masseria_Falvo-1.jpg",
      description:
        "DOC Terre di Cosenza - BIOLOGICO - bianco - Malvasia - subzona Pollino Vino biologico. Ottenuto da un vitigno autoctono di Malvasia Bianca coltivato alle falde del Pollino, nel territorio di Saracena. Lasciato ad affinare per 9 mesi sulle fecce fini, viene commercializzato dopo 12 mesi.",
        price:"€25,00"
    },
    {
      id: 8,
      name: "DONNA FILOMENA  - BIO -  Bianco",
      Cantina: "Masseria Falvo",
      image:
        "https://static.wixstatic.com/media/55f913_580abd64a6b0496391e201fa664a8c42~mv2.webp/v1/fill/w_488,h_667,al_c,lg_1,q_80,enc_auto/55f913_580abd64a6b0496391e201fa664a8c42~mv2.webp",
      description:
        "DOC Terre di Cosenza - BIOLOGICO - bianco - Guarnaccia- subzona Pollino Vino biologico. Ottenuto da un vitigno autoctono di Guarnaccia Bianca coltivato alle falde del Pollino, nel territorio di Saracena. Lasciato ad affinare per 9 mesi sulle fecce fini, viene commercializzato dopo 12 mesi.",
        price:"€30,00"
    },
    {
      id: 9,
      name: "PIRCOCA -  BIO  - Bianco",
      Cantina: "Masseria Falvo",
      image:
        "https://static.wixstatic.com/media/55f913_ebaa57bb776440dcb732da660a61ee1c~mv2.webp/v1/fill/w_468,h_724,al_c,lg_1,q_80,enc_auto/55f913_ebaa57bb776440dcb732da660a61ee1c~mv2.webp",
      description:
        "DOC Terre di Cosenza  - BIOLOGICO - subzona Pollino - biancoVino biologico. Ottenuto da vigne coltivate alle falde del Pollino, E’ un blend a base dell’autoctono Guarnaccia 60% e con Malvasia, Riesling, Traminer, Moscatello di Saracena. Lasciato ad affinare per 9 mesi sulle fecce fini, viene commercializzato dopo 12 mesi.",
        price:"€25,00"
    },
    {
      id: 10,
      name: "GRANETA  - BIO - Rosso",
      Cantina: "Masseria Falvo",
      image:
        "https://static.wixstatic.com/media/55f913_d57b053dc5574ebcb38309989b54bf52~mv2.webp/v1/fill/w_468,h_743,al_c,lg_1,q_80,enc_auto/55f913_d57b053dc5574ebcb38309989b54bf52~mv2.webp",
      description:
        "Vino biologico. Ottenuto da un vitigno autoctono di Magliocco Dolce coltivato alle falde del Pollino e vinificato in purezza, dopo lunga macerazione viene affinato in tonneax di rovere francese per 6 mesi e, successivamente in acciaio per almeno 18 mesi. Resta ad affinare in bottiglia almeno altri 6 mesi prima di essere messo in commercio.",
        price:"€25,00"
    },
    {
      id: 11,
      name: "CJVIZ  - BIO -  Rosato",
      Cantina: "Masseria Falvo",
      image:
        "https://static.wixstatic.com/media/55f913_053f9b9500eb4a9daf8728a42535fc10~mv2.webp/v1/fill/w_457,h_750,al_c,lg_1,q_80,enc_auto/55f913_053f9b9500eb4a9daf8728a42535fc10~mv2.webp",
      description:
        "DOC Terre di Cosenza - BIOLOGICO - rosato - Subzona Pollino - Magliocco Dolce 100%      Vino biologico. Ottenuto da un vitigno autoctono di Magliocco Dolce coltivato alle falde del Pollino, nel territorio di Saracena. Gli acini subiscono una pressatura molto soffice, limitando l'estrazione del colore e dei tannini. Dal mosto fiore così ottenuto, ne deriva un vino dal colore rosa lampone. Commercializzato dopo 6 mesi.",
        price:"€20,00"
    },
    {
      id: 12,
      name: "Solenero di Spadafora Calabria IGP",
      Cantina: "Spadafora",
      image:
        "https://spadafora1915.it/wp-content/uploads/2023/01/Progetto-senza-titolo-7.png",
      description:
        "Solenero è una simbologia che descrive una eclissi solare, in questi rari eventi i raggi solari ostruiti dalla presenza della luna, non ci riscaldano più; nelle medesime circostanze il vino rosso, quando lo si serve freddo non ci riscalda più, anzi ci rinfresca. Da questa similitudine scaturisce il nome per il nostro unico vino rosso che può essere servito freddo scaturisce il nome per il nostro unico vino rosso che può essere servito freddo.Ottimo fuoripasto, l’abbinamento ideale è con i piatti a base di pesce, anche crudo come sushi e sashimi, bene comunque anche con i salumi, tipici della tradizione regionale.",
        price:"€25,00"
    },
    {
      id: 13,
      name: "Rosaspina Greco Nero IGP",
      Cantina: "Spadafora",
      image: "https://spadafora1915.it/wp-content/uploads/2023/01/rosaspina.png",
      description:
        "100% Greco Nero, Alla vista il vino si presenta di colore rosa cipria scarico, con delicati riflessi rubino tendenti al porpora. Bouquet caratteristico, intenso e persistente il bouquet floreale, nel finale evidenti e piacevoli note agrumate.Al palato è un vino delicato, fresco, buona acidità, morbido ed accogliente, accennato retrogusto amarognolo.Particolarmente indicato con i primi piatti di pesce, zuppe di crostacei, ottimo l’abbinamento con un tagliere di salumi e formaggi poco stagionati.",
        price:"€25,00"
    },
    {
      id: 14,
      name: "Lunapiena di Spadafora DOP",
      Cantina: "Spadafora",
      image:
        "https://www.enotecalacantinetta.com/wp-content/uploads/2020/10/lunapiena-di-spadafora-terre-di-cosenza-dop.jpeg",
      description:
        "Lunapiena di Spadafora vino calabrese premiato come miglior vino bianco calabrese nel 2019, prodotto sulle splendide colline di Donnici, a sud della città di Cosenza, in terra di Calabria. Si ottienne da vinificazione notturna, di uve Greco, Malvasia e Mantonico, coltivate ad alberello. Vino bianco dai riflessi dorati, al naso è complesso, nette le note di frutta esotica, leggermente speziato, in bocca è fresco, secco e vellutato. Pronto da bere subito, ideale come aperitivo o con antipasti e piatti a base di pesce.",
        price:"€30,00"
    },
    {
      id: 15,
      name: "Pandosia 2023 Calabria Bianco IGT",
      Cantina: "Spadafora",
      image:
        "https://www.enotecalacantinetta.com/wp-content/uploads/2022/05/pandosia-calabria-bianco-igt-spadafora-510x510.jpg",
      description:
        "Prodotto da uve Pecorello della Cantina Spadafora, vinificate in purezza da cui si ottiene questo vino bianco unico, in produzione limitata. La sua particolarità è la vigna ad alberello di antica data, l’uva veniva utilizzata come uva da taglio nei vini TOP di gamma. Con la vendemmia 2021 Ippolito Spadafora ha deciso di vinificarlo in purezza. Eccellente aperitivo, il Pandosia è abbinamento ideale della cucina marinara, ottimo con un semplice spaghetto alle vongole veraci oppure degustato con una delicata grigliata di pescato locale.",
        price:"€30,00"
    },
    {
      id: 15,
      name: "MONAMOUR BIANCO FRIZZANTE",
      Cantina: "Spadafora",
      image:
        "https://www.eurodrinkcalabria.it/ProductsResources/672/VINSPA013_0_pr.jpeg?1675206477",
      description:
        "Prodotto da uve Pecorello della Cantina Spadafora, vinificate in purezza da cui si ottiene questo vino bianco unico, in produzione limitata. La sua particolarità è la vigna ad alberello di antica data, l’uva veniva utilizzata come uva da taglio nei vini TOP di gamma. Con la vendemmia 2021 Ippolito Spadafora ha deciso di vinificarlo in purezza. Eccellente aperitivo, il Pandosia è abbinamento ideale della cucina marinara, ottimo con un semplice spaghetto alle vongole veraci oppure degustato con una delicata grigliata di pescato locale.",
        price:"€25,00"
    },
    {
      id: 15,
      name: " Madreperla Bianco Vino Spumante Brut ",
      Cantina: "Spadafora",
      image:
        "https://shop.lacosentina.com/cdn/shop/products/vino-spumante-brut-madreperla-bianco-spadafora-912731_720x.jpg?v=1620848790",
      description:
        "Prodotto da uve Pecorello della Cantina Spadafora, vinificate in purezza da cui si ottiene questo vino bianco unico, in produzione limitata. La sua particolarità è la vigna ad alberello di antica data, l’uva veniva utilizzata come uva da taglio nei vini TOP di gamma. Con la vendemmia 2021 Ippolito Spadafora ha deciso di vinificarlo in purezza. Eccellente aperitivo, il Pandosia è abbinamento ideale della cucina marinara, ottimo con un semplice spaghetto alle vongole veraci oppure degustato con una delicata grigliata di pescato locale.",
        price:"€25,00"
    },
    {
      id: 15,
      name: " MADREPERLA ROSATO SPADAFORA ",
      Cantina: "Spadafora",
      image:
        "https://www.eurodrinkcalabria.it/ProductsResources/1002/SPUSPA004_0_pr.jpeg?1698880261",
      description:
        "Prodotto da uve Pecorello della Cantina Spadafora, vinificate in purezza da cui si ottiene questo vino bianco unico, in produzione limitata. La sua particolarità è la vigna ad alberello di antica data, l’uva veniva utilizzata come uva da taglio nei vini TOP di gamma. Con la vendemmia 2021 Ippolito Spadafora ha deciso di vinificarlo in purezza. Eccellente aperitivo, il Pandosia è abbinamento ideale della cucina marinara, ottimo con un semplice spaghetto alle vongole veraci oppure degustato con una delicata grigliata di pescato locale.",
        price:"€20,00"
    },


    {
      id: 16,
      name: "Quattro Lustri DOP Rosso ",
      Cantina: "Serracavallo",
      image:
        "https://shop.lacosentina.com/cdn/shop/products/vino-quattro-lustri-terre-di-cosenza-dop-rosso-serracavallo-460706_720x.jpg?v=1657189752",
      description:
        "L’idea di questo vino era fare un rosso da solo magliocco ma di pronta beva. Il nome celebra i 20 anni dell’azienda Serracavallo ed i quattro cloni di magliocco esistenti in azienda.Un vino dalla bevibilità disarmante, si presenta con un colore rosso violaceo compatto, con profumi di spezie dolci, frutta nera e caffè. In bocca dona il meglio di se, pieno succoso, tannini setosi come piuma, grande bevibilità e “ souplesse “, polpa, invitante, un sorso invita al successivo.Questi sono vini mediterranei, solari, buona l’acidità in sottofondo quasi impercettibile ma presente, i 600 mt di altitudine dei vigneti assicurano una ottima escursione termica, uve sane con il giusto grado di maturazione ed acidità allo stesso tempo.Pronto da bere subito, ma se riposa in bottiglia renderà al meglio. Ottimo con primi a base di carne o verdure, secondi di carne, arrosti, grigliate o salumi e formaggi semistagionati.",
        price:"€20,00"
    },
    {
      id: 38,
      name: "Sette Chiese",
      Cantina: "Serracavallo",
      image:"https://www.enotecalacantinetta.com/wp-content/uploads/2020/06/sette-chiese-di-serracavallo-terre-di-cosenza-rosso-dop-540x540.png",
      description:
        "Bianco robusto dal bel colore giallo paglierino. Molto profumato ai frutti a pasta bianca, mandorla e frutta secca, si sente il passaggio in legno. Bocca piena e intensa e di grande spessore. Uve vinificate separatamente,  in serbatoi di acciaio termocondizionati con pressatura soffice.Vino perfetto per piatti di pesce importanti e anche grassi, fritture, carne bianca, uova, formaggi a pasta molle.",
        price:"€20,00"
    },
    {
      id: 21,
      name: "Don Filì",
      Cantina: "Serracavallo",
      image:
        "https://www.fishandwine-store.it/1650-side_product_default/don-fili-.jpg",
      description:
        "Bianco robusto dal bel colore giallo paglierino. Molto profumato ai frutti a pasta bianca, mandorla e frutta secca, si sente il passaggio in legno. Bocca piena e intensa e di grande spessore. Uve vinificate separatamente,  in serbatoi di acciaio termocondizionati con pressatura soffice.Vino perfetto per piatti di pesce importanti e anche grassi, fritture, carne bianca, uova, formaggi a pasta molle.",
        price:"€30,00"
    },
  ];

const WineList = () => {
  return (
    <div className="wine-list">
      <h2>Carta dei Vini</h2>
      <div className="wine-cards">
        {wines.map(wine => (
          <div key={wine.id} className="wine-card">
            <img src={wine.image} alt={wine.name} className="wine-image" />
            <h3>{wine.name}</h3>
            <h4>{wine.Cantina}</h4>
            <p>{wine.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineList;
