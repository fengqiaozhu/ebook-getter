/*
 * @Author: FengQ 
 * @Date: 2020-06-29 21:59:08 
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 22:13:26
 */


import Houzi from './url_config/houzi'
import Ebook from './utils/ebook_option'
import {clear} from 'console'

const houziConfig = new Houzi()
const houziEbook = new Ebook(houziConfig)

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

export default {
    houzi: houziEbook
}

