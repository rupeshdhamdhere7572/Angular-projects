import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    let policies = [
      { id: 1, num: 'PO1', amount: 1000, useerId: 1, clientId: 1, description: 'Insurance policy number PO1' },
      { id: 2, num: 'PO2', amount: 2000, useerId: 1, clientId: 2, description: 'Insurance policy number PO2' },
      { id: 1, num: 'PO1', amount: 3000, useerId: 1, clientId: 3, description: 'Insurance policy number PO3' },
      { id: 1, num: 'PO1', amount: 4000, useerId: 1, clientId: 4, description: 'Insurance policy number PO4' },
    ];
    return { policies };
  }
}
