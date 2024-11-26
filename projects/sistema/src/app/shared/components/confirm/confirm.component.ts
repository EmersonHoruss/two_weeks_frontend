import { Component } from '@angular/core';

@Component({
  selector: 'tw-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
  standalone: false,
})
export class ConfirmComponent {
  messageToConfirm = 'Are you sure?';
}
