import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookForm = new FormGroup({
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    writer: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    file: new FormControl('',[Validators.required]),
    img: new FormControl('',[Validators.required])
  });

  constructor(private bs: BooksService,private router: Router) { }

  previewLoaded: boolean = false;
  //get name() {return this.bookForm.get('name') as FormArray;}
  //get description() {return this.bookForm.get('description') as FormArray;}
  //get quantity() {return this.bookForm.get('quantity') as FormArray;}
  //get price() {return this.bookForm.get('price') as FormArray;}

  ngOnInit(): void {
  }

  addBook(){
    this.bs.addBook(this.bookForm.value).subscribe(
      data => {
        console.log(data)
        alert('Book added successfully');
        this.bookForm.reset();
      },
        err => {
          console.log(err);
        });
  }

  onChangeImg(e:any){
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      var pattern = /image-*/;
      const reader = new FileReader();
      if (!file.type.match(pattern)){
        alert('invalid format');
        this.bookForm.reset();
      }else{
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.previewLoaded = true;
          this.bookForm.patchValue({
            img: reader.result
          });
        };
      }
    }
  }
  resetForm(){
    this.bookForm.reset();
    this.previewLoaded = false;
  }
 


}
