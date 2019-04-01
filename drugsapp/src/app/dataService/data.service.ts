import { Injectable } from '@angular/core';
import { Drug,Drugs } from '../mockdata/mockdrugs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  results: Drug[];


  constructor() { }
  getDrugs(){
      return Drugs;
  }
}


// @Injectable()
// class SearchService {
//   apiRoot: string = "https://itunes.apple.com/search";
//   results: SearchItem[];

//   constructor(private http: HttpClient) {
//     this.results = [];
//   }

//   search(term: string) {
//     return new Promise((resolve, reject) => {
//       this.results = [];
//       let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
//       this.http
//         .jsonp(apiURL, "callback")
//         .toPromise()
//         .then(
//           res => {
//             // Success
//             this.results = res.results.map(item => {
//               return new SearchItem(
//                 item.trackName,
//                 item.artistName,
//                 item.trackViewUrl,
//                 item.artworkUrl30,
//                 item.artistId
//               );
//             });
//             resolve();
//           },
//           msg => {
//             // Error
//             reject(msg);
//           }
//         );
//     });
//   }
// }
