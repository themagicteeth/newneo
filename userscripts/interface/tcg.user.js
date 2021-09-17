// ==UserScript==
// @name        TCG Helper
// @namespace   Violentmonkey Scripts
// @match       https://www.neopets.com/games/neodeck/index.phtml
// @grant       none
// @version     1.0
// @author      -
// @description 9/17/2021, 12:54:56 PM
// ==/UserScript==


const hasPremium = !!$("#sswmenu .imgmenu").length;
const owner = location.search.match(/owner=(.+)&*/)?.[1] || appInsightsUserName;

const CARD_LIST = {
    "1": {
        "album": "1-20",
        "list": [
            { position: 1, name: "Jahbal", img: "med_1.gif", rarity: "yellow" },
            { position: 2, name: "Underwater Chef", img: "med_2.gif", rarity: "red" },
            { position: 3, name: "Glug Glug Jones", img: "med_3.gif", rarity: "pink" },
            { position: 4, name: "Bug Eye McGee", img: "med_4.gif", rarity: "purple" },
            { position: 5, name: "Capara", img: "med_5.gif", rarity: "black" },
            { position: 6, name: "Samuel No Eyes", img: "med_6.gif", rarity: "red" },
            { position: 7, name: "Velvet Pimpernel", img: "med_7.gif", rarity: "blue" },
            { position: 8, name: "The Fontaine Sisters", img: "med_8.gif", rarity: "green" },
            { position: 9, name: "Lord Luparn", img: "med_9.gif", rarity: "blue" },
            { position: 10, name: "Spectre", img: "med_10.gif", rarity: "black" },
            { position: 11, name: "Ursula Usul", img: "med_11.gif", rarity: "purple" },
            { position: 12, name: "Korabric", img: "med_12.gif", rarity: "blue" },
            { position: 13, name: "Flutter", img: "med_13.gif", rarity: "red" },
            { position: 14, name: "Gorunda the Wise", img: "med_14.gif", rarity: "blue" },
            { position: 15, name: "Princess Fernypoo", img: "med_15.gif", rarity: "green" },
            { position: 16, name: "Brucey B", img: "med_16.gif", rarity: "holo" },
            { position: 17, name: "Punchbag Bob", img: "med_17.gif", rarity: "yellow" },
            { position: 18, name: "Moogi", img: "med_18.gif", rarity: "blue" },
            { position: 19, name: "Kyruggi", img: "med_19.gif", rarity: "green" },
            { position: 20, name: "Mrs. Prenderghast", img: "med_20.gif", rarity: "red" }
        ]
    },
    "2": {
        "album": "21-40",
        "list": [
            { position: 1, name: "Grarrg", img: "med_21.gif", rarity: "green" },
            { position: 2, name: "Antikia Lighten", img: "med_22.gif", rarity: "red" },
            { position: 3, name: "Myncha", img: "med_23.gif", rarity: "green" },
            { position: 4, name: "The Phantom", img: "med_24.gif", rarity: "red" },
            { position: 5, name: "Aurora the Healer", img: "med_25.gif", rarity: "red" },
            { position: 6, name: "Mr. Chuckles", img: "med_26.gif", rarity: "yellow" },
            { position: 7, name: "Dr. Frank Sloth", img: "med_27.gif", rarity: "holo" },
            { position: 8, name: "Umma Bunga", img: "med_28.gif", rarity: "green" },
            { position: 9, name: "Tyrela Softpaw", img: "med_29.gif", rarity: "red" },
            { position: 10, name: "Pomanna", img: "med_30.gif", rarity: "red" },
            { position: 11, name: "Liandra", img: "med_31.gif", rarity: "pink" },
            { position: 12, name: "Haiki-Lu", img: "med_32.gif", rarity: "red" },
            { position: 13, name: "Grundo Chef", img: "med_33.gif", rarity: "red" },
            { position: 14, name: "Wrawk the Merciless", img: "med_34.gif", rarity: "red" },
            { position: 15, name: "Sarkif", img: "med_35.gif", rarity: "red" },
            { position: 16, name: "The Lupe Collector", img: "med_36.gif", rarity: "black" },
            { position: 17, name: "Admiral Arvakis", img: "med_37.gif", rarity: "red" },
            { position: 18, name: "Margoreth", img: "med_38.gif", rarity: "yellow" },
            { position: 19, name: "The Stuff Collectable Card", img: "med_39.gif", rarity: "red" },
            { position: 20, name: "Trrygdorr", img: "med_40.gif", rarity: "red" }
        ]
    },
    "3": {
        "album": "41-60",
        "list": [
            { position: 1, name: "Green Scale", img: "med_41.gif", rarity: "red" },
            { position: 2, name: "Flaming Wuzzle", img: "med_42.gif", rarity: "blue" },
            { position: 3, name: "Fyora The Faerie Queen", img: "med_43.gif", rarity: "holo" },
            { position: 4, name: "The Snowager", img: "med_44.gif", rarity: "black" },
            { position: 5, name: "Grargadon", img: "med_45.gif", rarity: "purple" },
            { position: 6, name: "Li-sha", img: "med_46.gif", rarity: "blue" },
            { position: 7, name: "Otona, Protector of the Seas", img: "med_47.gif", rarity: "red" },
            { position: 8, name: "Kharlos", img: "med_48.gif", rarity: "green" },
            { position: 9, name: "Fire Paw", img: "med_49.gif", rarity: "pink" },
            { position: 10, name: "Island Mystic", img: "med_50.gif", rarity: "red" },
            { position: 11, name: "Midas", img: "med_51.gif", rarity: "red" },
            { position: 12, name: "Uzarro", img: "med_52.gif", rarity: "blue" },
            { position: 13, name: "Rikti", img: "med_53.gif", rarity: "red" },
            { position: 14, name: "Ghi Pharun", img: "med_54.gif", rarity: "black" },
            { position: 15, name: "Tylix", img: "med_55.gif", rarity: "green" },
            { position: 16, name: "Gors the Mighty", img: "med_56.gif", rarity: "blue" },
            { position: 17, name: "Kreai", img: "med_57.gif", rarity: "yellow" },
            { position: 18, name: "The Spider Grundo", img: "med_58.gif", rarity: "black" },
            { position: 19, name: "Captain Astounding", img: "med_59.gif", rarity: "purple" },
            { position: 20, name: "The Incredible Grarrl", img: "med_60.gif", rarity: "yellow" }
        ]
    },
    "4": {
        "album": "61-80",
        "list": [
            { position: 1, name: "", img: "med_61.gif", rarity: "purple" },
            { position: 2, name: "", img: "med_62.gif", rarity: "purple" },
            { position: 3, name: "", img: "med_63.gif", rarity: "red" },
            { position: 4, name: "", img: "med_64.gif", rarity: "yellow" },
            { position: 5, name: "", img: "med_65.gif", rarity: "yellow" },
            { position: 6, name: "", img: "med_66.gif", rarity: "blue" },
            { position: 7, name: "", img: "med_67.gif", rarity: "red" },
            { position: 8, name: "", img: "med_68.gif", rarity: "holo" },
            { position: 9, name: "", img: "med_69.gif", rarity: "holo" },
            { position: 10, name: "", img: "med_70.gif", rarity: "blue" },
            { position: 11, name: "", img: "med_71.gif", rarity: "holo" },
            { position: 12, name: "", img: "med_72.gif", rarity: "yellow" },
            { position: 13, name: "", img: "med_73.gif", rarity: "blue" },
            { position: 14, name: "", img: "med_74.gif", rarity: "pink" },
            { position: 15, name: "", img: "med_75.gif", rarity: "yellow" },
            { position: 16, name: "", img: "med_76.gif", rarity: "black" },
            { position: 17, name: "", img: "med_77.gif", rarity: "red" },
            { position: 18, name: "", img: "med_78.gif", rarity: "red" },
            { position: 19, name: "", img: "med_79.gif", rarity: "red" },
            { position: 20, name: "", img: "med_80.gif", rarity: "purple" }
        ]
    },
    "5": {
        "album": "81-100",
        "list": [
            { position: 1, name: "", img: "med_81.gif", rarity: "blue" },
            { position: 2, name: "", img: "med_82.gif", rarity: "holo" },
            { position: 3, name: "", img: "med_83.gif", rarity: "holo" },
            { position: 4, name: "", img: "med_84.gif", rarity: "holo" },
            { position: 5, name: "", img: "med_85.gif", rarity: "holo" },
            { position: 6, name: "", img: "med_86.gif", rarity: "red" },
            { position: 7, name: "", img: "med_87.gif", rarity: "black" },
            { position: 8, name: "", img: "med_88.gif", rarity: "red" },
            { position: 9, name: "", img: "med_89.gif", rarity: "yellow" },
            { position: 10, name: "", img: "med_90.gif", rarity: "pink" },
            { position: 11, name: "", img: "med_91.gif", rarity: "purple" },
            { position: 12, name: "", img: "med_92.gif", rarity: "purple" },
            { position: 13, name: "", img: "med_93.gif", rarity: "black" },
            { position: 14, name: "", img: "med_94.gif", rarity: "red" },
            { position: 15, name: "", img: "med_95.gif", rarity: "blue" },
            { position: 16, name: "", img: "med_96.gif", rarity: "red" },
            { position: 17, name: "", img: "med_97.gif", rarity: "green" },
            { position: 18, name: "", img: "med_98.gif", rarity: "yellow" },
            { position: 19, name: "", img: "med_99.gif", rarity: "pink" },
            { position: 20, name: "", img: "med_100.gif", rarity: "red" }
        ]
    },
    "6": {
        "album": "101-120",
        "list": [
            { position: 1, name: "", img: "med_101.gif", rarity: "red" },
            { position: 2, name: "", img: "med_102.gif", rarity: "blue" },
            { position: 3, name: "", img: "med_103.gif", rarity: "purple" },
            { position: 4, name: "", img: "med_104.gif", rarity: "pink" },
            { position: 5, name: "", img: "med_105.gif", rarity: "blue" },
            { position: 6, name: "", img: "med_106.gif", rarity: "blue" },
            { position: 7, name: "", img: "med_107.gif", rarity: "red" },
            { position: 8, name: "", img: "med_108.gif", rarity: "pink" },
            { position: 9, name: "", img: "med_109.gif", rarity: "yellow" },
            { position: 10, name: "", img: "med_110.gif", rarity: "blue" },
            { position: 11, name: "", img: "med_111.gif", rarity: "blue" },
            { position: 12, name: "", img: "med_112.gif", rarity: "green" },
            { position: 13, name: "", img: "med_113.gif", rarity: "yellow" },
            { position: 14, name: "", img: "med_114.gif", rarity: "red" },
            { position: 15, name: "", img: "med_115.gif", rarity: "blue" },
            { position: 16, name: "", img: "med_116.gif", rarity: "blue" },
            { position: 17, name: "", img: "med_117.gif", rarity: "red" },
            { position: 18, name: "", img: "med_118.gif", rarity: "yellow" },
            { position: 19, name: "", img: "med_119.gif", rarity: "red" },
            { position: 20, name: "", img: "med_120.gif", rarity: "blue" }
        ]
    },
    "7": {
        "album": "121-140",
        "list": [
            { position: 1, name: "", img: "med_121.gif", rarity: "blue" },
            { position: 2, name: "", img: "med_122.gif", rarity: "pink" },
            { position: 3, name: "", img: "med_123.gif", rarity: "pink" },
            { position: 4, name: "", img: "med_124.gif", rarity: "blue" },
            { position: 5, name: "", img: "med_125.gif", rarity: "pink" },
            { position: 6, name: "", img: "med_126.gif", rarity: "pink" },
            { position: 7, name: "", img: "med_127.gif", rarity: "black" },
            { position: 8, name: "", img: "med_128.gif", rarity: "yellow" },
            { position: 9, name: "", img: "med_129.gif", rarity: "blue" },
            { position: 10, name: "", img: "med_130.gif", rarity: "green" },
            { position: 11, name: "", img: "med_131.gif", rarity: "green" },
            { position: 12, name: "", img: "med_132.gif", rarity: "black" },
            { position: 13, name: "", img: "med_133.gif", rarity: "yellow" },
            { position: 14, name: "", img: "med_134.gif", rarity: "yellow" },
            { position: 15, name: "", img: "med_135.gif", rarity: "blue" },
            { position: 16, name: "", img: "med_136.gif", rarity: "purple" },
            { position: 17, name: "", img: "med_137.gif", rarity: "blue" },
            { position: 18, name: "", img: "med_138.gif", rarity: "blue" },
            { position: 19, name: "", img: "med_139.gif", rarity: "yellow" },
            { position: 20, name: "", img: "med_140.gif", rarity: "holo" }
        ]
    },
    "8": {
        "album": "141-160",
        "list": [
            { position: 1, name: "", img:  "med_141.gif", rarity: "red" },
            { position: 2, name: "", img:  "med_142.gif", rarity: "black" },
            { position: 3, name: "", img:  "med_143.gif", rarity: "blue" },
            { position: 4, name: "", img:  "med_144.gif", rarity: "green" },
            { position: 5, name: "", img:  "med_145.gif", rarity: "red" },
            { position: 6, name: "", img:  "med_146.gif", rarity: "black" },
            { position: 7, name: "", img:  "med_147.gif", rarity: "pink" },
            { position: 8, name: "", img:  "med_148.gif", rarity: "yellow" },
            { position: 9, name: "", img:  "med_149.gif", rarity: "green" },
            { position: 10, name: "", img: "med_150.gif", rarity: "black" },
            { position: 11, name: "", img: "med_151.gif", rarity: "blue" },
            { position: 12, name: "", img: "med_152.gif", rarity: "black" },
            { position: 13, name: "", img: "med_153.gif", rarity: "green" },
            { position: 14, name: "", img: "med_154.gif", rarity: "blue" },
            { position: 15, name: "", img: "med_155.gif", rarity: "purple" },
            { position: 16, name: "", img: "med_156.gif", rarity: "green" },
            { position: 17, name: "", img: "med_157.gif", rarity: "yellow" },
            { position: 18, name: "", img: "med_158.gif", rarity: "yellow" },
            { position: 19, name: "", img: "med_159.gif", rarity: "blue" },
            { position: 20, name: "", img: "med_160.gif", rarity: "blue" }
        ]
    },
    "9": {
        "album": "161-180",
        "list": [
            { position: 1, name: "", img:  "med_161.gif", rarity: "purple" },
            { position: 2, name: "", img:  "med_162.gif", rarity: "green" },
            { position: 3, name: "", img:  "med_163.gif", rarity: "holo" },
            { position: 4, name: "", img:  "med_164.gif", rarity: "green" },
            { position: 5, name: "", img:  "med_165.gif", rarity: "blue" },
            { position: 6, name: "", img:  "med_166.gif", rarity: "blue" },
            { position: 7, name: "", img:  "med_167.gif", rarity: "red" },
            { position: 8, name: "", img:  "med_168.gif", rarity: "green" },
            { position: 9, name: "", img:  "med_169.gif", rarity: "red" },
            { position: 10, name: "", img: "med_170.gif", rarity: "purple" },
            { position: 11, name: "", img: "med_171.gif", rarity: "red" },
            { position: 12, name: "", img: "med_172.gif", rarity: "green" },
            { position: 13, name: "", img: "med_173.gif", rarity: "blue" },
            { position: 14, name: "", img: "med_174.gif", rarity: "yellow" },
            { position: 15, name: "", img: "med_175.gif", rarity: "purple" },
            { position: 16, name: "", img: "med_176.gif", rarity: "purple" },
            { position: 17, name: "", img: "med_177.gif", rarity: "blue" },
            { position: 18, name: "", img: "med_178.gif", rarity: "purple" },
            { position: 19, name: "", img: "med_179.gif", rarity: "green" },
            { position: 20, name: "", img: "med_180.gif", rarity: "green" }
        ]
    },
    "10": {
        "album": "181-200",
        "list": [
            { position: 1, name: "", img:  "med_181.gif", rarity: "pink" },
            { position: 2, name: "", img:  "med_182.gif", rarity: "blue" },
            { position: 3, name: "", img:  "med_183.gif", rarity: "holo" },
            { position: 4, name: "", img:  "med_184.gif", rarity: "yellow" },
            { position: 5, name: "", img:  "med_185.gif", rarity: "red" },
            { position: 6, name: "", img:  "med_186.gif", rarity: "purple" },
            { position: 7, name: "", img:  "med_187.gif", rarity: "pink" },
            { position: 8, name: "", img:  "med_188.gif", rarity: "green" },
            { position: 9, name: "", img:  "med_189.gif", rarity: "pink" },
            { position: 10, name: "", img: "med_190.gif", rarity: "yellow" },
            { position: 11, name: "", img: "med_191.gif", rarity: "purple" },
            { position: 12, name: "", img: "med_192.gif", rarity: "red" },
            { position: 13, name: "", img: "med_193.gif", rarity: "green" },
            { position: 14, name: "", img: "med_194.gif", rarity: "pink" },
            { position: 15, name: "", img: "med_195.gif", rarity: "blue" },
            { position: 16, name: "", img: "med_196.gif", rarity: "green" },
            { position: 17, name: "", img: "med_197.gif", rarity: "blue" },
            { position: 18, name: "", img: "med_198.gif", rarity: "red" },
            { position: 19, name: "", img: "med_199.gif", rarity: "blue" },
            { position: 20, name: "", img: "med_200.gif", rarity: "red" }
        ],
    },
    "11": {
        "album": "201-220",
        "list": [
            { position: 1, name: "", img:  "med_201.gif", rarity: "holo" },
            { position: 2, name: "", img:  "med_202.gif", rarity: "yellow" },
            { position: 3, name: "", img:  "med_203.gif", rarity: "red" },
            { position: 4, name: "", img:  "med_204.gif", rarity: "blue" },
            { position: 5, name: "", img:  "med_205.gif", rarity: "yellow" },
            { position: 6, name: "", img:  "med_206.gif", rarity: "purple" },
            { position: 7, name: "", img:  "med_207.gif", rarity: "yellow" },
            { position: 8, name: "", img:  "med_208.gif", rarity: "black" },
            { position: 9, name: "", img:  "med_209.gif", rarity: "green" },
            { position: 10, name: "", img: "med_210.gif", rarity: "yellow" },
            { position: 11, name: "", img: "med_211.gif", rarity: "purple" },
            { position: 12, name: "", img: "med_212.gif", rarity: "pink" },
            { position: 13, name: "", img: "med_213.gif", rarity: "holo" },
            { position: 14, name: "", img: "med_214.gif", rarity: "pink" },
            { position: 15, name: "", img: "med_215.gif", rarity: "purple" },
            { position: 16, name: "", img: "med_216.gif", rarity: "black" },
            { position: 17, name: "", img: "med_217.gif", rarity: "black" },
            { position: 18, name: "", img: "med_218.gif", rarity: "purple" },
            { position: 19, name: "", img: "med_219.gif", rarity: "blue" },
            { position: 20, name: "", img: "med_220.gif", rarity: "red" }
        ]
    },
    "12": {
        "album": "221-240",
        "list": [
            { position: 1, name: "", img:  "med_221.gif", rarity: "holo" },
            { position: 2, name: "", img:  "med_222.gif", rarity: "yellow" },
            { position: 3, name: "", img:  "med_223.gif", rarity: "black" },
            { position: 4, name: "", img:  "med_224.gif", rarity: "green" },
            { position: 5, name: "", img:  "med_225.gif", rarity: "red" },
            { position: 6, name: "", img:  "med_226.gif", rarity: "pink" },
            { position: 7, name: "", img:  "med_227.gif", rarity: "purple" },
            { position: 8, name: "", img:  "med_228.gif", rarity: "blue" },
            { position: 9, name: "", img:  "med_229.gif", rarity: "yellow" },
            { position: 10, name: "", img: "med_230.gif", rarity: "black" },
            { position: 11, name: "", img: "med_231.gif", rarity: "green" },
            { position: 12, name: "", img: "med_232.gif", rarity: "blue" },
            { position: 13, name: "", img: "med_233.gif", rarity: "yellow" },
            { position: 14, name: "", img: "med_234.gif", rarity: "pink" },
            { position: 15, name: "", img: "med_235.gif", rarity: "green" },
            { position: 16, name: "", img: "med_236.gif", rarity: "red" },
            { position: 17, name: "", img: "med_237.gif", rarity: "purple" },
            { position: 18, name: "", img: "med_238.gif", rarity: "red" },
            { position: 19, name: "", img: "med_239.gif", rarity: "red" },
            { position: 20, name: "", img: "med_240.gif", rarity: "red" }
        ]
    },
    "13": {
        "album": "241-260",
        "list": [
            { position: 1, name: "", img:  "med_241.gif", rarity: "red" },
            { position: 2, name: "", img:  "med_242.gif", rarity: "red" },
            { position: 3, name: "", img:  "med_243.gif", rarity: "red" },
            { position: 4, name: "", img:  "med_244.gif", rarity: "black" },
            { position: 5, name: "", img:  "med_245.gif", rarity: "pink" },
            { position: 6, name: "", img:  "med_246.gif", rarity: "yellow" },
            { position: 7, name: "", img:  "med_247.gif", rarity: "green" },
            { position: 8, name: "", img:  "med_248.gif", rarity: "blue" },
            { position: 9, name: "", img:  "med_249.gif", rarity: "yellow" },
            { position: 10, name: "", img: "med_250.gif", rarity: "yellow" },
            { position: 11, name: "", img: "med_251.gif", rarity: "pink" },
            { position: 12, name: "", img: "med_252.gif", rarity: "blue" },
            { position: 13, name: "", img: "med_253.gif", rarity: "purple" },
            { position: 14, name: "", img: "med_254.gif", rarity: "yellow" },
            { position: 15, name: "", img: "med_255.gif", rarity: "blue" },
            { position: 16, name: "", img: "med_256.gif", rarity: "blue" },
            { position: 17, name: "", img: "med_257.gif", rarity: "blue" },
            { position: 18, name: "", img: "med_258.gif", rarity: "blue" },
            { position: 19, name: "", img: "med_259.gif", rarity: "blue" },
            { position: 20, name: "", img: "med_260.gif", rarity: "yellow" }
        ]
    },
    "14": {
        "album": "261-280",
        "list": [
            { position: 1, name: "", img:  "med_261.gif", rarity: "blue" },
            { position: 2, name: "", img:  "med_262.gif", rarity: "pink" },
            { position: 3, name: "", img:  "med_263.gif", rarity: "blue" },
            { position: 4, name: "", img:  "med_264.gif", rarity: "green" },
            { position: 5, name: "", img:  "med_265.gif", rarity: "blue" },
            { position: 6, name: "", img:  "med_266.gif", rarity: "blue" },
            { position: 7, name: "", img:  "med_267.gif", rarity: "blue" },
            { position: 8, name: "", img:  "med_268.gif", rarity: "blue" },
            { position: 9, name: "", img:  "med_269.gif", rarity: "blue" },
            { position: 10, name: "", img: "med_270.gif", rarity: "blue" },
            { position: 11, name: "", img: "med_271.gif", rarity: "yellow" },
            { position: 12, name: "", img: "med_272.gif", rarity: "blue" },
            { position: 13, name: "", img: "med_273.gif", rarity: "blue" },
            { position: 14, name: "", img: "med_274.gif", rarity: "blue" },
            { position: 15, name: "", img: "med_275.gif", rarity: "pink" },
            { position: 16, name: "", img: "med_276.gif", rarity: "black" },
            { position: 17, name: "", img: "med_277.gif", rarity: "black" },
            { position: 18, name: "", img: "med_278.gif", rarity: "purple" },
            { position: 19, name: "", img: "med_279.gif", rarity: "purple" },
            { position: 20, name: "", img: "med_280.gif", rarity: "black" }
        ]
    },
    "15": {
        "album": "281-300",
        "list": [
            { position: 1, name: "", img:  "med_281.gif", rarity: "green" },
            { position: 2, name: "", img:  "med_282.gif", rarity: "pink" },
            { position: 3, name: "", img:  "med_283.gif", rarity: "red" },
            { position: 4, name: "", img:  "med_284.gif", rarity: "yellow" },
            { position: 5, name: "", img:  "med_285.gif", rarity: "blue" },
            { position: 6, name: "", img:  "med_286.gif", rarity: "blue" },
            { position: 7, name: "", img:  "med_287.gif", rarity: "black" },
            { position: 8, name: "", img:  "med_288.gif", rarity: "black" },
            { position: 9, name: "", img:  "med_289.gif", rarity: "green" },
            { position: 10, name: "", img: "med_290.gif", rarity: "green" },
            { position: 11, name: "", img: "med_291.gif", rarity: "yellow" },
            { position: 12, name: "", img: "med_292.gif", rarity: "holo" },
            { position: 13, name: "", img: "med_293.gif", rarity: "holo" },
            { position: 14, name: "", img: "med_294.gif", rarity: "yellow" },
            { position: 15, name: "", img: "med_295.gif", rarity: "yellow" },
            { position: 16, name: "", img: "med_296.gif", rarity: "yellow" },
            { position: 17, name: "", img: "med_297.gif", rarity: "yellow" },
            { position: 18, name: "", img: "med_298.gif", rarity: "yellow" },
            { position: 19, name: "", img: "med_299.gif", rarity: "yellow" },
            { position: 20, name: "", img: "med_300.gif", rarity: "yellow" }
        ]
    },
    "16": {
        "album": "301-320",
        "list": [
            { position: 1, name: "", img:  "med_301.gif", rarity: "yellow" },
            { position: 2, name: "", img:  "med_302.gif", rarity: "yellow" },
            { position: 3, name: "", img:  "med_303.gif", rarity: "yellow" },
            { position: 4, name: "", img:  "med_304.gif", rarity: "yellow" },
            { position: 5, name: "", img:  "med_305.gif", rarity: "yellow" },
            { position: 6, name: "", img:  "med_306.gif", rarity: "yellow" },
            { position: 7, name: "", img:  "med_307.gif", rarity: "yellow" },
            { position: 8, name: "", img:  "med_308.gif", rarity: "yellow" },
            { position: 9, name: "", img:  "med_309.gif", rarity: "holo" },
            { position: 10, name: "", img: "med_310.gif", rarity: "yellow" },
            { position: 11, name: "", img: "med_311.gif", rarity: "black" },
            { position: 12, name: "", img: "med_312.gif", rarity: "yellow" },
            { position: 13, name: "", img: "med_313.gif", rarity: "yellow" },
            { position: 14, name: "", img: "med_314.gif", rarity: "black" },
            { position: 15, name: "", img: "med_315.gif", rarity: "yellow" },
            { position: 16, name: "", img: "med_316.gif", rarity: "yellow" },
            { position: 17, name: "Scratch Card Kiosk Wocky", img: "med_317.gif", rarity: "purple" },
            { position: 18, name: "Meuka", img: "med_318.gif", rarity: "black" },
            { position: 19, name: "Maths Nightmare", img: "med_319.gif", rarity: "black" },
            { position: 20, name: "Maitre D", img: "med_320.gif", rarity: "black" }
        ]
    },
    "17": {
        "album": "321-340",
        "list": [
            { position: 1, name: "The Storyteller", img:  "med_321.gif", rarity: "holo" },
            { position: 2, name: "Snow Wars Collectable Card", img:  "med_322.gif", rarity: "holo" },
            { position: 3, name: "Mutant Aisha Twins", img:  "med_323.gif", rarity: "black" },
            { position: 4, name: "Magax: Destroyer", img:  "med_324.gif", rarity: "black" },
            { position: 5, name: "Lord Darigan", img:  "med_325.gif", rarity: "yellow" },
            { position: 6, name: "Pacha The Vet", img:  "med_326.gif", rarity: "purple" },
            { position: 7, name: "Lightning Lenny", img:  "med_327.gif", rarity: "black" },
            { position: 8, name: "Khan the Unstoppable", img:  "med_328.gif", rarity: "yellow" },
            { position: 9, name: "Master Vex", img:  "med_329.gif", rarity: "yellow" },
            { position: 10, name: "Gilly the Usul", img: "med_330.gif", rarity: "yellow" },
            { position: 11, name: "Stan the Kyrii", img: "med_331.gif", rarity: "yellow" },
            { position: 12, name: "Dr. Flexo", img: "med_332.gif", rarity: "holo" },
            { position: 13, name: "Zeirn the Electric Kougra", img: "med_333.gif", rarity: "yellow" },
            { position: 14, name: "LDPBSTSCC", img: "med_334.gif", rarity: "black" },
            { position: 15, name: "Tug-O-War Card", img: "med_335.gif", rarity: "purple" },
            { position: 16, name: "Deserted Fairground Card", img: "med_336.gif", rarity: "black" },
            { position: 17, name: "Commander Garoo Card", img: "med_337.gif", rarity: "black" },
            { position: 18, name: "Korbats Lab Card", img: "med_338.gif", rarity: "green" },
            { position: 19, name: "Grarrl Keno Card", img: "med_339.gif", rarity: "green" },
            { position: 20, name: "Rainbow Fountain Card", img: "med_340.gif", rarity: "black" }
        ]
    },
    "18": {
        "album": "341-360",
        "list": [
            { position: 1, name: "The Tax Beast", img:  "med_341.gif", rarity: "yellow" },
            { position: 2, name: "Grey Faerie Card", img:  "med_342.gif", rarity: "black" },
            { position: 3, name: "Judge Hog", img:  "med_343.gif", rarity: "black" },
            { position: 4, name: "The Masked Intruder", img:  "med_344.gif", rarity: "black" },
            { position: 5, name: "Super Happy Icy Fun Snow Shop Card", img:  "med_345.gif", rarity: "holo" },
            { position: 6, name: "Lord Kass Card", img:  "med_346.gif", rarity: "yellow" },
            { position: 7, name: "Galem Darkhand", img:  "med_347.gif", rarity: "black" },
            { position: 8, name: "Armin the Small", img:  "med_348.gif", rarity: "black" },
            { position: 9, name: "Buzz Avenger", img:  "med_349.gif", rarity: "black" },
            { position: 10, name: "Berti the Creator", img: "med_350.gif", rarity: "black" },
            { position: 11, name: "Gadgadsbogen Festival", img: "med_351.gif", rarity: "black" },
            { position: 12, name: "Hasee Bounce Card", img: "med_352.gif", rarity: "black" },
            { position: 13, name: "Zafara Double Agent", img: "med_353.gif", rarity: "yellow" },
            { position: 14, name: "Sophie the Swamp Witch", img: "med_354.gif", rarity: "black" },
            { position: 15, name: "Kiko Explorer", img: "med_355.gif", rarity: "purple" },
            { position: 16, name: "Neopian Times 200th Anniversary Card", img: "med_356.gif", rarity: "holo" },
            { position: 17, name: "King Roos Nemesis", img: "med_357.gif", rarity: "purple" },
            { position: 18, name: "Meerouladen and Heermeedjet", img: "med_358.gif", rarity: "black" },
            { position: 19, name: "King Hagan of Brightvale", img: "med_359.gif", rarity: "black" },
            { position: 20, name: "The Navigator", img: "med_360.gif", rarity: "purple" }
        ]
    },
    "19": {
        "album": "361-366",
        "list": [
            { position: 1, name: "Bruce Avenger", img: "med_361.gif", rarity: "black" },
            { position: 2, name: "Mysterious Aisha Sorceress", img: "med_362.gif", rarity: "purple" },
            { position: 3, name: "Mystical Hissi Knight", img: "med_363.gif", rarity: "green" },
            { position: 4, name: "Lenny Curator", img: "med_364.gif", rarity: "green" },
            { position: 5, name: "Tonunishiki", img: "med_365.gif", rarity: "purple" },
            { position: 6, name: "Jake the Explorer", img: "med_366.gif", rarity: "pink" }
        ]
    }
}

