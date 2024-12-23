import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RfidComponent } from './rfid/rfid.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },  // Default route
    { path: 'rfid', component: RfidComponent },
];
