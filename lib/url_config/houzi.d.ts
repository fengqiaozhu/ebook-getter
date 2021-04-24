import { API } from '../interfaces';
declare class EbookConfig {
    private urls;
    constructor();
    search(bookName: string): API;
    desc(bookID: number): {
        url: string;
        method: string;
    };
    catalog(bookID: number): API;
    chapter(bookID: number, chapterID: number): API;
    img(imgName: string): API;
    func(): {
        search: (bookName: string) => API;
        desc: (bookID: number) => {
            url: string;
            method: string;
        };
        catalog: (bookID: number) => API;
        chapter: (bookID: number, chapterID: number) => API;
        img: (imgName: string) => API;
    };
}
export default EbookConfig;
