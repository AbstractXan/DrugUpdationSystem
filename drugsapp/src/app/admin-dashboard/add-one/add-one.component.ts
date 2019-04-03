import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataService/data.service';
import { Drug, titles } from 'src/app/mockdata/mockdrugs';

@Component({
  selector: 'app-add-one',
  templateUrl: './add-one.component.html',
  styleUrls: ['./add-one.component.css']
})
export class AddOneComponent implements OnInit {
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
