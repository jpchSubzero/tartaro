export interface PostsResponse {
    meta: Meta;
    data: Datum[];
}

export interface Datum {
    id:      number;
    user_id: number;
    title:   string;
    body:    string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    total: number;
    pages: number;
    page:  number;
    limit: number;
    links: Links;
}

export interface Links {
    previous: null;
    current:  string;
    next:     string;
}
