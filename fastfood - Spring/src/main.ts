import { appConfig } from './app/app.config';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Importando o AppComponent
import { environment } from './environments/environment'; // Importando configurações de ambiente

// Habilita o modo de produção se o ambiente for de produção
if (environment.production) {
  enableProdMode();
}

// Inicializa o aplicativo com o AppComponent
bootstrapApplication(AppComponent, appConfig)
.catch(err => console.error('Erro ao inicializar a aplicação:', err)); // Mensagem de erro
