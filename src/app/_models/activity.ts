import {Customer} from './customer';
import {Workspace} from './workspace';

/**
 * Class Activity
 */
export class Activity {

    /** universal unique identifier */
    uuid: string;

    /** name of the project */
    name: string;

    /** overall budget of the project */
    workspace: Workspace;

    /**
     * Transform any given value into Activity object
     * @param value
     */
    public static toActivity(value: any) {
        const result = new Activity();
        if (value) {
            result.uuid = value.uuid;
            result.name = value.name;
            if (value.workspace) {
                result.workspace = Workspace.toWorkspace(value.workspace);
            }
        }
        return result;
    }
}