// // Get the data for this album page
// const albumID = location.search.match(/page_id=(\d+)&*/)[1];
// const thisPage = STAMP_LIST[albumID];

// $("body").append(`
//     <style>
//         .fake-stamp {
//             opacity: 25% !important;
//         }
//         .stamp-info {
//             display: none;
//         }
//         .stamp-info.visible {
//             display: block;
//             text-align: center;
//         }
//         .stamp-info-table {
//             width: 450px;
//             margin: auto;
//             border: 1px solid #b1b1b1;
//             border-collapse: collapse;
//         }
//         .stamp-info-table td {
//             padding: 6px;
//         }
//         .searchimg {
//             width: 35px !important;
//             height: 35px !important;
//         }
//         .content table img {
//             cursor: pointer;
//         }
//         .stamp-selected {
//             /* Green border box */
//             background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAIAAAC3ytZVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAECSURBVHhe7dBBEYAwEARBtKAnZqMQfhRzFtJba2D6uvfy7zhyHDmOHEc+OZ7DNvJxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJB9H8nEkH0fycSQfR/JxJH9yHH4cOY4cR47j971exW0rqwgJ0K4AAAAASUVORK5CYII=) no-repeat;
//         }
//         .stamp-info-arrow:hover {
//             background: #dfdfdf;
//         }
//     </style>
// `);

