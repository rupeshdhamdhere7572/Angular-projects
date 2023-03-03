export class product{
     productId: number = 0;
     productName: string = "";
     price: number = 0;
     qty: number = 0;

     constructor(pid: number, pname: string, price: number, q: number)
     {
          this.productId = pid;
          this.productName = pname;
          this.price = price;
          this.qty= q;

     }
}