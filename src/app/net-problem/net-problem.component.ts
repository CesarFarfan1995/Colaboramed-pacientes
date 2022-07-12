import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@Component({
  selector: 'app-net-problem',
  templateUrl: './net-problem.component.html',
  styleUrls: ['./net-problem.component.scss'],
})
export class NetProblemComponent implements OnInit {
  constructor(private network: Network, private router: Router) {}
  ngOnInit(): void {
    this.isNetwork();
  }
  isNetwork() {
    this.network.onConnect().subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
