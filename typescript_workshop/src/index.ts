
interface ISellable {
    canSell(id:string):boolean;
};

class Product implements ISellable{
    constructor(
        private id:String,
        private label:String,
        private price:number,
        private stock:number){
    
    }

    canSell(id: string): boolean {
        throw new Error("Method not implemented.");
    }
    

   private getStockValue():number{
       return this.stock * this.price;
   }
}


const tomato:Product=new Product("0001","Tomate",4.2,5);

console.log('Tomato',tomato)