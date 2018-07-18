import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ProblemsPage } from './components/problems/problems.component';
import { EventsPage } from './components/events/events.component';
import { NotificationsPage } from './components/notifications/notifications.component';

@NgModule({
    declarations: [
        HomePage,
        ProblemsPage,
        EventsPage,
        NotificationsPage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    entryComponents:[EventsPage]
})
export class HomePageModule { }
