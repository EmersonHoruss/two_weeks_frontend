import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface Icon {
  name: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private listIcons: Icon[] = [
    { name: 'sell', path: 'assets/icons/sell.svg' },
    { name: 'sells', path: 'assets/icons/sells.svg' },
    {
      name: 'products',
      path: 'assets/icons/products.svg',
    },
    { name: 'point-of-sale', path: 'assets/icons/point-of-sale.svg' },
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.listIcons.forEach(({ name, path }) => {
      const sanitizedPath =
        this.domSanitizer.bypassSecurityTrustResourceUrl(path);
      this.matIconRegistry.addSvgIcon(name, sanitizedPath);
    });
  }
}
