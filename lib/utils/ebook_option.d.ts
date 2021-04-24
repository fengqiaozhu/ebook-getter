import Request from './request';
import { EbookAPI } from '../interfaces';
declare class Ebook {
    apis: EbookAPI;
    request: Request;
    constructor(apis: EbookAPI, request?: Request);
    search(bookName: string): Promise<any>;
    desc(bookID: number): Promise<any>;
    catalog(bookID: number): Promise<any>;
    chapter(bookID: number, chapterID: number): Promise<any>;
    img(imgName: string): Promise<any>;
    private req;
    private jsonParse;
}
export default Ebook;
