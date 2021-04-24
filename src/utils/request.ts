/*
 * @Author: FengQ 
 * @Date: 2020-06-28 21:47:30 
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-29 23:37:13
 */
// Request methods.

import https from 'https'
import url from 'url'
class Request {
    constructor() {

    }

    public https_get(urlStr: string) {
        return new Promise((resolve, reject) => {
            let _url = encodeURI(urlStr)
            https.get(_url, (res) => {
                let dt = ''
                res.on('data', (d) => {
                    dt += d
                });
                res.on('end', () => {
                    resolve(dt)
                })
            }).on('error', (e) => {
                reject(e)
            })
        })
    }
}

export default Request