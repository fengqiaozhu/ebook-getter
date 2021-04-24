"use strict";
/*
 * @Author: FengQ
 * @Date: 2020-06-29 21:51:24
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 00:44:03
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EbookConfig = /** @class */ (function () {
    function EbookConfig() {
        this.urls = {
            search: 'https://souxs.leeyegy.com/search.aspx?key=[bookName]&page=1&siteid=app2',
            desc: 'https://infosxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/info.html',
            catalog: 'https://infosxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/index.html',
            chapter: 'https://contentxs.pysmei.com/bookfiles/html/[pathID]/[bookID]/[chapterID].html',
            img: 'https://imgapi.jiaston.com/BookFiles/BookImages/[imgName]'
        };
    }
    EbookConfig.prototype.search = function (bookName) {
        var api = {
            url: this.urls.search.replace(/\[bookName\]/g, bookName),
            method: 'GET'
        };
        return api;
    };
    EbookConfig.prototype.desc = function (bookID) {
        var parentPath = Math.ceil(bookID / 1000).toString();
        var api = {
            url: this.urls.desc.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()),
            method: 'GET'
        };
        return api;
    };
    EbookConfig.prototype.catalog = function (bookID) {
        var parentPath = Math.ceil(bookID / 1000).toString();
        var api = {
            url: this.urls.catalog.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()),
            method: 'GET'
        };
        return api;
    };
    EbookConfig.prototype.chapter = function (bookID, chapterID) {
        var parentPath = Math.ceil(bookID / 1000).toString();
        var api = {
            url: this.urls.chapter.replace(/\[pathID\]/g, parentPath).replace(/\[bookID\]/g, bookID.toString()).replace(/\[chapterID\]/g, chapterID.toString()),
            method: 'GET'
        };
        return api;
    };
    EbookConfig.prototype.img = function (imgName) {
        var api = {
            url: this.urls.search.replace(/\[imgName\]/g, imgName),
            method: 'GET'
        };
        return api;
    };
    EbookConfig.prototype.func = function () {
        return {
            search: this.search,
            desc: this.desc,
            catalog: this.catalog,
            chapter: this.chapter,
            img: this.img
        };
    };
    return EbookConfig;
}());
exports.default = EbookConfig;
