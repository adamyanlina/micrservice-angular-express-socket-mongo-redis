import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup: FormGroup;
  User = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  registerProcess() {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup.value)
        .subscribe(result => {
          if (result.success) {
            console.log(result)
            alert(result.message);
          } else {
            alert(result.message);
          }
        });
    }
  }

}
