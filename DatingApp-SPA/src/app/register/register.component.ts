import { AuthService } from './../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    console.log(this.model);
  }

  register() {
    this.authService.register(this.model).subscribe(response => {
      console.log('registered successfully');
    }, error => {
        console.error('registeration failed!', error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('canceled!');
  }

}
