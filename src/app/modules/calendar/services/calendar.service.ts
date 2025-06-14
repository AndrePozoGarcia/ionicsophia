import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  private createdData$: Subject<string> = new Subject<string>();

  constructor() { }

  public getUpdateTrigger() {
    return this.createdData$.asObservable();
  }

  public setFilterTrigger(trigger: string) {
    this.createdData$.next(trigger);
  }

}