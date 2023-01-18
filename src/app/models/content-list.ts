import { IContent } from "./icontent";

export class ContentList {
    private _arrayIcontent: IContent[];
    constructor(){
        this._arrayIcontent = []
    }

    public get content(){
        return this._arrayIcontent;
    }
    public addContent(iContent:IContent) {
        this._arrayIcontent.push(iContent);
    }
    public length(){
        return this._arrayIcontent.length;
    }
}
