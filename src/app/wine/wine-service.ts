import {Injectable} from '@angular/core';
import {Wine} from './model/wine';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {enviroment} from '../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WineService {
  private wines: Wine[] = [
    // {name: 'Syrah', grape: 'Riesling', description: 'Fruity and full-bodied.', year: 2004},
    // {name: 'Sangiovese', grape: 'Riesling', description: 'Fruity and full-bodied.', year: 2019},
    // {name: 'Moscato', grape: 'Riesling', description: 'Sweet and aromatic.', year: 2019},
    // {name: 'Malbec', grape: 'Merlot', description: 'Light and floral.', year: 2006},
    // {name: 'Syrah', grape: 'Malbec', description: 'Fruity and full-bodied.', year: 2013},
    // {name: 'Zinfandel', grape: 'Chardonnay', description: 'Fruity and full-bodied.', year: 2016},
    // {name: 'Pinot Noir', grape: 'Chardonnay', description: 'A rich and creamy wine.', year: 2015},
    // {name: 'Viognier', grape: 'Cabernet Sauvignon', description: 'Dry with a long finish.', year: 2018},
    // {name: 'Zinfandel', grape: 'Syrah', description: 'Smooth and velvety.', year: 2016},
    // {name: 'Pinot Noir', grape: 'Merlot', description: 'Earthy and complex.', year: 2021},
    // {name: 'Pinot Noir', grape: 'Cabernet Sauvignon', description: 'Fruity and full-bodied.', year: 2023},
    // {name: 'Pinot Noir', grape: 'Merlot', description: 'Earthy and complex.', year: 2002},
    // {name: 'Sauvignon Blanc', grape: 'Merlot', description: 'Dry with a long finish.', year: 2011},
    // {name: 'Zinfandel', grape: 'Zinfandel', description: 'A rich and creamy wine.', year: 2015},
    // {name: 'Moscato', grape: 'Zinfandel', description: 'Crisp and refreshing.', year: 2005}
  ];

  constructor(private httpClient: HttpClient) {
    // const names = ['Chardonnay', 'Merlot', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Syrah', 'Riesling', 'Zinfandel', 'Malbec', 'Tempranillo', 'Grenache', 'Sangiovese', 'Barbera', 'Viognier', 'Moscato'];
    // const grapes = ['Chardonnay', 'Merlot', 'Cabernet Sauvignon', 'Pinot Noir', 'Sauvignon Blanc', 'Syrah', 'Riesling', 'Zinfandel', 'Malbec', 'Tempranillo'];
    // const descriptions = [
    //   'A rich and creamy wine.',
    //   'Fruity and full-bodied.',
    //   'Elegant with a hint of oak.',
    //   'Crisp and refreshing.',
    //   'Smooth and velvety.',
    //   'Bold and spicy.',
    //   'Light and floral.',
    //   'Earthy and complex.',
    //   'Sweet and aromatic.',
    //   'Dry with a long finish.'
    // ];
    //
    // for (let i = 0; i < 15; i++) {
    //   const name = names[Math.floor(Math.random() * names.length)];
    //   const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    //   const year = 2000 + Math.floor(Math.random() * 24);
    //   const grape = grapes[Math.floor(Math.random() * grapes.length)];
    //
    //   this.wines.push({name, description, year, grape});
    // }

  }

  public getAllWines(): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>(enviroment.apiHost + '/wines');
  }

  public addWine(wine: Wine): Observable<Wine> {
    return this.httpClient.post<Wine>(enviroment.apiHost + '/add', wine);
  }

  // getOne(id: number): Wine {
  //
  //
  // }
}
