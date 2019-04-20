import { Component, OnInit } from '@angular/core';
import { titles, Drug } from '../../mockdata/mockdrugs';
import { DataService } from '../../dataService/data.service';

@Component({
  selector: 'app-delete-one',
  templateUrl: './delete-one.component.html',
  styleUrls: ['./delete-one.component.css']
})
export class DeleteOneComponent implements OnInit {
  
  name: string = '';
  error : String = ' ';
  message: string ='';
  dne : boolean = false; //DNE component

  private loading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  

  constructor(
      private drugsService: DataService
  ) { }
  
  validDelete(){
    if(this.name == ''){return false} else {return true};
  }
  FindDrug(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    if(this.validDelete() == false){
      this.error = 'Please input field';
      return;
    }
    this.loading = true;

    this.drugsService.FindDrug({
      name: this.name, 
      scientificName: '',
      class: '',
    }).subscribe(data => {this.drug_list = data; this.loading=false; console.log(data)});

    if(this.drug_list.length==0){
      this.dne = true;
    }
  }

  DeleteDrug(name : string){
    this.drugsService.DeleteDrug({name: this.name}).subscribe(msg=> this.message=msg);
  }

  ngOnInit() {
    //Temporary call for initialisation
  }
}
