import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { userHomeComponent } from './user/Home/userHome.component';
import { userCapturaComponent } from './user/captura/captura.component';


const appRoutes : Routes = [
	{path: 'user/Home', component: userHomeComponent},
  {path: 'user/Captura', component: userCapturaComponent},
	{path: '', component : userHomeComponent},
	{path: '**', component: userHomeComponent}
];


export const appRoutingProviders: any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const routesRouting = appRoutes;