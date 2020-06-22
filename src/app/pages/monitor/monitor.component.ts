import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FirebaseService} from '../../lib/services/firebase.service';
import {City} from '../../lib/models/city';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit, OnDestroy {
  cities: Array <City>;
  listenToStream: boolean = false;

  private subscription: Subscription;

  constructor(private service: FirebaseService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.cdr.detach();

    setInterval(() => {
       this.cdr.detectChanges();
    }, 500);

    this.subscription = this.service.getAll().subscribe(data => {
      this.cities = data;
    });
  }

  streamToggleClick() {
    this.service.stream.next(this.listenToStream);
  }

  ngOnDestroy(): void {
    this.cities = null;
    this.subscription.unsubscribe();
  }
}
