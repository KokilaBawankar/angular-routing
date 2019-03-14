import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogueService {
  confirm(message?: string) {
    const confirmation = window.confirm(message ? message : 'Are you sure?');
    return of(confirmation);
  }
}
