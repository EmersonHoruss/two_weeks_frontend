import { Inject, Injectable } from '@angular/core';
import { LAYOUT_TOKEN } from '../tokens/layout.token';
import { ILayout } from '../interfaces/layout.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private configSubject: BehaviorSubject<ILayout>;

  // value injection example
  constructor(@Inject(LAYOUT_TOKEN) private config: ILayout) {
    this.configSubject = new BehaviorSubject<ILayout>(this.config);
  }

  setConfiguration(config: ILayout) {
    this.configSubject.next(config);
  }

  getConfiguration() {
    return this.configSubject.asObservable();
  }
}
