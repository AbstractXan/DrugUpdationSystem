import { Component, OnInit } from '@angular/core';
import { DataService } from '../../dataService/data.service';
import { Drug, titles } from '../../mockdata/mockdrugs';
import * as moment from 'moment';
@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  private loading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  constructor(
      private drugsService: DataService
  ) { }

  DaysPassed(date: string){
    console.log(date);
    return moment(date,"YYYYMMD").fromNow();
  }

  getList(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    this.loading = true;
    this.drugsService.getAllDrugs().subscribe(data => {this.drug_list = data; this.loading=false});
  }

  ngOnInit() {
    //Temporary call for initialisation
    this.getList();
  }
}
