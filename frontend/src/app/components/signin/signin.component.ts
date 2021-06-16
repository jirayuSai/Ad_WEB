import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
    this.auth.signin(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/addbook']);
          alert('Username or Password is correct');
        }else{
          alert('Username or Password is incorrect');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect');
      });
  }
  signup(){
    this.router.navigate(['/signup']);
  }
  addBook(){
    this.router.navigate(['/addbook']);
  }

  get fromdata(){
    console.log(this.authForm.controls);
    return this.authForm.controls
  }
  

}
