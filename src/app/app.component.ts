import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authapp';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, public auth: AuthService) { }

  ngOnInit() {

    //this.auth.localAuthSetup();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {

      var rt = this.getChild(this.activatedRoute);

      rt.data.subscribe(data => {
        console.log(data);
        this.titleService.setTitle(data.titulo)
      })
    });
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
