export interface API {
    url: string,
    method: string,
    cookie?: string
}

export interface EbookAPI {
    search: { (bookName: string): API },
    desc: { (bookID: number): API },
    catalog: { (bookID: number): API },
    chapter: { (bookID: number, chapterID: number): API },
    img: { (imgName: string): API }
}


