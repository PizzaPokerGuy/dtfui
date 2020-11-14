import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dtf-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss']
})
export class DTFLinkedinPostComponent {

  constructor(public router: Router) { }

  public get linkedinMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://www.DylanIsrael.com${this.router.url}`;

    return `${base}${currentSite}`;
  }
}
