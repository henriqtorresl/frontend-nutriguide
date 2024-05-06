import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaConsultaComponent } from './modules/pagina-consulta/pagina-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarInicioComponent } from './modules/nav-bar-inicio/nav-bar-inicio.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { LoginComponent } from './modules/login/login.component';
import { MeusPacientesComponent } from './modules/meus-pacientes/meus-pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { CadastrarPacienteComponent } from './modules/cadastrar-paciente/cadastrar-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarNutricionistasComponent } from './modules/consultar-nutricionistas/consultar-nutricionistas.component';
import { InformacoesPessoaisComponent } from './modules/informacoes-pessoais/informacoes-pessoais.component';
import { SpinnerComponent } from './shared/spinner-component/spinner/spinner.component';
import { DetalharPacienteComponent } from './modules/detalhar-paciente/detalhar-paciente.component';
import { InformacoesPacienteComponent } from './modules/informacoes-paciente/informacoes-paciente.component';
import { InformacoesNutricionistaComponent } from './modules/informacoes-nutricionista/informacoes-nutricionista.component';
import { ProgressoPacienteComponent } from './modules/progresso-paciente/progresso-paciente.component';
import { RegistrarProgressoComponent } from './modules/registrar-progresso/registrar-progresso.component';
import { ConsultarPlanoComponent } from './modules/consultar-plano/consultar-plano.component';
import { CriarPlanoComponent } from './modules/criar-plano/criar-plano.component';
import { InserirAlimentoComponent } from './modules/inserir-alimento/inserir-alimento.component';
import { AvaliacoesComponent } from './modules/avaliacoes/avaliacoes.component';
import { AdicionarAvaliacaoComponent } from './modules/adicionar-avaliacao/adicionar-avaliacao.component';
import { MeuPlanoAlimentarComponent } from './modules/meu-plano-alimentar/meu-plano-alimentar.component'
import { MinhaComunidadeComponent } from './modules/minha-comunidade/minha-comunidade.component';
import { ComunidadeNutricionistaComponent } from './modules/comunidade-nutricionista/comunidade-nutricionista.component';
import { CriarPostComponent } from './modules/criar-post/criar-post.component';
import { EnviarEmailComponent } from './modules/enviar-email/enviar-email.component';
import { EditarPacienteComponent } from './modules/editar-paciente/editar-paciente.component';
import { TabsComponent } from './modules/tabs/tabs.component';
import { NavBarLoginComponent } from './modules/nav-bar-login/nav-bar-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaConsultaComponent,
    NavBarInicioComponent,
    CadastroComponent,
    LoginComponent,
    MeusPacientesComponent,
    CadastrarPacienteComponent,
    ConsultarNutricionistasComponent,
    InformacoesPessoaisComponent,
    SpinnerComponent,
    DetalharPacienteComponent,
    InformacoesPacienteComponent,
    InformacoesNutricionistaComponent,
    ProgressoPacienteComponent,
    RegistrarProgressoComponent,
    ConsultarPlanoComponent,
    CriarPlanoComponent,
    InserirAlimentoComponent,
    AvaliacoesComponent,
    AdicionarAvaliacaoComponent,
    MeuPlanoAlimentarComponent,
    MinhaComunidadeComponent,
    ComunidadeNutricionistaComponent,
    CriarPostComponent,
    EnviarEmailComponent,
    EditarPacienteComponent,
    TabsComponent,
    NavBarLoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
