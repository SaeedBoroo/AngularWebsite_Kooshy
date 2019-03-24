import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() menuToggle = new EventEmitter<boolean>();
  @Input() menuToggleEnabled = false;
  @Input() title: string;

  userMenuItems = [{
    text: 'درباره ما',
    icon: 'info',
    onClick: () => {
      this.router.navigate(['/about-us']);
    }
  }];

  constructor(private router: Router) { }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

