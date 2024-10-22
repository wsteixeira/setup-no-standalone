import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'; // Importa o environment
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get('/assets/config.json'))
      .then((config: any) => {
        // Sobrescreve o environment com os valores do config.json
        environment.apiUrl = config.apiUrl || environment.apiUrl;
      })
      .catch(() => {
        console.error(
          'Erro ao carregar config.json. Usando valores padrão do environment.'
        );
      });
  }
}
