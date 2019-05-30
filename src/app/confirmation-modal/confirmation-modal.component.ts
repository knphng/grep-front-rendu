import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Subject} from 'rxjs';
import {ContexteConfirmationModal} from '../_models/contexte-confirmation-modal';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {

    // Triggered if pressed Ok
    triggerOk: Subject<number>;

    // Titre de la popup
    title: string;

    // Message à afficher
    message: string;

    constructor(
        public dialogRef: MatDialogRef<ConfirmationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ContexteConfirmationModal
    ) {
        this.triggerOk = data.triggerOk;
        // Init title
        this.title = data.titre;
        // Init message
        this.message = data.message;
    }


    ok() {
        this.triggerOk.subscribe({next: () => this.dialogRef.close(true)});
        this.triggerOk.next();
    }

    close() {
        this.dialogRef.close(false);
    }


}
