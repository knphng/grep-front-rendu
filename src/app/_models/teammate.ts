/**
 * Class Teammate also used as USER
 */
import {Task} from './task';

export class Teammate {

    /** universal unique idntifier */
    uuid: string;

    /** username of the teammate */
    username: string;

    /** password of the teammate */
    password: string;

    /** firstname of the teammate */
    first_name: string;

    /** lastname of the teammate */
    last_name: string;

    /** token of the teammate */
    token?: string;

    /** list of task */
    tasks: Task[];

    public static toTeammate(value: any) {
        const teammate = new Teammate();
        if (value) {
            teammate.uuid = value.uuid;
            teammate.username = value.username;
            teammate.password = value.password;
            teammate.first_name = value.first_name;
            teammate.last_name = value.last_name;
            teammate.token = value.token;
            if (value.task) {
                teammate.tasks = value.customers.map(task => {
                    Task.toTask(task);
                });
            }
        }

        return teammate;
    }
}
