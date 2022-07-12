import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private network: Network, private router: Router) {}

  ngOnInit(): void {
    this.notNetwork();
  }

  notNetwork() {
    this.network.onDisconnect().subscribe(() => {
      this.router.navigate(['/net-problem']);
    });
  }
}
