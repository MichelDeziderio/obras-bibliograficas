import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  visible: boolean = true;
  getNumbers: FormGroup;
  numberFils: number = 0;
  filds = [];
  close: boolean = false;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getNumbers = this.formBuilder.group({
      numbers: [null]
    })
  }

  getNumberFilds(val) {

    this.numberFils = val.value.numbers;

    if (this.numberFils < 10) {
      this.generateFilds();
      this.visible = false;
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

  closeAlert(){
    this.close = false;
  }

}
