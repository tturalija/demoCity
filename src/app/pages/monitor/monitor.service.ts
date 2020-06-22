import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  showMoreSubject: BehaviorSubject<number> = new BehaviorSubject<number>(undefined);
  constructor() { }
}
