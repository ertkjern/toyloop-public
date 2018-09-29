import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidatorService} from '../../services/validation.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  emailForm: FormGroup;
  isSubmitted: boolean;


  constructor(private db: AngularFireDatabase, private fb: FormBuilder, private validatorService: ValidatorService) {
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, this.validatorService.emailValidator]]
    });
  }

  saveEmail(email) {
    if (this.emailForm.valid) {
      this.db.list('emails').push(email.email).then(() => {
        console.log('success');
      }, error => {
        console.log(error);
      });
      this.isSubmitted = true;
    } else {
      this.emailForm.controls['email'].markAsTouched();
    }
  }

  get email() {
    return this.emailForm.get('email');
  }

}
