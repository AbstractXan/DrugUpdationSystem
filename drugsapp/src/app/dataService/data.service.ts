import { Injectable } from '@angular/core';
import { Drug} from '../mockdata/mockdrugs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
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
  
  //GetDrugs Within 1 Month
  getRecentDrugs(){
    var drugs=[];
    this.http.get('http://localhost:3000/api/all').subscribe(result => {
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
          item.date
        )
        if(moment().diff(moment(item.date),'month',false) <= 1){
          drugs.push(tempdrug);
        }
        // console.log(result);
      }});
    
    // console.log(drugs);
    return of(drugs);
  }

  //Utilit Function For Handling Dates
  DaysPassed(date: string){
    console.log(date);
    return moment(date,"YYYYMMD").fromNow().toString();
  }

  //GetAllDrugs
  getAllDrugs(){
    var drugs=[];
    this.http.get('http://localhost:3000/api/all').subscribe(result => {
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
          item.date
        )
        drugs.push(tempdrug);
        // console.log(result);
      }});
    
    // console.log(drugs);
    return of(drugs);
  }

  //
  FindDrug(findparams: {name: string, scientificName: string, class: string}){
    var drugs=[];
    
    var options = { params: new HttpParams()
      .set('name', findparams.name)
      .set('scientificName',findparams.scientificName)
      .set('class',findparams.class)}

    this.http.get('http://localhost:3000/api/find', options).subscribe(result => {
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
          item.date
        )
        drugs.push(tempdrug);
        if(result["length"]==0){
          
        }
        console.log(result);
      }});
      
      
    // console.log(drugs);
    return of(drugs);
  }

  AddDrug(findparams: 
      {
        article: string,
        name: string, 
        class: string, 
        scientificName: string,
        mechanismOfAction: string,
        adverseEffects: string,
        interactions: string,
        uses: string,
        lastUpdated: string
      }){

    var output;
    var options = { params: new HttpParams()
      .set('article',findparams.article)
      .set('name', findparams.name)
      .set('class',findparams.class)
      .set('scientificName',findparams.scientificName)
      .set('mechanismOfACtion',findparams.mechanismOfAction)
      .set('adverseEffects',findparams.adverseEffects)
      .set('interactions',findparams.interactions)
      .set('uses',findparams.uses)
      .set('date',findparams.lastUpdated)}

    this.http.put('http://localhost:3000/api/add', options).subscribe(result => {console.log(result);output=result});
    // console.log(drugs);
    return of(output);
  }
}