import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  listOfJobs: any [] = [
    {
      id: 1,
      title: "Baby",
      description: "I kinda just ate, slept, and pooped",
      duration: "1 years",
      employer: "God"
    },
    {
    id: 2,
    title: "Big Brother",
    description: "Be a good example for my little sister, against my better judgment",
    duration: "15 years - ongoing",
    employer: "Mom"
    },
    {
      id: 3,
      title: "Construction Worker",
      description: "Worked on my Grandpa's crew with other official employees on his friends house",
      duration: "9 months",
      employer: "Greg Kaufer"
    },
    {
      id: 4,
      title: "Golf Course Landscaper",
      description: "I helped maintain Aspen Lakes Golf Course in the early morning to ready it for the day, specializing in raking bunkers",
      duration: "6 months",
      employer: "Aspen Lakes"
    },
    {
      id: 5,
      title: "Pressman",
      description: "I run the printing press to print art on to wooden pallets and creations",
      duration: "4 months - ongoing",
      employer: "DayDream HQ"
    }
  ]

  constructor() { }


  getJobs(): Observable<any>{
    return of (this.listOfJobs);
  }

  getJob(num:number): Observable<any>{
    let job:number = 0;
    this.listOfJobs.forEach(j => {
      if (j.id === num) {
        job = j;
      }
    });
    return of (job);
  }
}
