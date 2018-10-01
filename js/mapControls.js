// Source is provided by AmCharts.com
var map = AmCharts.makeChart("chartdiv", {
  // All chart attributes are in JSON format
  "type": "map",
  // Map specific details
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true,
    // Data retreived from various travelling websites
    "areas": [{
      // Call assigned ID attribute from AmCharts.maps
      // Assign each ID with its own key:values

      // Self note: Putting Values in [brackets] works for Restaurants, Hotels, Landmarks. Test by calling array index using a defined function in future
      "id": "AE",
      "country": "United Arab Emirates",
      "population": "6,072,475",
      "information": "An Arabian Penisula nation settled along the Persian Gulf. The UAE is notorious for its jaw dropping buildings.",
      "restaurants": "The Gallery, The Kitchen, Azure Beach",
      "hotels": "First Central Hotel Suites, Arabian Park Hotel, Citymax Hotels Bur Dubai",
      "landmarks": "Burj Khalifa, Sheikh Zayed Mosque, Dubai Atlantis Aquaventure Waterpark"
    }, {
      "id": "AF",
      "country": "Afghanistan",
      "population": "34,124,812",
      "information": "A landlocked country located within South Asia and bordered by Pakistan, Iran, Turkmenistan, Uzbekistan, and Tajikistan.",
      "restaurants": "Sufi, Kabul Star Hotel & Restaurant, Cafe Zarnegar",
      "hotels": "Kabul Serena Hotel, Nazary Star Hotel, Darya Village Hotel & Business Park",
      "landmarks": "Blue Mosque, Babur Tomb, Remains of the Bamiyan Valley"
    }, {
      "id": "AL",
      "country": "Albania",
      "population": "3,047,987",
      "information": "A small country that retains many castles and achaelogical sites from past times.",
      "restaurants": "Mullixhiu, Ristorante San Giorgio al Porto, Blu Mare",
      "hotels": "Theranda Hotel, Vila Alba, Paradise Beach Hotel",
      "landmarks": "Syri i Kalter, Osum Gorge, Apollonia"
    }, {
      "id": "AM",
      "country": "Armenia",
      "population": "3,045,191",
      "information": "One of the earliest Christian civilizations to establish churches during the fourth century.",
      "restaurants": "MOZAIC Sky Restaurant, La Fayette Restaurant, Tumanyan Khinkali",
      "hotels": "ibis Yerevan Center Hotel, Tufenkian Historic Yerevan Hotel, Tsaghkadzor Marriott Hotel",
      "landmarks": "Republic Square, Monastery Sevanavank, The Monastery of Geghard"
    }, {
      "id": "AO",
      "country": "Angola",
      "population": "29,310,272",
      "information": "Angola is a South African country that contains a tropical terrains and beaches with the addition of a system of rivers.",
      "restaurants": "Restaurant Pimms, Chill Out, Nikki's House Restaurant",
      "hotels": "IU Hotel Luanda Viana, Ibis Style IU Luanda Cacuaco Hotel, Luna Hotel Zombo",
      "landmarks": "Iguazu National Park, Kalandua Falls, Musslo Beach"
    }, {
      "id": "AR",
      "country": "Argentina",
      "population": "44,293,292",
      "information": "Information Text",
      "restaurants": "The Argentine Experience, La Popular de San Telmo, La Cabrera",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "AT",
      "country": "Austria",
      "population": "8,754,413",
      "information": "Information Text",
      "restaurants": "Loca, Griechenbeisl, Casin Restaurant Wien, ",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "AU",
      "country": "Australia",
      "population": "23,232,412",
      "information": "Australia is super cool but also super hot",
      "restaurants": "Momofuku Seiobo, Bennelong Restaurant, Quay Restaruant Sydney",
      "hotels": "Bedarra Island Resort, Ovolo Woolloomooloo Hotel, Park Hyatt Sydney",
      "landmarks": "Sydney Opera House, Great Barrier Reef, Great Ocean Road"
    }, {
      "id": "AZ",
      "country": "Azerbaijan",
      "population": "9,961,396",
      "information": "Information Text",
      "restaurants": "Shirvanshah Museum Restaurant, Scalini Italian Restaurant, Mari Vanna",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BA",
      "country": "Bosnia and Herzegovina",
      "population": "3,856,181",
      "information": "Information Text",
      "restaurants": "Dveri Restaurant, Mala Kuhinja, Avlija Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BD",
      "country": "Bangladesh",
      "population": "157,826,576",
      "information": "Information Text",
      "restaurants": "Izumi Japanese Kitchen, New Handi Restaurant, The Exchange Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BE",
      "country": "Belgium",
      "population": "11,491,346",
      "information": "Information Text",
      "restaurants": "Restaurant le Rabassier, Bia Mara Restaurant, Tonton Garby",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BF",
      "country": "Burkina Faso",
      "population": "20,107,508",
      "information": "Information Text",
      "restaurants": "Le Verdoyant, La Perle, Le Coq Bleu",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BG",
      "country": "Bulgaria",
      "population": "7,101,510",
      "information": "Information Text",
      "restaurants": "Talents Restaurant, Moma Bulgarian Food & Wine, Magnolia",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BI",
      "country": "Burundi",
      "population": "11,466,756",
      "information": "Information Text",
      "restaurants": "Bora Bora Beach Club Restaurant, Pasta Comedia, Restaurant Tanganyika",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BJ",
      "country": "Benin",
      "population": "11,038,805",
      "information": "Information Text",
      "restaurants": "Dream Beach, L'Impala, Le Privé Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BN",
      "country": "Brunei Darussalam",
      "population": "443,593",
      "information": "Information Text",
      "restaurants": "Kaizen Sushi, I-Lotus Restaurant, Danes Cafe",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BO",
      "country": "Bolivia",
      "population": "11,138,234",
      "information": "Information Text",
      "restaurants": "Bolivian Popular Food, Chalet la Suisse, Cafe del Mundo",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BR",
      "country": "Brazil",
      "population": "207,353,392",
      "information": "Information Text",
      "restaurants": "Restaurante Olympe, CT Broucherie, Mocotó",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BS",
      "country": "Bahamas",
      "population": "329,988",
      "information": "Information Text",
      "restaurants": "Poop Deck Restaurant, Café Matisse, Rock House Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BT",
      "country": "Bhutan",
      "population": "758,288",
      "information": "Information Text",
      "restaurants": "San Maru Restaurant, Babesa Village Restaurant, Zombala 2",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BW",
      "country": "Botswana",
      "population": "2,214,858",
      "information": "Information Text",
      "restaurants": "Main Deck Restaurant, Marc's Eatery, Bascilico Italian Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BY",
      "country": "Belarus",
      "population": "9,549,747",
      "information": "Information Text",
      "restaurants": "Vasilki Restaurant, Bistro de Luxe, Tiflis Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "BZ",
      "country": "Belize",
      "population": "360,346",
      "information": "Information Text",
      "restaurants": "Celebrity Restaurant & Bar, Bird Isle Restaurant, Riverside Tavern",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CA",
      "country": "Canada",
      "population": "35,623,680",
      "information": "Information Text",
      "restaurants": "Five Sails Restaurant, Raymonds Restaurant, Hardware Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CD",
      "country": "Democratic Republic of Congo",
      "population": "83,301,152",
      "information": "Information Text",
      "restaurants": "Le Chalet, Chez Flore, Le Cercle Gourmand",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CF",
      "country": "Central African Republic",
      "population": "5,625,118",
      "information": "Information Text",
      "restaurants": "Carré Gourmand, Relais des Chasses, L'Escale",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CG",
      "country": "Republic of Congo",
      "population": "4,954,674",
      "information": "Information Text",
      "restaurants": "Mami Wata, Restaurant d'Vins, La Perla",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CH",
      "country": "Switzerland",
      "population": "8,236,303",
      "information": "Information Text",
      "restaurants": "Kronenhalle, IZUMI Restaurant, Restaurant Essort",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CI",
      "country": "CÃ´te d'Ivoire",
      "population": "24,905,843",
      "information": "Information Text",
      "restaurants": "La Case Bleue, Restaurant Saakan, Villa Savoia",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CL",
      "country": "Chile",
      "population": "17,789,268",
      "information": "Information Text",
      "restaurants": "Jewel of India, Boragó, Bocanáriz",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CM",
      "country": "Cameroon",
      "population": "24,994,884",
      "information": "Information Text",
      "restaurants": "Restaurant Kajazoma, IYA Restaurant, L'Ovalie",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CN",
      "country": "China",
      "population": "1,379,302,784",
      "information": "Information Text",
      "restaurants": "Noodle House, Hanuman, Dian Dou De",
      "hotels": "",
      "landmarks": ""
    },  {
      "id": "CO",
      "country": "Colombia",
      "population": "47,698,524",
      "information": "Information Text",
      "restaurants": "Matiz, Restaurant Fulanitos, Mini Mal",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CR",
      "country": "Costa Rica",
      "population": "4,930,258",
      "information": "Information Text",
      "restaurants": "La Luz Restaurant, Tin Jo Asian Restaurant, La Pecora Nera Ristorante",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CU",
      "country": "Cuba",
      "population": "11,147,407",
      "information": "Information Text",
      "restaurants": "Restaurant La Casa, La Guarida Restaurant, Fontana",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CY",
      "country": "Cyprus",
      "population": "1,189,085",
      "information": "Information Text",
      "restaurants": "Pyxida Fish Tavern, Fanous Lebanese Restaurant, Sienna Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "CZ",
      "country": "Czech Republic",
      "population": "10,674,723",
      "information": "Information Text",
      "restaurants": "Soul Bistro, Restaurance Bellevue, Blue Wagon Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "DE",
      "country": "Germany",
      "population": "80,594,016",
      "information": "Information Text",
      "restaurants": "Aqua Restaurant, Marjellchen, Restaurant Schlossgarten",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "DJ",
      "country": "Djibouti",
      "population": "865,267",
      "information": "Information Text",
      "restaurants": "Melting Pot Restaurant Djibouti, Café de la Gare, Mukbassa Central Chez Youssouf",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "DK",
      "country": "Denmark",
      "population": "5,605,948",
      "information": "Information Text",
      "restaurants": "The Standard, Kokkeriet, Noma Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "DO",
      "country": "Dominican Republic",
      "population": "10,734,247",
      "information": "Information Text",
      "restaurants": "Nam Nam, Jellyfish Restaurant, El Mesón de la Cava Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "DZ",
      "country": "Algeria",
      "population": "40,969,444",
      "information": "Information Text",
      "restaurants": "Caracoya, Restaurant Le Bearnais, Burger Bar Gourmet Bugers",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "EC",
      "country": "Ecuador",
      "population": "16,390,913",
      "information": "Information Text",
      "restaurants": "Zazu, Martinica, URKO Cocina Local",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "EE",
      "country": "Estonia",
      "population": "1,251,581",
      "information": "Information Text",
      "restaurants": "Restoran Sardiinid, Restaurant MEKK, Horisont Restaurant & Bar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "EG",
      "country": "Egypt",
      "population": "97,041,072",
      "information": "Information Text",
      "restaurants": "Atyab Popular Restaurant, Zitouni, Saraya Gallery",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "EH",
      "country": "Western Sahara",
      "population": "603,253",
      "information": "Information Text",
      "restaurants": "Chez Ntifi, Josefina Restaurant, Villa Dakhla",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ER",
      "country": "Eritrea",
      "population": "5,918,919",
      "information": "Information Text",
      "restaurants": "Al Sicomoro Restaurant, Casa degli Italiani Restaurant, The Roof Garden",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ES",
      "country": "Spain",
      "population": "48,958,160",
      "information": "Information Text",
      "restaurants": "Nerua, Con Gracia, El Celler de Can Roca",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ET",
      "country": "Ethiopia",
      "population": "105,350,016",
      "information": "Information Text",
      "restaurants": "Lucy Lounge & Restaurant, Moyos Cafe, Yod Abyssinia Traditional Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "FK",
      "country": "Falkland Island",
      "population": "3,198",
      "information": "Information Text",
      "restaurants": "The Waterfront Kitchen Cafe, The Narrows Bar, Tasty Treat",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "FI",
      "country": "Finland",
      "population": "5,518,371",
      "information": "Information Text",
      "restaurants": "Ravintola Kuu, Restaurant Ask, Savoy",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "FJ",
      "country": "Fiji",
      "population": "920,938",
      "information": "Information Text",
      "restaurants": "Tu's Place, Nadina Authentic Fijian Restaurant, Bonefish Seafood Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "FR",
      "country": "France",
      "population": "67,106,160",
      "information": "Information Text",
      "restaurants": "Pierre Ganaire, L'Abeille, L'Initial",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GA",
      "country": "Gabon",
      "population": "1,772,255",
      "information": "Information Text",
      "restaurants": "Roma Restaurant, Life By Mayena, Amigo's Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GB",
      "country": "United Kingdom",
      "population": "64,789,452",
      "information": "Information Text",
      "restaurants": "The Ledbury, Peace & Loaf Restaurant, taNgia Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GE",
      "country": "Georgia",
      "population": "4,926,330",
      "information": "Information Text",
      "restaurants": "Aria, Mrs. Wilkes Dining Room, Brandi's World Famous Hot Dogs",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GF",
      "country": "French Guiana",
      "population": "289,763",
      "information": "Information Text",
      "restaurants": "Restaurant Paris Cayenne, La Belle Amédé, Kaz Mimi",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GH",
      "country": "Ghana",
      "population": "27,499,924",
      "information": "Information Text",
      "restaurants": "Santoku, La Chaumiere, Buka Restaurant Osu Accra",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GL",
      "country": "Greenland",
      "population": "57,713",
      "information": "Information Text",
      "restaurants": "Restaurant Mamartut, Café Esmeralda, Bone's Nuuk",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GM",
      "country": "Gambia",
      "population": "2,051,363",
      "information": "Information Text",
      "restaurants": "Darboe's Bar and Restaurant, Leo's Beach Hotel & Restaurant, Scala Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GN",
      "country": "Guinea",
      "population": "12,413,867",
      "information": "Information Text",
      "restaurants": "Le Mouv', Restaurant Patisserie Le Damier, Obama Cafe",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GQ",
      "country": "Equatorial Guinea",
      "population": "778,358",
      "information": "Information Text",
      "restaurants": "La Luna, Aviator Pub & Cafe, Bidji Binia",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GR",
      "country": "Greece",
      "population": "10,768,477",
      "information": "Information Text",
      "restaurants": "Manoli's Greek Taverna, Yots Greek Taverna, Broadway Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GT",
      "country": "Guatemala",
      "population": "15,460,732",
      "information": "Information Text",
      "restaurants": "Restaurant Kacao, Del Griego, Jean Francois",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GW",
      "country": "Guinea-Bissau",
      "population": "1,792,338",
      "information": "Information Text",
      "restaurants": "O Bistro, Restaurante Papa Loca, Coqueiros Bar Bissau",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "GY",
      "country": "Guyana",
      "population": "737,718",
      "information": "Information Text",
      "restaurants": "Oasis Cafe, Night Cap, Aagman Indian Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "HN",
      "country": "Honduras",
      "population": "9,038,741",
      "information": "Information Text",
      "restaurants": "Sundowners Beach Bar, El Patio, Roatan Oasis",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "HR",
      "country": "Croatia",
      "population": "4,292,095",
      "information": "Information Text",
      "restaurants": "Nautika, Restaurant Dubrovnik, Restaurant Niko",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "HT",
      "country": "Haiti",
      "population": "10,646,714",
      "information": "Information Text",
      "restaurants": "Papeye, Magdoos Restaurant, Lakay",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "HU",
      "country": "Hungary",
      "population": "9,850,845",
      "information": "Information Text",
      "restaurants": "Hungarikum Bisztro, Cafe Bouchon, Cavier & Bull",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ID",
      "country": "Indonesia",
      "population": "260,580,736",
      "information": "Information Text",
      "restaurants": "Locavore Restaurant, Pinisi Resto, Mozaic",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IE",
      "country": "Ireland",
      "population": "5,011,102",
      "information": "Information Text",
      "restaurants": "Dax Restaurant, Etto, Mulberry Garden",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IL",
      "country": "Israel",
      "population": "8,299,706",
      "information": "Information Text",
      "restaurants": "Taizu, Machneyuda, Mashya",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IN",
      "country": "India",
      "population": "1,281,935,872",
      "information": "Information Text",
      "restaurants": "Indian Accent, Villa Maya Heritage Restaurant, Sunset View a Tandoori Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IQ",
      "country": "Iraq",
      "population": "39,192,112",
      "information": "Information Text",
      "restaurants": "Bouba Restaurant from Lebanon, The Grill, Habruri Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IR",
      "country": "Iran",
      "population": "82,021,568",
      "information": "Information Text",
      "restaurants": "Koohpaye Restaurant, Gilaneh Restaurant, Bistango",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IS",
      "country": "Iceland",
      "population": "339,747",
      "information": "Information Text",
      "restaurants": "Grillmarkaðurinn, Nostra, Forettabarinn",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "IT",
      "country": "Italy",
      "population": "62,137,800",
      "information": "Information Text",
      "restaurants": "Club del Doge Restaurant, Da Vittorio, Dal Pescatore",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "JM",
      "country": "Jamaica",
      "population": "2,990,561",
      "information": "Information Text",
      "restaurants": "House Boat Grill Restaurant, Murphy's West End, Scotchies",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "JO",
      "country": "Jordan",
      "population": "10,248,068",
      "information": "Information Text",
      "restaurants": "Rodeo Grill, Burj Al Hamam, Gusto Italian Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "JP",
      "country": "Japan",
      "population": "126,451,400",
      "information": "Information Text",
      "restaurants": "Han no Daidokoro, Ise Sueyoshi, Tapas Molecular Bar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KE",
      "country": "Kenya",
      "population": "47,615,740",
      "information": "Information Text",
      "restaurants": "Misono Restaurant, About Thyme Restaurant, Seven Seafood & Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KG",
      "country": "Kyrgyzstan",
      "population": "5,789,122",
      "information": "Information Text",
      "restaurants": "Vinoteka, Frunze Restaurant, Cafe Pur Pur",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KH",
      "country": "Cambodia",
      "population": "16,204,486",
      "information": "Information Text",
      "restaurants": "Malis Restaurant, Marum Restaurant, Cuisine Wat Damnak",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KP",
      "country": "North Korea",
      "population": "25,448,140",
      "information": "Information Text",
      "restaurants": "Laoba North Korea Noodles, The Friendship, Ongnyugwan",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KR",
      "country": "South Korea",
      "population": "51,181,300",
      "information": "Information Text",
      "restaurants": "Tavolo 24, Jungsik Seoul, Jyoti Indian Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "XK",
      "country": "Kosovo",
      "population": "1,920,079",
      "information": "Information Text",
      "restaurants": "Home Restaurant & Bar, Taverna Tirona, Himalayan Gorkha Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KW",
      "country": "Kuwait",
      "population": "2,875,422",
      "information": "Information Text",
      "restaurants": "Mais Alghanim Restaurant, Salt Restaurant, Le Sushi Bar Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "KZ",
      "country": "Kazakhstan",
      "population": "18,556,698",
      "information": "Information Text",
      "restaurants": "Alasha, Daredzhani Restaurant, Olivier Restaurant & bar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LA",
      "country": "Lao People's Democratic Republic",
      "population": "6,961,210",
      "information": "Information Text",
      "restaurants": "Doi Ka Noi Restaurant, Pizza da Roby, Kualao Restaurant",
      "hotels": "Sofitel Luang Prabang Hotel, Mercure Vientiane Hotel, Hotel ibis Vientiane Nam Phu",
      "landmarks": "Pha That Luang, Mekong River, Luang Pra Bang"
    }, {
      "id": "LB",
      "country": "Lebanon",
      "population": "6,229,794",
      "information": "Information Text",
      "restaurants": "Abu Naim, Mounir, Em Sherif Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LK",
      "country": "Sri Lanka",
      "population": "22,409,380",
      "information": "Information Text",
      "restaurants": "On 14 Roof Top Bar & Lounge, Ministry of Crab, The Lagoon",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LR",
      "country": "Liberia",
      "population": "4,689,021",
      "information": "Information Text",
      "restaurants": "Evelyn's Restaurant, Diana Restaurant, Anglers Bar and Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LS",
      "country": "Lesotho",
      "population": "1,958,042",
      "information": "Information Text",
      "restaurants": "Piripiri Restaurant, The Regal Restaurant, Lancer's Inn Hotel",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LT",
      "country": "Lithuania",
      "population": "2,823,859",
      "information": "Information Text",
      "restaurants": "Sweet Root, Lokys, Ertlio Namas",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LU",
      "country": "Luxembourg",
      "population": "594,130",
      "information": "Information Text",
      "restaurants": "Restaurant Clairefontaine, Am Tiirmschen, Restaurant Orchidee",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LV",
      "country": "Latvia",
      "population": "1,944,643",
      "information": "Information Text",
      "restaurants": "Vincents Restaurant, Riviera, Restorans Restaurant Domini Canes",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "LY",
      "country": "Libya",
      "population": "6,653,210",
      "information": "Information Text",
      "restaurants": "Wig Restaruant, Mat'am al-Saraya, Athar Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MA",
      "country": "Morocco",
      "population": "33,986,656",
      "information": "Information Text",
      "restaurants": "Dar Yacout, Latitude 31 Restaurant Marrakech, Al-Fassia Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MD",
      "country": "Moldova",
      "population": "3,474,121",
      "information": "Information Text",
      "restaurants": "Grill House, Popasul Dacilor, Vatra Neamului",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ME",
      "country": "Montenegro",
      "population": "642,550",
      "information": "Information Text",
      "restaurants": "Pod Volat, Restaurant Galion, Catovica Mlini",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MG",
      "country": "Madagascar",
      "population": "25,054,160",
      "information": "Information Text",
      "restaurants": "Le Rossini, La Boussole, Sakamanga Dining & Hotel",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MK",
      "country": "Macedonia",
      "population": "2,103,721",
      "information": "Information Text",
      "restaurants": "Skopski Merak, Pelister, Koletiv",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ML",
      "country": "Mali",
      "population": "17,885,244",
      "information": "Information Text",
      "restaurants": "Hotel Restaurant Badalodge Bamako, Soukothai, African Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MM",
      "country": "Myanmar",
      "population": "53,370,609",
      "information": "Information Text",
      "restaurants": "Le Planteur Restaurants & Lounge, Monsoon Restaurant, Gekko",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MN",
      "country": "Mongolia",
      "population": "3,068,243",
      "information": "Information Text",
      "restaurants": "Rosewood Kitchen, MexiKhan, BD's Mongolian Barbeque",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MR",
      "country": "Mauritania",
      "population": "3,758,571",
      "information": "Information Text",
      "restaurants": "Restaurant Le Tournedos, Tafarit Restaurants, Savana Café",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MW",
      "country": "Malawi",
      "population": "19,196,246",
      "information": "Information Text",
      "restaurants": "Mamma Mia's, Macondo Camp, Veg-Delight Lilongwe",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MX",
      "country": "Mexico",
      "population": "124,574,792",
      "information": "Information Text",
      "restaurants": "Agua & Sal, Sir Winston Churchill's, Du Mexique by Sonya Grimond",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MY",
      "country": "Malaysia",
      "population": "31,381,992",
      "information": "Information Text",
      "restaurants": "El Centro, Laundroluxe, Chilli Vanilla",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "MZ",
      "country": "Mozambique",
      "population": "26,573,706",
      "information": "Information Text",
      "restaurants": "Mundo's Maputo Mozambique, The Green Turtle Pub & Restaurant, JN 281",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NA",
      "country": "Namibia",
      "population": "2,484,780",
      "information": "Information Text",
      "restaurants": "The Stellenbosch Wine Bar and The Stellenbosch Tasting Room, Anchors @ the Jetty Restaurant, Leo's at the Castle",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NC",
      "country": "New Caledonia",
      "population": "279,070",
      "information": "Information Text",
      "restaurants": "Au P'tit Café, La Table des Gourmets, Fetrasun",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NE",
      "country": "Niger",
      "population": "19,245,344",
      "information": "Information Text",
      "restaurants": "Le Piller Restaurant, Tabakadi Restaurant, La Cabane",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NG",
      "country": "Nigeria",
      "population": "190,632,256",
      "information": "Information Text",
      "restaurants": "Metisse Restaurant, Bungalow's, Terra Kulture Victoria Island Lagos",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NI",
      "country": "Nicaragua",
      "population": "6,025,951",
      "information": "Information Text",
      "restaurants": "Peruvian Terrace, Restaurant Don Candido, Ola Verde,",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NL",
      "country": "Netherlands",
      "population": "17,084,720",
      "information": "Information Text",
      "restaurants": "Restaurant La Rive, Restaurant Daalda, Blue Pepper",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NO",
      "country": "Norway",
      "population": "5,320,045",
      "information": "Information Text",
      "restaurants": "Maaemo, Re-naa, Sabi Omakase Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NP",
      "country": "Nepal",
      "population": "29,384,296",
      "information": "Information Text",
      "restaurants": "The Old House, Le Sherpa, Western Kitchen",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "NZ",
      "country": "New Zealand",
      "population": "4,510,327",
      "information": "Information Text",
      "restaurants": "Sidart Restaurant, Riverstone Kitchen, Roots Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "OM",
      "country": "Oman",
      "population": "3,424,386",
      "information": "Information Text",
      "restaurants": "Ubhar, Slider Station, Mumtaz Mahal Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PA",
      "country": "Panama",
      "population": "3,753,142",
      "information": "Information Text",
      "restaurants": "Wings Famous Grill, Capital Bistro Panama, Diablicos",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PE",
      "country": "Peru",
      "population": "31,036,656",
      "information": "Information Text",
      "restaurants": "Isolina Taberna Peruana, Restaurant Maras, Restaurant El Mercado",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PG",
      "country": "Papa New Guinea",
      "population": "6,909,701",
      "information": "Information Text",
      "restaurants": "Bungaraya Restaurant, Asia Aromas Harbour Side West, Daikoku Japanese Steak House",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PH",
      "country": "Philippines",
      "population": "104,256,080",
      "information": "Information Text",
      "restaurants": "Ristorante delle Mitre, Barbara's Heritage Restaurant, Top Dish",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PL",
      "country": "Poland",
      "population": "38,476,268",
      "information": "Information Text",
      "restaurants": "Culiinaria Italiana, Starka Restaurant, Bistro de Paris",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PK",
      "country": "Pakistan",
      "population": "204,924,864",
      "information": "Information Text",
      "restaurants": "Andaaz Restaurant, Kolachi Restaurant, Cafe Flo",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PR",
      "country": "Puerto Rico",
      "population": "3,351,827",
      "information": "Information Text",
      "restaurants": "Famous Dave's Bar-B-Que, 1919 Restaurant, Oceano",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PS",
      "country": "Palestinian Territories",
      "population": "5,079,490",
      "information": "Information Text",
      "restaurants": "Afteem, The Tent Restaurant, Singer Cafe",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PT",
      "country": "Portugal",
      "population": "10,839,514",
      "information": "Information Text",
      "restaurants": "Alma, Belcanto, Taberna Sal Grosso",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "PY",
      "country": "Paraguay",
      "population": "6,943,739",
      "information": "Information Text",
      "restaurants": "Taberna Española, Paulista Grill Churrasquería, Johnny B Good Aviadores",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "QA",
      "country": "Qatar",
      "population": "2,314,307",
      "information": "Information Text",
      "restaurants": "Rodizio - The Brazilian Churrasquería, Alison Nelson's Chocolate Bar, Paper Moon",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "RO",
      "country": "Romania",
      "population": "21,529,968",
      "information": "Information Text",
      "restaurants": "The ARTIST Restaurant, Mica Elveție, La Pescăria Dorobanților",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "RS",
      "country": "Serbia",
      "population": "7,111,024",
      "information": "Information Text",
      "restaurants": "Little Bay, Ambar, Casa Nova",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "RU",
      "country": "Russia",
      "population": "142,257,520",
      "information": "Information Text",
      "restaurants": "AQ Kitchen, Cafe Pushkin, Mari Vanna",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "RW",
      "country": "Rwanda",
      "population": "11,901,484",
      "information": "Information Text",
      "restaurants": "Poivre Noir, Heaven Restaurant & Boutique Hotel, Brachetto",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SA",
      "country": "Saudi Arabia",
      "population": "28,571,770",
      "information": "Information Text",
      "restaurants": "Top Spice Restaurant, Top Chicken, Nozomi",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SB",
      "country": "Solomon Islands",
      "population": "647,581",
      "information": "Information Text",
      "restaurants": "The Ofis Solomon Islands, Mambo Juice!, Jina's Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SD",
      "country": "Sudan",
      "population": "37,345,936",
      "information": "Information Text",
      "restaurants": "Riyadh Restaurant Popular Foods, Assaha Restaurant, Spectra Restaurant & Cafe",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SE",
      "country": "Swedan",
      "population": "9,960,487",
      "information": "Information Text",
      "restaurants": "Lilla Ego, Mathias Dahlgren, Agrikultur",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SI",
      "country": "Slovenia",
      "population": "1,972,126",
      "information": "Information Text",
      "restaurants": "Pri Mari, Nobel Burek, Klobasarna",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SJ",
      "country": "Svalbard and Jan Mayen",
      "population": "2,667",
      "information": "Information Text",
      "restaurants": "Gruvelagerat, Huset Restaurant, Camp Barentz",
      "hotels": "Funken Lodge, Svalbard Hotel The Vault, Mary-Ann's Polarrigg",
      "landmarks": "Svalbard Global Seed Vault, Kongsfjorden, Adventfjorden"
    }, {
      "id": "SK",
      "country": "Slovakia",
      "population": "5,445,829",
      "information": "Information Text",
      "restaurants": "TOP Restaurant, Bistro St. Germain, Modrá Hviezda",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SL",
      "country": "Sierra Leone",
      "population": "6,163,195",
      "information": "Information Text",
      "restaurants": "Tessa's Restaurant, Crown Bakery, Crown Xpress",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SN",
      "country": "Senegal",
      "population": "14,668,522",
      "information": "Information Text",
      "restaurants": "Restaurant Le Lagon 1, La Calebasse, Coco Diop",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SO",
      "country": "Somalia",
      "population": "11,031,386",
      "information": "Information Text",
      "restaurants": "Hayat Restaurant Hargeisa, Royal Lounge Hargeisa, Bacado Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SR",
      "country": "Suriname",
      "population": "591,919",
      "information": "Information Text",
      "restaurants": "Las Tias Suirname, Garden of Eden, Sushi-Ya",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SS",
      "country": "South Sudan",
      "population": "37,345,936",
      "information": "Information Text",
      "restaurants": "Home And Away, South Sudanese Local Restaurant, Notos Lounge Bar & Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SV",
      "country": "El Salvador",
      "population": "6,172,011",
      "information": "Information Text",
      "restaurants": "Al Pomodoro, Kamakura, Faisca Do Brazil",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SY",
      "country": "Syria",
      "population": "18,028,548",
      "information": "Information Text",
      "restaurants": "Naranj, Haretna, Al Khawali",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "SZ",
      "country": "Swaziland",
      "population": "1,467,152",
      "information": "Information Text",
      "restaurants": "Ramblas Restaurant Mbabane, Malandela's Restaurant, Shebas Rock Spur",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TD",
      "country": "Chad",
      "population": "12,075,985",
      "information": "Information Text",
      "restaurants": "Cote Jardin, Le Carnivore, Le Central",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TF",
      "country": "French Southern and Antarctic Lands",
      "population": "0",
      "information": "Information Text",
      "restaurants": "There are no popular restaurants :(",
      "hotels": "There are no popular hotels :(",
      "landmarks": "There are no popular landmarks :("
    }, {
      "id": "TG",
      "country": "Togo",
      "population": "7,965,055",
      "information": "Information Text",
      "restaurants": "Philipat, Alt Munchen, 7SPICE",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TH",
      "country": "Thailand",
      "population": "68,414,136",
      "information": "Information Text",
      "restaurants": "Siam Supper Club, Sam's Steak & Grill, Sizzle Rooftop Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TJ",
      "country": "Tajikistan",
      "population": "8,468,555",
      "information": "Information Text",
      "restaurants": "Merve Restaurant, Arirang Restaurant, Traktir",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TL",
      "country": "Timor-Leste",
      "population": "1,291,358",
      "information": "Information Text",
      "restaurants": "Agora Food Studio, Rolls N Bowls, Caz Bar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TM",
      "country": "Turkmenistan",
      "population": "5,351,277",
      "information": "Information Text",
      "restaurants": "Merdem Restaurant, Sim-Sim, Altyn Ada",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TN",
      "country": "Tunisia",
      "population": "11,403,800",
      "information": "Information Text",
      "restaurants": "Restaurant Essaraya, Restaurant El-Walima, Dar El Jeld",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TR",
      "country": "Turkey",
      "population": "80,845,216",
      "information": "Information Text",
      "restaurants": "Kapha, Fuoco Restaurant, Seki Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TT",
      "country": "Trinidad and Tobago",
      "population": "1,218,208",
      "information": "Information Text",
      "restaurants": "Shore Things Cafe & Craft, Makara Restaurant, The Pasta Gallery",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TW",
      "country": "Taiwan",
      "population": "23,508,428",
      "information": "Information Text",
      "restaurants": "Balle Balle Indian Restaurant & Bar, Merlot Cafe & Bistro, Shin Yeh Main Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "TZ",
      "country": "Tanzania",
      "population": "53,950,936",
      "information": "Information Text",
      "restaurants": "Mediterraneo Restaurant, Akemi Revolving Restaurant, Addis in Dar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "UA",
      "country": "Ukraine",
      "population": "44,033,872",
      "information": "Information Text",
      "restaurants": "Kanapa, Puzata Hata, Famous",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "UG",
      "country": "Uganda",
      "population": "39,570,124",
      "information": "Information Text",
      "restaurants": "Tamarai Restaurant, 7 Hills Revolving Restaurant, Khana Khazana",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "US",
      "country": "United States of America",
      "population": "326,625,792",
      "information": "Information Text",
      "restaurants": "Per Se, Orchids at Palm Court, Benu",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "UY",
      "country": "Uruguay",
      "population": "3,360,148",
      "information": "Information Text",
      "restaurants": "Restaurant Tandory, Empanadas Carolina, La Pulperia",
      "hotels": "",
      "landmarks": ""
    },  {
      "id": "UZ",
      "country": "Uzbekistan",
      "population": "29,748,860",
      "information": "Information Text",
      "restaurants": "The Irish Pub & Restaurant, Afsona, City Grill",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "VE",
      "country": "Venezuela",
      "population": "31,304,016",
      "information": "Information Text",
      "restaurants": "Arepa Factory, Restaurante Maute Grill, Rest. La Casa Bistro",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "VN",
      "country": "Vietnam",
      "population": "96,160,160",
      "information": "Information Text",
      "restaurants": "Poke Saigon Ly Tu Trong, Home Finest Saigon Restaurant, Li Bai Chinese Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "VU",
      "country": "Vanuatu",
      "population": "282,814",
      "information": "Information Text",
      "restaurants": "Reefers Bar & Grill, The Stonegrill Restaurant, The Beach Bar",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "YE",
      "country": "Yemen",
      "population": "28,036,828",
      "information": "Information Text",
      "restaurants": "Mumbai Darbar Indian Restaurant, Reem Restaurant, Dark House Restaurants",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ZA",
      "country": "South Africa",
      "population": "54,841,552",
      "information": "Information Text",
      "restaurants": "La Colombe Restaurant, The Test Kitchen, The Restaurant at Waterkloof",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ZM",
      "country": "Zambia",
      "population": "15,972,000",
      "information": "Information Text",
      "restaurants": "Ocean Basket Restaurant, Taste by Rootz, Marlin Restaurant",
      "hotels": "",
      "landmarks": ""
    }, {
      "id": "ZW",
      "country": "Zimbabwe",
      "population": "13,805,084",
      "information": "Information Text",
      "restaurants": "Amanzi Restaurant, Victoria 22 Restaurant, Chang Thai Restaurant",
      "hotels": "",
      "landmarks": ""
    }],
  },
  // Refer to: https://docs.amcharts.com/3/javascriptmaps/AreasSettings
  "areasSettings": {
    "autoZoom": true,
    "color": "#344150",
    "outlineColor": "#fff",
    "selectedColor": "#52adff",
    "selectable": true
  },
  // This is where we can assign map specific functions
  "listeners": [{
    "event": "rendered",
    "method": function(e) {
      // Let's log initial zoom settings (for home button)
      var map = e.chart;
      map.initialZoomLevel = map.zoomLevel();
      map.initialZoomLatitude = map.zoomLatitude();
      map.initialZoomLongitude = map.zoomLongitude();
    }
  }]
});

