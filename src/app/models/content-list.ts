import { IContent } from "./icontent";

export class ContentList {
    private _arrayIcontent: IContent[];
    constructor(){
        this._arrayIcontent = []
    }

    public get items(): IContent[]{
        return this._arrayIcontent;
    }
    public addContent(iContent:IContent) {
        this._arrayIcontent.push(iContent);
    }
    public length(){
        return this._arrayIcontent.length;
    }
    public ToString(value: number){
        let obj = this._arrayIcontent[value];
        let output = `<h2>${obj.name}</h2>
        <h4>${obj.author}</h4>
        <p>${obj.description}</p>
        <p>${obj.type}</p>
        <img src="${obj.imgSrc}></img>"`;
        return output;
    }
}
