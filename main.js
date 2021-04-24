const ebook = require('./bin/index').default

ebook.houzi.search('斗破苍穹').then(dt=>{
    console.log(dt)
})