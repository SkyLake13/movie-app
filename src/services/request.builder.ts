
export class RequestBuilder {
    private url: URL;
    private params: URLSearchParams;

    constructor(private readonly baseUrl: string) {
        this.url = new URL(baseUrl);
        this.params = new URLSearchParams();
    }

    public setApiKey(apiKey: string) {
        this.setParam('apiKey', apiKey);
        return this;
    }

    public setSearch(search: string) {
        this.setParam('s', search);
        return this;
    }

    public setType(type: string) {
        this.setParam('type', type);
        return this;
    }

    public setYear(year: string) {
        this.setParam('y', year);
        return this;
    }

    public setPage(page = 1) {
        this.setParam('page', String(page));
        return this;
    }

    public setId(id: string) {
        this.setParam('i', id);
        return this;
    }

    public build() {
        this.url.search = this.params.toString();

        return this.url;
    }

    private setParam(key: string, value: string) {
        this.params.set(key, value);
    }
}