"use strict";
/*
 * @Author: FengQ
 * @Date: 2020-06-28 21:47:30
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-29 23:37:13
 */
// Request methods.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("https"));
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.prototype.https_get = function (urlStr) {
        return new Promise(function (resolve, reject) {
            var _url = encodeURI(urlStr);
            https_1.default.get(_url, function (res) {
                var dt = '';
                res.on('data', function (d) {
                    dt += d;
                });
                res.on('end', function () {
                    resolve(dt);
                });
            }).on('error', function (e) {
                reject(e);
            });
        });
    };
    return Request;
}());
exports.default = Request;