// // Replace the images
// let infoContent = {};
// $(".content table img").each(function (index, element) {

//     const { position, name, img, rarity } = thisPage["list"][index];

//     $(element).attr("position", position).attr("rarity", rarity);

//     if ($(element).attr("alt") === "No Stamp" && name !== "No Stamp") {
//         $(element)
//             .addClass("fake-stamp")
//             .attr("title", name)
//             .attr("src", `http://images.neopets.com/items/${img}`)
//             .attr("alt", name)
//             .attr("rarity", rarity);
//     }

//     infoContent[position] = createInfoContent(element);

//     $(element).on("click", function () {
//         $(".stamp-info").html(infoContent[position]).show();
//         $(".content table td").removeClass("stamp-selected");
//         $(element).parent().addClass("stamp-selected");
//     });

//     if (hasPremium && name !== "No Stamp") {
//         $(element).on("dblclick", function () {
//             sswopen(name);
//         });
//     }

// });

// function createInfoContent(imgElement) {

//     const $img = $(imgElement),
//         src = $img.attr("src"),
//         stampName = $img.attr("alt"),
//         position = $img.attr("position"),
//         rarity = $img.attr("rarity");

//     if (stampName === "No Stamp") {
//         return `
// <br>
// <table class="stamp-info-table">
//     <tr>
//         <td class="stamp-info-arrow prev-arrow" rowspan="5"><img alt="Previous" src="http://images.neopets.com/themes/h5/premium/images/arrow-left.svg" style="width: 20px"></td>
//         <td rowspan="5" style="width: 30%; text-align: center;"><img src="${src}"></td>
//         <td style="text-align: center; font-weight: bold; padding: 12px;">${stampName}</td>
//         <td class="stamp-info-arrow next-arrow" rowspan="5"><img alt="Next" src="http://images.neopets.com/themes/h5/premium/images/arrow-right.svg" style="width: 20px"></td>
//     </tr>
//     <tr>
//         <td>Position: <b id="current-stamp-pos">${position}</b></td>
//     </tr>
//     <tr>
//         <td>This stamp hasn't been released yet.</td>
//     </tr>
//     <tr>
//         <td></td>
//     </tr>
//     <tr>
//         <td style="text-align: center;"></td>
//     </tr>
// </table>
//         `;
//     }

