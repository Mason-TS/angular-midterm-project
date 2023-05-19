import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
currentID: number = 0;
currentTitle: string = "";
currentDescription: string = "";
currentDuration: string = "";
currentEmployer: string = "";

  constructor(private jobService: JobService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
 

    this.currentID = parseInt(this.actRoute.snapshot.paramMap.get("jobId") ?? "");

    this.jobService.getJob(this.currentID).subscribe(fJob => {
      this.currentTitle = fJob.title;
      this.currentDescription = fJob.description;
      this.currentDuration = fJob.duration;
      this.currentEmployer = fJob.employer
    })
   
  }

}
