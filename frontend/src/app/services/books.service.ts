import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: any;
  constructor(private http: HttpClient) { }

  addBook(books:any){
    return this.http.post<any>('http://localhost:3000/api/books/add', books)
      .pipe(map(data => {
        return data;
      }));
  }

  getBook(){
    return this.http.get<any>('http://localhost:3000/api/books/get')
      .pipe(map(data => {
        if(data){
          this.books = data;
          console.log(this.books);
        }
      return this.books;
      }));
  }
  


  getSomeBooks(id:number){
    return this.books[id]
  }
}
