import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../../../services/app.service';


@Component({
    selector: 'page-events',
    templateUrl: 'events.html'
})
export class EventsPage {
    eventsList: any;
    selectedEvent: any;
    public userObj;
    constructor(
        public _appService: AppService,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.userObj = {
            'town_id': localStorage.getItem('TOWN_ID'),
            'dist_id': localStorage.getItem('DIST_ID'),
            'state_id': localStorage.getItem('STATE_ID')
        }
        //  this.getEvents();
        this.selectedEvent = navParams.get('event');
        this.eventsList = [
            { event_name: 'Dasara Mahostavam Day 1', event_place: 'MAKTHAL', event_date: '22/04/2019', event_info: 'Puja done on day one of dasara-Bala Tripura Sundari Devi Puja This avatar is worshipped as the first goddesses during the occasion of navarathri and she is the goddesses who were placed on a chair and she is the abode of the three mothers of this world namely the Saraswathi, Lakshmi and the Parvathi. So worshipping the Bala tripura sundari is the same worshipping to those three goddesses and in this avatar the lord Durga blesses her devotees by giving them the Shakthi, Siri and the Gyanam"', event_pics: [{ 'id': 1 }, { 'id': 1 }, { 'id': 1 }, { 'id': 1 }] },
            { event_name: 'Dasara Mahostavam Day 2', event_place: 'KURNOOL', event_date: '22/04/2019', event_info: 'Puja done on day one of dasara-Bala Tripura Sundari Devi Puja This avatar is worshipped as the first goddesses during the occasion of navarathri and she is the goddesses who were placed on a chair and she is the abode of the three mothers of this world namely the Saraswathi, Lakshmi and the Parvathi. So worshipping the Bala tripura sundari is the same worshipping to those three goddesses and in this avatar the lord Durga blesses her devotees by giving them the Shakthi, Siri and the Gyanam"', event_pics: [{ 'id': 1 }, { 'id': 1 }, { 'id': 1 }, { 'id': 1 }] },
            { event_name: 'Dasara Mahostavam Day 3', event_place: 'WARANGAL', event_date: '22/04/2019', event_info: 'Puja done on day one of dasara-Bala Tripura Sundari Devi Puja This avatar is worshipped as the first goddesses during the occasion of navarathri and she is the goddesses who were placed on a chair and she is the abode of the three mothers of this world namely the Saraswathi, Lakshmi and the Parvathi. So worshipping the Bala tripura sundari is the same worshipping to those three goddesses and in this avatar the lord Durga blesses her devotees by giving them the Shakthi, Siri and the Gyanam"', event_pics: [{ 'id': 1 }, { 'id': 1 }, { 'id': 1 }, { 'id': 1 }] },
            { event_name: 'Dasara Mahostavam Day 4', event_place: 'RAICHUR', event_date: '22/04/2019', event_info: 'Puja done on day one of dasara-Bala Tripura Sundari Devi Puja This avatar is worshipped as the first goddesses during the occasion of navarathri and she is the goddesses who were placed on a chair and she is the abode of the three mothers of this world namely the Saraswathi, Lakshmi and the Parvathi. So worshipping the Bala tripura sundari is the same worshipping to those three goddesses and in this avatar the lord Durga blesses her devotees by giving them the Shakthi, Siri and the Gyanam"', event_pics: [{ 'id': 1 }, { 'id': 1 }, { 'id': 1 }, { 'id': 1 }] }
        ];
    }

    public getEvents() {


    }

    viewEvent(eventObj) {
        this.navCtrl.push(EventsPage, {
            event: eventObj
        });
    }

}