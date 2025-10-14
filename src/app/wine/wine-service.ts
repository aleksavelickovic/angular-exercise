import {Injectable} from '@angular/core';
import {Wine} from './model/wine';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private wines: Wine[] = []

  constructor() {
    const names = ['Chardonnay', 'Merlot', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Syrah', 'Riesling', 'Zinfandel', 'Malbec', 'Tempranillo', 'Grenache', 'Sangiovese', 'Barbera', 'Viognier', 'Moscato'];
    const grapes = ['Chardonnay', 'Merlot', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Syrah', 'Riesling', 'Zinfandel', 'Malbec', 'Tempranillo'];
    const descriptions = [
      'A rich and creamy wine.',
      'Fruity and full-bodied.',
      'Elegant with a hint of oak.',
      'Crisp and refreshing.',
      'Smooth and velvety.',
      'Bold and spicy.',
      'Light and floral.',
      'Earthy and complex.',
      'Sweet and aromatic.',
      'Dry with a long finish.'
    ];

    for (let i = 0; i < 15; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const year = 2000 + Math.floor(Math.random() * 24);
      const grape = grapes[Math.floor(Math.random() * grapes.length)];

      this.wines.push({name, description, year, grape});
    }
  }

  public getAllWines(): Wine[] {
    return this.wines;
  }

  public addWine(wine: Wine): void {
    this.wines.push(wine)
  }
}
