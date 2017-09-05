import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {
  results: string;
  headers = new HttpHeaders({'Authorization': '7P8dMCt7hwG4ddkxkp1mUTv5VylSxi55'});

  constructor(private http: HttpClient) {
  }

  search(query) {

    // this.heroes$ = this.searchTerms
    //   .debounceTime(300)        // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => Observable.create(term.toLowerCase());

    // if (query.length < 6) {
    //   return;
    // }

    console.log(query);
    this.http.get('https://cors-anywhere.herokuapp.com/'
      // + 'https://cobalt.qas.im/api/1.0/buildings/080?key=7P8dMCt7hwG4ddkxkp1mUTv5VylSxi55',
      + 'https://cobalt.qas.im/api/1.0/buildings/080',
      {headers: this.headers}
    )
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
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
        })

    // this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
    //   + 'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code='
    //   + query
    //   + '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title=')
    //   .subscribe(
    //     data => {
    //       this.results = data[Object.keys(data)[0]].courseDescription;
    //     },
    //     (err: HttpErrorResponse) => {
    //       if (err.error instanceof Error) {
    //         // A client-side or network error occurred. Handle it accordingly.
    //         console.log('An error occurred:', err.error.message);
    //       } else {
    //         // The backend returned an unsuccessful response code.
    //         // The response body may contain clues as to what went wrong,
    //         console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //       }
    //     });

    return query + 'x';
  }
}
