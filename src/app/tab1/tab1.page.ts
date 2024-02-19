import { Component, NgZone } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton],
})
export class Tab1Page {
  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
  ) {}

  async openAlert() {
    const alert = await this.alertController.create({
      header: 'My Alert',
      buttons: [
        {
          text: 'Click me',
          handler: async () => {
            const toast = await this.toastController.create({ header: `Is running inside angular zone: ${NgZone.isInAngularZone()}`, duration: 5000, position: 'top' });
            await toast.present();
            NgZone.assertInAngularZone();
          },
        },
      ],
    });
    await alert.present();
  }
}