//     const hasStamp = $img.hasClass("fake-stamp") === false;

//     // const hasStampText = `<b>${owner}</b> ${hasStamp ? '<b style="color: green">has</b>' : '<b style="color: red">doesn\'t have</b>'} this stamp.`;
//     const hasStampText = `Status: ${hasStamp ? '<b style="color: green">Collected!</b>' : '<b style="color: red">Not collected</b>'}`;

//     const rarityText = r => {
//         const rNum = parseInt(r.replace(/r/, ``));
//         if (rNum <= 74) return r;
//         else if (rNum >= 75 && rNum <= 84) return `<strong style="color:green">${r} (uncommon)</strong>`;
//         else if (rNum >= 85 && rNum <= 89) return `<strong style="color:green">${r} (rare)</strong>`;
//         else if (rNum >= 90 && rNum <= 94) return `<strong style="color:green">${r} (very rare)</strong>`;
//         else if (rNum >= 95 && rNum <= 98 || rNum === 100) return `<strong style="color:green">${r} (ultra rare)</strong>`;
//         else if (rNum === 99) return `<strong style="color:green">${r} (super rare)</strong>`;
//         else if (rNum >= 101 && rNum <= 104) return `<strong style="color:#aa4455">${r} (special)</strong>`;
//         else if (rNum >= 105 && rNum <= 110) return `<strong style="color:red">${r} (MEGA RARE)</strong>`;
//         else if (rNum >= 111 && rNum <= 179) return `<strong style="color:red">${r} (RARITY ${rNum})</strong>`;
//         else if (rNum === 180) return `<strong style="color:#666666">${r} (retired)</strong>`;
//     };

