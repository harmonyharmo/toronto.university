import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
  searchTerms = new Subject();
  query: string;
  members: any[];
  results: string;

  constructor(private http: HttpClient) {
  }

  search(query) {
    // console.log(this.http.get(
    //   'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code=' + this.query +
    //   '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title='))
    // console.log(
    //   this.http.get(
    //     'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code=csc108' +
    //     '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title='));
    // console.log(this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`) // (4)
    //   .map(res => res.json()) // (5)
    //   .subscribe(data => {
    //     if (data) this.members = data; // (6)
    //   })
    // )
    // ;
// set params to go to URL

    // this.heroes$ = this.searchTerms
    //   .debounceTime(300)        // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => Observable.create(term.toLowerCase());

    console.log(query);
    this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
      + 'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code=csc165'
      + '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title=')
      .subscribe(
        data => {
          this.results = JSON.stringify(data);
          console.log(data['courseDescription']);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        });

    return query + 'x';
  }
}
