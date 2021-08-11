import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-content',
  templateUrl: './help-content.component.html',
  styleUrls: ['./help-content.component.scss']
})
export class HelpContentComponent implements OnInit {

  adminGuideContent = [
    {
      title: 'Org module',
      content: 'Manage onboarding and exit processes, organization assets, expenses and travel workflow etc. here'
    },
    {
      title: 'Performance',
      content: 'Manage employee objectives, skills, competencies, reviews here'
    },
    {
      title: 'Time Attend',
      content: 'Configure leave and attendance tracking policies, employee assignments, productivity tracker here'
    },
    {
      title: 'Project',
      content: 'Manage tasks, timesheets and all other functions pertaining projects here'
    },
    {
      title: 'Payroll',
      content: 'Resolves all your payroll related queries'
    },
    {
      title: 'Settings',
      content: 'You can define all your settings here'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
