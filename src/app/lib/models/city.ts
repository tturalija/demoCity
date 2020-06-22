import {RenewableSource} from './renewable-source';

export class City {
  id: string;
  index: number;
  city: string;
  latitude: number;
  longitude: number;
  population: number;
  powerConsumption: number;
  renewableSources: Array<RenewableSource> = [];
}
