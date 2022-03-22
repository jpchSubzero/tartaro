import { IJSONFromHTMLAttr } from "./jsonFromHtmlAttr.interface";

export interface IJSONFromHTML {
    NodeType: string | null;
    Tag:      string | null;
    Text:     string | null;
    Attr:     IJSONFromHTMLAttr | null;
    Children: IJSONFromHTML[];
}

