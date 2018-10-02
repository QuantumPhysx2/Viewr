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
      "landmarks": "Mussolo, Kalandua Falls, Musslo Beach"
    }, {
      "id": "AR",
      "country": "Argentina",
      "population": "44,293,292",
      "information": "Argentina is a massive South American country with terrain encompassing the Andes mountains, glacial lakes and grasslands.",
      "restaurants": "The Argentine Experience, La Popular de San Telmo, La Cabrera",
      "hotels": "Hotel NH Buenos Aires Tango, Alvear Palace Hotel, Hotel Legado Mitico Salta",
      "landmarks": "Iguazu National Park, La Boca Buenos Aires, Perito Moreno Glacier"
    }, {
      "id": "AT",
      "country": "Austria",
      "population": "8,754,413",
      "information": "Austria is a German country that is located within Central Europe. Austia is categorized by its mountainous villages and baroque architectures.",
      "restaurants": "Loca, Griechenbeisl, Casin Restaurant Wien, Restaurant Ofenloch",
      "hotels": "Savoyen, Austria Classic Hotel Wien, Hotel Austria",
      "landmarks": "Schonbrunn Palace, Hofburg, Belvedere, Vienna, Salzkammergut"
    }, {
      "id": "AU",
      "country": "Australia",
      "population": "23,232,412",
      "information": "Australia is a continental country surrounded by the Indian and Pacific oceans.",
      "restaurants": "Momofuku Seiobo, Bennelong Restaurant, Quay Restaruant Sydney",
      "hotels": "Bedarra Island Resort, Ovolo Woolloomooloo Hotel, Park Hyatt Sydney",
      "landmarks": "Sydney Opera House, Great Barrier Reef, Great Ocean Road"
    }, {
      "id": "AZ",
      "country": "Azerbaijan",
      "population": "9,961,396",
      "information": "Azerbaijan, a former Soviet republic, is bound by the Caspian Sea and the Caucasus Mountains.",
      "restaurants": "Shirvanshah Museum Restaurant, Scalini Italian Restaurant, Mari Vanna",
      "hotels": "Park Inn by Radisson Baku Hotel, JW Mariott Absheron Baku, Four Seasons Hotel",
      "landmarks": "Maiden Tower, Gobustan National Park, Palace of the Shirvanshas"
    }, {
      "id": "BA",
      "country": "Bosnia and Herzegovina",
      "population": "3,856,181",
      "information": "Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe.",
      "restaurants": "Dveri Restaurant, Mala Kuhinja, Avlija Restaurant",
      "hotels": "Novotel Sarajevo Bristol, Hotel Hills Sarajevo Congress & Termal spa Resort, Courtyard by Mariott Sarajevo",
      "landmarks": "Stari Most, Kravice, Buna"
    }, {
      "id": "BD",
      "country": "Bangladesh",
      "population": "157,826,576",
      "information": "Bangladesh is located to the east of India and is a South Asian country marked by lush greenery and waterways.",
      "restaurants": "Izumi Japanese Kitchen, New Handi Restaurant, The Exchange Restaurant",
      "hotels": "Pan Pacific Sonargaon Dhaka Hotel, The Westin Dhaka, Le Meridien Dhaka",
      "landmarks": "St. Martin's Island, Lalbagh Fort, Ahsan Manzil"
    }, {
      "id": "BE",
      "country": "Belgium",
      "population": "11,491,346",
      "information": "Belgium is a country located in Western Europe and is known for its medevil styled towns during the Renaissance period.",
      "restaurants": "Restaurant le Rabassier, Bia Mara Restaurant, Tonton Garby",
      "hotels": "The Hotel Brussels, Hotel Amigo, Hotel Dukes' Palace 5 Star",
      "landmarks": "Grand Palace, Manneken Pis, Atomium"
    }, {
      "id": "BF",
      "country": "Burkina Faso",
      "population": "20,107,508",
      "information": "Burkina Faso is a landlocked country in West Africa which covers roughly 274,000 squre kilometers that is surrounded by six countries.",
      "restaurants": "Le Verdoyant, La Perle, Le Coq Bleu",
      "hotels": "Lacio Ouaga 2000, Hotel Kavana Ouagadougou, Hotel Bravia",
      "landmarks": "Domes de Fabedougou, Lake Tengrela, Pics de Sindou"
    }, {
      "id": "BG",
      "country": "Bulgaria",
      "population": "7,101,510",
      "information": "Bulgaria is a Balkan nation with diverse terrain encompassing the Black Sea coastline with mountainous interiors and rivers.",
      "restaurants": "Talents Restaurant, Moma Bulgarian Food & Wine, Magnolia",
      "hotels": "Famous House, Kempinski Hotel Grand Arena Bansko, Grand Hotel Sofia",
      "landmarks": "Sunny Beach, Rila Monastery, Borovets"
    }, {
      "id": "BI",
      "country": "Burundi",
      "population": "11,466,756",
      "information": "Officially known as the Republic of Burundi, is a landlocked country in the African Great Lakes of East Africa.",
      "restaurants": "Bora Bora Beach Club Restaurant, Pasta Comedia, Restaurant Tanganyika",
      "hotels": "Hotel Dolce Vita Resort, Hotel Club Du Lac Tanganyika, Le Panoramique Hotel by Celexon",
      "landmarks": "Ruzizi River, Kibira National Park, Mount Heha"
    }, {
      "id": "BJ",
      "country": "Benin",
      "population": "11,038,805",
      "information": "Benin is a French country located in West Africa in which the Dahomey Kingdom had first originated.",
      "restaurants": "Dream Beach, L'Impala, Le Privé Restaurant",
      "hotels": "Hotel ibis Cotonou, Riveria Hotel Benin, Benin Royal Hotel",
      "landmarks": "Lake Aheme, Pythons Temple, Ouidah Museum of History"
    }, {
      "id": "BN",
      "country": "Brunei Darussalam",
      "population": "443,593",
      "information": "Brunei Darussalam is a tiny country located on the island of Borneo with two distinct sections surrounded by the Malaysia and the South China Sea.",
      "restaurants": "Kaizen Sushi, I-Lotus Restaurant, Danes Cafe",
      "hotels": "The Empire Hotel & Country Club Brunei, Radisson Hotel Brunei Darussalam, The Rizqun International Hotel",
      "landmarks": "Istana Nurul Iman, Jerudong Park, Sultan Omar Ali Saifuddin Mosque"
    }, {
      "id": "BO",
      "country": "Bolivia",
      "population": "11,138,234",
      "information": "Bolivia is a country located in central South Africa with varied terrain consisting of deserts, mountains and grasslands.",
      "restaurants": "Bolivian Popular Food, Chalet la Suisse, Cafe del Mundo",
      "hotels": "Hotel Stannum Boutique & Spa, Casa Grande Hotel, Los Tajibos Hotel & Convention Center",
      "landmarks": "Salar de Uyuni (The Salt Flats), Isla del Sol, Laguna Colorado"
    }, {
      "id": "BR",
      "country": "Brazil",
      "population": "207,353,392",
      "information": "Brazil makes up a large portion of South America which consists of the Amazon Basin in the north with vineyards and waterfalls to the south.",
      "restaurants": "Restaurante Olympe, CT Broucherie, Mocotó",
      "hotels": "Belmond Hotel das Cataratas, Hotel Fasano, Hotel Unique",
      "landmarks": "Copacabana Rio de Janeiro, Christ the Redeemer, Sugarloaf Mountain"
    }, {
      "id": "BS",
      "country": "Bahamas",
      "population": "329,988",
      "information": "The Bahamas is a coral-based archipelego in the Atlantic Ocean which consists of over seven hundred islands which are either uninhabited or are tourist resorts.",
      "restaurants": "Poop Deck Restaurant, Café Matisse, Rock House Restaurant",
      "hotels": "Breezes Bahamas, Graycliff Hotel & Restaurant, The Cove Eleuthera",
      "landmarks": "Atlantis Bahamas, Paradise Island, Castaway Cay"
    }, {
      "id": "BT",
      "country": "Bhutan",
      "population": "758,288",
      "information": "Bhutan is a Buddhist kingdom located in the Eastern Himalayas. Additionally, Bhutan is known for its monasteries, fortresses and dramataic landscapes.",
      "restaurants": "San Maru Restaurant, Babesa Village Restaurant, Zombala 2",
      "hotels": "Hotel Norbuling, Dhensa Boutique Resort, Bhutan Suites",
      "landmarks": "Paro Taktsang, Punakha Dzong, Tashichho Dzong"
    }, {
      "id": "BW",
      "country": "Botswana",
      "population": "2,214,858",
      "information": "Botswana is a landlocked country located in South Africa in which its landscape is defined by the Kalahari Desert and the Okavango Delta.",
      "restaurants": "Main Deck Restaurant, Marc's Eatery, Bascilico Italian Restaurant",
      "hotels": "Cresta President Hotel, Peermont Mondior Gaborone, Phakalane Golf Estate Hotel Resort",
      "landmarks": "Okavango Delta, Chobe National Park, Central Kalahari Game Reserve"
    }, {
      "id": "BY",
      "country": "Belarus",
      "population": "9,549,747",
      "information": "Belarus is a landlocked country located in Eastern Europe and is known for its Stalinist architecture, grand fortifications and primeval forests.",
      "restaurants": "Vasilki Restaurant, Bistro de Luxe, Tiflis Restaurant",
      "hotels": "Hotel Belarus, Renaissance Minsk Hotel, Minsk Hotel",
      "landmarks": "Mir Castle Complex, Severn Valley, Trinity Hill"
    }, {
      "id": "BZ",
      "country": "Belize",
      "population": "360,346",
      "information": "Belize is a country located on the eastern coast of Central America next to the Carribean Sea shorelines.",
      "restaurants": "Celebrity Restaurant & Bar, Bird Isle Restaurant, Riverside Tavern",
      "hotels": "Radisson Fort George Hotel and Marina, Ramada Belize City Princess Hotel, Best Western Plus Belize Biltmore Plaza",
      "landmarks": "Ambergris Caye, Caye Caulker, Great Blue Hole"
    }, {
      "id": "CA",
      "country": "Canada",
      "population": "35,623,680",
      "information": "Canada is a North American country that stretches from the US to the Arctic Circle and is known for its picturesque wilderness landscapes.",
      "restaurants": "Five Sails Restaurant, Raymonds Restaurant, Hardware Grill",
      "hotels": "Fairmont Waterfront, Fairmont Pacific Rim, Shangri-La Hotel",
      "landmarks": "Banff National Park, Jasper National Hills, Stanley Park"
    }, {
      "id": "CD",
      "country": "Democratic Republic of Congo",
      "population": "83,301,152",
      "information": "The Democratic Republic of Congo is a country located in Central Africa that is known for its mountainous landscapes.",
      "restaurants": "Le Chalet, Chez Flore, Le Cercle Gourmand",
      "hotels": "Kempinski Hotel Fleuve Congo, Beatrice Hotel, Pullman Kinshasa Grand Hotel",
      "landmarks": "Virunga National Park, Mount Nyiragongo, Mount Sabyinyo"
    }, {
      "id": "CF",
      "country": "Central African Republic",
      "population": "5,625,118",
      "information": "The Central African Republic is a landlocked country with Central Africa that is bordered by Chad to the north with Sudan to the northeast.",
      "restaurants": "Carré Gourmand, Relais des Chasses, L'Escale",
      "hotels": "Hotel Ledger Plaza Bangui, Hotel Levy's, JM Residence",
      "landmarks": "Andre Felix National Park, Chutes de Boali, Cathedrale Notre-Dame"
    }, {
      "id": "CG",
      "country": "Republic of Congo",
      "population": "4,954,674",
      "information": "Also known as Congo-Brazzaville, is a central African country that contains many rainforest reserves that are inhabited by many species of gorillas.",
      "restaurants": "Mami Wata, Restaurant d'Vins, La Perla",
      "hotels": "Mikhael's Hotel, Hotel Memling, Hotel Olympic Palace",
      "landmarks": "Livingstone Falls, Lake Tele, Mbamu"
    }, {
      "id": "CH",
      "country": "Switzerland",
      "population": "8,236,303",
      "information": "Switzerland is a mountainous country located in Central Europe that is also home to many lakes and villages in the peaks of the Alps.",
      "restaurants": "Kronenhalle, IZUMI Restaurant, Restaurant Essort",
      "hotels": "Hotel Palace Luzem, Four Seasons Hotel, Grand Hotel Kronenhof",
      "landmarks": "Jungfraujoch, Lake Lucerne, Pilatus"
    }, {
      "id": "CI",
      "country": "CÃ´te d'Ivoire",
      "population": "24,905,843",
      "information": "Located in the West African side of the continent that is home to many beach resorts, rainforests as well as a French-colonial legacy.",
      "restaurants": "La Case Bleue, Restaurant Saakan, Villa Savoia",
      "hotels": "Sofitel Abidjan Hotel Ivoire, Hotel ibis Abidjan Plateau, Hotel Novotel Abidjan",
      "landmarks": "Basilica of Our Lady of Peace, Tai National Park, Banco National Park"
    }, {
      "id": "CL",
      "country": "Chile",
      "population": "17,789,268",
      "information": "Chile is a long and narrow country that stretches along South America's western edge with the Pacific Ocena to the west.",
      "restaurants": "Jewel of India, Boragó, Bocanáriz",
      "hotels": "Sheraton Miramar Hotel & Convention Center, The Singular Patagonia, Renaissance Santiago Hotel",
      "landmarks": "Atacama Desert, Chiloe Island, Strait of Magellan"
    }, {
      "id": "CM",
      "country": "Cameroon",
      "population": "24,994,884",
      "information": "Cameroon is a Central African country in which its terrain consists of varried wildlife and atmospheres, ranging from grasslands to barren lands.",
      "restaurants": "Restaurant Kajazoma, IYA Restaurant, L'Ovalie",
      "hotels": "Hilton Yaounde, Ibis Hotel Douala, Star Land Hotel",
      "landmarks": "Mount Cameroon, Waza National Park, Dja Faunal Reserve"
    }, {
      "id": "CN",
      "country": "China",
      "population": "1,379,302,784",
      "information": "China is a populous country located in East Asia whose landscape consists of grasslands, deserts, mountains, lakes and rivers.",
      "restaurants": "Noodle House, Hanuman, Dian Dou De",
      "hotels": "Rosewood Beijing, New World Beijing Hotel, Shangri-La Beijing Hotel",
      "landmarks": "Forbidden City, Terracota Army, Summer Palace"
    },  {
      "id": "CO",
      "country": "Colombia",
      "population": "47,698,524",
      "information": "Colombia is a country located at the northern tip of South America that borders North America. Its landscapes conists of rainforests, the Andes mountains and coffee plantations.",
      "restaurants": "Matiz, Restaurant Fulanitos, Mini Mal",
      "hotels": "Hotel Sofitel Legend Santa Clara Cartagena, Hotel Sofitel Bogota Victoria Regia, Bastion Luxury Hotel",
      "landmarks": "Tayrona National Natural Park, San Andres, Rosario Islands"
    }, {
      "id": "CR",
      "country": "Costa Rica",
      "population": "4,930,258",
      "information": "Costa Rica is a rugged rainforested country located in Central America with coastlines spanning the Carribean and Pacific Oceans.",
      "restaurants": "La Luz Restaurant, Tin Jo Asian Restaurant, La Pecora Nera Ristorante",
      "hotels": "Tango Mar Beach Hotel Spa & Golf Resort, Four Seasons Resort, Arenal Springs Resort",
      "landmarks": "Manuel Antonio National Park, Arenal Volcano, Arenal Volcano National Park"
    }, {
      "id": "CU",
      "country": "Cuba",
      "population": "11,147,407",
      "information": "Cuba is a Carribean island that is controlled under communist rules. Cuba has sugar-white beaches and is dotted with tobacco fields.",
      "restaurants": "Restaurant La Casa, La Guarida Restaurant, Fontana",
      "hotels": "Hotel Popular, Mella Santiago de Cuba, Hotel Nacional de Cuba",
      "landmarks": "Malecon Havana, Cayo Largo del Sur, Morro Castle"
    }, {
      "id": "CY",
      "country": "Cyprus",
      "population": "1,189,085",
      "information": "Cyprus is an island country located in the Eastern Mediterranean sea and is the third largest and most populated island in the Mediterranean.",
      "restaurants": "Pyxida Fish Tavern, Fanous Lebanese Restaurant, Sienna Restaurant",
      "hotels": "Elysium, Amathus Beach Hotel Limassol, Alexander The Great Beach Hotel",
      "landmarks": "Petra tou Romiou, Nissi Beach, Cape Greco"
    }, {
      "id": "CZ",
      "country": "Czech Republic",
      "population": "10,674,723",
      "information": "The Czech Republic is a country that is known for its ornate castles, native beers and long histories with Prague being home to the grand 9th-century.",
      "restaurants": "Soul Bistro, Restaurance Bellevue, Blue Wagon Restaurant",
      "hotels": "Golden Well Hotel Prague, Four Seasons Hotel Prague, Hotel 1. Republic",
      "landmarks": "Prague Castle, Charles Bridge, Old Town"
    }, {
      "id": "DE",
      "country": "Germany",
      "population": "80,594,016",
      "information": "Germany is a Western European country whose landscape consists of forests, rivers, mountains and North Sea beaches.",
      "restaurants": "Aqua Restaurant, Marjellchen, Restaurant Schlossgarten",
      "hotels": "Hotel Adlon Kempinski Berlin, Mandarin Oriental, Breidenbacher Hof A Capella Hotel",
      "landmarks": "Berlin Wall, Cologne Cathedral, Brandenburg Gate"
    }, {
      "id": "DJ",
      "country": "Djibouti",
      "population": "865,267",
      "information": "Djibouti is a mostly French and Arabic speaking country on dry shrublands, volcanic formations and beaches. It is home to one of the saltiest bodies of waters in the world.",
      "restaurants": "Melting Pot Restaurant Djibouti, Café de la Gare, Mukbassa Central Chez Youssouf",
      "hotels": "Djibouti Palace Kempinski, Sheraton Djibouti, Acacias Hotel",
      "landmarks": "Lake Assal, Moucha Island, Day Forest National Park"
    }, {
      "id": "DK",
      "country": "Denmark",
      "population": "5,605,948",
      "information": "Denmark is a Scandinavian country comprising of the Jutland Peninsula and a number of other numerous islands.",
      "restaurants": "The Standard, Kokkeriet, Noma Restaurant",
      "hotels": "Copenhagen Mariott Hotel, Adina Apartment Hotel, AC Hotel by Mariott Bella Sky Copenhagen",
      "landmarks": "Tivoli Gardens, Nyhavn, The Little Mermaid"
    }, {
      "id": "DO",
      "country": "Dominican Republic",
      "population": "10,734,247",
      "information": "The Dominican Republic is a Carribean country that shares the island of Hispaniola with Haiti to the west.",
      "restaurants": "Nam Nam, Jellyfish Restaurant, El Mesón de la Cava Restaurant",
      "hotels": "InterContinental Real Santo Domingo, Balcones del Atlantico Residences, Iberostar Dominicana",
      "landmarks": "Bavaro, Cayo Levantado, Casa de Campo Resort and Villas"
    }, {
      "id": "DZ",
      "country": "Algeria",
      "population": "40,969,444",
      "information": "Algeria is a North American country located next to the Mediterranean coastline and Saharan desert.",
      "restaurants": "Caracoya, Restaurant Le Bearnais, Burger Bar Gourmet Bugers",
      "hotels": "Hotel Sofitel Algiers Hamma Garden, Holiday Inn Algiers, Hotel Aurassi",
      "landmarks": "Martyrs' Memorial, Notra-Dame d'Afrique, Jardin d'Essai du Hamma"
    }, {
      "id": "EC",
      "country": "Ecuador",
      "population": "16,390,913",
      "information": "Ecuador is a country straddling the equator on South America's west coast. The landscape comprises of the Amazon jungle and Andean highlands.",
      "restaurants": "Zazu, Martinica, URKO Cocina Local",
      "hotels": "JW Mariott Hotel Quito, Sheraton Quito Hotel, Le Parc Hotel",
      "landmarks": "Cotopaxi, Baltra Island, Quilotoa"
    }, {
      "id": "EE",
      "country": "Estonia",
      "population": "1,251,581",
      "information": "Estonia is a country located in North Europe which borders the Baltic Sea and Gulf of Finland that includes more than fifteen hundred islands.",
      "restaurants": "Restoran Sardiinid, Restaurant MEKK, Horisont Restaurant & Bar",
      "hotels": "Hotel Telegraaf, Hotel Schlossle, Savoy Boutique Hotel",
      "landmarks": "Vanalinn, Lahemaa National Park, Toompea"
    }, {
      "id": "EG",
      "country": "Egypt",
      "population": "97,041,072",
      "information": "Egypt dates back to the time of pharaohs with millennia-old monuments sitting along the Nile River Valley.",
      "restaurants": "Atyab Popular Restaurant, Zitouni, Saraya Gallery",
      "hotels": "Shams Hotels & Dive Center, The Three Corners Ocean View Hotel, Steigenberger Hotel El Tahrir Cairo",
      "landmarks": "Giza Pyramids, Valley of the Kings, Great Sphinx of Giza"
    }, {
      "id": "EH",
      "country": "Western Sahara",
      "population": "603,253",
      "information": "Western Sahara is a disputed territory in the Maghreb region of North Africa.",
      "restaurants": "Chez Ntifi, Josefina Restaurant, Villa Dakhla",
      "hotels": "Hotel Calipau Sahara, Hotel Bab Al Bahar, Hotel Sahara Regency",
      "landmarks": "El Aaiun Cathedral, Moroccan Wall, Bou Dheir"
    }, {
      "id": "ER",
      "country": "Eritrea",
      "population": "5,918,919",
      "information": "Eritrea is located northeast of Africa that has a coastline next to the Red Sea. It shares borders with Ethiopia, Sudan and Djibouti.",
      "restaurants": "Al Sicomoro Restaurant, Casa degli Italiani Restaurant, The Roof Garden",
      "hotels": "Asmara Palace Hotel, Crystal Hotel, Dahlak Hotel",
      "landmarks": "Matara, Church of Our Lady of the Rosary, Flat Tagliero Building"
    }, {
      "id": "ES",
      "country": "Spain",
      "population": "48,958,160",
      "information": "Spain includes seventeen autonomous regions with diverse geography and cultures.",
      "restaurants": "Nerua, Con Gracia, El Celler de Can Roca",
      "hotels": "Hotel Maria Cristina, Hotel Arts Barcelona, Only YOU Boutique Hotel",
      "landmarks": "Sagrada Familia Hotel, Alhambra, Ibiza"
    }, {
      "id": "ET",
      "country": "Ethiopia",
      "population": "105,350,016",
      "information": "Ethiopia is a landlocked country that is split by the Great Rift Valley with archaelogical finds dating back more than three million years ago.",
      "restaurants": "Lucy Lounge & Restaurant, Moyos Cafe, Yod Abyssinia Traditional Restaurant",
      "hotels": "Radisson Blu Hotel, Capital Hotel and Spa, Addis Regency Hotel",
      "landmarks": "Lake Tana, Simien Moutains National Park, Blue Nile Falls"
    }, {
      "id": "FK",
      "country": "Falkland Island",
      "population": "3,198",
      "information": "The Falkland Island is a remote South Atlantic archipelego with rugged terrain consisting of cliff-lined coasts.",
      "restaurants": "The Waterfront Kitchen Cafe, The Narrows Bar, Tasty Treat",
      "hotels": "The Waterfront Hotel, Malvina House Hotel, Shorty's Motel",
      "landmarks": "Sea Lion Island, Volunteer Point, Yorke bay"
    }, {
      "id": "FI",
      "country": "Finland",
      "population": "5,518,371",
      "information": "Finland is a North European country which borders Sweden, Norway and Russia.",
      "restaurants": "Ravintola Kuu, Restaurant Ask, Savoy",
      "hotels": "Hotel F6 Oy, GLO Hotel Kluuvi, Radisson Blu Plaza Hotel,",
      "landmarks": "Santa Claus Village, Helsinki Cathedral, Suomenlinna"
    }, {
      "id": "FJ",
      "country": "Fiji",
      "population": "920,938",
      "information": "Fiji is a small country located in the South Pacific Ocean and is famed for its palm-lined beaches and coral reefs with clear lagoons.",
      "restaurants": "Tu's Place, Nadina Authentic Fijian Restaurant, Bonefish Seafood Restaurant",
      "hotels": "Paradise Cove Resort, Sheraton Resort & Spa, Tokoriki Island Resort",
      "landmarks": "Mamanuca Islands, Mana Islands, Castaway Island"
    }, {
      "id": "FR",
      "country": "France",
      "population": "67,106,160",
      "information": "France encompasses medieval cities, apline villages and Mediterranean beaches with Paris being the capital.",
      "restaurants": "Pierre Ganaire, L'Abeille, L'Initial",
      "hotels": "Grand Hotel du Palais Royal, Saint James Paris, Hotel Crillon le Brave",
      "landmarks": "Eiffel Tower, Arc de Triomphe, Louvre Museum"
    }, {
      "id": "GA",
      "country": "Gabon",
      "population": "1,772,255",
      "information": "Gabon is a country that spans along the coast of Central Africa which has many protected parklands.",
      "restaurants": "Roma Restaurant, Life By Mayena, Amigo's Restaurant",
      "hotels": "Radisson Blu Okoume Palace Hotel, Park Inn, ONOMO Hotel Libreville",
      "landmarks": "Loango National Park, Lope National Park, Crystal Mountains National Park"
    }, {
      "id": "GB",
      "country": "United Kingdom",
      "population": "64,789,452",
      "information": "The UK, which is made up of England, Scotland, Wales and Northern Ireland, is an island nation found in northwestern Europe.",
      "restaurants": "The Ledbury, Peace & Loaf Restaurant, taNgia Restaurant",
      "hotels": "Hambleton Hall, Hotel 41, Lucknam Park Hotel & Spa",
      "landmarks": "Big Ben, London Eye, Stonehenge"
    }, {
      "id": "GE",
      "country": "Georgia",
      "population": "4,926,330",
      "information": "Georgia is a southerastern US state whose terrain consists of coastal beaches, farmland and mountains.",
      "restaurants": "Aria, Mrs. Wilkes Dining Room, Brandi's World Famous Hot Dogs",
      "hotels": "Hilton Garden Inn Athens Downtown, Georgia Tech Hotel & Conference Center, Mansion on Forsyth Park",
      "landmarks": "Georgia Aquarium, World of Coca-Cola, Rock City Gardens"
    }, {
      "id": "GF",
      "country": "French Guiana",
      "population": "289,763",
      "information": "French Guiana's terrain comprises of mainly tropical rainforests and ruins of the 17th century Fort Ceperou.",
      "restaurants": "Restaurant Paris Cayenne, La Belle Amédé, Kaz Mimi",
      "hotels": "Hotel Amazonia Cayenne, Hotel Ker Alberte, Royal Amazonia",
      "landmarks": "Devil's Island, Salvation's Islands, Saint-Joseph Island"
    }, {
      "id": "GH",
      "country": "Ghana",
      "population": "27,499,924",
      "information": "Ghana is known for its diverse wildlife, old forts and secluded beaches.",
      "restaurants": "Santoku, La Chaumiere, Buka Restaurant Osu Accra",
      "hotels": "Movenpick Ambassador Hotel Accra, His Majestys Hotel, Asantewaa Premier Guesthouse",
      "landmarks": "Kakum National Park, Elmina Castle, Cape Coast Castle"
    }, {
      "id": "GL",
      "country": "Greenland",
      "population": "57,713",
      "information": "Greenland is a massive land between the North Atlantic and Arctic Oceans in which most of the surface is covered by ice.",
      "restaurants": "Restaurant Mamartut, Café Esmeralda, Bone's Nuuk",
      "hotels": "Hotel Icefiord, Hotel Kulusuk, Hotel Sisimiut",
      "landmarks": "Scoresby Sound, Jakobsshavn Glacier, Uunartoq"
    }, {
      "id": "GM",
      "country": "Gambia",
      "population": "2,051,363",
      "information": "Gambia is a small country located in West Africa which is bounded by Senegal with a narrow Atlantic coastline.",
      "restaurants": "Darboe's Bar and Restaurant, Leo's Beach Hotel & Restaurant, Scala Restaurant",
      "hotels": "Ocean Bay Hotel, Senegambia's Beach Hotel, Seafront Residence & Hotel",
      "landmarks": "Abuko Nature Reserve, Bijilo Forest Park, Kunta Kinteh Island"
    }, {
      "id": "GN",
      "country": "Guinea",
      "population": "12,413,867",
      "information": "Guinea is a country located in West Africa that is bordered by the Atlantic Ocean. It's most known for the Mount Nimba Strict Nature Reserve in the southeast.",
      "restaurants": "Le Mouv', Restaurant Patisserie Le Damier, Obama Cafe",
      "hotels": "Noom Hotel Conakry, Sheraton Grand Conakry, Hotel M'LYS",
      "landmarks": "Fouta Djallon, Mount Loura, Badiar National Park"
    }, {
      "id": "GQ",
      "country": "Equatorial Guinea",
      "population": "778,358",
      "information": "Equatorial Guinea is a Central African country comprising of the Rio Muni mainland with five volcanic offshore islands.",
      "restaurants": "La Luna, Aviator Pub & Cafe, Bidji Binia",
      "hotels": "Grand Hotel Djibloho, Hilton Malabo, Sofitel Malabo Sipopo Le Golf",
      "landmarks": "Pico Basile, Elobey Grande, St. Elizabeth's Cathedral"
    }, {
      "id": "GR",
      "country": "Greece",
      "population": "10,768,477",
      "information": "Greece is most known for its influencial buildings from ancient times and is often called the cradle of Western civilization.",
      "restaurants": "Manoli's Greek Taverna, Yots Greek Taverna, Broadway Restaurant",
      "hotels": "Harmony Boutique Hotel, Hotel Grande Bretagne, Canaves Oia Suites",
      "landmarks": "Acropolis Museum, Acropolis of Athens, Meteora"
    }, {
      "id": "GT",
      "country": "Guatemala",
      "population": "15,460,732",
      "information": "Guatemala is home to many volcanoes, rainforests and ancient Mayan structures.",
      "restaurants": "Restaurant Kacao, Del Griego, Jean Francois",
      "hotels": "Westin Camino Real, Barcelo Guatemala City, InterContinental Real Guatemala",
      "landmarks": "Tikal, Lake Atitlan, Semuc Champey"
    }, {
      "id": "GW",
      "country": "Guinea-Bissau",
      "population": "1,792,338",
      "information": "Guinea-Bissau is a tropical country on West Africa's Atlantic coast that is known for national parks and wildlife.",
      "restaurants": "O Bistro, Restaurante Papa Loca, Coqueiros Bar Bissau",
      "hotels": "Hotel Azalai, Hotel Imperio, Hotel Lisboa Bissau",
      "landmarks": "Bubaque, Bolama Island, Poilao"
    }, {
      "id": "GY",
      "country": "Guyana",
      "population": "737,718",
      "information": "Guyana is a country on South America's North Atlantic coast and is defined by its dense rainforest as well as its cricket and calypso music.",
      "restaurants": "Oasis Cafe, Night Cap, Aagman Indian Restaurant",
      "hotels": "Guyana Mariott Hotel, Grand Coastal Hotel, Cara Lodge Hotel",
      "landmarks": "Kaieteur Falls, Kanuku Mountains, Iwokrama Forest"
    }, {
      "id": "HN",
      "country": "Honduras",
      "population": "9,038,741",
      "information": "Honduras is a Central American country with Carribean Sea coastlines to the north and Pacific Ocean coastlines to the south.",
      "restaurants": "Sundowners Beach Bar, El Patio, Roatan Oasis",
      "hotels": "Hotel Marina Copan, Portal del Angel, Tegucigalpa Mariott Hotel",
      "landmarks": "Roatan, Copan, Lake Yojoa"
    }, {
      "id": "HR",
      "country": "Croatia",
      "population": "4,292,095",
      "information": "Croatia is an Eastern European country with a long coastline on the Adriatic Sea and is crossed by the Dinaric Alps.",
      "restaurants": "Nautika, Restaurant Dubrovnik, Restaurant Niko",
      "hotels": "Hotel Croatia Cavtat, Lesic Dimitri Palace, Esplanade Zagreb Hotel",
      "landmarks": "Brac, Hvar, Plitvice Lakes National Park"
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
