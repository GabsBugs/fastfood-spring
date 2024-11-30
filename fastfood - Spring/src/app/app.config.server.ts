import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

// Configuração específica do servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Habilita o suporte para renderização do lado do servidor
  ]
};

// Combina a configuração da aplicação com a configuração do servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);