// Script provided by: https://codepen.io/team/amcharts/pen/b592969886da04813676872e595b9dd7?editors=1010
// "clickMapObject" is an AmCharts defined listener / assign with a function with an event parameter
map.addListener("clickMapObject", function(evt) {
  // Find ID and change inner HTML with retrieved object's ID and Title properties
  document.querySelector("#country").innerHTML = "<h1>" + evt.mapObject.country + "</h1>";
  document.querySelector("#population").innerHTML = "<p>" + "Estimate population: " + evt.mapObject.population + "</p>";
  document.querySelector("#information").innerHTML = "<p>" + evt.mapObject.information + "</p>";


  // CURRENT TESTING VERSION ------ REMOVE ME WHEN I WORK BETTER
  // Note: Requires user to be interested before anything appears [aka: click on a country stupid]
  document.querySelector(".popularRestaurants").innerHTML = "<p>" + evt.mapObject.restaurants + "</p>";
  document.querySelector(".popularHotels").innerHTML = "<p>" + evt.mapObject.hotels + "</p>";
  document.querySelector(".popularLandmarks").innerHTML = "<p>" + evt.mapObject.landmarks + "</p>";



  // Refer to: https://stackoverflow.com/questions/4365246/how-to-change-href-of-a-tag-on-button-click-through-javascript

  // Logic to flexibly add every tag in each modal
  // Define a list variable (eg/ i = 0)
  // For i = 0; i != x (where x is a set number); i++...
  // ...document.querySelector("#.modal-body[list element]").innerHTML = "<li>" + evt.mapObject.restaurants[i] + "</li>"
  // Note: will need to set it so that once var i reaches max, stop loop incase of accidental recursion
  // Note: if going this path, CHANGE dataProvider PROPERTIES
});

