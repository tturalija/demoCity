import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MonitorRoutingModule} from './monitor-routing.module';
import {MonitorComponent} from './monitor.component';
import {CityCardComponent} from '../../components/city-card/city-card.component';
import {NgZorroAntdModule, NzAvatarModule, NzCardModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MonitorComponent, CityCardComponent],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    NzCardModule,
    NzAvatarModule,
    NgZorroAntdModule,
    FormsModule,
  ],
})
export class MonitorModule {
}
