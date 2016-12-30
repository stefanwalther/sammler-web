import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let logs = [
      { id: 1, name: 'id 1' },
      { id: 2, name: 'id 2' },
      { id: 3, name: 'id 3' },
      { id: 4, name: 'id 4' },
      { id: 5, name: 'id 5' },
      { id: 6, name: 'id 6' }
    ];
    return { logs };
  }
}
