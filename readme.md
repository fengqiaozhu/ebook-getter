# 名称： 网文下载模块
# 安装： `npm i ebook-getter`
# 使用：
```nodejs
const ebook = require('ebook-getter').default
// es6
// import ebook from 'ebook-getter'


// 根据书名搜索书籍
ebook.search('斗破苍穹') -> return Promise
// 获取书籍描述等信息
ebook.desc(bookID) -> return Promise
// 获取书籍章节信息
ebook.catalog(bookID) -> return Promise
// 获取书籍文本
ebook.chapter(bookID, chapterID) -> return Promise
// 获取封面图片
ebook.img(imgName) -> return Promise
```