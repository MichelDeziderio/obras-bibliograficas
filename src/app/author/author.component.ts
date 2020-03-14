import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  visibleForm1: boolean = true;
  visibleForm2: boolean = false;
  getNumbers: FormGroup;
  numberFils: number = 0;
  filds = [];
  close: boolean = false;
  authors: Array<any>;
  showAuthors: boolean = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getNumbers = this.formBuilder.group({
      numbers: [null]
    })

  }

  getNumberFilds(val) {

    this.numberFils = val.value.numbers;

    if (this.numberFils <= 10) {
      this.generateFilds();
      this.visibleForm1 = false;
      this.visibleForm2 = true;
    }
    else {
      this.close = true;
    }

  }

  generateFilds() {
    for (let i = 0; i < this.numberFils; i++) {
      this.filds.push({
        id: i,
        author: ''
      })
    }
  }

  getNameAuthors() {

    this.showAuthors = true;
    this.visibleForm1 = false;
    this.visibleForm2 = false;

      return this.filds
  }
  
  closeAlert() {
    this.close = false;
  }

  removeList(){
    this.showAuthors = false;
    this.visibleForm1 = true;
  }
}