//     const createHelper = itemName => {
//         // From diceroll's Search Helper script - https://github.com/diceroll123/NeoSearchHelper
//         const linkmap = { // for urls and images for each search type
//             ssw: {
//                 img: "http://images.neopets.com/premium/shopwizard/ssw-icon.svg"
//             },
//             sw: {
//                 url: "http://www.neopets.com/shops/wizard.phtml?string=%s",
//                 img: "http://images.neopets.com/themes/h5/basic/images/shopwizard-icon.png"
//             },
//             tp: {
//                 url: "http://www.neopets.com/island/tradingpost.phtml?type=browse&criteria=item_exact&search_string=%s",
//                 img: "http://images.neopets.com/themes/h5/basic/images/tradingpost-icon.png"
//             },
//             au: {
//                 url: "http://www.neopets.com/genie.phtml?type=process_genie&criteria=exact&auctiongenie=%s",
//                 img: "http://images.neopets.com/themes/h5/basic/images/auction-icon.png"
//             },
//             sdb: {
//                 url: "http://www.neopets.com/safetydeposit.phtml?obj_name=%s&category=0",
//                 img: "http://images.neopets.com/images/emptydepositbox.gif"
//             },
//             jni: {
//                 url: "https://items.jellyneo.net/search/?name=%s&name_type=3",
//                 img: "http://images.neopets.com/items/toy_plushie_negg_fish.gif"
//             }
//         };