var canvas;
var ctx;
var widthCanvas;
var heightCanvas;

// View parameters
var xleftView = 0;
var ytopView = 0;
var widthViewOriginal = 1.0;                  //actual width and height of zoomed and panned display
var heightViewOriginal = 1.0;
var widthView = widthViewOriginal;            //actual width and height of zoomed and panned display
var heightView = heightViewOriginal;

window.addEventListener("load",setup,false);

// Instantiate canvas properties
function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  widthCanvas = canvas.width;
  heightCanvas = canvas.height;

  canvas.addEventListener("dblclick", handleDblClick, false);         // dblclick to zoom in at point, shift dblclick to zoom out.
  canvas.addEventListener("mousedown", handleMouseDown, false);       // click and hold to pan
  canvas.addEventListener("mousemove", handleMouseMove, false);
  canvas.addEventListener("mouseup", handleMouseUp, false);
  canvas.addEventListener("mousewheel", handleMouseWheel, false);     // mousewheel duplicates dblclick function
  canvas.addEventListener("DOMMouseScroll", handleMouseWheel, false); // for Firefox

  draw();
}

function draw() {
  ctx.setTransform(1,0,0,1,0,0);
  ctx.scale(widthCanvas/widthView, heightCanvas/heightView);
  ctx.translate(-xleftView,-ytopView);

  ctx.fillStyle = "yellow";
  ctx.fillRect(xleftView,ytopView, widthView,heightView);
  ctx.fillStyle = "blue";
  ctx.fillRect(0.1,0.5,0.1,0.1);
  ctx.fillStyle = "red";
  ctx.fillRect(0.3,0.2,0.4,0.2);
  ctx.fillStyle="green";
  ctx.beginPath();
  ctx.arc(widthView/2+xleftView,heightView/2+ytopView,0.05,0,360,false);
  ctx.fill();
}

