import { Component, OnInit } from '@angular/core';
import { Drug, Drugs, titles} from '../mockdata/mockdrugs';
import { DataService } from '../dataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loading: boolean = false;
  drug_label = titles;
  drug_list: Drug[];
  constructor(
      private drugsService: DataService
  ) { }

  getList(){ //To be made asynchronous for API methods
    // this.drug_list =this.drugsService.getDrugs();
    this.loading = true;
    this.drugsService.getDrugs().subscribe(data => {this.drug_list = data; this.loading=false});
  }

  ngOnInit() {
    //Temporary call for initialisation
    this.getList();
  }

  // private loading: boolean = false;

  // constructor(
  //   private itunes: SearchService,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) {
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //     if (params["term"]) {
  //       this.doSearch(params["term"]);
  //     }
  //   });
  // }

  // doSearch(term: string) {
  //   this.loading = true;
  //   this.itunes.search(term).then(_ => (this.loading = false));
  // }

  // onSearch(term: string) {
  //   this.router.navigate(["search", { term: term }]);
  // }

}
