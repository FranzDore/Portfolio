import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public textLogo: string = '<<FrancescoDore>>';

  public onLogoClick() {
    scrollTo({top: 0, behavior: 'smooth'});
  }
}
