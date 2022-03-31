import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type GovData = {
  department: string;
  description: string;
  datasets: number;
}

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  constructor(private httpClient: HttpClient) {}

  getGovernmentData() {
    return this.httpClient.get<GovData[]>(
      'assets/data.json'
    );
  }
}

