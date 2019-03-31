import { Component, OnInit } from '@angular/core';
import { titles, Drugs, Drugs_list } from '../mockdata/mockdrugs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drug_list = Drugs_list;
  drug_label = titles;
  constructor() { }

  ngOnInit() {
  }

}
