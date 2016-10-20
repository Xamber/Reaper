
export class Show {
    id: number;
    title: string;
    titleOriginal: string;
    status: string;
    totalSeasons: number;
    year: number;
    watching: number;
    voted: number;
    rating: number;
    image: string;
}

export class Rating {
  rank: number;
  voted: number;
  show: Show;
}


export const answer: Rating[] = [
        {
            "rank": 1,
            "voted": 170657,
            "show": {
                "id": 7718,
                "title": "Шерлок",
                "titleOriginal": "Sherlock",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2010,
                "watching": 218566,
                "voted": 127948,
                "rating": 4.79578,
                "image": "https://media.myshows.me/shows/small/9/94/9492ce09d3a31c32ba559f5936dac888.jpg"
            }
        },
        {
            "rank": 2,
            "voted": 148098,
            "show": {
                "id": 11945,
                "title": "Игра престолов",
                "titleOriginal": "Game of Thrones",
                "status": "Returning Series",
                "totalSeasons": 7,
                "year": 2010,
                "watching": 194450,
                "voted": 106211,
                "rating": 4.76785,
                "image": "https://media.myshows.me/shows/small/6/69/69194c28b5be20e07c8eb556b3255fd0.jpg"
            }
        },
        {
            "rank": 3,
            "voted": 149191,
            "show": {
                "id": 2,
                "title": "Теория большого взрыва",
                "titleOriginal": "The Big Bang Theory",
                "status": "Returning Series",
                "totalSeasons": 10,
                "year": 2007,
                "watching": 202427,
                "voted": 112685,
                "rating": 4.69964,
                "image": "https://media.myshows.me/shows/small/4/47/47ec002cb4d03e9ee20fe9f52f802b67.jpg"
            }
        },
        {
            "rank": 4,
            "voted": 136979,
            "show": {
                "id": 8,
                "title": "Остаться в живых",
                "titleOriginal": "Lost",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 2004,
                "watching": 187079,
                "voted": 103771,
                "rating": 4.70049,
                "image": "https://media.myshows.me/shows/small/7/74/749eec18eb58e856bdea8e19833d2fa1.jpg"
            }
        },
        {
            "rank": 5,
            "voted": 111362,
            "show": {
                "id": 1,
                "title": "Доктор Хаус",
                "titleOriginal": "House M.D.",
                "status": "Canceled/Ended",
                "totalSeasons": 8,
                "year": 2004,
                "watching": 163282,
                "voted": 94518,
                "rating": 4.75203,
                "image": "https://media.myshows.me/shows/small/0/07/073db039e64c1d43e75b9f69952b661a.jpg"
            }
        },
        {
            "rank": 6,
            "voted": 114120,
            "show": {
                "id": 45,
                "title": "Сверхъестественное",
                "titleOriginal": "Supernatural",
                "status": "Returning Series",
                "totalSeasons": 12,
                "year": 2005,
                "watching": 180334,
                "voted": 98400,
                "rating": 4.5754,
                "image": "https://media.myshows.me/shows/small/9/93/93024b4a7b2dddcc206532a45459209f.jpg"
            }
        },
        {
            "rank": 7,
            "voted": 105780,
            "show": {
                "id": 187,
                "title": "Во все тяжкие",
                "titleOriginal": "Breaking Bad",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2008,
                "watching": 154234,
                "voted": 82296,
                "rating": 4.67375,
                "image": "https://media.myshows.me/shows/small/f/f4/f4d7526678877883712c96eb19f3cfe3.jpg"
            }
        },
        {
            "rank": 8,
            "voted": 96293,
            "show": {
                "id": 71,
                "title": "Как я встретил вашу маму",
                "titleOriginal": "How I Met Your Mother",
                "status": "Canceled/Ended",
                "totalSeasons": 9,
                "year": 2005,
                "watching": 129723,
                "voted": 72534,
                "rating": 4.67787,
                "image": "https://media.myshows.me/shows/small/d/de/deaf1f9b397829ea23dc90991c90bbbc.jpg"
            }
        },
        {
            "rank": 9,
            "voted": 97646,
            "show": {
                "id": 5317,
                "title": "Ходячие мертвецы",
                "titleOriginal": "The Walking Dead",
                "status": "Returning Series",
                "totalSeasons": 7,
                "year": 2010,
                "watching": 141950,
                "voted": 74622,
                "rating": 4.49259,
                "image": "https://media.myshows.me/shows/small/5/56/5666640009fce29858d5544bdd1d0948.jpg"
            }
        },
        {
            "rank": 10,
            "voted": 94228,
            "show": {
                "id": 304,
                "title": "Отбросы",
                "titleOriginal": "Misfits",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2009,
                "watching": 162722,
                "voted": 90057,
                "rating": 4.42258,
                "image": "https://media.myshows.me/shows/small/1/12/123145dc590e00e6c762a53f0b54983b.jpg"
            }
        },
        {
            "rank": 11,
            "voted": 78734,
            "show": {
                "id": 20,
                "title": "Друзья",
                "titleOriginal": "Friends",
                "status": "Canceled/Ended",
                "totalSeasons": 10,
                "year": 1994,
                "watching": 116628,
                "voted": 66879,
                "rating": 4.83706,
                "image": "https://media.myshows.me/shows/small/3/39/3902fe3a363a08eb23b02d0743a2461d.jpg"
            }
        },
        {
            "rank": 12,
            "voted": 87175,
            "show": {
                "id": 7,
                "title": "Декстер",
                "titleOriginal": "Dexter",
                "status": "Canceled/Ended",
                "totalSeasons": 8,
                "year": 2006,
                "watching": 124865,
                "voted": 68080,
                "rating": 4.61776,
                "image": "https://media.myshows.me/shows/small/1/1d/1db28eb1387f379e320ea8d1ab9f4337.jpg"
            }
        },
        {
            "rank": 13,
            "voted": 88498,
            "show": {
                "id": 3,
                "title": "Обмани меня",
                "titleOriginal": "Lie to Me",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2009,
                "watching": 137266,
                "voted": 75244,
                "rating": 4.46727,
                "image": "https://media.myshows.me/shows/small/8/87/87fc3bfbf6f569ece9966a9913c0a502.jpg"
            }
        },
        {
            "rank": 14,
            "voted": 82402,
            "show": {
                "id": 19638,
                "title": "Американская история ужасов",
                "titleOriginal": "American Horror Story",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 130038,
                "voted": 67449,
                "rating": 4.42087,
                "image": "https://media.myshows.me/shows/small/0/06/06cc86122e95e76ed44faf07becba510.jpg"
            }
        },
        {
            "rank": 15,
            "voted": 68501,
            "show": {
                "id": 331,
                "title": "Доктор Кто",
                "titleOriginal": "Doctor Who",
                "status": "Returning Series",
                "totalSeasons": 10,
                "year": 2005,
                "watching": 95850,
                "voted": 51743,
                "rating": 4.78612,
                "image": "https://media.myshows.me/shows/small/8/81/8107adbada5f9efc1da4a722f4990e9f.jpg"
            }
        },
        {
            "rank": 16,
            "voted": 67599,
            "show": {
                "id": 55,
                "title": "Клиника",
                "titleOriginal": "Scrubs",
                "status": "Canceled/Ended",
                "totalSeasons": 9,
                "year": 2001,
                "watching": 106392,
                "voted": 59702,
                "rating": 4.71053,
                "image": "https://media.myshows.me/shows/small/8/8e/8ea84140875b18ace281984b6bbaf81c.jpg"
            }
        },
        {
            "rank": 17,
            "voted": 67765,
            "show": {
                "id": 136,
                "title": "Дневники вампира",
                "titleOriginal": "The Vampire Diaries",
                "status": "Returning Series",
                "totalSeasons": 8,
                "year": 2009,
                "watching": 112258,
                "voted": 60166,
                "rating": 4.31297,
                "image": "https://media.myshows.me/shows/small/8/82/820cfc454b115f23cb9b6a0fb8cd8549.jpg"
            }
        },
        {
            "rank": 18,
            "voted": 63702,
            "show": {
                "id": 10,
                "title": "Блудливая Калифорния",
                "titleOriginal": "Californication",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 2007,
                "watching": 92348,
                "voted": 48611,
                "rating": 4.51828,
                "image": "https://media.myshows.me/shows/small/8/8a/8ac4154396f415f4d3c35e55594363d5.jpg"
            }
        },
        {
            "rank": 19,
            "voted": 60674,
            "show": {
                "id": 26428,
                "title": "Настоящий детектив",
                "titleOriginal": "True Detective",
                "status": "TBD/On The Bubble",
                "totalSeasons": 2,
                "year": 2014,
                "watching": 84297,
                "voted": 41026,
                "rating": 4.65314,
                "image": "https://media.myshows.me/shows/small/8/8b/8b0dae9bcfc6d889a2760a4c30eb7f91.jpg"
            }
        },
        {
            "rank": 20,
            "voted": 52915,
            "show": {
                "id": 14,
                "title": "Побег",
                "titleOriginal": "Prison Break",
                "status": "Returning Series",
                "totalSeasons": 5,
                "year": 2005,
                "watching": 80356,
                "voted": 44294,
                "rating": 4.57296,
                "image": "https://media.myshows.me/shows/small/e/e6/e6d7c7fa8403dfb49448f168b9b01076.jpg"
            }
        },
        {
            "rank": 21,
            "voted": 57245,
            "show": {
                "id": 30443,
                "title": "Ганнибал",
                "titleOriginal": "Hannibal",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2013,
                "watching": 86624,
                "voted": 43013,
                "rating": 4.50614,
                "image": "https://media.myshows.me/shows/small/e/ee/ee415da4a054992d8134315b43001dca.jpg"
            }
        },
        {
            "rank": 22,
            "voted": 58711,
            "show": {
                "id": 24539,
                "title": "Стрела",
                "titleOriginal": "Arrow",
                "status": "Returning Series",
                "totalSeasons": 5,
                "year": 2012,
                "watching": 93472,
                "voted": 46496,
                "rating": 4.24354,
                "image": "https://media.myshows.me/shows/small/5/5c/5c53801056c3460ee47281c6f15c8e20.jpg"
            }
        },
        {
            "rank": 23,
            "voted": 45693,
            "show": {
                "id": 26,
                "title": "Футурама",
                "titleOriginal": "Futurama",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 1999,
                "watching": 65521,
                "voted": 37564,
                "rating": 4.61885,
                "image": "https://media.myshows.me/shows/small/2/2d/2db5dd9f0e6b67b03bbd92abd1271cf4.jpg"
            }
        },
        {
            "rank": 24,
            "voted": 50112,
            "show": {
                "id": 9118,
                "title": "Бесстыдники",
                "titleOriginal": "Shameless",
                "status": "Returning Series",
                "totalSeasons": 7,
                "year": 2011,
                "watching": 67328,
                "voted": 32331,
                "rating": 4.729,
                "image": "https://media.myshows.me/shows/small/8/80/8058f792e80317f17d10dfcefc59bd90.jpg"
            }
        },
        {
            "rank": 25,
            "voted": 51703,
            "show": {
                "id": 37432,
                "title": "Флэш",
                "titleOriginal": "The Flash",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2014,
                "watching": 76907,
                "voted": 38050,
                "rating": 4.41408,
                "image": "https://media.myshows.me/shows/small/4/41/41fd64f240086f15402305fbdf1c8557.jpg"
            }
        },
        {
            "rank": 26,
            "voted": 49779,
            "show": {
                "id": 111,
                "title": "Касл",
                "titleOriginal": "Castle",
                "status": "Canceled/Ended",
                "totalSeasons": 8,
                "year": 2009,
                "watching": 69958,
                "voted": 36371,
                "rating": 4.51451,
                "image": "https://media.myshows.me/shows/small/e/e8/e863ba30dd226230ba773403daf921a3.jpg"
            }
        },
        {
            "rank": 27,
            "voted": 39776,
            "show": {
                "id": 467,
                "title": "Тетрадь смерти",
                "titleOriginal": "Death Note",
                "status": "Canceled/Ended",
                "totalSeasons": 2,
                "year": 2006,
                "watching": 61798,
                "voted": 37440,
                "rating": 4.52371,
                "image": "https://media.myshows.me/shows/small/a/a9/a96160e13c22678bac4bd99c37842c1b.jpg"
            }
        },
        {
            "rank": 28,
            "voted": 50791,
            "show": {
                "id": 17483,
                "title": "Однажды в сказке",
                "titleOriginal": "Once Upon a Time",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 81345,
                "voted": 40178,
                "rating": 4.37406,
                "image": "https://media.myshows.me/shows/small/1/17/17bc9bdf735ca6ead9d4be000a131ab4.jpg"
            }
        },
        {
            "rank": 29,
            "voted": 40328,
            "show": {
                "id": 34,
                "title": "Южный Парк",
                "titleOriginal": "South Park",
                "status": "Returning Series",
                "totalSeasons": 20,
                "year": 1997,
                "watching": 57013,
                "voted": 31864,
                "rating": 4.63831,
                "image": "https://media.myshows.me/shows/small/7/7a/7a390fcef7789862869afebf260e343e.jpg"
            }
        },
        {
            "rank": 30,
            "voted": 47316,
            "show": {
                "id": 227,
                "title": "Сплетница",
                "titleOriginal": "Gossip Girl",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 2007,
                "watching": 80031,
                "voted": 40691,
                "rating": 4.2988,
                "image": "https://media.myshows.me/shows/small/2/27/27559bea79d8c3ea8742ba4abe9855eb.jpg"
            }
        },
        {
            "rank": 31,
            "voted": 48570,
            "show": {
                "id": 214,
                "title": "Молокососы",
                "titleOriginal": "Skins",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 2007,
                "watching": 85644,
                "voted": 42077,
                "rating": 4.36624,
                "image": "https://media.myshows.me/shows/small/2/2c/2c31779653e68923b0bdb9fe53a6a5ee.jpg"
            }
        },
        {
            "rank": 32,
            "voted": 46228,
            "show": {
                "id": 6,
                "title": "Герои",
                "titleOriginal": "Heroes",
                "status": "Canceled/Ended",
                "totalSeasons": 4,
                "year": 2006,
                "watching": 77500,
                "voted": 42392,
                "rating": 4.19835,
                "image": "https://media.myshows.me/shows/small/9/91/919e29d618fa2865e3093cc4ed44f353.jpg"
            }
        },
        {
            "rank": 33,
            "voted": 46620,
            "show": {
                "id": 34265,
                "title": "Фарго",
                "titleOriginal": "Fargo",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2014,
                "watching": 62795,
                "voted": 29281,
                "rating": 4.56903,
                "image": "https://media.myshows.me/shows/small/4/4a/4ac3d0ba49717d46669b004c4c6293d4.jpg"
            }
        },
        {
            "rank": 34,
            "voted": 41435,
            "show": {
                "id": 15912,
                "title": "Волчонок",
                "titleOriginal": "Teen Wolf",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 67708,
                "voted": 34624,
                "rating": 4.42672,
                "image": "https://media.myshows.me/shows/small/5/5a/5a5e9ad21a8791543141dd867ec41521.jpg"
            }
        },
        {
            "rank": 35,
            "voted": 43167,
            "show": {
                "id": 48,
                "title": "Грань",
                "titleOriginal": "Fringe",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2008,
                "watching": 61075,
                "voted": 32321,
                "rating": 4.43933,
                "image": "https://media.myshows.me/shows/small/9/9e/9e227ec4f43d55017252e55f6e35cd2a.jpg"
            }
        },
        {
            "rank": 36,
            "voted": 44370,
            "show": {
                "id": 17105,
                "title": "Форс-мажоры",
                "titleOriginal": "Suits",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 59643,
                "voted": 27838,
                "rating": 4.6114,
                "image": "https://media.myshows.me/shows/small/e/e5/e5de4b9ec177df8072209a1ff5e720ab.jpg"
            }
        },
        {
            "rank": 37,
            "voted": 40813,
            "show": {
                "id": 249,
                "title": "Хор",
                "titleOriginal": "Glee",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 2009,
                "watching": 68857,
                "voted": 36742,
                "rating": 4.41779,
                "image": "https://media.myshows.me/shows/small/8/8b/8b2d0502774fd7f7098560a5578c0f23.jpg"
            }
        },
        {
            "rank": 38,
            "voted": 38604,
            "show": {
                "id": 50,
                "title": "Симпсоны",
                "titleOriginal": "The Simpsons",
                "status": "Returning Series",
                "totalSeasons": 28,
                "year": 1989,
                "watching": 58157,
                "voted": 30764,
                "rating": 4.67817,
                "image": "https://media.myshows.me/shows/small/5/5f/5f67cf990d0210afb13d24817a7df7da.jpg"
            }
        },
        {
            "rank": 39,
            "voted": 44847,
            "show": {
                "id": 369,
                "title": "Белый воротничок",
                "titleOriginal": "White Collar",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 2009,
                "watching": 62246,
                "voted": 29399,
                "rating": 4.54925,
                "image": "https://media.myshows.me/shows/small/c/ce/ce870fd987a38d67436eb834bce02b05.jpg"
            }
        },
        {
            "rank": 40,
            "voted": 40536,
            "show": {
                "id": 38876,
                "title": "Сорвиголова",
                "titleOriginal": "Marvel's Daredevil",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2015,
                "watching": 54239,
                "voted": 26611,
                "rating": 4.50413,
                "image": "https://media.myshows.me/shows/small/5/51/516dcdd80936e98de011d04b86ec85b6.jpg"
            }
        },
        {
            "rank": 41,
            "voted": 43209,
            "show": {
                "id": 17186,
                "title": "Гримм",
                "titleOriginal": "Grimm",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 64568,
                "voted": 30911,
                "rating": 4.33813,
                "image": "https://media.myshows.me/shows/small/c/c2/c27a40b5d158fffc0e8096d29cc1df01.jpg"
            }
        },
        {
            "rank": 42,
            "voted": 47272,
            "show": {
                "id": 29963,
                "title": "Под куполом",
                "titleOriginal": "Under the Dome",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2013,
                "watching": 76929,
                "voted": 36170,
                "rating": 3.93146,
                "image": "https://media.myshows.me/shows/small/0/00/00d3485967b30060478e3e8f0cf4997e.jpg"
            }
        },
        {
            "rank": 43,
            "voted": 32707,
            "show": {
                "id": 25561,
                "title": "Гравити Фолз",
                "titleOriginal": "Gravity Falls",
                "status": "Canceled/Ended",
                "totalSeasons": 2,
                "year": 2012,
                "watching": 44025,
                "voted": 24632,
                "rating": 4.80866,
                "image": "https://media.myshows.me/shows/small/d/d1/d12f3d59f77ca63e4d08456300016417.jpg"
            }
        },
        {
            "rank": 44,
            "voted": 40414,
            "show": {
                "id": 22410,
                "title": "Черное зеркало",
                "titleOriginal": "Black Mirror",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2011,
                "watching": 50729,
                "voted": 24078,
                "rating": 4.54787,
                "image": "https://media.myshows.me/shows/small/3/3d/3d05cc3c19e00d5726c097cc44611b37.jpg"
            }
        },
        {
            "rank": 45,
            "voted": 41974,
            "show": {
                "id": 235,
                "title": "Менталист",
                "titleOriginal": "The Mentalist",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 2008,
                "watching": 59692,
                "voted": 28668,
                "rating": 4.51325,
                "image": "https://media.myshows.me/shows/small/8/8f/8f83038d273dc4ccf1b0788eaa0c2c4e.jpg"
            }
        },
        {
            "rank": 46,
            "voted": 40881,
            "show": {
                "id": 37473,
                "title": "Готэм",
                "titleOriginal": "Gotham",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2014,
                "watching": 57605,
                "voted": 26126,
                "rating": 4.40162,
                "image": "https://media.myshows.me/shows/small/5/5c/5c4c4cb67dd74d424b87d5057bc22f66.jpg"
            }
        },
        {
            "rank": 47,
            "voted": 33973,
            "show": {
                "id": 131,
                "title": "Мерлин",
                "titleOriginal": "Merlin",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2008,
                "watching": 50150,
                "voted": 26691,
                "rating": 4.53176,
                "image": "https://media.myshows.me/shows/small/e/e6/e6b1cee5692ecdbcf3ea2528dbca226e.jpg"
            }
        },
        {
            "rank": 48,
            "voted": 39259,
            "show": {
                "id": 42735,
                "title": "Мистер Робот",
                "titleOriginal": "Mr. Robot",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2015,
                "watching": 53687,
                "voted": 24008,
                "rating": 4.43422,
                "image": "https://media.myshows.me/shows/small/4/4d/4d6fa8683df0f127cbb0868e1717d821.jpg"
            }
        },
        {
            "rank": 49,
            "voted": 36343,
            "show": {
                "id": 39603,
                "title": "Джессика Джонс",
                "titleOriginal": "Marvel's Jessica Jones",
                "status": "Returning Series",
                "totalSeasons": 1,
                "year": 2015,
                "watching": 46418,
                "voted": 22349,
                "rating": 4.42421,
                "image": "https://media.myshows.me/shows/small/e/ee/ee6b26bcd2884f0a79c00df8b17aa414.jpg"
            }
        },
        {
            "rank": 50,
            "voted": 38983,
            "show": {
                "id": 32051,
                "title": "Сотня",
                "titleOriginal": "The 100",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2014,
                "watching": 59609,
                "voted": 27698,
                "rating": 4.289,
                "image": "https://media.myshows.me/shows/small/a/a4/a48ea755dbdb695a3edcf889c6e304ca.jpg"
            }
        },
        {
            "rank": 51,
            "voted": 32780,
            "show": {
                "id": 211,
                "title": "Зачарованные",
                "titleOriginal": "Charmed",
                "status": "Canceled/Ended",
                "totalSeasons": 8,
                "year": 1998,
                "watching": 63872,
                "voted": 36287,
                "rating": 4.28554,
                "image": "https://media.myshows.me/shows/small/3/38/38d158f1ba5a86408e282a9a79bce5a3.jpg"
            }
        },
        {
            "rank": 52,
            "voted": 40451,
            "show": {
                "id": 25119,
                "title": "Элементарно",
                "titleOriginal": "Elementary",
                "status": "Returning Series",
                "totalSeasons": 5,
                "year": 2012,
                "watching": 59096,
                "voted": 28662,
                "rating": 4.28167,
                "image": "https://media.myshows.me/shows/small/7/75/756293fd1ad6d21f537c5f9a5e682325.jpg"
            }
        },
        {
            "rank": 53,
            "voted": 28065,
            "show": {
                "id": 31,
                "title": "Аватар: Легенда об Аанге",
                "titleOriginal": "Avatar: The Last Airbender",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2005,
                "watching": 45116,
                "voted": 27142,
                "rating": 4.58066,
                "image": "https://media.myshows.me/shows/small/1/1a/1a29f7db00117bd4a298e221fb84e2a5.jpg"
            }
        },
        {
            "rank": 54,
            "voted": 37526,
            "show": {
                "id": 29471,
                "title": "Викинги",
                "titleOriginal": "Vikings",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 49789,
                "voted": 22563,
                "rating": 4.56073,
                "image": "https://media.myshows.me/shows/small/d/dd/dd526ad7e29bb11f4640fc734acee9ce.jpg"
            }
        },
        {
            "rank": 55,
            "voted": 29735,
            "show": {
                "id": 36,
                "title": "Светлячок",
                "titleOriginal": "Firefly",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2002,
                "watching": 37329,
                "voted": 20653,
                "rating": 4.71049,
                "image": "https://media.myshows.me/shows/small/f/fd/fd93519a3d4f3aff579ca6fabe0321bc.jpg"
            }
        },
        {
            "rank": 56,
            "voted": 35740,
            "show": {
                "id": 15271,
                "title": "Интерны",
                "titleOriginal": "Интерны",
                "status": "Canceled/Ended",
                "totalSeasons": 4,
                "year": 2010,
                "watching": 60739,
                "voted": 31471,
                "rating": 4.32099,
                "image": "https://media.myshows.me/shows/small/f/f8/f82cb661c568361564aca848801cf3d7.jpg"
            }
        },
        {
            "rank": 57,
            "voted": 29122,
            "show": {
                "id": 5713,
                "title": "Время приключений",
                "titleOriginal": "Adventure Time",
                "status": "Returning Series",
                "totalSeasons": 7,
                "year": 2010,
                "watching": 44795,
                "voted": 23880,
                "rating": 4.64647,
                "image": "https://media.myshows.me/shows/small/3/3a/3a67fcc0d430d5c344c412adaae63e93.jpg"
            }
        },
        {
            "rank": 58,
            "voted": 32454,
            "show": {
                "id": 67,
                "title": "Секс в большом городе",
                "titleOriginal": "Sex and the City",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 1998,
                "watching": 50615,
                "voted": 25745,
                "rating": 4.47474,
                "image": "https://media.myshows.me/shows/small/d/d8/d868544d0edee5e598ecb57ed8e2988a.jpg"
            }
        },
        {
            "rank": 59,
            "voted": 33926,
            "show": {
                "id": 18575,
                "title": "Две девицы на мели",
                "titleOriginal": "2 Broke Girls",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 52495,
                "voted": 25924,
                "rating": 4.34306,
                "image": "https://media.myshows.me/shows/small/d/d9/d96773ae2f2be56b2566b635631a1415.jpg"
            }
        },
        {
            "rank": 60,
            "voted": 28677,
            "show": {
                "id": 328,
                "title": "Десятое королевство",
                "titleOriginal": "The 10th Kingdom",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2000,
                "watching": 44306,
                "voted": 25463,
                "rating": 4.41191,
                "image": "https://media.myshows.me/shows/small/4/44/44f8b38ae0fb0a389b94baa60ddd75b9.jpg"
            }
        },
        {
            "rank": 61,
            "voted": 31161,
            "show": {
                "id": 236,
                "title": "Книжный магазин Блэка",
                "titleOriginal": "Black Books",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2000,
                "watching": 41264,
                "voted": 21723,
                "rating": 4.52237,
                "image": "https://media.myshows.me/shows/small/2/25/25384bf0412cdc50e45f07a22232daa6.jpg"
            }
        },
        {
            "rank": 62,
            "voted": 30172,
            "show": {
                "id": 32,
                "title": "Отчаянные домохозяйки",
                "titleOriginal": "Desperate Housewives",
                "status": "Canceled/Ended",
                "totalSeasons": 8,
                "year": 2004,
                "watching": 48956,
                "voted": 26128,
                "rating": 4.52052,
                "image": "https://media.myshows.me/shows/small/e/e4/e4f5a66296bc0af49e71944ae6276b39.jpg"
            }
        },
        {
            "rank": 63,
            "voted": 30747,
            "show": {
                "id": 66,
                "title": "Гриффины",
                "titleOriginal": "Family Guy",
                "status": "Returning Series",
                "totalSeasons": 15,
                "year": 1999,
                "watching": 44357,
                "voted": 23714,
                "rating": 4.48798,
                "image": "https://media.myshows.me/shows/small/2/26/26772d21eceaca4a8f5f1365d109ad34.jpg"
            }
        },
        {
            "rank": 64,
            "voted": 30058,
            "show": {
                "id": 509,
                "title": "Спартак",
                "titleOriginal": "Spartacus",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2010,
                "watching": 41468,
                "voted": 21923,
                "rating": 4.54514,
                "image": "https://media.myshows.me/shows/small/8/87/8732cd2a759b2b0931baaa09fa84a795.jpg"
            }
        },
        {
            "rank": 65,
            "voted": 29861,
            "show": {
                "id": 32058,
                "title": "Бруклин 9-9",
                "titleOriginal": "Brooklyn Nine-Nine",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 38637,
                "voted": 19463,
                "rating": 4.50831,
                "image": "https://media.myshows.me/shows/small/1/14/14084ac89d815c1eac0726954ab881f9.jpg"
            }
        },
        {
            "rank": 66,
            "voted": 30533,
            "show": {
                "id": 17,
                "title": "Компьютерщики",
                "titleOriginal": "The IT Crowd",
                "status": "Canceled/Ended",
                "totalSeasons": 4,
                "year": 2006,
                "watching": 42666,
                "voted": 23816,
                "rating": 4.26644,
                "image": "https://media.myshows.me/shows/small/3/3e/3e9d96a3c7a6e456db14c2fef14f55ab.jpg"
            }
        },
        {
            "rank": 67,
            "voted": 35599,
            "show": {
                "id": 5677,
                "title": "Милые обманщицы",
                "titleOriginal": "Pretty Little Liars",
                "status": "Returning Series",
                "totalSeasons": 7,
                "year": 2010,
                "watching": 58497,
                "voted": 27134,
                "rating": 4.25995,
                "image": "https://media.myshows.me/shows/small/2/29/29c9119e095c1e4553358834ab403f57.jpg"
            }
        },
        {
            "rank": 68,
            "voted": 34194,
            "show": {
                "id": 31739,
                "title": "Оранжевый — хит сезона",
                "titleOriginal": "Orange is the New Black",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 46939,
                "voted": 20730,
                "rating": 4.46603,
                "image": "https://media.myshows.me/shows/small/5/50/5036a58e20d4c15644bcaeedfbd120ea.jpg"
            }
        },
        {
            "rank": 69,
            "voted": 31038,
            "show": {
                "id": 113,
                "title": "Вспомни, что будет",
                "titleOriginal": "FlashForward",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2009,
                "watching": 42676,
                "voted": 24572,
                "rating": 4.043,
                "image": "https://media.myshows.me/shows/small/a/a3/a36bbdabcb6ea5806eaf77a690428c95.jpg"
            }
        },
        {
            "rank": 70,
            "voted": 31254,
            "show": {
                "id": 35595,
                "title": "Лучше звоните Солу",
                "titleOriginal": "Better Call Saul",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2015,
                "watching": 40342,
                "voted": 18536,
                "rating": 4.49388,
                "image": "https://media.myshows.me/shows/small/6/60/60aadd7e0ec8011037aa0065bb154ad9.jpg"
            }
        },
        {
            "rank": 71,
            "voted": 28809,
            "show": {
                "id": 37718,
                "title": "Как избежать наказания за убийство",
                "titleOriginal": "How to Get Away with Murder",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2014,
                "watching": 39035,
                "voted": 18498,
                "rating": 4.60524,
                "image": "https://media.myshows.me/shows/small/a/ab/ab3aed560d5c727aaed2e7b5493350a3.jpg"
            }
        },
        {
            "rank": 72,
            "voted": 30397,
            "show": {
                "id": 22,
                "title": "Секретные материалы",
                "titleOriginal": "The X-Files",
                "status": "TBD/On The Bubble",
                "totalSeasons": 10,
                "year": 1993,
                "watching": 47523,
                "voted": 23022,
                "rating": 4.54542,
                "image": "https://media.myshows.me/shows/small/2/2f/2fd338b1e4e9a30fdc3faef009ebf644.jpg"
            }
        },
        {
            "rank": 73,
            "voted": 33199,
            "show": {
                "id": 28600,
                "title": "Агенты «Щ.И.Т.»",
                "titleOriginal": "Marvel's Agents of S.H.I.E.L.D.",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 48947,
                "voted": 22601,
                "rating": 4.23077,
                "image": "https://media.myshows.me/shows/small/4/44/44cdb9dd534bc19253d350f7df51443e.jpg"
            }
        },
        {
            "rank": 74,
            "voted": 27697,
            "show": {
                "id": 29192,
                "title": "Мотель Бейтсов",
                "titleOriginal": "Bates Motel",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 37009,
                "voted": 18964,
                "rating": 4.46888,
                "image": "https://media.myshows.me/shows/small/2/2c/2c0c516971533c1713f598364b1f3486.jpg"
            }
        },
        {
            "rank": 75,
            "voted": 31196,
            "show": {
                "id": 115,
                "title": "Кости",
                "titleOriginal": "Bones",
                "status": "Returning Series",
                "totalSeasons": 11,
                "year": 2005,
                "watching": 47682,
                "voted": 23319,
                "rating": 4.45556,
                "image": "https://media.myshows.me/shows/small/d/d9/d947aeb9385ee03857b6747bf2f5d260.jpg"
            }
        },
        {
            "rank": 76,
            "voted": 22768,
            "show": {
                "id": 34737,
                "title": "Рик и Морти",
                "titleOriginal": "Rick and Morty",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2013,
                "watching": 28050,
                "voted": 15360,
                "rating": 4.74619,
                "image": "https://media.myshows.me/shows/small/e/e4/e443c53a33da7907b6e3e72126a175ad.jpg"
            }
        },
        {
            "rank": 77,
            "voted": 26471,
            "show": {
                "id": 9,
                "title": "Все ненавидят Криса",
                "titleOriginal": "Everybody Hates Chris",
                "status": "Canceled/Ended",
                "totalSeasons": 4,
                "year": 2005,
                "watching": 40024,
                "voted": 22164,
                "rating": 4.41237,
                "image": "https://media.myshows.me/shows/small/2/22/220b58dfb16bd0967ad7f5bd9938fd9a.jpg"
            }
        },
        {
            "rank": 78,
            "voted": 30172,
            "show": {
                "id": 36931,
                "title": "Физрук",
                "titleOriginal": "Физрук",
                "status": "TBD/On The Bubble",
                "totalSeasons": 3,
                "year": 2014,
                "watching": 49509,
                "voted": 24790,
                "rating": 4.04999,
                "image": "https://media.myshows.me/shows/small/4/4f/4f8e8ba5a68407ff34307b9a4a3f05f0.jpg"
            }
        },
        {
            "rank": 79,
            "voted": 32682,
            "show": {
                "id": 17482,
                "title": "Новенькая",
                "titleOriginal": "New Girl",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 49433,
                "voted": 23307,
                "rating": 4.25039,
                "image": "https://media.myshows.me/shows/small/8/8b/8b23d295cb8f80da8190f24b05c8477b.jpg"
            }
        },
        {
            "rank": 80,
            "voted": 26731,
            "show": {
                "id": 206,
                "title": "Потерянная комната",
                "titleOriginal": "The Lost Room",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2006,
                "watching": 34210,
                "voted": 18364,
                "rating": 4.29217,
                "image": "https://media.myshows.me/shows/small/3/35/3588d395d140d5d8d5fc66ad672fdba8.jpg"
            }
        },
        {
            "rank": 81,
            "voted": 26592,
            "show": {
                "id": 38478,
                "title": "Я – зомби",
                "titleOriginal": "iZombie",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2015,
                "watching": 38818,
                "voted": 18754,
                "rating": 4.3845,
                "image": "https://media.myshows.me/shows/small/b/b8/b82bf4edc8dcec17649bbaac49b109eb.jpg"
            }
        },
        {
            "rank": 82,
            "voted": 29690,
            "show": {
                "id": 32042,
                "title": "Древние",
                "titleOriginal": "The Originals",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2013,
                "watching": 47728,
                "voted": 21263,
                "rating": 4.3007,
                "image": "https://media.myshows.me/shows/small/5/54/54a2a5ee0a7b2ce7c3366a07bb67537c.jpg"
            }
        },
        {
            "rank": 83,
            "voted": 29571,
            "show": {
                "id": 144,
                "title": "Настоящая кровь",
                "titleOriginal": "True Blood",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 2008,
                "watching": 43627,
                "voted": 21423,
                "rating": 4.29155,
                "image": "https://media.myshows.me/shows/small/a/ae/ae47a77496a948e714e6d1dcaa80d8f2.jpg"
            }
        },
        {
            "rank": 84,
            "voted": 25469,
            "show": {
                "id": 28828,
                "title": "Кухня",
                "titleOriginal": "Кухня",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2012,
                "watching": 40605,
                "voted": 20341,
                "rating": 4.42126,
                "image": "https://media.myshows.me/shows/small/4/44/4412e0ee086e79f21d7b76c3b425b45a.jpg"
            }
        },
        {
            "rank": 85,
            "voted": 23690,
            "show": {
                "id": 11687,
                "title": "Спартак: Боги арены",
                "titleOriginal": "Spartacus: Gods of the Arena",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2011,
                "watching": 30653,
                "voted": 16556,
                "rating": 4.51652,
                "image": "https://media.myshows.me/shows/small/2/26/26993183c40b9cd3d55dcdb3dd3d4841.jpg"
            }
        },
        {
            "rank": 86,
            "voted": 27553,
            "show": {
                "id": 37413,
                "title": "Константин",
                "titleOriginal": "Constantine",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2014,
                "watching": 38385,
                "voted": 18870,
                "rating": 4.09162,
                "image": "https://media.myshows.me/shows/small/1/1c/1c6a6344f28d2f5453c823a26acf1b6f.jpg"
            }
        },
        {
            "rank": 87,
            "voted": 31903,
            "show": {
                "id": 28040,
                "title": "Карточный домик",
                "titleOriginal": "House of Cards",
                "status": "Returning Series",
                "totalSeasons": 4,
                "year": 2013,
                "watching": 41145,
                "voted": 15614,
                "rating": 4.59071,
                "image": "https://media.myshows.me/shows/small/b/ba/ba45826e0c3be1ad1cdf5bbdf67381d8.jpg"
            }
        },
        {
            "rank": 88,
            "voted": 26020,
            "show": {
                "id": 116,
                "title": "Тайны Смолвиля",
                "titleOriginal": "Smallville",
                "status": "Canceled/Ended",
                "totalSeasons": 10,
                "year": 2001,
                "watching": 49371,
                "voted": 25645,
                "rating": 4.19273,
                "image": "https://media.myshows.me/shows/small/8/81/81de922dc1e16fd33f1c9e53aef0f562.jpg"
            }
        },
        {
            "rank": 89,
            "voted": 23809,
            "show": {
                "id": 226,
                "title": "Сообщество",
                "titleOriginal": "Community",
                "status": "Canceled/Ended",
                "totalSeasons": 6,
                "year": 2009,
                "watching": 32494,
                "voted": 16896,
                "rating": 4.49686,
                "image": "https://media.myshows.me/shows/small/5/51/51b43ea92732cfbc182339fdd0361b2f.jpg"
            }
        },
        {
            "rank": 90,
            "voted": 28420,
            "show": {
                "id": 35676,
                "title": "Бульварные ужасы",
                "titleOriginal": "Penny Dreadful",
                "status": "Canceled/Ended",
                "totalSeasons": 3,
                "year": 2014,
                "watching": 40100,
                "voted": 18063,
                "rating": 4.2496,
                "image": "https://media.myshows.me/shows/small/0/05/053c80e9aed3720937cd76582e2e63dd.jpg"
            }
        },
        {
            "rank": 91,
            "voted": 24405,
            "show": {
                "id": 143,
                "title": "Визитеры",
                "titleOriginal": "V",
                "status": "Canceled/Ended",
                "totalSeasons": 2,
                "year": 2009,
                "watching": 35456,
                "voted": 20637,
                "rating": 3.8022,
                "image": "https://media.myshows.me/shows/small/f/f3/f36b8ace6f5bb8c3e155b5c009558600.jpg"
            }
        },
        {
            "rank": 92,
            "voted": 28086,
            "show": {
                "id": 142,
                "title": "Твин Пикс",
                "titleOriginal": "Twin Peaks",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 1990,
                "watching": 38135,
                "voted": 16045,
                "rating": 4.49567,
                "image": "https://media.myshows.me/shows/small/a/a1/a11d52c050e7f132e3e2dd1b3f3a9226.jpg"
            }
        },
        {
            "rank": 93,
            "voted": 22442,
            "show": {
                "id": 38306,
                "title": "Вечность",
                "titleOriginal": "Forever",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2014,
                "watching": 28877,
                "voted": 14388,
                "rating": 4.4115,
                "image": "https://media.myshows.me/shows/small/b/bb/bb53023aa6cb85f4487f79b775e05440.jpg"
            }
        },
        {
            "rank": 94,
            "voted": 26193,
            "show": {
                "id": 43786,
                "title": "Люцифер",
                "titleOriginal": "Lucifer",
                "status": "Returning Series",
                "totalSeasons": 2,
                "year": 2016,
                "watching": 34167,
                "voted": 13788,
                "rating": 4.36879,
                "image": "https://media.myshows.me/shows/small/a/ac/ac1412998fd2a797d0e0983d9885c25a.jpg"
            }
        },
        {
            "rank": 95,
            "voted": 18978,
            "show": {
                "id": 6528,
                "title": "Мастер и Маргарита",
                "titleOriginal": "Мастер и Маргарита",
                "status": "Canceled/Ended",
                "totalSeasons": 1,
                "year": 2005,
                "watching": 29630,
                "voted": 16610,
                "rating": 4.35925,
                "image": "https://media.myshows.me/shows/small/8/82/82dcebbb84be8efd45d716b1faca95a0.jpg"
            }
        },
        {
            "rank": 96,
            "voted": 23782,
            "show": {
                "id": 17463,
                "title": "Родина",
                "titleOriginal": "Homeland",
                "status": "Returning Series",
                "totalSeasons": 6,
                "year": 2011,
                "watching": 32264,
                "voted": 14963,
                "rating": 4.48605,
                "image": "https://media.myshows.me/shows/small/1/1c/1c290cc58d23ddc0fee443432eb8776d.jpg"
            }
        },
        {
            "rank": 97,
            "voted": 24212,
            "show": {
                "id": 33416,
                "title": "Острые козырьки",
                "titleOriginal": "Peaky Blinders",
                "status": "Returning Series",
                "totalSeasons": 3,
                "year": 2013,
                "watching": 30755,
                "voted": 12958,
                "rating": 4.6327,
                "image": "https://media.myshows.me/shows/small/8/87/87ab0bc77f133fb61695e4b5959d2d8f.jpg"
            }
        },
        {
            "rank": 98,
            "voted": 22459,
            "show": {
                "id": 239,
                "title": "Анатомия страсти",
                "titleOriginal": "Grey's Anatomy",
                "status": "Returning Series",
                "totalSeasons": 13,
                "year": 2005,
                "watching": 32766,
                "voted": 15595,
                "rating": 4.58835,
                "image": "https://media.myshows.me/shows/small/2/2b/2b8999891bb5dc012a339c04729646a4.jpg"
            }
        },
        {
            "rank": 99,
            "voted": 23280,
            "show": {
                "id": 201,
                "title": "Сыны анархии",
                "titleOriginal": "Sons of Anarchy",
                "status": "Canceled/Ended",
                "totalSeasons": 7,
                "year": 2008,
                "watching": 31727,
                "voted": 14243,
                "rating": 4.56754,
                "image": "https://media.myshows.me/shows/small/d/d5/d5682814a170160a971338a07c9fd19f.jpg"
            }
        },
        {
            "rank": 100,
            "voted": 23128,
            "show": {
                "id": 23,
                "title": "Хранилище 13",
                "titleOriginal": "Warehouse 13",
                "status": "Canceled/Ended",
                "totalSeasons": 5,
                "year": 2009,
                "watching": 33658,
                "voted": 16849,
                "rating": 4.25489,
                "image": "https://media.myshows.me/shows/small/8/8b/8bcfb9915b7c624d43549bd75a1c97b9.jpg"
            }
        }
];
