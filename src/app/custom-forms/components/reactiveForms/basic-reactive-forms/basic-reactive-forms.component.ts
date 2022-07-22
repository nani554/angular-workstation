import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';

// interface PersonDetails  {
//   firstName: string,
//   lastName: string,
//   address: {
//     street: string,
//     city: string,
//     state: string,
//     zip: string
//   },
//   aliases: string[]
// }

@Component({
  selector: 'app-basic-reactive-forms',
  templateUrl: './basic-reactive-forms.component.html',
  styleUrls: ['./basic-reactive-forms.component.scss']
})
export class BasicReactiveFormsComponent implements OnInit {
  basicForm: FormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([this.fb.control("")])
  });
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private commonService: CommonService) {}
  ngOnInit() {
    this.commonService.replaySubject.subscribe((data) => {
      console.log("BasicReactiveForm", data);
    });
  }

  get aliases() {
    return this.basicForm.get("aliases") as FormArray;
  }
  addAliases() {
    this.aliases.push(this.fb.control(""));
  }
  onBasicFormSubmittion() {
    this.submitted = true;
    console.log(this.basicForm);
  }

  get f() {
    return this.basicForm.controls;
  }

  emit() {
    this.commonService.emitSubject(Math.random() + 1);
  }
}
