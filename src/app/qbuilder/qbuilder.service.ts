import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QbuilderService {
  posts_Url: String = `http://localhost:8000/feature/genrate`;
  constructor(private http: Http) { }

  postQuery(queryObject: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    // debugger
     return this.http.post('http://localhost:8080/query/genrate', queryObject, options).subscribe( data => {
        if (data.status === 200) {
         // console.log(data.status);
         console.log('post is done');
     } else {
       alert('Please try again');
     }
       return data.status;
     });
  }

}