//         const combiner = (item, url, image) => {
//             url = url.replace("%s", item);
//             return `<a tabindex='-1' target='_blank' href='${url}'><img src='${image}' class='searchimg'></a>`;
//         };

//         const sswhelper = item => {
//             let ssw = ``;
//             if (hasPremium) {
//                 ssw = `<img item="${item}" class="stamp-ssw-helper searchimg" src="${linkmap.ssw.img}">`;
//             }
//             return ssw;
//         };

//         return `<span class="search-helper">${sswhelper(itemName)}${combiner(itemName, linkmap.sw.url, linkmap.sw.img)}${combiner(itemName, linkmap.tp.url, linkmap.tp.img)}${combiner(itemName, linkmap.au.url, linkmap.au.img)}${combiner(itemName, linkmap.sdb.url, linkmap.sdb.img)}${combiner(itemName, linkmap.jni.url, linkmap.jni.img)}</span>`;
//     };

//     return `<br>
// <table class="stamp-info-table" item="${stampName}">
//     <tr>
//         <td class="stamp-info-arrow prev-arrow" rowspan="4"><img alt="Previous" src="http://images.neopets.com/themes/h5/premium/images/arrow-left.svg" style="width: 20px"></td>
//         <td rowspan="4" style="width: 30%; text-align: center;"><img src="${src}"></td>
//         <td style="text-align: center; font-weight: bold; padding: 12px;">${stampName}<br>${rarityText(rarity)}</td>
//         <td class="stamp-info-arrow next-arrow" rowspan="4"><img alt="Next" src="http://images.neopets.com/themes/h5/premium/images/arrow-right.svg" style="width: 20px"></td>
//     </tr>
//     <tr>
//         <td>Position: <b id="current-stamp-pos">${position}</b></td>
//     </tr>
//     <tr>
//         <td>${hasStampText}</td>
//     </tr>
//     <tr>
//         <td style="text-align: center; padding: 16px 6px;">${createHelper(stampName)}</td>
//     </tr>
// </table>
//     `;
// }

