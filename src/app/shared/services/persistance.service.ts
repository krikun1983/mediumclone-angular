import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to LocalStorage', error);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (error) {
      console.error('Error getting from LocalStorage', error);
      return null;
    }
  }
}
