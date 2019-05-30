import {Customer} from './customer';

/**
 * Workspace class
 */
export class Workspace {

    /** universal unique idntifier */
    uuid: string;

    /** name of the workspace */
    name: string;

    /**
     * Transform any given value into Workspace object
     * @param value
     */
    public static toWorkspace(value: any) {
        const workspace = new Workspace();
        if (value) {
            workspace.uuid = value.uuid;
            workspace.name = value.name;
        }
        return workspace;
    }
}
