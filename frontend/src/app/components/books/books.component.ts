import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//,private modalService: NgbModal
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  number: any
  books : any
  quantity: number = 0
 
  show: boolean|any = false;

  constructor(private bs:BooksService,private modalService: NgbModal,private cart:CartService) { this.onLoading() }

  ngOnInit(): void {
  }

  onLoading(){
    try {
      this.bs.getBook().subscribe(
        data => {
          this.books = data;
        },err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }
  }

  onClick(){
    this.show =!this.show
  }

  openLg(content:any,number:number) {
    this.number = number
    this.modalService.open(content, { size: 'lg' });
  }
  
  addtoCart(){
    let mycart = {
       book:this.books[this.number],
       userId: ""
    }
    mycart.book.quantity = this.quantity
    if(this.quantity > 0){
    this.cart.pushCart(mycart).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err);
      }
    )
  }
  else{
    alert("ใส่จำนวนให้ถูกต้อง")
  } 
    this.quantity = 0
    this.modalService.dismissAll();
  }
  cancle(){
    this.quantity = 0
    console.log(this.quantity);
    this.modalService.dismissAll();
  }

}
