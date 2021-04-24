declare class Request {
    constructor();
    https_get(urlStr: string): Promise<unknown>;
}
export default Request;
