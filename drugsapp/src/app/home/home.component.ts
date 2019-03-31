import { Component, OnInit } from '@angular/core';
import { Drugs, titles} from '../mockdata/mockdrugs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drug_label = titles;
  drug_list = Drugs;

  constructor() { }

  ngOnInit() {
  }

}
