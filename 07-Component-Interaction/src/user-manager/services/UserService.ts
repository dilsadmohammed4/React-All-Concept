import {IUser} from "../models/IUser";

export class UserService {
    static users: IUser[] = [
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Tálio",
                last: "Nogueira"
            },
            location: {
                street: {
                    number: 6290,
                    name: "Rua da Paz "
                },
                city: "Paço do Lumiar",
                state: "Pará",
                country: "Brazil",
                postcode: 88229,
                coordinates: {
                    latitude: "-74.8302",
                    longitude: "-105.8834"
                },
                timezone: {
                    offset: "-9:00",
                    description: "Alaska"
                }
            },
            email: "talio.nogueira@example.com",
            login: {
                uuid: "ea1a3a9d-0f3f-4db6-8a02-de00dc11a912",
                username: "angrydog879",
                password: "nine",
                salt: "d7m8ZSAF",
                md5: "f39866e43a783202a4c6b322257cda93",
                sha1: "cb10b0a197586e77a8967145e7871bc928eb21bd",
                sha256: "5dc75c87cbae169d2b104385dd4aa0d2a6cd509f47671f13b523da6de9de941e"
            },
            dob: {
                date: "1997-01-11T14:49:03.874Z",
                age: 26
            },
            registered: {
                date: "2002-09-12T21:43:06.916Z",
                age: 20
            },
            phone: "(87) 1166-0141",
            cell: "(92) 1667-8230",
            id: {
                name: "CPF",
                value: "312.702.260-66"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/1.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg"
            },
            nat: "BR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Procópio",
                last: "da Rosa"
            },
            location: {
                street: {
                    number: 2095,
                    name: "Rua São Paulo "
                },
                city: "Nova Iguaçu",
                state: "Rio Grande do Sul",
                country: "Brazil",
                postcode: 63977,
                coordinates: {
                    latitude: "-15.0874",
                    longitude: "-114.9329"
                },
                timezone: {
                    offset: "+4:00",
                    description: "Abu Dhabi, Muscat, Baku, Tbilisi"
                }
            },
            email: "procopio.darosa@example.com",
            login: {
                uuid: "f33a9bd4-5152-44c0-b4b0-ba15c5a3c9b9",
                username: "crazydog136",
                password: "tasha1",
                salt: "SJs3mlKy",
                md5: "077018118219f64e70f7684578c7d845",
                sha1: "4d0a1cb004d98bf71c96efb00d38958b1c88feeb",
                sha256: "b52420f51853e8bee5faddcc69f1c650502a89f11a26859f258713fb4073aadf"
            },
            dob: {
                date: "1976-11-20T04:47:40.247Z",
                age: 46
            },
            registered: {
                date: "2007-12-26T18:00:22.091Z",
                age: 15
            },
            phone: "(78) 2079-7105",
            cell: "(67) 4256-1457",
            id: {
                name: "CPF",
                value: "981.412.227-35"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/34.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            nat: "BR"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Lea",
                last: "Mortensen"
            },
            location: {
                street: {
                    number: 9280,
                    name: "Slagelsevej"
                },
                city: "Fredeikssund",
                state: "Syddanmark",
                country: "Denmark",
                postcode: 60205,
                coordinates: {
                    latitude: "39.8849",
                    longitude: "23.3911"
                },
                timezone: {
                    offset: "-12:00",
                    description: "Eniwetok, Kwajalein"
                }
            },
            email: "lea.mortensen@example.com",
            login: {
                uuid: "4e3296e4-2094-45cd-80ce-b219ac649926",
                username: "bluebutterfly847",
                password: "knight1",
                salt: "fmc2JsbO",
                md5: "5e96e3c493b2727c2aaf5039e37eec83",
                sha1: "3bb4c6a996f96aa339bd7cd1e42aea8d6d14e886",
                sha256: "bfe03c476b90941c6f03c319753e6f2d97ad057c6366ee4bf83f4a26ce57a495"
            },
            dob: {
                date: "1969-03-08T07:54:46.042Z",
                age: 54
            },
            registered: {
                date: "2002-08-29T19:57:04.806Z",
                age: 20
            },
            phone: "54691889",
            cell: "35457682",
            id: {
                name: "CPR",
                value: "080369-4027"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/71.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg"
            },
            nat: "DK"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Elizabeth",
                last: "Ma"
            },
            location: {
                street: {
                    number: 9083,
                    name: "Vimy St"
                },
                city: "Trout Lake",
                state: "Manitoba",
                country: "Canada",
                postcode: "D9N 9E4",
                coordinates: {
                    latitude: "3.7048",
                    longitude: "83.0312"
                },
                timezone: {
                    offset: "-11:00",
                    description: "Midway Island, Samoa"
                }
            },
            email: "elizabeth.ma@example.com",
            login: {
                uuid: "ed262433-c594-4b88-80eb-3d8130d940a8",
                username: "angryelephant308",
                password: "classic",
                salt: "tAaHoPh6",
                md5: "f583ef13e7337c52490774d245fe7623",
                sha1: "ef9927097b93b5cab729ba5c78d2cfa3035caeb7",
                sha256: "33a952b53cfafee04c841c6ccc80fab89738841eaa04f3797a28b6f757e459a0"
            },
            dob: {
                date: "1997-01-17T11:50:55.562Z",
                age: 26
            },
            registered: {
                date: "2003-12-19T06:45:01.843Z",
                age: 19
            },
            phone: "O76 T11-9069",
            cell: "E62 T74-6005",
            id: {
                name: "SIN",
                value: "604568337"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/79.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            },
            nat: "CA"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Marta",
                last: "Mora"
            },
            location: {
                street: {
                    number: 2869,
                    name: "Calle de Alberto Aguilera"
                },
                city: "Castellón de la Plana",
                state: "Ceuta",
                country: "Spain",
                postcode: 21862,
                coordinates: {
                    latitude: "-57.8132",
                    longitude: "-145.6927"
                },
                timezone: {
                    offset: "+9:00",
                    description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            email: "marta.mora@example.com",
            login: {
                uuid: "d60b869f-1dde-4697-8cad-3703c1e5971e",
                username: "smallladybug742",
                password: "159753",
                salt: "5BKQ7Hki",
                md5: "1cbd378f6420d7032fc6f2b7f27a5cdf",
                sha1: "be7511b785f8ec204a740be37bf0aacc54f23568",
                sha256: "cb05f3489edff459a35bd8d573022fda79c911a661246721ef33caa74bbaa534"
            },
            dob: {
                date: "1954-07-17T05:46:32.440Z",
                age: 69
            },
            registered: {
                date: "2002-11-25T21:34:51.243Z",
                age: 20
            },
            phone: "910-111-781",
            cell: "665-853-215",
            id: {
                name: "DNI",
                value: "23779618-M"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/60.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg"
            },
            nat: "ES"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Victor",
                last: "Perez"
            },
            location: {
                street: {
                    number: 3904,
                    name: "Place de L'Abbé-Jean-Lebeuf"
                },
                city: "Saint-Denis",
                state: "Paris",
                country: "France",
                postcode: 55114,
                coordinates: {
                    latitude: "79.6004",
                    longitude: "147.5732"
                },
                timezone: {
                    offset: "-12:00",
                    description: "Eniwetok, Kwajalein"
                }
            },
            email: "victor.perez@example.com",
            login: {
                uuid: "3056083a-2e30-443e-9d8b-9c12e0af293b",
                username: "crazyleopard970",
                password: "joshua",
                salt: "4gNQgV23",
                md5: "12e804ca09603b9b346f36abe56ffd4f",
                sha1: "130f006a67d5222dfbff337936563b72ea66fb3c",
                sha256: "76814566131a867b7560b6ff032b3a827407b274d8d7c83cad2c45d1c76358f4"
            },
            dob: {
                date: "1975-03-23T14:37:26.028Z",
                age: 48
            },
            registered: {
                date: "2009-04-19T05:20:33.578Z",
                age: 14
            },
            phone: "02-99-73-29-98",
            cell: "06-31-55-06-28",
            id: {
                name: "INSEE",
                value: "1750200340603 54"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/85.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg"
            },
            nat: "FR"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Bedia",
                last: "Schepens"
            },
            location: {
                street: {
                    number: 6377,
                    name: "Ganzenhof"
                },
                city: "Doornspijk",
                state: "Overijssel",
                country: "Netherlands",
                postcode: "1332 FM",
                coordinates: {
                    latitude: "52.0117",
                    longitude: "-3.8227"
                },
                timezone: {
                    offset: "-7:00",
                    description: "Mountain Time (US & Canada)"
                }
            },
            email: "bedia.schepens@example.com",
            login: {
                uuid: "a1183255-aa85-4461-9db7-6a29078ae55b",
                username: "redgorilla765",
                password: "bradley",
                salt: "2micnG4W",
                md5: "d40ecedb1f971f3503080ab703418b2c",
                sha1: "70e8e88a2f4cdc404b39b57bd49ef4c881cb2fe5",
                sha256: "90d8963a57145cf298752c67813e364b35be32b1fc1b84469ebb4bac49ce1e7d"
            },
            dob: {
                date: "1979-03-26T04:45:03.203Z",
                age: 44
            },
            registered: {
                date: "2013-03-13T19:44:17.124Z",
                age: 10
            },
            phone: "(0786) 579986",
            cell: "(06) 39347065",
            id: {
                name: "BSN",
                value: "96913499"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/52.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/52.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/52.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Vicentina",
                last: "Duarte"
            },
            location: {
                street: {
                    number: 99,
                    name: "Rua Principal"
                },
                city: "Sobral",
                state: "Alagoas",
                country: "Brazil",
                postcode: 48213,
                coordinates: {
                    latitude: "-67.0904",
                    longitude: "177.9418"
                },
                timezone: {
                    offset: "-11:00",
                    description: "Midway Island, Samoa"
                }
            },
            email: "vicentina.duarte@example.com",
            login: {
                uuid: "8f2649a9-be43-4272-a79a-f8220c7b20a2",
                username: "yellowswan635",
                password: "stefanie",
                salt: "ecrEeday",
                md5: "c753ebddf89dc218013491bcc40cbd07",
                sha1: "97c7c876981c4185243a14c8ed01a82714d7ff0c",
                sha256: "435e28714e7dadc37643395ed376f4202e4fe7f3190ca9a87b1bd3cac4fa4e61"
            },
            dob: {
                date: "1971-04-26T10:29:41.360Z",
                age: 52
            },
            registered: {
                date: "2018-05-09T21:12:26.355Z",
                age: 5
            },
            phone: "(94) 5588-7893",
            cell: "(86) 7174-9067",
            id: {
                name: "CPF",
                value: "968.587.236-28"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/86.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg"
            },
            nat: "BR"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Deusete",
                last: "Farias"
            },
            location: {
                street: {
                    number: 659,
                    name: "Rua José Bonifácio "
                },
                city: "Sapucaia do Sul",
                state: "Pernambuco",
                country: "Brazil",
                postcode: 87850,
                coordinates: {
                    latitude: "-77.9626",
                    longitude: "-114.8527"
                },
                timezone: {
                    offset: "+8:00",
                    description: "Beijing, Perth, Singapore, Hong Kong"
                }
            },
            email: "deusete.farias@example.com",
            login: {
                uuid: "12ce2a8c-9542-4935-bbf9-2d766fc063dc",
                username: "whitelion384",
                password: "redbull",
                salt: "LSj6eJ96",
                md5: "a8d8ee80250c37bd5404803f1bf6f083",
                sha1: "0df48ea27af2516d9d56de0d1730ea20b1506023",
                sha256: "275dffa3d0585d938e6a29775c92e22da31d69d7595f8b3320620a2c0a4d41d4"
            },
            dob: {
                date: "1958-01-17T07:47:25.015Z",
                age: 65
            },
            registered: {
                date: "2013-06-01T01:46:39.576Z",
                age: 10
            },
            phone: "(03) 0323-9146",
            cell: "(05) 9935-4236",
            id: {
                name: "CPF",
                value: "271.320.346-17"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/3.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg"
            },
            nat: "BR"
        },
        {
            gender: "female",
            name: {
                title: "Mrs",
                first: "Jennifer",
                last: "Moreno"
            },
            location: {
                street: {
                    number: 7584,
                    name: "Church Road"
                },
                city: "Glasgow",
                state: "Surrey",
                country: "United Kingdom",
                postcode: "G2 8XY",
                coordinates: {
                    latitude: "0.2297",
                    longitude: "141.7184"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "jennifer.moreno@example.com",
            login: {
                uuid: "1ab1cde7-48f8-45d3-bec5-4fed42890a4e",
                username: "yellowbird117",
                password: "comedy",
                salt: "YWVdiqAk",
                md5: "fb0ba0e88345152ffa4b821e8cd74e29",
                sha1: "efaf8c3761626a45d0c265f3af9773e34cf13e26",
                sha256: "a238f7c9ae9571fca51c2c911894f33381808c080cd29ac0b26ad3afe25c3bd2"
            },
            dob: {
                date: "1946-01-11T08:46:37.100Z",
                age: 77
            },
            registered: {
                date: "2009-10-04T06:39:52.903Z",
                age: 13
            },
            phone: "017684 21004",
            cell: "07174 390636",
            id: {
                name: "NINO",
                value: "YZ 03 40 35 W"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/24.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            nat: "GB"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Hinrich",
                last: "Franck"
            },
            location: {
                street: {
                    number: 5299,
                    name: "Finkenweg"
                },
                city: "Eberswalde",
                state: "Saarland",
                country: "Germany",
                postcode: 97827,
                coordinates: {
                    latitude: "-89.1541",
                    longitude: "-149.1043"
                },
                timezone: {
                    offset: "-10:00",
                    description: "Hawaii"
                }
            },
            email: "hinrich.franck@example.com",
            login: {
                uuid: "570a05b8-19a2-4a92-bdd3-2038ec2a6b98",
                username: "lazyostrich157",
                password: "sharky",
                salt: "rk0eoXFI",
                md5: "a0e5d5f52a75b8f1872413c63d5cadc7",
                sha1: "364b7f04dc3077c6475ade11d9b84c36a4af16ce",
                sha256: "78d7e6a2691f1bd850ba7ddf37496f3ac7cae6efbf2a98394f287b2c6a2ba592"
            },
            dob: {
                date: "1995-10-31T03:56:11.830Z",
                age: 27
            },
            registered: {
                date: "2012-11-27T12:17:17.003Z",
                age: 10
            },
            phone: "0136-9404824",
            cell: "0176-0895565",
            id: {
                name: "SVNR",
                value: "64 301095 F 100"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/59.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            nat: "DE"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "August",
                last: "Christensen"
            },
            location: {
                street: {
                    number: 1706,
                    name: "Tårnvej"
                },
                city: "Jystrup",
                state: "Midtjylland",
                country: "Denmark",
                postcode: 78690,
                coordinates: {
                    latitude: "8.0269",
                    longitude: "-69.5491"
                },
                timezone: {
                    offset: "+5:45",
                    description: "Kathmandu"
                }
            },
            email: "august.christensen@example.com",
            login: {
                uuid: "d4a3490f-be99-4bee-9ad5-e47c0a8eae35",
                username: "purplegoose529",
                password: "panthers",
                salt: "s0AnmIBg",
                md5: "6ee5988576b78aa94b2d419396429b83",
                sha1: "5e392571bf5f422ae3cf591ca436224d8fc214fd",
                sha256: "63dca4d440ef63a3e91898e4b28d3ee4031d56011cd5986b2224d68082d27589"
            },
            dob: {
                date: "1946-09-01T02:04:10.919Z",
                age: 76
            },
            registered: {
                date: "2005-03-25T17:55:32.888Z",
                age: 18
            },
            phone: "41230631",
            cell: "28235319",
            id: {
                name: "CPR",
                value: "310846-3025"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/59.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            nat: "DK"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Annelieke",
                last: "Bevelander"
            },
            location: {
                street: {
                    number: 5955,
                    name: "Brinkstraat Zuid"
                },
                city: "Putten",
                state: "Noord-Brabant",
                country: "Netherlands",
                postcode: "6007 YO",
                coordinates: {
                    latitude: "-5.1780",
                    longitude: "176.8225"
                },
                timezone: {
                    offset: "+3:30",
                    description: "Tehran"
                }
            },
            email: "annelieke.bevelander@example.com",
            login: {
                uuid: "f2554371-bf60-4008-9061-0471006dfd97",
                username: "bigbird238",
                password: "frank1",
                salt: "E0KxrxLO",
                md5: "c4ca735ee5563f33b03b301392bf9820",
                sha1: "6a047344a7962b6f8575bff6e3cc731e7922c4f9",
                sha256: "a5c1b1efc7b6ead3b337a017f4abdd8b9dccfd4d5e02ad36417eb969a578a9e2"
            },
            dob: {
                date: "1957-07-31T04:04:37.464Z",
                age: 66
            },
            registered: {
                date: "2021-05-11T23:45:55.856Z",
                age: 2
            },
            phone: "(026) 3204061",
            cell: "(06) 29253978",
            id: {
                name: "BSN",
                value: "90742684"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/90.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: {
                title: "Miss",
                first: "Sanchitha",
                last: "Mendonsa"
            },
            location: {
                street: {
                    number: 4532,
                    name: "Janpath"
                },
                city: "Jaipur",
                state: "Andhra Pradesh",
                country: "India",
                postcode: 26707,
                coordinates: {
                    latitude: "53.9682",
                    longitude: "142.6130"
                },
                timezone: {
                    offset: "+3:00",
                    description: "Baghdad, Riyadh, Moscow, St. Petersburg"
                }
            },
            email: "sanchitha.mendonsa@example.com",
            login: {
                uuid: "f698edce-f5c9-4c1b-bf1a-bfae9db45a3d",
                username: "sadfish181",
                password: "newlife",
                salt: "blKyXkvT",
                md5: "bf7690fe788cb748888253d455b83a22",
                sha1: "40e82f512034e95bfa944a25df6a2d6cac9ced68",
                sha256: "706f09b0c84e13db0ac531a0bc54ac8e57c4b51fc545e8fa4b4ac8ef1cae8c97"
            },
            dob: {
                date: "1995-09-14T23:29:00.831Z",
                age: 27
            },
            registered: {
                date: "2009-02-03T09:35:20.130Z",
                age: 14
            },
            phone: "9075851015",
            cell: "9333483942",
            id: {
                name: "UIDAI",
                value: "561058042440"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/43.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            nat: "IN"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "پارسا",
                last: "حسینی"
            },
            location: {
                street: {
                    number: 2746,
                    name: "فاطمی"
                },
                city: "بابل",
                state: "قزوین",
                country: "Iran",
                postcode: 12805,
                coordinates: {
                    latitude: "-78.1096",
                    longitude: "40.5205"
                },
                timezone: {
                    offset: "+4:30",
                    description: "Kabul"
                }
            },
            email: "prs.hsyny@example.com",
            login: {
                uuid: "36cd15c9-d9b2-4e19-bebe-95380050636e",
                username: "beautifulmouse467",
                password: "snowball",
                salt: "iGw4ZORT",
                md5: "7703c54272f279b6011a73acf3df256d",
                sha1: "471a5cab2950a9431dbae8ea9e806fb5252c7077",
                sha256: "16af1e62baa4313d6dd4360504c4abd799c1fbee9ad211a8639b6766c3696459"
            },
            dob: {
                date: "1961-10-26T16:06:36.149Z",
                age: 61
            },
            registered: {
                date: "2006-02-06T13:08:05.344Z",
                age: 17
            },
            phone: "078-34382929",
            cell: "0968-397-1484",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/96.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/96.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/96.jpg"
            },
            nat: "IR"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Evertine",
                last: "Zandberg"
            },
            location: {
                street: {
                    number: 4439,
                    name: "Gloriantdreef"
                },
                city: "Hardenberg",
                state: "Overijssel",
                country: "Netherlands",
                postcode: "4038 MQ",
                coordinates: {
                    latitude: "-63.0787",
                    longitude: "-19.4765"
                },
                timezone: {
                    offset: "-8:00",
                    description: "Pacific Time (US & Canada)"
                }
            },
            email: "evertine.zandberg@example.com",
            login: {
                uuid: "a19ef487-34a3-4b26-b147-a2b7879a6c25",
                username: "tinyostrich588",
                password: "xian",
                salt: "SQNUOAES",
                md5: "118ee1ce5a97a439c57e2dd3f64d3715",
                sha1: "88d183f05e95907bb38f6715aa299ea052bbd8d3",
                sha256: "900a66d4f3292a40a8b504c25bef2473071f144b6524d90e3be4a1b738ee3976"
            },
            dob: {
                date: "1975-05-09T17:10:27.803Z",
                age: 48
            },
            registered: {
                date: "2011-10-15T18:52:40.420Z",
                age: 11
            },
            phone: "(047) 4799418",
            cell: "(06) 10193118",
            id: {
                name: "BSN",
                value: "72571162"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/65.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg"
            },
            nat: "NL"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "باران",
                last: "زارعی"
            },
            location: {
                street: {
                    number: 2279,
                    name: "میدان آزادی"
                },
                city: "بیرجند",
                state: "یزد",
                country: "Iran",
                postcode: 25633,
                coordinates: {
                    latitude: "65.4786",
                    longitude: "110.5895"
                },
                timezone: {
                    offset: "0:00",
                    description: "Western Europe Time, London, Lisbon, Casablanca"
                }
            },
            email: "brn.zraay@example.com",
            login: {
                uuid: "ccc02462-3f10-4054-9f75-42864409b32f",
                username: "tinyelephant278",
                password: "outside",
                salt: "AAIdT8VT",
                md5: "352b2df2507b711b2fa65d94d09779ec",
                sha1: "c34fe7cb06d5fa7389e9ee54b2375bfaf686b3a8",
                sha256: "0db0908d28053e20f39e3795bf4f2c14b568067480f5e15309ca33f8419a1242"
            },
            dob: {
                date: "1982-10-19T20:01:14.730Z",
                age: 40
            },
            registered: {
                date: "2012-06-22T17:01:45.265Z",
                age: 11
            },
            phone: "097-26935710",
            cell: "0912-015-7210",
            id: {
                name: "",
                value: null
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/89.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg"
            },
            nat: "IR"
        },
        {
            gender: "male",
            name: {
                title: "Mr",
                first: "Isaac",
                last: "Silva"
            },
            location: {
                street: {
                    number: 574,
                    name: "Mockingbird Ln"
                },
                city: "Fayetteville",
                state: "Washington",
                country: "United States",
                postcode: 16836,
                coordinates: {
                    latitude: "77.8418",
                    longitude: "68.1408"
                },
                timezone: {
                    offset: "-11:00",
                    description: "Midway Island, Samoa"
                }
            },
            email: "isaac.silva@example.com",
            login: {
                uuid: "5eee953e-8264-4824-8429-083ab34e113e",
                username: "organicgorilla358",
                password: "petra",
                salt: "X9pKs8n8",
                md5: "18b02bcdf67c3156218f260ba643efe1",
                sha1: "d84318c8c4224d6496abc74705c161ce72e5a63a",
                sha256: "72742583332ea7ef9fda38a8a41c221cf3d49cf0ec1b4c115f347cc5b89d9d28"
            },
            dob: {
                date: "1976-02-12T13:19:57.776Z",
                age: 47
            },
            registered: {
                date: "2010-05-07T03:43:34.930Z",
                age: 13
            },
            phone: "(307) 276-1843",
            cell: "(273) 523-5828",
            id: {
                name: "SSN",
                value: "044-69-2471"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/57.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg"
            },
            nat: "US"
        },
        {
            gender: "female",
            name: {
                title: "Ms",
                first: "Maja",
                last: "Zelenović"
            },
            location: {
                street: {
                    number: 103,
                    name: "Leposavićka"
                },
                city: "Dečan",
                state: "Pirot",
                country: "Serbia",
                postcode: 18974,
                coordinates: {
                    latitude: "-63.0892",
                    longitude: "2.4264"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "maja.zelenovic@example.com",
            login: {
                uuid: "a8278c69-30b7-4880-95a3-c5dd4d43c499",
                username: "greengoose940",
                password: "bertha",
                salt: "CKVwKkhP",
                md5: "a242a24ae02f4ab97e2fc7e2f4c6499d",
                sha1: "c1170515b4088ec6ec3afd57ad6617d99456b0ca",
                sha256: "4ecf4aac38c416a4839c76eea3f3a686f629d3ae4d2c0e604b77a8d4f993e3cf"
            },
            dob: {
                date: "1992-07-22T07:39:10.564Z",
                age: 31
            },
            registered: {
                date: "2012-02-26T13:15:30.263Z",
                age: 11
            },
            phone: "038-5319-239",
            cell: "060-0957-351",
            id: {
                name: "SID",
                value: "102360980"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/12.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg"
            },
            nat: "RS"
        },
        {
            gender: "female",
            name: {
                title: "Madame",
                first: "Anita",
                last: "Louis"
            },
            location: {
                street: {
                    number: 6413,
                    name: "Rue Abel-Gance"
                },
                city: "Dättlikon",
                state: "Fribourg",
                country: "Switzerland",
                postcode: 1232,
                coordinates: {
                    latitude: "72.1461",
                    longitude: "-9.8735"
                },
                timezone: {
                    offset: "-5:00",
                    description: "Eastern Time (US & Canada), Bogota, Lima"
                }
            },
            email: "anita.louis@example.com",
            login: {
                uuid: "2311061c-9e67-4996-84a7-65f6b1c1b75e",
                username: "heavyostrich756",
                password: "hola",
                salt: "QRWCYxl7",
                md5: "f6b640c1f91028877d511acb82261aed",
                sha1: "d7cf8191912eeaf2568393a14e76df7a9efa7b6f",
                sha256: "698965e633c02fe9ca98c6b34a24a3c0e31071620d332940f9da96264bd5549d"
            },
            dob: {
                date: "1992-03-31T19:51:53.523Z",
                age: 31
            },
            registered: {
                date: "2005-07-26T02:20:04.769Z",
                age: 18
            },
            phone: "076 172 18 98",
            cell: "077 340 79 91",
            id: {
                name: "AVS",
                value: "756.8809.2759.38"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/women/47.jpg",
                medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg"
            },
            nat: "CH"
        }
    ]

    public static getAllUsers(): IUser[] {
        return this.users;
    }
}