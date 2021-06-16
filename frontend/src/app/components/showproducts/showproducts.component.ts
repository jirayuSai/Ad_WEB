import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  books: any
  constructor(private bs: BooksService) { 
    this.onLoading();
  }
  

  ngOnInit(): void {
  }

  onLoading(){
    try{
      this.bs.getBook().subscribe(
        data => {
          this.books = data;
      },
        err => {
          console.log(err)
        });
    }catch(error){
      console.log(error)
    }
  }

  

  
}
