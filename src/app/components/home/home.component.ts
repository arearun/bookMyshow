import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
interface Image {
  url: string;
  alt: string;
  movieName: string;
  id: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentIndex: number = 0;
  visibleImages: Image[] = [];
  images: Image[] = [];
  sortedImage: Image[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getImages().subscribe((res) => {
      this.images = res;
      this.visibleImages = this.images.slice(0, 5);
    });
  }

  scrollLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.visibleImages = this.images.slice(
        this.currentIndex,
        this.currentIndex + 5
      );
    }
  }

  scrollRight() {
    if (this.currentIndex < this.images.length - 5) {
      this.currentIndex++;
      this.visibleImages = this.images.slice(
        this.currentIndex,
        this.currentIndex + 5
      );
    }
  }

  // onMovieClick(id:any){
  //   this.movieService.getMovieById(id).subscribe((res=>{
  //     const selectedImage = this.images.find(image => image.id === id);
  //     this.movieService.setData(res,selectedImage)
  //     this.router.navigate(['/movie'])
  //   }),error=>{
  //     console.log(error);

  //   })
  // }

  onMovieClick(id: any | null) {
    const selectedImage = this.images.find((image) => image.id === id);
    this.movieService.setData(id,selectedImage);

    // this.movieService.setDataForMoves(selectedImage);

    // console.log(selectedImage);

    this.router.navigate(['/movie']);
  }
}
