import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class SearchService {
  query: string
  results: string;
  headers = new HttpHeaders({'Authorization': '7P8dMCt7hwG4ddkxkp1mUTv5VylSxi55'});

  constructor(private http: HttpClient) {
  }

  search(query: string) {

    // this.heroes$ = this.searchTerms
    //   .debounceTime(300)        // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => Observable.create(term.toLowerCase());
    this.query = query;
    if (query.length === 2) {
      this.searchBuilding();
    }
    if (query.length === 6) {
      this.searchCourse();
    }
  }

  private searchCourse() {
    this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
      + 'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code='
      + this.query
      + '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title=')
      .subscribe(
        data => {
          const fall = data[Object.keys(data)[0]];
          const meetings = fall.meetings;
          const meeting = meetings[Object.keys(meetings)[0]];

          this.results = '<h1>' + fall.courseTitle + '</h1>' + fall.courseDescription
            + '<br/>Waitlist : ' + meeting.actualWaitlist + '/' + meeting.actualEnrolment;
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
  }

  private searchBuilding() {
    this.http.get('https://cors-anywhere.herokuapp.com/'
      + 'https://cobalt.qas.im/api/1.0/buildings/search',
      {
        headers: this.headers,
        params: new HttpParams().set('q', this.query + ' ')
      }
    )
      .subscribe(
        data => {
          const building = data[0];
          const link = 'https://www.google.com/maps/place/' + encodeURIComponent(building.name);
          this.results = '<a href=' + link + '>' + building.name + '</a>';
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
  }
}
