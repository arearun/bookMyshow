import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit,OnDestroy {
  // moveieDatabyId:any[] = [];
  moveieDatabyImage: any = null; // Replace "any" with the specific data type if known
  subscription: Subscription | null = null;
  movieDataById:any = null

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.subscription = this.movieService.sharedData$.subscribe(data=>{
      this.moveieDatabyImage = data
      console.log(this.moveieDatabyImage);

      if (data && data.id) {
        this.movieService.getMovieById(data.id).subscribe((res=>{
          this.movieDataById = res
          console.log(this.movieDataById);
        }))

      }
    })
    // this.movieService.getMovieById(this.moveieDatabyImage.id).subscribe((res=>{
    //   this.movieDataById = res
    // }))
    console.log(this.moveieDatabyImage);
    console.log(this.movieDataById);


  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
