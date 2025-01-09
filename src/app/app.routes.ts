import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RfidComponent } from './rfid/rfid.component';
import { ApplicationDevelopmentServiceComponent } from './application-development-service/application-development-service.component';
import { ApplicationManagementServiceComponent } from './application-management-service/application-management-service.component';
import { AppReEngineeringServicesComponent } from './app-re-engineering-services/app-re-engineering-services.component';
import { PhysicalAccessControlComponent } from './physical-access-control/physical-access-control.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { Component } from '@angular/core';
import { SmallBusinessComponent } from './small-business/small-business.component';
import { AiComponent } from './ai/ai.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
    { path: 'rfid', component: RfidComponent },
    { path: 'app-development-service', component: ApplicationDevelopmentServiceComponent },
    { path: 'app-application-management-service', component: ApplicationManagementServiceComponent },
    { path: 'app-reengineer', component: AppReEngineeringServicesComponent },
    { path: 'app-physical-access-control', component: PhysicalAccessControlComponent },
    { path: 'app-cloud-services', component: CloudServicesComponent },
    { path: 'app-internet-of-things', component: InternetOfThingsComponent },
    { path: 'app-small-business', component: SmallBusinessComponent },
    { path: 'AiComponent', component: AiComponent },
    { path: 'app-sales-form', component: SalesFormComponent }
];
