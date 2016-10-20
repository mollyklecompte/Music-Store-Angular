import { Injectable } from '@angular/core';

import { Cd } from './cd.model';
import { CDS } from './mock-cds';

@Injectable()
export class CdService{
  getCds(): Promise<Cd[]> {
    return Promise.resolve(CDS);
  }
}
