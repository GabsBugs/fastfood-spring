import 'zone.js/node';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Verifique se este caminho está correto
import { config } from './app/app.config.server';

// Habilita o modo de produção se estiver em ambiente de produção
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

// Função de bootstrap para a aplicação do lado do servidor
const bootstrap = async (): Promise<void> => {
  await bootstrapApplication(AppComponent, {
    providers: [
      ...config.providers,
    ],
  });
};

// Exporta a função bootstrap como padrão
export default bootstrap;
