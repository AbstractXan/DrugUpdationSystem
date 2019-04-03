import { Component, OnInit } from '@angular/core';
import { titles, Drug } from '../../mockdata/mockdrugs';
import { DataService } from '../../dataService/data.service';

@Component({
  selector: 'app-find-one',
  templateUrl: './find-one.component.html',
  styleUrls: ['./find-one.component.css']
})
export class FindOneComponent implements OnInit {
  
  name: string = '';
  scientificName: string = '';
  med_class: string = '';
  error : String = ' ';
  dne : boolean = false; //DNE component

  private loading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  

  constructor(
      private drugsService: DataService
  ) { }
  
  validFind(){
    var checkSum = 0
    this.name == '' ? {} : checkSum++;
    this.scientificName == '' ? {}: checkSum++;
    this.med_class== ''? {}: checkSum++;

    if(checkSum==0){
      return false;
    }
    return true;
  }
  findList(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    if(this.validFind() == false){
      this.error = 'Please input atleast one field';
      return;
    }
    this.loading = true;

    this.drugsService.FindDrug({
      name: this.name, 
      class: this.med_class, 
      scientificName: this.scientificName
    }).subscribe(data => {this.drug_list = data; this.loading=false; console.log(data)});

    if(this.drug_list.length==0){
      this.dne = true;
    }
  }

  ngOnInit() {
    //Temporary call for initialisation
  }
}
