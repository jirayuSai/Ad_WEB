import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router'
import { OrderService } from 'src/app/services/order.service';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: BooksService | any = []
  constructor(private router: Router,private cart: CartService, private order: OrderService, private book:BooksService) { this.onLoading() }
  onLoading() {
    try {
      this.cart.getCartByUserId().subscribe(
        data => {
          this.carts = data;
          console.log(this.carts);
        },
        err => {
          console.log(err);
        }
      )
    } catch (err) {
      console.log(err);
    }
  }

 
  buy() {
    let mystr = ""
    for (let i = 0; i < this.carts.length; i++) {
      let mystr1 = this.carts[i].name + " ราคา " + this.carts[i].price + " จำนวน " + this.carts[i].quantity + "\n||"
      mystr += mystr1
    }
    let data = {
      userid: String,
      name: mystr,
      price: this.calculate(),
      status: "tranfer"
    }
    this.order.PostOrder(data).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/order']);

      }, err => {
        console.log(err);

      })
  }

  getlengthCart(){
    return this.carts.length
  }
  calculate() {
    let sumprice = 0
    for (let i = 0; i < this.carts.length; i++) {
      let price = this.carts[i].price * this.carts[i].quantity
      sumprice += price
    }
    return sumprice
  }

  deleteBook(bookid: any) {
   
    this.cart.deleteOneBook(bookid).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, err => {
      console.log(err)
    }
    )
  }

  /*const getAllbook = () => {
    return new Promise((resolve, reject) => {
      Books.find({}, (err,data) => {
        if(err){
          reject(new Error('Cannot get all book'))
        }else{
          resolve(data)
        }
      })
    })
  }*/
  

  ngOnInit(): void {
  }

}


