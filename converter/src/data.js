// 20211019193317
// http://www.floatrates.com/daily/usd.json


const currenciesList = [
    {
      "code": "EUR",
      "alphaCode": "EUR",
      "numericCode": "978",
      "name": "Euro",
      "rate": 0.85986854003239,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.1629684695318
    },
    {
        "code": "USD",
        "alphaCode": "USD",
        "numericCode": "840",
        "name": "U.S. Dollar",
        "rate": 1.0,
        "date": "Tue, 19 Oct 2021 11:55:01 GMT",
        "inverseRate": 1.0
    },
    {
      "code": "GBP",
      "alphaCode": "GBP",
      "numericCode": "826",
      "name": "U.K. Pound Sterling",
      "rate": 0.72665561956243,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.3761677100938
    },
    {
      "code": "JPY",
      "alphaCode": "JPY",
      "numericCode": "392",
      "name": "Japanese Yen",
      "rate": 114.13104870362,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0087618576308436
    },
    {
      "code": "AUD",
      "alphaCode": "AUD",
      "numericCode": "036",
      "name": "Australian Dollar",
      "rate": 1.3466659418947,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.7425746570772
    },
    {
      "code": "CHF",
      "alphaCode": "CHF",
      "numericCode": "756",
      "name": "Swiss Franc",
      "rate": 0.92172547384462,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.0849217346993
    },
    {
      "code": "CAD",
      "alphaCode": "CAD",
      "numericCode": "124",
      "name": "Canadian Dollar",
      "rate": 1.2363815693173,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.80881179792431
    },
    {
      "code": "LBP",
      "alphaCode": "LBP",
      "numericCode": "422",
      "name": "Lebanese Pound",
      "rate": 1502.9435172551,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00066536099894582
    },
    {
      "code": "HUF",
      "alphaCode": "HUF",
      "numericCode": "348",
      "name": "Hungarian Forint",
      "rate": 310.29769118771,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0032227117004073
    },
    {
      "code": "NGN",
      "alphaCode": "NGN",
      "numericCode": "566",
      "name": "Nigerian Naira",
      "rate": 408.32388520515,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0024490362583065
    },
    {
      "code": "IRR",
      "alphaCode": "IRR",
      "numericCode": "364",
      "name": "Iranian rial",
      "rate": 41635.040496873,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.000024018230511271
    },
    {
      "code": "NIO",
      "alphaCode": "NIO",
      "numericCode": "558",
      "name": "Nicaraguan Córdoba",
      "rate": 34.824156305506,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.028715699275732
    },
    {
      "code": "CVE",
      "alphaCode": "CVE",
      "numericCode": "132",
      "name": "Cape Verde escudo",
      "rate": 94.714975845413,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.01055799245129
    },
    {
      "code": "ZMW",
      "alphaCode": "ZMW",
      "numericCode": "967",
      "name": "Zambian kwacha",
      "rate": 16.685957446809,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.059930633479545
    },
    {
      "code": "YER",
      "alphaCode": "YER",
      "numericCode": "886",
      "name": "Yemeni rial",
      "rate": 247.40993122595,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0040418749362439
    },
    {
      "code": "MUR",
      "alphaCode": "MUR",
      "numericCode": "480",
      "name": "Mauritian Rupee",
      "rate": 42.391351351352,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.023589717433438
    },
    {
      "code": "VES",
      "alphaCode": "VES",
      "numericCode": "928",
      "name": "Venezuelan Bolivar",
      "rate": 4.1428047360869,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.24138236381002
    },
    {
      "code": "NPR",
      "alphaCode": "NPR",
      "numericCode": "524",
      "name": "Nepalese Rupee",
      "rate": 119.7638538938,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0083497647035202
    },
    {
      "code": "ISK",
      "alphaCode": "ISK",
      "numericCode": "352",
      "name": "Icelandic Krona",
      "rate": 129.21823828433,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0077388456403469
    },
    {
      "code": "GIP",
      "alphaCode": "GIP",
      "numericCode": "292",
      "name": "Gibraltar pound",
      "rate": 0.72700090250833,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.3755141108488
    },
    {
      "code": "GEL",
      "alphaCode": "GEL",
      "numericCode": "981",
      "name": "Georgian lari",
      "rate": 3.0908670477606,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.32353381253475
    },
    {
      "code": "STN",
      "alphaCode": "STN",
      "numericCode": "930",
      "name": "São Tomé and Príncipe Dobra",
      "rate": 21.184224743382,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.047204937264103
    },
    {
      "code": "XPF",
      "alphaCode": "XPF",
      "numericCode": "953",
      "name": "CFP Franc",
      "rate": 102.157148812,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0097888401509747
    },
    {
      "code": "ALL",
      "alphaCode": "ALL",
      "numericCode": "008",
      "name": "Albanian lek",
      "rate": 103.99681739822,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0096156788738144
    },
    {
      "code": "SOS",
      "alphaCode": "SOS",
      "numericCode": "706",
      "name": "Somali shilling",
      "rate": 572.02042304888,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.001748189329797
    },
    {
      "code": "AED",
      "alphaCode": "AED",
      "numericCode": "784",
      "name": "U.A.E Dirham",
      "rate": 3.6597527213907,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.27324250465206
    },
    {
      "code": "PHP",
      "alphaCode": "PHP",
      "numericCode": "608",
      "name": "Philippine Peso",
      "rate": 50.846477557908,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.019667045742965
    },
    {
      "code": "ILS",
      "alphaCode": "ILS",
      "numericCode": "376",
      "name": "Israeli New Sheqel",
      "rate": 3.2227649933485,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.31029255997999
    },
    {
      "code": "MRO",
      "alphaCode": "MRO",
      "numericCode": "478",
      "name": "Mauritanian Ouguiya",
      "rate": 36.210219094835,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.027616513376541
    },
    {
      "code": "COP",
      "alphaCode": "COP",
      "numericCode": "170",
      "name": "Colombian Peso",
      "rate": 3723.82739212,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00026854091092302
    },
    {
      "code": "BND",
      "alphaCode": "BND",
      "numericCode": "096",
      "name": "Brunei Dollar",
      "rate": 1.3384305560296,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.74714373151078
    },
    {
      "code": "KMF",
      "alphaCode": "KMF",
      "numericCode": "174",
      "name": "\tComoro franc",
      "rate": 422.31556273561,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0023678975823727
    },
    {
      "code": "SZL",
      "alphaCode": "SZL",
      "numericCode": "748",
      "name": "Swazi lilangeni",
      "rate": 14.769114877589,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.067708864633278
    },
    {
      "code": "WST",
      "alphaCode": "WST",
      "numericCode": "882",
      "name": "Samoan tala",
      "rate": 2.5510376683365,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.39199734775069
    },
    {
      "code": "CNY",
      "alphaCode": "CNY",
      "numericCode": "156",
      "name": "Chinese Yuan",
      "rate": 6.4184970165534,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.15579971407963
    },
    {
      "code": "SAR",
      "alphaCode": "SAR",
      "numericCode": "682",
      "name": "Saudi Riyal",
      "rate": 3.7482455564364,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.26679148549455
    },
    {
      "code": "MYR",
      "alphaCode": "MYR",
      "numericCode": "458",
      "name": "Malaysian Ringgit",
      "rate": 4.169535858739,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.23983484826113
    },
    {
      "code": "KZT",
      "alphaCode": "KZT",
      "numericCode": "398",
      "name": "Kazakhstani Tenge",
      "rate": 425.34247778014,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0023510466323961
    },
    {
      "code": "BOB",
      "alphaCode": "BOB",
      "numericCode": "068",
      "name": "Bolivian Boliviano",
      "rate": 6.8486573670444,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.14601402091043
    },
    {
      "code": "JMD",
      "alphaCode": "JMD",
      "numericCode": "388",
      "name": "Jamaican Dollar",
      "rate": 148.5303030303,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0067326328674897
    },
    {
      "code": "SSP",
      "alphaCode": "SSP",
      "numericCode": "728",
      "name": "South Sudanese pound",
      "rate": 175.87799955147,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0056857594613893
    },
    {
      "code": "ERN",
      "alphaCode": "ERN",
      "numericCode": "232",
      "name": "Eritrean nakfa",
      "rate": 14.903838844546,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.067096807099866
    },
    {
      "code": "BAM",
      "alphaCode": "BAM",
      "numericCode": "977",
      "name": "Bosnia and Herzegovina convertible mark",
      "rate": 1.6745814827468,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.59716413342856
    },
    {
      "code": "IDR",
      "alphaCode": "IDR",
      "numericCode": "360",
      "name": "Indonesian Rupiah",
      "rate": 14081.878662682,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.000071013252134466
    },
    {
      "code": "TND",
      "alphaCode": "TND",
      "numericCode": "788",
      "name": "Tunisian Dinar",
      "rate": 2.8132980586951,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.35545469379232
    },
    {
      "code": "XOF",
      "alphaCode": "XOF",
      "numericCode": "952",
      "name": "West African CFA Franc",
      "rate": 565.63684699687,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0017679187721049
    },
    {
      "code": "TJS",
      "alphaCode": "TJS",
      "numericCode": "972",
      "name": "Tajikistan Ruble",
      "rate": 11.289055831437,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.088581367204799
    },
    {
      "code": "MGA",
      "alphaCode": "MGA",
      "numericCode": "969",
      "name": "Malagasy ariary",
      "rate": 3921.2,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00025502397225339
    },
    {
      "code": "SRD",
      "alphaCode": "SRD",
      "numericCode": "968",
      "name": "Surinamese dollar",
      "rate": 21.218614718615,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.047128430072426
    },
    {
      "code": "GHS",
      "alphaCode": "GHS",
      "numericCode": "936",
      "name": "Ghanaian Cedi",
      "rate": 5.9975527684306,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.16673467305927
    },
    {
      "code": "MOP",
      "alphaCode": "MOP",
      "numericCode": "446",
      "name": "Macanese pataca",
      "rate": 7.9280226445615,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.12613485667652
    },
    {
      "code": "KWD",
      "alphaCode": "KWD",
      "numericCode": "414",
      "name": "Kuwaiti Dinar",
      "rate": 0.30067985903504,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 3.3257964241744
    },
    {
      "code": "CZK",
      "alphaCode": "CZK",
      "numericCode": "203",
      "name": "Czech Koruna",
      "rate": 21.899544805371,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.04566304956963
    },
    {
      "code": "PGK",
      "alphaCode": "PGK",
      "numericCode": "598",
      "name": "Papua New Guinean kina",
      "rate": 3.509454645354,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.28494455721884
    },
    {
      "code": "UAH",
      "alphaCode": "UAH",
      "numericCode": "980",
      "name": "Ukrainian Hryvnia",
      "rate": 26.272909876766,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.038062019193555
    },
    {
      "code": "SVC",
      "alphaCode": "SVC",
      "numericCode": "222",
      "name": "Salvadoran colon",
      "rate": 8.6560706401767,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.11552585943079
    },
    {
      "code": "SBD",
      "alphaCode": "SBD",
      "numericCode": "090",
      "name": "Solomon Islands dollar",
      "rate": 7.9699186991872,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.12547179434867
    },
    {
      "code": "MWK",
      "alphaCode": "MWK",
      "numericCode": "454",
      "name": "Malawian kwacha",
      "rate": 806.33353896771,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0012401815770683
    },
    {
      "code": "GTQ",
      "alphaCode": "GTQ",
      "numericCode": "320",
      "name": "Guatemalan Quetzal",
      "rate": 7.6541089205544,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.13064878098541
    },
    {
      "code": "SEK",
      "alphaCode": "SEK",
      "numericCode": "752",
      "name": "Swedish Krona",
      "rate": 8.6394443196475,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.11574818506855
    },
    {
      "code": "MAD",
      "alphaCode": "MAD",
      "numericCode": "504",
      "name": "Moroccan Dirham",
      "rate": 9.0081073254667,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.11101111075497
    },
    {
      "code": "RON",
      "alphaCode": "RON",
      "numericCode": "946",
      "name": "Romanian New Leu",
      "rate": 4.256527786718,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.23493327193126
    },
    {
      "code": "BYN",
      "alphaCode": "BYN",
      "numericCode": "933",
      "name": "Belarussian Ruble",
      "rate": 2.4435192821919,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.40924579858563
    },
    {
      "code": "RSD",
      "alphaCode": "RSD",
      "numericCode": "941",
      "name": "Serbian Dinar",
      "rate": 100.61202160546,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0099391701313925
    },
    {
      "code": "MKD",
      "alphaCode": "MKD",
      "numericCode": "807",
      "name": "Macedonian denar",
      "rate": 52.736907227588,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.018962052432928
    },
    {
      "code": "BIF",
      "alphaCode": "BIF",
      "numericCode": "108",
      "name": "Burundian franc",
      "rate": 1966.4994984955,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00050851780067326
    },
    {
      "code": "MMK",
      "alphaCode": "MMK",
      "numericCode": "104",
      "name": "Myanma Kyat",
      "rate": 1908.1265206813,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00052407426298071
    },
    {
      "code": "MVR",
      "alphaCode": "MVR",
      "numericCode": "462",
      "name": "Maldivian rufiyaa",
      "rate": 15.287329434698,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.065413648882994
    },
    {
      "code": "KES",
      "alphaCode": "KES",
      "numericCode": "404",
      "name": "Kenyan shilling",
      "rate": 109.41153492006,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0091398041415892
    },
    {
      "code": "BHD",
      "alphaCode": "BHD",
      "numericCode": "048",
      "name": "Bahrain Dinar",
      "rate": 0.37526307580909,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 2.664797216843
    },
    {
      "code": "OMR",
      "alphaCode": "OMR",
      "numericCode": "512",
      "name": "Omani Rial",
      "rate": 0.38323015823149,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 2.6093979780056
    },
    {
      "code": "RUB",
      "alphaCode": "RUB",
      "numericCode": "643",
      "name": "Russian Rouble",
      "rate": 71.161077527052,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.014052625884141
    },
    {
      "code": "LYD",
      "alphaCode": "LYD",
      "numericCode": "434",
      "name": "Libyan Dinar",
      "rate": 4.5263747371869,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.22092735534785
    },
    {
      "code": "CLP",
      "alphaCode": "CLP",
      "numericCode": "152",
      "name": "Chilean Peso",
      "rate": 817.36347038925,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0012234459163238
    },
    {
      "code": "BZD",
      "alphaCode": "BZD",
      "numericCode": "084",
      "name": "Belize dollar",
      "rate": 1.9931886341687,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.50170866061409
    },
    {
      "code": "GNF",
      "alphaCode": "GNF",
      "numericCode": "324",
      "name": "Guinean franc",
      "rate": 9634.3980343983,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00010379475670713
    },
    {
      "code": "SLL",
      "alphaCode": "SLL",
      "numericCode": "694",
      "name": "Sierra Leonean leone",
      "rate": 10512.600536193,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.000095123941650515
    },
    {
      "code": "UGX",
      "alphaCode": "UGX",
      "numericCode": "800",
      "name": "Ugandan shilling",
      "rate": 3558.2577132487,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00028103641742323
    },
    {
      "code": "BDT",
      "alphaCode": "BDT",
      "numericCode": "050",
      "name": "Bangladeshi taka",
      "rate": 85.117929862974,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.011748406024557
    },
    {
      "code": "QAR",
      "alphaCode": "QAR",
      "numericCode": "634",
      "name": "Qatari Rial",
      "rate": 3.6280838965573,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.27562758428737
    },
    {
      "code": "MXN",
      "alphaCode": "MXN",
      "numericCode": "484",
      "name": "Mexican Peso",
      "rate": 20.402713611124,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.049013088114651
    },
    {
      "code": "AMD",
      "alphaCode": "AMD",
      "numericCode": "051",
      "name": "Armenia Dram",
      "rate": 477.39347808914,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0020947081304979
    },
    {
      "code": "UYU",
      "alphaCode": "UYU",
      "numericCode": "858",
      "name": "Uruguayan Peso",
      "rate": 43.360427090515,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.023062503464565
    },
    {
      "code": "GYD",
      "alphaCode": "GYD",
      "numericCode": "328",
      "name": "Guyanese dollar",
      "rate": 206.52025069785,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0048421401611751
    },
    {
      "code": "RWF",
      "alphaCode": "RWF",
      "numericCode": "646",
      "name": "Rwandan franc",
      "rate": 1005.9517701385,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00099408344384375
    },
    {
      "code": "MZN",
      "alphaCode": "MZN",
      "numericCode": "943",
      "name": "Mozambican metical",
      "rate": 63.143317230272,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.015836988676936
    },
    {
      "code": "VUV",
      "alphaCode": "VUV",
      "numericCode": "548",
      "name": "Vanuatu vatu",
      "rate": 109.89602309352,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0090995103539735
    },
    {
      "code": "HKD",
      "alphaCode": "HKD",
      "numericCode": "344",
      "name": "Hong Kong Dollar",
      "rate": 7.7786080401043,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.12855770529178
    },
    {
      "code": "THB",
      "alphaCode": "THB",
      "numericCode": "764",
      "name": "Thai Baht",
      "rate": 33.412511461082,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.02992890855166
    },
    {
      "code": "XAF",
      "alphaCode": "XAF",
      "numericCode": "950",
      "name": "Central African CFA Franc",
      "rate": 566.33016256323,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.001765754441674
    },
    {
      "code": "MDL",
      "alphaCode": "MDL",
      "numericCode": "498",
      "name": "Moldova Lei",
      "rate": 17.279414417106,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.057872331542094
    },
    {
      "code": "AFN",
      "alphaCode": "AFN",
      "numericCode": "971",
      "name": "Afghan afghani",
      "rate": 89.22971896689,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.011207028460675
    },
    {
      "code": "NAD",
      "alphaCode": "NAD",
      "numericCode": "516",
      "name": "Namibian dollar",
      "rate": 14.769114877589,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.067708864633278
    },
    {
      "code": "SYP",
      "alphaCode": "SYP",
      "numericCode": "760",
      "name": "Syrian pound",
      "rate": 2450.75,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00040803835560543
    },
    {
      "code": "TOP",
      "alphaCode": "TOP",
      "numericCode": "776",
      "name": "Tongan paʻanga",
      "rate": 2.2385111605869,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.44672549219626
    },
    {
      "code": "JOD",
      "alphaCode": "JOD",
      "numericCode": "400",
      "name": "Jordanian Dinar",
      "rate": 0.70702837167601,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.4143703987854
    },
    {
      "code": "BGN",
      "alphaCode": "BGN",
      "numericCode": "975",
      "name": "Bulgarian Lev",
      "rate": 1.6821991368404,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.59445994121615
    },
    {
      "code": "VND",
      "alphaCode": "VND",
      "numericCode": "704",
      "name": "Vietnamese Dong",
      "rate": 22718.836696022,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00004401633822101
    },
    {
      "code": "UZS",
      "alphaCode": "UZS",
      "numericCode": "860",
      "name": "Uzbekistan Sum",
      "rate": 10679.529368034,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.000093637085075416
    },
    {
      "code": "ETB",
      "alphaCode": "ETB",
      "numericCode": "230",
      "name": "Ethiopian birr",
      "rate": 46.077555816688,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.021702540038763
    },
    {
      "code": "XCD",
      "alphaCode": "XCD",
      "numericCode": "951",
      "name": "East Caribbean Dollar",
      "rate": 2.679330372395,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.37322758339283
    },
    {
      "code": "LAK",
      "alphaCode": "LAK",
      "numericCode": "418",
      "name": "Lao kip",
      "rate": 10003.06122449,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.000099969397123328
    },
    {
      "code": "BWP",
      "alphaCode": "BWP",
      "numericCode": "072",
      "name": "Botswana Pula",
      "rate": 11.17150997151,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.08951341426094
    },
    {
      "code": "NOK",
      "alphaCode": "NOK",
      "numericCode": "578",
      "name": "Norwegian Krone",
      "rate": 8.4088190091289,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.11892276417347
    },
    {
      "code": "LKR",
      "alphaCode": "LKR",
      "numericCode": "144",
      "name": "Sri Lanka Rupee",
      "rate": 200.55822957988,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0049860831046163
    },
    {
      "code": "PLN",
      "alphaCode": "PLN",
      "numericCode": "985",
      "name": "Polish Zloty",
      "rate": 3.9355827827983,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.25409197447728
    },
    {
      "code": "PEN",
      "alphaCode": "PEN",
      "numericCode": "604",
      "name": "Peruvian Nuevo Sol",
      "rate": 3.9504584352064,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.25313517820819
    },
    {
      "code": "IQD",
      "alphaCode": "IQD",
      "numericCode": "368",
      "name": "Iraqi dinar",
      "rate": 1444.1456431046,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0006924509344156
    },
    {
      "code": "GMD",
      "alphaCode": "GMD",
      "numericCode": "270",
      "name": "Gambian dalasi",
      "rate": 51.730870712401,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.019330817096807
    },
    {
      "code": "AWG",
      "alphaCode": "AWG",
      "numericCode": "533",
      "name": "Aruban florin",
      "rate": 1.7900118688944,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.55865551361827
    },
    {
      "code": "AOA",
      "alphaCode": "AOA",
      "numericCode": "973",
      "name": "Angolan kwanza",
      "rate": 594.12121212121,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0016831582168724
    },
    {
      "code": "KHR",
      "alphaCode": "KHR",
      "numericCode": "116",
      "name": "Cambodian riel",
      "rate": 4030.0102774924,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00024813832500254
    },
    {
      "code": "SCR",
      "alphaCode": "SCR",
      "numericCode": "690",
      "name": "Seychelles rupee",
      "rate": 13.424169804862,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.074492502295212
    },
    {
      "code": "DOP",
      "alphaCode": "DOP",
      "numericCode": "214",
      "name": "Dominican Peso",
      "rate": 55.912579078016,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.01788506301247
    },
    {
      "code": "NZD",
      "alphaCode": "NZD",
      "numericCode": "554",
      "name": "New Zealand Dollar",
      "rate": 1.410762288241,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.7088366398331
    },
    {
      "code": "HRK",
      "alphaCode": "HRK",
      "numericCode": "191",
      "name": "Croatian Kuna",
      "rate": 6.4663804349315,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.15464602029877
    },
    {
      "code": "DZD",
      "alphaCode": "DZD",
      "numericCode": "012",
      "name": "Algerian Dinar",
      "rate": 136.2520168333,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0073393409010853
    },
    {
      "code": "ARS",
      "alphaCode": "ARS",
      "numericCode": "032",
      "name": "Argentine Peso",
      "rate": 98.523791086601,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.010149832735537
    },
    {
      "code": "BSD",
      "alphaCode": "BSD",
      "numericCode": "044",
      "name": "Bahamian Dollar",
      "rate": 0.98925273727233,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.010864021218
    },
    {
      "code": "DJF",
      "alphaCode": "DJF",
      "numericCode": "262",
      "name": "Djiboutian franc",
      "rate": 176.03591470258,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0056806589819443
    },
    {
      "code": "HNL",
      "alphaCode": "HNL",
      "numericCode": "340",
      "name": "Honduran Lempira",
      "rate": 23.822600243014,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.041976945832907
    },
    {
      "code": "TZS",
      "alphaCode": "TZS",
      "numericCode": "834",
      "name": "Tanzanian shilling",
      "rate": 2279.7674418605,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00043864123227583
    },
    {
      "code": "BBD",
      "alphaCode": "BBD",
      "numericCode": "052",
      "name": "Barbadian Dollar",
      "rate": 1.9996852434734,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.50007870151756
    },
    {
      "code": "ANG",
      "alphaCode": "ANG",
      "numericCode": "532",
      "name": "Neth. Antillean Guilder",
      "rate": 1.7777716996906,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.56250192315135
    },
    {
      "code": "PKR",
      "alphaCode": "PKR",
      "numericCode": "586",
      "name": "Pakistani Rupee",
      "rate": 170.16239754809,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0058767390117278
    },
    {
      "code": "KRW",
      "alphaCode": "KRW",
      "numericCode": "410",
      "name": "South Korean Won",
      "rate": 1183.2568749796,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00084512502833946
    },
    {
      "code": "AZN",
      "alphaCode": "AZN",
      "numericCode": "944",
      "name": "Azerbaijan Manat",
      "rate": 1.6959549115047,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.58963831716067
    },
    {
      "code": "PYG",
      "alphaCode": "PYG",
      "numericCode": "600",
      "name": "Paraguayan Guaraní",
      "rate": 6874.3855950811,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00014546754559644
    },
    {
      "code": "FJD",
      "alphaCode": "FJD",
      "numericCode": "242",
      "name": "Fiji Dollar",
      "rate": 2.0761370254673,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.48166377639497
    },
    {
      "code": "CDF",
      "alphaCode": "CDF",
      "numericCode": "976",
      "name": "Congolese franc",
      "rate": 1963.545317977,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00050928287259001
    },
    {
      "code": "LSL",
      "alphaCode": "LSL",
      "numericCode": "426",
      "name": "Lesotho loti",
      "rate": 14.769114877589,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.067708864633278
    },
    {
      "code": "MNT",
      "alphaCode": "MNT",
      "numericCode": "496",
      "name": "Mongolian togrog",
      "rate": 2821.0071942446,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.00035448332143222
    },
    {
      "code": "BRL",
      "alphaCode": "BRL",
      "numericCode": "986",
      "name": "Brazilian Real",
      "rate": 5.4973831114921,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.18190473170944
    },
    {
      "code": "EGP",
      "alphaCode": "EGP",
      "numericCode": "818",
      "name": "Egyptian Pound",
      "rate": 15.679413423266,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.063777896086096
    },
    {
      "code": "SGD",
      "alphaCode": "SGD",
      "numericCode": "702",
      "name": "Singapore Dollar",
      "rate": 1.3473245556378,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.74221166371203
    },
    {
      "code": "ZAR",
      "alphaCode": "ZAR",
      "numericCode": "710",
      "name": "South African Rand",
      "rate": 14.688718062651,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.068079460422261
    },
    {
      "code": "KGS",
      "alphaCode": "KGS",
      "numericCode": "417",
      "name": "Kyrgyzstan Som",
      "rate": 84.659990638723,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.011811955003248
    },
    {
      "code": "CRC",
      "alphaCode": "CRC",
      "numericCode": "188",
      "name": "Costa Rican Colón",
      "rate": 623.86829935199,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0016029024091121
    },
    {
      "code": "LRD",
      "alphaCode": "LRD",
      "numericCode": "430",
      "name": "Liberian dollar",
      "rate": 164.06694560669,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0060950729368562
    },
    {
      "code": "SDG",
      "alphaCode": "SDG",
      "numericCode": "938",
      "name": "Sudanese pound",
      "rate": 435.68888888889,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.0022952157502805
    },
    {
      "code": "MRU",
      "alphaCode": "MRU",
      "numericCode": "929",
      "name": "Mauritanian ouguiya",
      "rate": 35.810045662101,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.027925124961746
    },
    {
      "code": "DKK",
      "alphaCode": "DKK",
      "numericCode": "208",
      "name": "Danish Krone",
      "rate": 6.4017845124076,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.15620644494701
    },
    {
      "code": "INR",
      "alphaCode": "INR",
      "numericCode": "356",
      "name": "Indian Rupee",
      "rate": 75.25151193001,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.013288769545655
    },
    {
      "code": "TRY",
      "alphaCode": "TRY",
      "numericCode": "949",
      "name": "Turkish Lira",
      "rate": 9.2970306816932,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.10756122403351
    },
    {
      "code": "TWD",
      "alphaCode": "TWD",
      "numericCode": "901",
      "name": "New Taiwan Dollar ",
      "rate": 27.960041691207,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.035765325783276
    },
    {
      "code": "TMT",
      "alphaCode": "TMT",
      "numericCode": "934",
      "name": "New Turkmenistan Manat",
      "rate": 3.4889282226731,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.28662097245263
    },
    {
      "code": "PAB",
      "alphaCode": "PAB",
      "numericCode": "590",
      "name": "Panamanian Balboa",
      "rate": 0.98925273727233,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.010864021218
    },
    {
      "code": "TTD",
      "alphaCode": "TTD",
      "numericCode": "780",
      "name": "Trinidad Tobago Dollar",
      "rate": 6.7120849024308,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.14898500459043
    },
    {
      "code": "HTG",
      "alphaCode": "HTG",
      "numericCode": "332",
      "name": "Haitian gourde",
      "rate": 98.275689223058,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 0.01017545649291
    },
    {
      "code": "CUP",
      "alphaCode": "CUP",
      "numericCode": "192",
      "name": "Cuban peso",
      "rate": 0.98925273727233,
      "date": "Tue, 19 Oct 2021 11:55:01 GMT",
      "inverseRate": 1.010864021218
    }
];

export default currenciesList;