import { Exception } from "src/shared/utils/exceptions/exception";

export class DomainExcpetion extends Exception{
    public constructor(
        internalMessage : string,
        externalMessage? : string,
        context? : string 
    ){
        super(internalMessage,externalMessage,context);
        this.name = DomainExcpetion.name;
    }
}