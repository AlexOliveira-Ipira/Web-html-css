# Inicializando porjetos em Angular

## Instalar o Angular
### npm install -g @angular/cli

## Criar projeto
### ng new "Nome do projeto"

## Instalr o Bootstrap em Angular
## npm install --save bootstrap

após esse processo fazer a configuração do caminho em angular.json, 
build --> Style

#Estrutura de pastas 

- **node_modules** - Responsável por armazenar as dependências e pacotes do projeto
  
- **src** - Diretório da aplicação, onde nós criamos os nossos módulos, componentes, rotas, srviços e tudo que fizer parte da aplicação
  
- **browserlistrc** - Usado pelo sistema de build para ajustar a saída CSS e JS para suportar os navegadores listados.
  
- **.editorconfig** - Configurações do editor de código.

- **.gitingnore** - Arquivo do fit que utilizamos para o gerenciamento dos arquivos que serão ignorados no momento do nosso cmmmit.
 
- **angular.json** - Arquivo de configuração do angular.
   
- **Karma.config.hs** - Congiuração do Karma para teste unitãrio
 
- **package.json** - Congiurações das dependências e scripts do npm

- **README.md** - Arquivo Markdown para documentação da nossa aplicação.

- **tsconfig e tslint** - Arquivos de configuração do TypeScript.

#Alguns comandos utéis

Scaffold    -   Usage

Component       ng g component my-new-component

Directive       ng g directive my-new-directive

Pipe            ng g pipe my-new-pipe

Service         ng g service my-new-servie

Class           ng g class my-new-class

Guard           ng g guard my-new-guard

Interace        ng g interface my-new-interface

Enum            ng g enum my-new-enum

Module          ng g module my-module


#Diretivas do Angular

### As diretivas fornecem meios para que possamos manipular o DOM ou estender as funcionalidades do elemento.

## Diretivas de atributos: Alteram a aparência ou o comportamento de um elemento, componente ou outra diretiva, como por exmplo, **NgClass** e **NgStyle**.

## Diretivas estruturas: Modificam o layout adicionando ou removendo elementos do DOM, como por exemplo, **NgIf e NgFor.

# Diretivas

    1 - Directives Atributos
        **ngClass**** - ngStyle**

    2 - Directives Structural
        **ngIf** - **ngFor** - **ngSwitch**
    
    3 - Directives
        **Higliter** - **Dropdown**

# Ajustando a aplicação depois de criar.

Apagar os dados do app > app.component.html e o titulo em app.component.ts

# Instalar o Boptstrap 

    Usar o CSS do Bootstrap nesse aplicação

    Instalar

    `npm install bootstrap`

    Para saber se tem o bootstrap instalado verificar em 

    package.json

    Após instalar fazer ajuste no angula.json

    NO angular.json mudar alinha:
        style dentro da build