// // Add stamp info menu
// $(".content table").after(`<p class="stamp-info"></p>`);

// // Add right-click tip
// if (hasPremium) {
//     $(".content table").before(`<p style="text-align: center; font-style: italic; color: green; font-weight: bold">Double-click the stamp to search it<br>on the Super Shop Wizard!</p>`)
// }

// const jnfish = `<img src="http://images.neopets.com/items/toy_plushie_negg_fish.gif" style="width: 30px; height: 30px; vertical-align: middle;">`;
// $(".content").append(`<p style="text-align: center;"><a href="https://items.jellyneo.net/search/?sort=6&album=${albumID}" target="_blank">${jnfish}&nbsp;Album info&nbsp;${jnfish}</a></p>`);

// // SSW icon
// $("body").on("click", ".stamp-ssw-helper", function () {
//     const item = $(this).attr("item");
//     sswopen(item);
// });

// function sswopen(item) {
//     if ($(".sswdrop").hasClass("panel_hidden")) {
//         $("#sswmenu .imgmenu").click();
//     }
//     if ($("#ssw-tabs-1").hasClass("ui-tabs-hide")) {
//         $("#button-new-search").click();
//     }

//     $("#ssw-criteria").val("exact");
//     $("#searchstr").val(item);
// }

// // Stamp prev/next arrow
// $("body").on("click", ".stamp-info-arrow", function () {
//     const isNext = $(this).hasClass("next-arrow");
//     const isPrev = $(this).hasClass("prev-arrow");

//     const position = parseInt($("#current-stamp-pos").html());
//     console.log(position);

//     const newPosition = (function () {
//         if (position === 25 && isNext) {
//             return 1;
//         } else if (position === 1 && isPrev) {
//             return 25;
//         } else if (isNext) {
//             return position + 1;
//         } else if (isPrev) {
//             return position - 1;
//         }
//     })();

//     $(`img[position='${newPosition}']`).click();
// });
