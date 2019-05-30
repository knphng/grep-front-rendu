import {Release} from "./release";

export class Task {

    /** universal unique idntifier */
    uuid: string;

    /** name of task */
    name: string;

    /** project of release */
    release: Release;

    public static toTask(value: any) {
        const task = new Task();
        if (value) {
            task.uuid = value.uuid;
            task.name = value.name;
            if (value.release) {
                task.release = Release.toRelease(value.release);
            }
        }
        return task;
    }

    public static toTaskRelease(value: any) {
        const task = new Task();
        if (value) {
            task.uuid = value.uuid;
            task.name = value.name;
            if (value.release) {
                task.release = value.release;
            }
        }
        return task;
    }
}
