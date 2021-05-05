import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+254 702 182 472",
    email_address: "koechkipz03@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
