# Setup
## Install IONIC
npm i -g @ionic/cli

## Create a new "Android typed" Project
ionic start myApp sidemenu

## Or Create a new "Iphone typed" Project
ionic start myApp tabs

## Serve the app
ionic serve

# Customization

## Create a new page
ionic generate page rooms
Automatically, the page is created, the routing is adapted and we just need to clean the unused links

## Cleaning ...
App-routing should look like this
{
    path: '',
    redirectTo: 'rooms',
    pathMatch: 'full'
},
{
  path: 'rooms',
  loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
}

room.page.html should look like this :
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Rooms</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <h1>Rooms</h1>
</ion-content>

App.component.ts should look like this
  public appPages = [
    {
      title: 'Rooms',
      url: '/rooms',
      icon: 'paper-plane'
    }
  ];
  public labels = [];