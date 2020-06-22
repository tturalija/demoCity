import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {City} from '../../lib/models/city';
import {MonitorService} from '../../pages/monitor/monitor.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit, OnDestroy {

  showMore: boolean = false;
  loading: boolean = true;
  editing: boolean = false;
  private subscription: Subscription;

  @Input()
  get cityData(): City {
    return this._cityData;
  }

  set cityData(value: City) {
    this._cityData = value;
    this.loading = false;
  }

  @Output()
  cityDataChange = new EventEmitter<City>();

  private _cityData: City;

  constructor(private service: MonitorService) {
  }

  ngOnInit(): void {
    this.subscription = this.service.showMoreSubject.subscribe(value => {
      if (this.showMore && (value !== this._cityData.index)) {
        this.showMore = false;
      }
    });
  }

  edit(cityData: any) {
    this.editing = true;
  }

  toggleShowMore(show: boolean) {
    this.showMore = show;
    this.service.showMoreSubject.next(show ? this.cityData.index : undefined);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
