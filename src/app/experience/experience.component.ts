import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Development",
        company: "Moringa School",
        color: "#3781c2",
        companylogo: "https://drive.google.com/file/d/19CQf37Y7Hxqjxt9_m1xbF3w64z7bQPID/view?usp=sharing",
        date: "November 2020 - May 2021",
        
        desc: "Software Development Student",
      },
      // {
      //   role: "Bsc. Computer Science",
      //   company: "Meru University",
      //   color: "#3f703f",
      //   companylogo: "/home/amos/Desktop/portfolio/MyPortfolio/src/assets/images/mustlogo.png",
      //   date: "Sept 2015 – Sept 2019",
      //   desc: "Completed my 4 year graduation degree in computer science with second class upper division",
        
      // },
      {
        role: "Network Operations",
        company: "ICT Authority",
        color: "#ff9102",
        companylogo: "https://drive.google.com/file/d/19CQf37Y7Hxqjxt9_m1xbF3w64z7bQPID/view?usp=sharing",
        date: "May 2019 – November 2019",
        desc: "General systems administration support & NOC when on duty",
        },
      {
          role: "Systems Administrator ",
          company: "Kenya Education Network",
          color: "#ff9102",
          companylogo: "https://drive.google.com/file/d/19CQf37Y7Hxqjxt9_m1xbF3w64z7bQPID/view?usp=sharing",
          date: "November 2020 – To Date",
          desc: "General systems administration support & NOC when on duty",
        },  
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
