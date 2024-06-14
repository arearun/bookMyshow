import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

interface Image {
  url: string;
  alt: string;
  movieName:string;
  id:number;

}
interface SharedData {

  id: any;
  images:any[];
}
// import {movie} from '../components/movies-info/movies'
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url  = "http://localhost:8082/Movie/getMovie"
  private imagesUrl = "http://localhost:3000/images"

  private sharedDataSubject = new BehaviorSubject<SharedData | null>(null);
  sharedData$ = this.sharedDataSubject.asObservable();

  constructor(private http:HttpClient) { }

  getImages():Observable<any>{
    return this.http.get<any>(this.imagesUrl)
  }

  getMovieById(id:any):Observable<any>{
    return this.http.get<any>(this.url + '/' + id)
  }
  setData(id:any,images:any | undefined) {
    this.sharedDataSubject.next({ id,images });

  }

  getData(): SharedData | null {
    return this.sharedDataSubject.getValue();
  }

}
