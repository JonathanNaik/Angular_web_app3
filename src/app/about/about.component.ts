import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

constructor(private activatedRoute: ActivatedRoute){}  
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  }
param: any;
queryParam: any;

}