function handleDblClick(event) {
  var X = event.clientX - this.offsetLeft - this.clientLeft + this.scrollLeft; //Canvas coordinates
  var Y = event.clientY - this.offsetTop - this.clientTop + this.scrollTop;
  var x = X/widthCanvas * widthView + xleftView;  // View coordinates
  var y = Y/heightCanvas * heightView + ytopView;

  var scale = event.shiftKey == 1 ? 1.5 : 0.5; // shrink (1.5) if shift key pressed
  widthView *= scale;
  heightView *= scale;

  if (widthView > widthViewOriginal || heightView > heightViewOriginal) {
    widthView = widthViewOriginal;
    heightView = heightViewOriginal;
    x = widthView/2;
    y = heightView/2;
  }

  xleftView = x - widthView/2;
  ytopView = y - heightView/2;

  draw();
}

var mouseDown = false;

function handleMouseDown(event) {
  mouseDown = true;
}

function handleMouseUp(event) {
  mouseDown = false;
}

var lastX = 0;
var lastY = 0;
function handleMouseMove(event) {

  var X = event.clientX - this.offsetLeft - this.clientLeft + this.scrollLeft;
  var Y = event.clientY - this.offsetTop - this.clientTop + this.scrollTop;

  if (mouseDown) {
    var dx = (X - lastX) / widthCanvas * widthView;
    var dy = (Y - lastY)/ heightCanvas * heightView;
    xleftView -= dx;
    ytopView -= dy;
  }
  lastX = X;
  lastY = Y;

  draw();
}

function handleMouseWheel(event) {
  var x = widthView/2 + xleftView;  // View coordinates
  var y = heightView/2 + ytopView;

  var scale = (event.wheelDelta < 0 || event.detail > 0) ? 1.1 : 0.9;
  widthView *= scale;
  heightView *= scale;

  if (widthView > widthViewOriginal || heightView > heightViewOriginal) {
    widthView = widthViewOriginal;
    heightView = heightViewOriginal;
    x = widthView/2;
    y = heightView/2;
  }

  // scale about center of view, rather than mouse position. This is different than dblclick behavior.
  xleftView = x - widthView/2;
  ytopView = y - heightView/2;

  draw();
}
