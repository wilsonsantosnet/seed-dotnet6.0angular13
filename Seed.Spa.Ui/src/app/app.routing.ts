﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './common/services/auth.guard';

const APP_ROUTES_DEFAULT: Routes = [

    {
        path: '', component: MainComponent, data : { title : "Main" }, children: [

			{ path: 'sample',  canActivate: [AuthGuard], loadChildren: () => import('./main/sample/sample.module').then(m => m.SampleModule) },

			{ path: 'sampletype',  canActivate: [AuthGuard], loadChildren: () => import('./main/sampletype/sampletype.module').then(m => m.SampleTypeModule) },

			{ path: 'sampleitem',  canActivate: [AuthGuard], loadChildren: () => import('./main/sampleitem/sampleitem.module').then(m => m.SampleItemModule) },



            ]
    },

      { path: 'sample/print/:id', canActivate: [AuthGuard], loadChildren: () => import('./main/sample/sample-print/sample-print.module').then(m => m.SamplePrintModule) },
      { path: 'sampletype/print/:id', canActivate: [AuthGuard], loadChildren: () => import('./main/sampletype/sampletype-print/sampletype-print.module').then(m => m.SampleTypePrintModule) },
      { path: 'sampleitem/print/:id', canActivate: [AuthGuard], loadChildren: () => import('./main/sampleitem/sampleitem-print/sampleitem-print.module').then(m => m.SampleItemPrintModule) },

]


export const RoutingDefault: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES_DEFAULT);


