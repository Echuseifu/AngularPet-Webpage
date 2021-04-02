import { Injectable } from '@angular/core';
import { Pet1 } from './pet';
import { PETS } from './mock-pets';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  getPets(): Pet1[] {
    return PETS;
  }
  constructor() { }
}
