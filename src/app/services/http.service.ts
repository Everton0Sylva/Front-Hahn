import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }


  private url = "https://localhost:7220";
  private headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE'
  }

  fnPost(body: any = null) {
    return new Promise((resolve,reject) => {
      this.fnFetch("POST",null,body)
      .then((data: any) => {
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        })
    });
  };

  fnDelete(id: any) {
    return new Promise((resolve,reject) => {
      this.fnFetch("DELETE",id)
      .then((data: any) => {
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        })
    });
  };

  fnPut(body: any = null) {
    return new Promise((resolve,reject) => {
      this.fnFetch("PUT",null,body)
      .then((data: any) => {
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        })
    });
  };


  fnGet(id: any) {
    return new Promise((resolve,reject) => {
      this.fnFetch("GET",id)
      .then((data: any) => {
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        })
    });
  };


  fnGets() {
    return new Promise((resolve,reject) => {
      this.fnFetch("GET")
      .then((data: any) => {
          resolve(data);
        }).catch((error: any) => {
          reject(error);
        })
    });
  };

  async fnFetch(method: string,id: any = null, body: any = null) {
    let uri = this.url + "/api/user" + (id ? "/" + id : "");
    let response = await fetch(uri, {
      method: method,
      headers: this.headers,
      body: body ? JSON.stringify(body) : null
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.status.toString());
    }
  }
}
