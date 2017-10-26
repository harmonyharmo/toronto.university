import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { isUndefined } from 'util';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class SearchService {
  query: string;
  results: string;
  showSearchResults = false;
  headers = new HttpHeaders({'Authorization': '7P8dMCt7hwG4ddkxkp1mUTv5VylSxi55'});

  constructor(private http: HttpClient) {
  }

  private static get_link(display: string, link: string) {
    return '<a href="' + link + '">' + display + '</a>';
  }

  search(query: string) {

    // this.heroes$ = this.searchTerms
    //   .debounceTime(300)        // wait for 300ms pause in events
    //   .distinctUntilChanged()   // ignore if next search term is same as previous
    //   .switchMap(term => Observable.create(term.toLowerCase());

    this.query = query.toLowerCase();

    this.searchBuilding();

    this.searchCourse();

    // unstable
    // if (this.query.length >= 5) {
    //   this.searchRoom();
    // }
  }

  private searchCourse() {
    if (this.query.length === 6) {
      this.http.get('https://cors-anywhere.herokuapp.com/http://example.com')
        .subscribe(data => console.log(data));
      this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
        + 'https://timetable.iit.artsci.utoronto.ca/api/20179/courses?org=&code='
        + this.query
        + '&section=&studyyear=&daytime=&weekday=&prof=&breadth=&online=&waitlist=&available=&title=')
        .subscribe(
          data => {
            const fall = data[Object.keys(data)[0]];
            if (isUndefined(fall)) {
              return;
            }
            const meetings = fall.meetings;
            const meeting = meetings[Object.keys(meetings)[0]];

            this.results = '<h1>' + fall.courseTitle + '</h1>' + fall.courseDescription
              + '<br/>Waitlist : ' + meeting.actualWaitlist + '/' + meeting.actualEnrolment;

            if (this.query.startsWith('csc')) {
              let link;
              if (this.query === 'csc318') {
                link = `https://markus.teach.cs.toronto.edu/${this.query}-2017-09-5101/en/assignments`;
              } else {
                link = `https://markus.teach.cs.toronto.edu/${this.query}-2017-09/en/assignments`;
              }
              this.results = SearchService.get_link('Markus', link) + this.results;
            }
          },
          (err: HttpErrorResponse) => {
            this.results = '';
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
          });
    } else {
      this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
        + 'https://cobalt.qas.im/api/1.0/courses/CSC148H120179',
        {headers: this.headers})
        .subscribe(
          data => {
            const course = data;
            this.results = '<h1>' + course['name'] + '</h1>' + course['description'];
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

  private searchBuilding() {
    if (this.query.length == 2) {
      this.http.get('https://cors-anywhere.herokuapp.com/'
        + 'https://cobalt.qas.im/api/1.0/buildings/search',
        {
          headers: this.headers,
          params: new HttpParams().set('q', this.query + ' ') // minimum query length is 3
        }
      )
        .subscribe(
          data => {
            const building = data[0];
            const link = 'https://www.google.com/maps/place/' + encodeURIComponent(building.name);
            this.results = SearchService.get_link(building.name, link);
            this.http.get('https://cors-anywhere.herokuapp.com/'
              + `http://uoftstudyspot.com/api/optimize?code=${this.query}`).subscribe(
              rooms => {
                let empty_rooms = '';

                for (const key in Object.keys(rooms)) {
                  empty_rooms += '</br> Room ' + rooms[key]['id'];
                }
                if (empty_rooms !== '') {
                  empty_rooms = '<h2>Free rooms</h2>' + empty_rooms;
                }

                this.results += empty_rooms;
              }
            );
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


  private searchRoom() {
    // const match = this.query.match(/[a-z]+|\d+/ig);
    // const link = `http://www.osm.utoronto.ca/class_spec/f?p=210:1:::::P1_BLDG,P1_ROOM:${match[0].toUpperCase()},${match[1]}`;
    const link = `http://www.osm.utoronto.ca/i/Photos/Website/RoomPlansPDF/${this.query}.pdf`;
    this.http.get('https://cors-anywhere.herokuapp.com/' // use proxy to bypass CORS
      + link,
      {headers: this.headers})
      .subscribe(
        data => {
          this.results = SearchService.get_link('Room Info', link);
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
