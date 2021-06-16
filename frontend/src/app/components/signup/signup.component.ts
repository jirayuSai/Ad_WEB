import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router'
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { SignupService } from '../../services/signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  signupForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    username: new FormControl(''),
    password: new FormControl('',[Validators.required]),
    
  });

  
  get email() { return this.signupForm.get('email');}
  
  constructor(private router: Router,private signup: SignupService,private cart:CartService,private address:AddressService) { }

  ngOnInit(): void {
  }

  register(){  
    console.log("this " ,this.signupForm.value);
    
    this.signup.signups(this.signupForm.value).subscribe(
      data => {
        if(data.message){  
          console.log(data.data);
          this.cart.addCart(data.data).subscribe( 
            data => {
              console.log(data);
            },
            err => {
               console.log(err);   
            }
          )
          this.address.addAddress(data.data).subscribe(
            data => {
              console.log(data);
            },
            err => {
              console.log(err);
            }
          )
          this.router.navigate(['/signin']);
        }else{
          alert('Cannot Sign up');
        }
      },
      err => {
        console.log(err);
        alert('Cannot Sign up');
      });
  }

  
  get fromdata(){
    console.log(this.signupForm.controls);
    

    return this.signupForm.controls
  }
  

}
