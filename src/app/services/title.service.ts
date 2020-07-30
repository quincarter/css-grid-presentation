import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public readonly title$: Observable<string> = this.titleSubject.asObservable();

  public setTitle(title: string): void {
    this.titleSubject.next(title);
  }
}
