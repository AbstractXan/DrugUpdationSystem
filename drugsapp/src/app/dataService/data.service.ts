import { Injectable } from '@angular/core';
import { Drug,Drugs } from '../mockdata/mockdrugs';
import { HttpClient } from '@angular/common/http';
import { of} from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // we can now access environment.apiUrl
  results: Drug[];
  cachedDrugList: Drug[];

  constructor(private http: HttpClient) {
    this.results = [];
    // this.cachedDrugList= [];
  }
  
  //GetRecentDrugs
  getRecentDrugs(){
    var drugs=[];
    this.http.get('http://localhost:3000/').subscribe(result => {
      for (var i=0 ; i<result["length"] ; i++){ 
        var item = result[i];
        var tempdrug = new Drug(
          item.article,
          item.name,
          item.scientificName,
          item.class,
          item.mechanismOfAction,
          item.adverseEffects,
          item.interactions,
          item.uses,
          item.lastUpdated
        )
        if(moment().diff(moment(item.lastUpdated),'month',false) <= 1){
          drugs.push(tempdrug);
        }
        // console.log(result);
      }});
    
    // console.log(drugs);
    return of(drugs);
  }

  DaysPassed(date: string){
    console.log(date);
    return moment(date,"YYYYMMD").fromNow().toString();
  }

  getAllDrugs(){
    var drugs=[];
    this.http.get('http://localhost:3000/').subscribe(result => {
      for (var i=0 ; i<result["length"] ; i++){ 
        var item = result[i];
        var tempdrug = new Drug(
          item.article,
          item.name,
          item.scientificName,
          item.class,
          item.mechanismOfAction,
          item.adverseEffects,
          item.interactions,
          item.uses,
          item.lastUpdated
        )
        drugs.push(tempdrug);
        // console.log(result);
      }});
    
    // console.log(drugs);
    return of(drugs);
  }
}