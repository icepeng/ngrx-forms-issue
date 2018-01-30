import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AddArrayControlAction,
  RemoveArrayControlAction,
  SetErrorsAction,
} from 'ngrx-forms';
import { take } from 'rxjs/operators';

import * as fromForm from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  formState$ = this.store.select(fromForm.getFormState);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.formState$.subscribe(formState => {
      if (formState.value.items.length > 5) {
        return this.store.dispatch(
          new SetErrorsAction(formState.controls.items.id, {
            tooMany: formState.value.items.length,
          }),
        );
      }
      if (formState.value.items.length === 0) {
        return this.store.dispatch(
          new SetErrorsAction(formState.controls.items.id, {
            noItem: true,
          }),
        );
      }
      return this.store.dispatch(
        new SetErrorsAction(formState.controls.items.id, {}),
      );
    });
  }

  addLine() {
    this.formState$.pipe(take(1)).subscribe(formState =>
      this.store.dispatch(
        new AddArrayControlAction(formState.controls.items.id, {
          name: '',
          description: '',
        }),
      ),
    );
  }

  deleteLine() {
    this.formState$
      .pipe(take(1))
      .subscribe(formState =>
        this.store.dispatch(
          new RemoveArrayControlAction(formState.controls.items.id, 0),
        ),
      );
  }

  trackByIndex(index: number) {
    return index;
  }
}
