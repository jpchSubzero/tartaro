import { JSONFromHTMLAttr } from "./json-from-html-attr.interface";

export interface JSONFromHTML {
    nodeType: string | null;
    tag:      string | null;
    text:     string | null;
    attr:     JSONFromHTMLAttr | null;
    children: JSONFromHTML[];
}