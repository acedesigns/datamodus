/* =======================================================
 *
 * Created by anele on 2020/11/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { SpinnerOverlayComponent } from '../components/spinner-overlay/spinner-overlay.component'


@Injectable({
  providedIn: 'root'
})

export class LoadingService {

    private overlayRef: OverlayRef = undefined;


    constructor( private overlay: Overlay) { }


    public show(): void {

        Promise.resolve(null).then(() => {
            this.overlayRef = this.overlay.create({
                positionStrategy: this.overlay
                    .position()
                    .global()
                    .centerHorizontally()
                    .centerVertically(),
                hasBackdrop: true,
            });
            this.overlayRef.attach(new ComponentPortal(SpinnerOverlayComponent));
        });
    }

    public hide(): void {
        this.overlayRef.detach();
        this.overlayRef = undefined;
    }

}
