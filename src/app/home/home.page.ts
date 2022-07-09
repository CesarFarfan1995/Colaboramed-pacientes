import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
  VERSION,
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkNetworkStatus();
  }

  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe((status) => {
        if (!status) {
          console.log('si mi rey no hay net que chimbo...viva amlo');
          this.router.navigate(['/net-problem']);
        }

        console.log('status', status);
        this.networkStatus = status;
      });
  }
}
