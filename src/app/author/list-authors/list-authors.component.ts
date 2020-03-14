import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.scss']
})
export class ListAuthorsComponent implements OnInit {

  @Input() filds: any;

  yesNames = ['Neto', 'Neta', 'Filho', 'Filha', 'Sobrinho', 'Sobrinha', 'Junior'];
  noNames = ['da', 'de', 'do', 'das', 'dos'];
  authorNameFormater = [];

  constructor() { }

  ngOnInit() {
    this.getNames()
  }
  
  getNames() {

    this.filds.forEach(element => {
      this.filds = [];
      
      this.filds.push({
        author:element.author
      })
      
    });
  }
}
