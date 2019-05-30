import {Subject} from 'rxjs';

export class ContexteConfirmationModal {

    /** Confirmation's Trigger */
    triggerOk: Subject<any>;

    /** title of the modal */
    titre: string;

    /** message of the modal */
    message: string;

}
