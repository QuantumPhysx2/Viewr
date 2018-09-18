// Source is provided by AmCharts.com
var map = AmCharts.makeChart("chartdiv", {
  // All chart attributes are in JSON format
  "type": "map",
  // Map specific details
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true,
    "areas": [{
      // Call assigned ID attribute from AmCharts.maps
      // Assign each ID with its own key:values
      "id": "AE",
      "country": "United Arab Emirates",
      "population": "6,072,475",
      "information": "Information Text"
    }, {
      "id": "AF",
      "country": "Afghanistan",
      "population": "34,124,812",
      "information": "Information Text"
    }, {
      "id": "AL",
      "country": "Albania",
      "population": "3,047,987",
      "information": "Information Text"
    }, {
      "id": "AM",
      "country": "Armenia",
      "population": "3,045,191",
      "information": "Information Text"
    }, {
      "id": "AO",
      "country": "Angola",
      "population": "29,310,272",
      "information": "Information Text"
    }, {
      "id": "AR",
      "country": "Argentina",
      "population": "44,293,292",
      "information": "Information Text"
    }, {
      "id": "AT",
      "country": "Austria",
      "population": "8,754,413",
      "information": "Information Text"
    }, {
      "id": "AU",
      "country": "Australia",
      "population": "23,232,412",
      "information": "Information Text",
      "restaurants": "Momofuku Seiobo, Bennelong Restaurant, Quay Restaruant Sydney"
    }, {
      "id": "AZ",
      "country": "Azerbaijan",
      "population": "9,961,396",
      "information": "Information Text"
    }, {
      "id": "BA",
      "country": "Bosnia and Herzegovina",
      "population": "3,856,181",
      "information": "Information Text"
    }, {
      "id": "BD",
      "country": "Bangladesh",
      "population": "157,826,576",
      "information": "Information Text"
    }, {
      "id": "BE",
      "country": "Belgium",
      "population": "11,491,346",
      "information": "Information Text"
    }, {
      "id": "BF",
      "country": "Burkina Faso",
      "population": "20,107,508",
      "information": "Information Text"
    }, {
      "id": "BG",
      "country": "Bulgaria",
      "population": "7,101,510",
      "information": "Information Text"
    }, {
      "id": "BI",
      "country": "Burundi",
      "population": "11,466,756",
      "information": "Information Text"
    }, {
      "id": "BJ",
      "country": "Benin",
      "population": "11,038,805",
      "information": "Information Text"
    }, {
      "id": "BN",
      "country": "Brunei Darussalam",
      "population": "443,593",
      "information": "Information Text"
    }, {
      "id": "BO",
      "country": "Bolivia",
      "population": "11,138,234",
      "information": "Information Text"
    }, {
      "id": "BR",
      "country": "Brazil",
      "population": "207,353,392",
      "information": "Information Text"
    }, {
      "id": "BS",
      "country": "Bahamas",
      "population": "329,988",
      "information": "Information Text"
    }, {
      "id": "BT",
      "country": "Bhutan",
      "population": "758,288",
      "information": "Information Text"
    }, {
      "id": "BW",
      "country": "Botswana",
      "population": "2,214,858",
      "information": "Information Text"
    }, {
      "id": "BY",
      "country": "Belarus",
      "population": "9,549,747",
      "information": "Information Text"
    }, {
      "id": "BZ",
      "country": "Belize",
      "population": "360,346",
      "information": "Information Text"
    }, {
      "id": "CA",
      "country": "Canada",
      "population": "35,623,680",
      "information": "Information Text"
    }, {
      "id": "CD",
      "country": "Democratic Republic of Congo",
      "population": "83,301,152",
      "information": "Information Text"
    }, {
      "id": "CF",
      "country": "Central African Republic",
      "population": "5,625,118",
      "information": "Information Text"
    }, {
      "id": "CG",
      "country": "Republic of Congo",
      "population": "4,954,674",
      "information": "Information Text"
    }, {
      "id": "CH",
      "country": "Switzerland",
      "population": "8,236,303",
      "information": "Information Text"
    }, {
      "id": "CI",
      "country": "CÃ´te d'Ivoire",
      "population": "24,905,843",
      "information": "Information Text"
    }, {
      "id": "CL",
      "country": "Chile",
      "population": "17,789,268",
      "information": "Information Text"
    }, {
      "id": "CM",
      "country": "Cameroon",
      "population": "24,994,884",
      "information": "Information Text"
    }, {
      "id": "CN",
      "country": "China",
      "population": "1,379,302,784",
      "information": "Information Text"
    },  {
      "id": "CO",
      "country": "Colombia",
      "population": "47,698,524",
      "information": "Information Text"
    }, {
      "id": "CR",
      "country": "Costa Rica",
      "population": "4,930,258",
      "information": "Information Text"
    }, {
      "id": "CU",
      "country": "Cuba",
      "population": "11,147,407",
      "information": "Information Text"
    }, {
      "id": "CY",
      "country": "Cyprus",
      "population": "1,189,085",
      "information": "Information Text"
    }, {
      "id": "CZ",
      "country": "Czech Republic",
      "population": "10,674,723",
      "information": "Information Text"
    }, {
      "id": "DE",
      "country": "Germany",
      "population": "80,594,016",
      "information": "Information Text"
    }, {
      "id": "DJ",
      "country": "Djibouti",
      "population": "865,267",
      "information": "Information Text"
    }, {
      "id": "DK",
      "country": "Denmark",
      "population": "5,605,948",
      "information": "Information Text"
    }, {
      "id": "DO",
      "country": "Dominican Republic",
      "population": "10,734,247",
      "information": "Information Text"
    }, {
      "id": "DZ",
      "country": "Algeria",
      "population": "40,969,444",
      "information": "Information Text"
    }, {
      "id": "EC",
      "country": "Ecuador",
      "population": "16,390,913",
      "information": "Information Text"
    }, {
      "id": "EE",
      "country": "Estonia",
      "population": "1,251,581",
      "information": "Information Text"
    }, {
      "id": "EG",
      "country": "Egypt",
      "population": "97,041,072",
      "information": "Information Text"
    }, {
      "id": "EH",
      "country": "Western Sahara",
      "population": "603,253",
      "information": "Information Text"
    }, {
      "id": "ER",
      "country": "Eritrea",
      "population": "5,918,919",
      "information": "Information Text"
    }, {
      "id": "ES",
      "country": "Spain",
      "population": "48,958,160",
      "information": "Information Text"
    }, {
      "id": "ET",
      "country": "Ethiopia",
      "population": "105,350,016",
      "information": "Information Text"
    }, {
      "id": "FK",
      "country": "Falkland Island",
      "population": "3,198",
      "information": "Information Text"
    }, {
      "id": "FI",
      "country": "Finland",
      "population": "5,518,371",
      "information": "Information Text"
    }, {
      "id": "FJ",
      "country": "Fiji",
      "population": "920,938",
      "information": "Information Text"
    }, {
      "id": "FR",
      "country": "France",
      "population": "67,106,160",
      "information": "Information Text"
    }, {
      "id": "GA",
      "country": "Gabon",
      "population": "1,772,255",
      "information": "Information Text"
    }, {
      "id": "GB",
      "country": "United Kingdom",
      "population": "64,789,452",
      "information": "Information Text"
    }, {
      "id": "GE",
      "country": "Georgia",
      "population": "4,926,330",
      "information": "Information Text"
    }, {
      "id": "GF",
      "country": "French Guiana",
      "population": "289,763",
      "information": "Information Text"
    }, {
      "id": "GH",
      "country": "Ghana",
      "population": "27,499,924",
      "information": "Information Text"
    }, {
      "id": "GL",
      "country": "Greenland",
      "population": "57,713",
      "information": "Information Text"
    }, {
      "id": "GM",
      "country": "Gambia",
      "population": "2,051,363",
      "information": "Information Text"
    }, {
      "id": "GN",
      "country": "Guinea",
      "population": "12,413,867",
      "information": "Information Text"
    }, {
      "id": "GQ",
      "country": "Equatorial Guinea",
      "population": "778,358",
      "information": "Information Text"
    }, {
      "id": "GR",
      "country": "Greece",
      "population": "10,768,477",
      "information": "Information Text"
    }, {
      "id": "GT",
      "country": "Guatemala",
      "population": "15,460,732",
      "information": "Information Text"
    }, {
      "id": "GW",
      "country": "Guinea-Bissau",
      "population": "1,792,338",
      "information": "Information Text"
    }, {
      "id": "GY",
      "country": "Guyana",
      "population": "737,718",
      "information": "Information Text"
    }, {
      "id": "HN",
      "country": "Honduras",
      "population": "9,038,741",
      "information": "Information Text"
    }, {
      "id": "HR",
      "country": "Croatia",
      "population": "4,292,095",
      "information": "Information Text"
    }, {
      "id": "HT",
      "country": "Haiti",
      "population": "10,646,714",
      "information": "Information Text"
    }, {
      "id": "HU",
      "country": "Hungary",
      "population": "9,850,845",
      "information": "Information Text"
    }, {
      "id": "ID",
      "country": "Indonesia",
      "population": "260,580,736",
      "information": "Information Text"
    }, {
      "id": "IE",
      "country": "Ireland",
      "population": "5,011,102",
      "information": "Information Text"
    }, {
      "id": "IL",
      "country": "Israel",
      "population": "8,299,706",
      "information": "Information Text"
    }, {
      "id": "IN",
      "country": "India",
      "population": "1,281,935,872",
      "information": "Information Text"
    }, {
      "id": "IQ",
      "country": "Iraq",
      "population": "39,192,112",
      "information": "Information Text"
    }, {
      "id": "IR",
      "country": "Iran",
      "population": "82,021,568",
      "information": "Information Text"
    }, {
      "id": "IS",
      "country": "Iceland",
      "population": "339,747",
      "information": "Information Text"
    }, {
      "id": "IT",
      "country": "Italy",
      "population": "62,137,800",
      "information": "Information Text"
    }, {
      "id": "JM",
      "country": "Jamaica",
      "population": "2,990,561",
      "information": "Information Text"
    }, {
      "id": "JO",
      "country": "Jordan",
      "population": "10,248,068",
      "information": "Information Text"
    }, {
      "id": "JP",
      "country": "Japan",
      "population": "126,451,400",
      "information": "Information Text"
    }, {
      "id": "KE",
      "country": "Kenya",
      "population": "47,615,740",
      "information": "Information Text"
    }, {
      "id": "KG",
      "country": "Kyrgyzstan",
      "population": "5,789,122",
      "information": "Information Text"
    }, {
      "id": "KH",
      "country": "Cambodia",
      "population": "16,204,486",
      "information": "Information Text"
    }, {
      "id": "KP",
      "country": "North Korea",
      "population": "25,448,140",
      "information": "Information Text"
    }, {
      "id": "KR",
      "country": "South Korea",
      "population": "51,181,300",
      "information": "Information Text"
    }, {
      "id": "XK",
      "country": "Kosovo",
      "population": "1,920,079",
      "information": "Information Text"
    }, {
      "id": "KW",
      "country": "Kuwait",
      "population": "2,875,422",
      "information": "Information Text"
    }, {
      "id": "KZ",
      "country": "Kazakhstan",
      "population": "18,556,698",
      "information": "Information Text"
    }, {
      "id": "LA",
      "country": "Lao People's Democratic Republic",
      "population": "6,961,210",
      "information": "Information Text"
    }, {
      "id": "LB",
      "country": "Lebanon",
      "population": "6,229,794",
      "information": "Information Text"
    }, {
      "id": "LK",
      "country": "Sri Lanka",
      "population": "22,409,380",
      "information": "Information Text"
    }, {
      "id": "LR",
      "country": "Liberia",
      "population": "4,689,021",
      "information": "Information Text"
    }, {
      "id": "LS",
      "country": "Lesotho",
      "population": "1,958,042",
      "information": "Information Text"
    }, {
      "id": "LT",
      "country": "Lithuania",
      "population": "2,823,859",
      "information": "Information Text"
    }, {
      "id": "LU",
      "country": "Luxembourg",
      "population": "594,130",
      "information": "Information Text"
    }, {
      "id": "LV",
      "country": "Latvia",
      "population": "1,944,643",
      "information": "Information Text"
    }, {
      "id": "LY",
      "country": "Libya",
      "population": "6,653,210",
      "information": "Information Text"
    }, {
      "id": "MA",
      "country": "Morocco",
      "population": "33,986,656",
      "information": "Information Text"
    }, {
      "id": "MD",
      "country": "Moldova",
      "population": "3,474,121",
      "information": "Information Text"
    }, {
      "id": "ME",
      "country": "Montenegro",
      "population": "642,550",
      "information": "Information Text"
    }, {
      "id": "MG",
      "country": "Madagascar",
      "population": "25,054,160",
      "information": "Information Text"
    }, {
      "id": "MK",
      "country": "Macedonia",
      "population": "2,103,721",
      "information": "Information Text"
    }, {
      "id": "ML",
      "country": "Mali",
      "population": "17,885,244",
      "information": "Information Text"
    }, {
      "id": "MM",
      "country": "Myanmar",
      "population": "53,370,609",
      "information": "Information Text"
    }, {
      "id": "MN",
      "country": "Mongolia",
      "population": "3,068,243",
      "information": "Information Text"
    }, {
      "id": "MR",
      "country": "Mauritania",
      "population": "3,758,571",
      "information": "Information Text"
    }, {
      "id": "MW",
      "country": "Malawi",
      "population": "19,196,246",
      "information": "Information Text"
    }, {
      "id": "MX",
      "country": "Mexico",
      "population": "124,574,792",
      "information": "Information Text"
    }, {
      "id": "MY",
      "country": "Malaysia",
      "population": "31,381,992",
      "information": "Information Text"
    }, {
      "id": "MZ",
      "country": "Mozambique",
      "population": "26,573,706",
      "information": "Information Text"
    }, {
      "id": "NA",
      "country": "Namibia",
      "population": "2,484,780",
      "information": "Information Text"
    }, {
      "id": "NC",
      "country": "New Caledonia",
      "population": "279,070",
      "information": "Information Text"
    }, {
      "id": "NE",
      "country": "Niger",
      "population": "19,245,344",
      "information": "Information Text"
    }, {
      "id": "NG",
      "country": "Nigeria",
      "population": "190,632,256",
      "information": "Information Text"
    }, {
      "id": "NI",
      "country": "Nicaragua",
      "population": "6,025,951",
      "information": "Information Text"
    }, {
      "id": "NL",
      "country": "Netherlands",
      "population": "17,084,720",
      "information": "Information Text"
    }, {
      "id": "NO",
      "country": "Norway",
      "population": "5,320,045",
      "information": "Information Text"
    }, {
      "id": "NP",
      "country": "Nepal",
      "population": "29,384,296",
      "information": "Information Text"
    }, {
      "id": "NZ",
      "country": "New Zealand",
      "population": "4,510,327",
      "information": "Information Text"
    }, {
      "id": "OM",
      "country": "Oman",
      "population": "3,424,386",
      "information": "Information Text"
    }, {
      "id": "PA",
      "country": "Panama",
      "population": "3,753,142",
      "information": "Information Text"
    }, {
      "id": "PE",
      "country": "Peru",
      "population": "31,036,656",
      "information": "Information Text"
    }, {
      "id": "PG",
      "country": "Papa New Guinea",
      "population": "6,909,701",
      "information": "Information Text"
    }, {
      "id": "PH",
      "country": "Philippines",
      "population": "104,256,080",
      "information": "Information Text"
    }, {
      "id": "PL",
      "country": "Poland",
      "population": "38,476,268",
      "information": "Information Text"
    }, {
      "id": "PK",
      "country": "Pakistan",
      "population": "204,924,864",
      "information": "Information Text"
    }, {
      "id": "PR",
      "country": "Puerto Rico",
      "population": "3,351,827",
      "information": "Information Text"
    }, {
      "id": "PS",
      "country": "Palestinian Territories",
      "population": "5,079,490",
      "information": "Information Text"
    }, {
      "id": "PT",
      "country": "Portugal",
      "population": "10,839,514",
      "information": "Information Text"
    }, {
      "id": "PY",
      "country": "Paraguay",
      "population": "6,943,739",
      "information": "Information Text"
    }, {
      "id": "QA",
      "country": "Qatar",
      "population": "2,314,307",
      "information": "Information Text"
    }, {
      "id": "RO",
      "country": "Romania",
      "population": "21,529,968",
      "information": "Information Text"
    }, {
      "id": "RS",
      "country": "Serbia",
      "population": "7,111,024",
      "information": "Information Text"
    }, {
      "id": "RU",
      "country": "Russia",
      "population": "142,257,520",
      "information": "Information Text"
    }, {
      "id": "RW",
      "country": "Rwanda",
      "population": "11,901,484",
      "information": "Information Text"
    }, {
      "id": "SA",
      "country": "Saudi Arabia",
      "population": "28,571,770",
      "information": "Information Text"
    }, {
      "id": "SB",
      "country": "Solomon Islands",
      "population": "647,581",
      "information": "Information Text"
    }, {
      "id": "SD",
      "country": "Sudan",
      "population": "37,345,936",
      "information": "Information Text"
    }, {
      "id": "SE",
      "country": "Swedan",
      "population": "9,960,487",
      "information": "Information Text"
    }, {
      "id": "SI",
      "country": "Slovenia",
      "population": "1,972,126",
      "information": "Information Text"
    }, {
      "id": "SJ",
      "country": "Svalbard and Jan Mayen",
      "population": "2,667",
      "information": "Information Text"
    }, {
      "id": "SK",
      "country": "Slovakia",
      "population": "5,445,829",
      "information": "Information Text"
    }, {
      "id": "SL",
      "country": "Sierra Leone",
      "population": "6,163,195",
      "information": "Information Text"
    }, {
      "id": "SN",
      "country": "Senegal",
      "population": "14,668,522",
      "information": "Information Text"
    }, {
      "id": "SO",
      "country": "Somalia",
      "population": "11,031,386",
      "information": "Information Text"
    }, {
      "id": "SR",
      "country": "Suriname",
      "population": "591,919",
      "information": "Information Text"
    }, {
      "id": "SS",
      "country": "South Sudan",
      "population": "37,345,936",
      "information": "Information Text"
    }, {
      "id": "SV",
      "country": "El Salvador",
      "population": "6,172,011",
      "information": "Information Text"
    }, {
      "id": "SY",
      "country": "Syria",
      "population": "18,028,548",
      "information": "Information Text"
    }, {
      "id": "SZ",
      "country": "Swaziland",
      "population": "1,467,152",
      "information": "Information Text"
    }, {
      "id": "TD",
      "country": "Chad",
      "population": "12,075,985",
      "information": "Information Text"
    }, {
      "id": "TF",
      "country": "French Southern and Antarctic Lands",
      "population": "0",
      "information": "Information Text"
    }, {
      "id": "TG",
      "country": "Togo",
      "population": "7,965,055",
      "information": "Information Text"
    }, {
      "id": "TH",
      "country": "Thailand",
      "population": "68,414,136",
      "information": "Information Text"
    }, {
      "id": "TJ",
      "country": "Tajikistan",
      "population": "8,468,555",
      "information": "Information Text"
    }, {
      "id": "TL",
      "country": "Timor-Leste",
      "population": "1,291,358",
      "information": "Information Text"
    }, {
      "id": "TM",
      "country": "Turkmenistan",
      "population": "5,351,277",
      "information": "Information Text"
    }, {
      "id": "TN",
      "country": "Tunisia",
      "population": "11,403,800",
      "information": "Information Text"
    }, {
      "id": "TR",
      "country": "Turkey",
      "population": "80,845,216",
      "information": "Information Text"
    }, {
      "id": "TT",
      "country": "Trinidad and Tobago",
      "population": "1,218,208",
      "information": "Information Text"
    }, {
      "id": "TW",
      "country": "Taiwan",
      "population": "23,508,428",
      "information": "Information Text"
    }, {
      "id": "TZ",
      "country": "Tanzania",
      "population": "53,950,936",
      "information": "Information Text"
    }, {
      "id": "UA",
      "country": "Ukraine",
      "population": "44,033,872",
      "information": "Information Text"
    }, {
      "id": "UG",
      "country": "Uganda",
      "population": "39,570,124",
      "information": "Information Text"
    }, {
      "id": "US",
      "country": "United States of America",
      "population": "326,625,792",
      "information": "Information Text"
    }, {
      "id": "UY",
      "country": "Uruguay",
      "population": "3,360,148",
      "information": "Information Text"
    },  {
      "id": "UZ",
      "country": "Uzbekistan",
      "population": "29,748,860",
      "information": "Information Text"
    }, {
      "id": "VE",
      "country": "Venezuela",
      "population": "31,304,016",
      "information": "Information Text"
    }, {
      "id": "VN",
      "country": "Vietnam",
      "population": "96,160,160",
      "information": "Information Text"
    }, {
      "id": "VU",
      "country": "Vanuatu",
      "population": "282,814",
      "information": "Information Text"
    }, {
      "id": "YE",
      "country": "Yemen",
      "population": "28,036,828",
      "information": "Information Text"
    }, {
      "id": "ZA",
      "country": "South Africa",
      "population": "54,841,552",
      "information": "Information Text"
    }, {
      "id": "ZM",
      "country": "Zambia",
      "population": "15,972,000",
      "information": "Information Text"
    }, {
      "id": "ZW",
      "country": "Zimbabwe",
      "population": "13,805,084",
      "information": "Information Text"
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
  document.querySelector("#restaurants").innerHTML = "<p>" + "Popular Restaurants: " + evt.mapObject.restaurants + "</p>";
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
