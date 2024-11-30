import { Component } from '@angular/core'; // Importa a classe base do Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Para animações do Angular Material
import { ReactiveFormsModule } from '@angular/forms'; // Para formulários reativos
import { MatDialogModule } from '@angular/material/dialog'; // Para diálogos do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Para usar o MatToolbar
import { RouterModule } from '@angular/router'; // Importando RouterModule para rotas
import { OrderListComponent } from './order-list/order-list.component'; // Importa o OrderListComponent

@Component({
  selector: 'app-root', // Seletor para o componente
  templateUrl: './app.component.html', // Template HTML do componente
  styleUrls: ['./app.component.css'], // Estilos CSS do componente
  standalone: true, // Adiciona a propriedade standalone
  imports: [
    BrowserAnimationsModule, // Necessário para animações
    ReactiveFormsModule, // Para formulários reativos
    MatDialogModule, // Para diálogos do Angular Material
    MatToolbarModule, // Adicionando o MatToolbarModule
    RouterModule, // Importando RouterModule para usar o <router-outlet>
    OrderListComponent, // Importando o OrderListComponent
  ],
})
export class AppComponent {
  title = 'Fast Food System'; // Título da aplicação
}
