import 'zone.js/node'; // Importante para a execução no lado do servidor
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser'; // Importando a função bootstrap
import { AppComponent } from './src/app/app.component'; // Altere para o caminho correto do seu AppComponent

// Habilitar modo de produção
enableProdMode();

async function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  });
}

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  // Configurar o mecanismo de renderização
  server.engine('html', ngExpressEngine({
    bootstrap, // Assegure-se de que a função bootstrap retorne uma Promise
  }));

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve arquivos estáticos do diretório /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
  }));

  // Renderizar páginas Angular
  server.get('*', async (req, res, next) => {
    const { baseUrl } = req;

    try {
      // A chamada a res.render deve retornar uma Promise
      await res.render('index', {
        req,
        res,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      });
    } catch (err) {
      next(err); // Encaminha o erro para o middleware de tratamento
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
