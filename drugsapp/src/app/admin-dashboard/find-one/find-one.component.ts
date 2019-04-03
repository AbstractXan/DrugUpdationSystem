import { Component, OnInit } from '@angular/core';
import { titles, Drug } from '../../mockdata/mockdrugs';
import { DataService } from '../../dataService/data.service';

@Component({
  selector: 'app-find-one',
  templateUrl: './find-one.component.html',
  styleUrls: ['./find-one.component.css']
})
export class FindOneComponent implements OnInit {
  private loading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  constructor(
      private drugsService: DataService
  ) { }

  findList(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    this.loading = true;
    this.drugsService.getRecentDrugs().subscribe(data => {this.drug_list = data; this.loading=false});
  }

  ngOnInit() {
    //Temporary call for initialisation
    this.findList();
  }
}
