export abstract class Entity {
   protected id : string;
   protected createAt : Date;
   protected updateAt : Date;

   protected constructor(id : string , createAt : Date , updateAt : Date){
    this.id = id;
    this.createAt = createAt;
    this.updateAt = updateAt;
   }

   //Validador da propia classe
   protected abstract validate(): void;

   //Get e Set
   protected getId() : string{
    return this.id
   }
   protected getCreateAt() : Date{
    return this.createAt
   }
   protected getUpdateAt() : Date{
    return this.updateAt
   }

   //Atualiza o UpdateAt
   protected hasUpdate(){
    this.updateAt = new Date();
   }
}