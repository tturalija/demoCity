import {Injectable} from '@angular/core';
import {BehaviorSubject, EMPTY, Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  stream: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private fireDB: AngularFireDatabase) {
  }

  getAll(): Observable<any> {
    const cityObservable: Observable<any> = this.fireDB.list('/data/cities').valueChanges();
    return this.stream.pipe(switchMap(value => value ? cityObservable : EMPTY));
  }
}
