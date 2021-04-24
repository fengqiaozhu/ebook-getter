/*
 * @Author: FengQ 
 * @Date: 2020-06-29 21:51:24 
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 00:44:03
 */

import { API } from '../interfaces'

class EbookConfig {
    private urls = {
        search: 'https://souxs.leeyegy.com/search.aspx?key=[bookName]&page=1&siteid=app2',
        desc: 'https://infosxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/info.html',
        catalog: 'https://infosxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/index.html',
        chapter: 'https://contentxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/[chapterID].html',
        img: 'https://imgapi.jiaston.com/BookFiles/BookImages/[imgName]'
    }
    constructor() {
    }

    public search(bookName: string) {
        let api: API = {
            url: this.urls.search.replace(/\[bookName\]/g, bookName),
            method: 'GET'
        }
        return api
    }

    public desc(bookID: number) {
        let parentPath = Math.ceil(bookID / 1000).toString()
        let api = {
            url: this.urls.desc.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()),
            method: 'GET'
        }
        return api
    }

    public catalog(bookID: number) {
        let parentPath = Math.ceil(bookID / 1000).toString()
        let api: API = {
            url: this.urls.catalog.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()),
            method: 'GET'
        }
        return api
    }

    public chapter(bookID: number, chapterID: number) {
        let parentPath = Math.ceil(bookID / 1000).toString()
        let api: API = {
            url: this.urls.chapter.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()).replace(/\[chapterID\]/g, chapterID.toString()),
            method: 'GET'
        }
        return api
    }

    public img(imgName: string) {
        let api: API = {
            url: this.urls.search.replace(/\[imgName\]/g, imgName),
            method: 'GET'
        }
        return api
    }


    public func() {
        return {
            search: this.search,
            desc: this.desc,
            catalog: this.catalog,
            chapter: this.chapter,
            img: this.img
        }
    }
}


export default EbookConfig