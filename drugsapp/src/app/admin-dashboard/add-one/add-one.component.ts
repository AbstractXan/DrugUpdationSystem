import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataService/data.service';
import { Drug, titles } from 'src/app/mockdata/mockdrugs';
import * as moment from 'moment';

@Component({
  selector: 'app-add-one',
  templateUrl: './add-one.component.html',
  styleUrls: ['./add-one.component.css']
})
export class AddOneComponent implements OnInit {
  
  article: string = '';
  name: string = '';
  scientificName: string = '';
  med_class: string = '';
  mechanismOfAction: string = '';
  adverseEffects: string = '';
  interactions: string = '';
  uses: string = '';

  error : String = '';

  private uploading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  constructor(
      private drugsService: DataService
  ) { }
  
  validAdd(){
    var checkSum = 0;

    this.article == '' ? {} : checkSum++;
    this.name == '' ? {} : checkSum++;
    this.scientificName == '' ? {}: checkSum++;
    this.med_class==''? {}: checkSum++;
    this.mechanismOfAction==''? {}: checkSum++;
    this.adverseEffects==''? {}: checkSum++;
    this.interactions==''? {}: checkSum++;
    this.uses==''? {}: checkSum++;
    console.log(checkSum);
    if(checkSum==8){
      return true;
    }
    return false;
  }
  addDrug(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    if(this.validAdd() == false){
      this.error = 'Please input all the field';
      return;
    }
    this.uploading = true;
    this.drugsService.AddDrug(
      {
        article: this.article,
        name: this.name, 
        class: this.med_class, 
        scientificName: this.scientificName,
        mechanismOfAction: this.mechanismOfAction,
        adverseEffects: this.adverseEffects,
        interactions: this.interactions,
        uses: this.uses,
        lastUpdated: moment().format("YYYMMDD")
      }
      ).subscribe(_ => {this.uploading=false});
  }

  ngOnInit() {
    //Temporary call for initialisation
  }
}
