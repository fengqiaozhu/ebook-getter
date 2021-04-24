/*
 * @Author: FengQ 
 * @Date: 2020-06-28 21:41:42 
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 00:38:37
 */
// Export methods of oprating the ebooks.

import Request from './request'
import { EbookAPI } from '../interfaces'


class Ebook {
    constructor(public apis: EbookAPI, public request = new Request()) {
    }

    // Search ebooks by name.
    public async search(bookName: string) {
        let api = this.apis.search(bookName)
        let dt = await this.req(api.method, api.url)
        return this.jsonParse(dt)
    }

    // Get ebook description by bookID.
    public async desc(bookID: number) {
        let api = this.apis.desc(bookID)
        let dt = await this.req(api.method, api.url)
        return this.jsonParse(dt)
    }

    // Get book catalog by bookID.
    public async catalog(bookID: number) {
        let api = this.apis.catalog(bookID)
        let dt = await this.req(api.method, api.url)
        return this.jsonParse(dt)
    }

    // Download single chapter of a book by bookID.
    public async chapter(bookID: number, chapterID: number) {
        let api = this.apis.chapter(bookID, chapterID)
        let dt = await this.req(api.method, api.url)
        return this.jsonParse(dt)
    }

    // images of the book
    public async img(imgName: string) {
        let api = this.apis.img(imgName)
        let dt = await this.req(api.method, api.url)
        return JSON.parse(dt)
    }

    private async req(method: string, url: string) {
        let protocol = url.split('\:\/\/')[0]
        let res = await this.request[`${protocol.toLowerCase()}_${method.toLowerCase()}`](url)
        return res
    }

    private jsonParse(str: string) {
        str = str.trim().replace(/\,\]/ig, ']')
        return JSON.parse(str)
    }
}

export default Ebook











