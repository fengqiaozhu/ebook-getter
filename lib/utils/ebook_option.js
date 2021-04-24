"use strict";
/*
 * @Author: FengQ
 * @Date: 2020-06-28 21:41:42
 * @Last Modified by: FengQ
 * @Last Modified time: 2020-06-30 00:38:37
 */
// Export methods of oprating the ebooks.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("./request"));
var Ebook = /** @class */ (function () {
    function Ebook(apis, request) {
        if (request === void 0) { request = new request_1.default(); }
        this.apis = apis;
        this.request = request;
    }
    // Search ebooks by name.
    Ebook.prototype.search = function (bookName) {
        return __awaiter(this, void 0, void 0, function () {
            var api, dt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.search(bookName);
                        return [4 /*yield*/, this.req(api.method, api.url)];
                    case 1:
                        dt = _a.sent();
                        return [2 /*return*/, this.jsonParse(dt)];
                }
            });
        });
    };
    // Get ebook description by bookID.
    Ebook.prototype.desc = function (bookID) {
        return __awaiter(this, void 0, void 0, function () {
            var api, dt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.desc(bookID);
                        return [4 /*yield*/, this.req(api.method, api.url)];
                    case 1:
                        dt = _a.sent();
                        return [2 /*return*/, this.jsonParse(dt)];
                }
            });
        });
    };
    // Get book catalog by bookID.
    Ebook.prototype.catalog = function (bookID) {
        return __awaiter(this, void 0, void 0, function () {
            var api, dt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.catalog(bookID);
                        return [4 /*yield*/, this.req(api.method, api.url)];
                    case 1:
                        dt = _a.sent();
                        return [2 /*return*/, this.jsonParse(dt)];
                }
            });
        });
    };
    // Download single chapter of a book by bookID.
    Ebook.prototype.chapter = function (bookID, chapterID) {
        return __awaiter(this, void 0, void 0, function () {
            var api, dt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.chapter(bookID, chapterID);
                        return [4 /*yield*/, this.req(api.method, api.url)];
                    case 1:
                        dt = _a.sent();
                        return [2 /*return*/, this.jsonParse(dt)];
                }
            });
        });
    };
    // images of the book
    Ebook.prototype.img = function (imgName) {
        return __awaiter(this, void 0, void 0, function () {
            var api, dt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        api = this.apis.img(imgName);
                        return [4 /*yield*/, this.req(api.method, api.url)];
                    case 1:
                        dt = _a.sent();
                        return [2 /*return*/, JSON.parse(dt)];
                }
            });
        });
    };
    Ebook.prototype.req = function (method, url) {
        return __awaiter(this, void 0, void 0, function () {
            var protocol, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        protocol = url.split('\:\/\/')[0];
                        return [4 /*yield*/, this.request[protocol.toLowerCase() + "_" + method.toLowerCase()](url)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Ebook.prototype.jsonParse = function (str) {
        str = str.trim().replace(/\,\]/ig, ']');
        return JSON.parse(str);
    };
    return Ebook;
}());
exports.default = Ebook;
