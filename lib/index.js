"use strict";
/*
 * @Author: FengQ
 * @Date: 2020-06-29 21:59:08
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 22:13:26
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var houzi_1 = __importDefault(require("./url_config/houzi"));
var ebook_option_1 = __importDefault(require("./utils/ebook_option"));
var houziConfig = new houzi_1.default();
var houziEbook = new ebook_option_1.default(houziConfig);
// houziEbook.search('斗罗大陆').then(dt => {
//     console.log(JSON.stringify(dt))
// })
// houziEbook.desc(1559).then(dt => {
//     console.log(JSON.stringify(dt))
// })
// houziEbook.catalog(1559).then(dt => {
//     console.log(JSON.stringify(dt))
// })
// houziEbook.chapter(1559, 971860).then(dt => {
//     console.log(JSON.stringify(dt))
// })
// const bookID = 1559
// houziEbook.catalog(bookID).then(async dt => {
//     console.log(`+++++++++++++++++${dt.data.name}+++++++++++++++++`)
//     let l_1 = dt.data.list
//     for (let i = 0; i < l_1.length; i++) {
//         console.log(`*****************${l_1[i].name}*****************`)
//         let l_2 = l_1[i].list
//         for (let j = 0; j < l_2.length; j++) {
//             let id = l_2[j].id
//             console.log(`*****************${l_2[j].name}*****************`)
//             await houziEbook.chapter(bookID, id).then(dt => {
//                 console.log(JSON.stringify(dt))
//             })
//         }
//     }
//     console.log(JSON.stringify(dt))
// })
exports.default = {
    houzi: houziEbook
};
