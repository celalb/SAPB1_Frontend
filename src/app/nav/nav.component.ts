import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit
} from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { ComponentCanDeactivate } from "../guards/pending-changes.guard";
import {Router} from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit, ComponentCanDeactivate, OnDestroy {
  userIsAuthenticated = false;
  userName: string;
  private authListenerSubs: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {

  }
  canDeactivate(): boolean {
    return !this.userIsAuthenticated;
  }
  ngOnInit() {
    this.authService.autoAuthUser();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.userName = this.authService.getUserName();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
}
