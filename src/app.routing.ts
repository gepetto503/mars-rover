import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoverFormComponent } from './app/rover-form/rover-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RoverFormComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
