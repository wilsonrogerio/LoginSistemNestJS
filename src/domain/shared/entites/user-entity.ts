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
   public getId() : string{
    return this.id
   }
   public getCreateAt() : Date{
    return this.createAt
   }
   public getUpdateAt() : Date{
    return this.updateAt
   }

   //Atualiza o UpdateAt
   protected hasUpdate(){
    this.updateAt = new Date();
   }
}