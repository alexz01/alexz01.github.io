import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export type BlogsMap = Record<string,
    Record<string,
        Record<string, string>>>;

@Injectable()
export class BlogsService {
    constructor(private httpClient: HttpClient) { }

    getBlogsMap() {
        return this.httpClient.get<BlogsMap>('/assets/blogs/map.json');
    }

    getBlog(id: string) {
        const blogPath = id.replaceAll('_', '/');
        return this.httpClient.get(`/assets/blogs/${blogPath}`, { responseType: 'text' });
    }
}
