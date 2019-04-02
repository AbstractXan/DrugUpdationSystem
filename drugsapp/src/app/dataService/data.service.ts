import { Injectable } from '@angular/core';
import { Drug,Drugs } from '../mockdata/mockdrugs';
import { HttpClient } from '@angular/common/http';
import { of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // we can now access environment.apiUrl
  results: Drug[];
  constructor(private http: HttpClient) {
    this.results = [];
  }
  getDrugs(){
    var drugs=[];
    this.http.get('http://localhost:3000/drug_list').subscribe(result => {
      for (var i=0 ; i<result["length"] ; i++){ 
        var item = result[i];
        drugs.push(new Drug(
                  item.article,
                  item.name,
                  item.scientificName,
                  item.class,
                  item.mechanismOfAction,
                  item.adverseEffects,
                  item.interactions,
                  item.uses,
                  item.lastUpdated
        ));
        console.log(result);
      }});
    
    console.log(drugs);
    return of(drugs);
  }
}