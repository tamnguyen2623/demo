import { HttpClient } from '@angular/common/http';
import { Component,OnInit,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  http = inject(HttpClient)

  getTitle:string= "";

  ngOnInit(): void {
    this.GetTitle();
  }
  GetTitle(){
    this.http.get<string>('http://localhost:15256/api/Values').subscribe((title) =>{
      this.getTitle = title;
    }
      );
  }






}
