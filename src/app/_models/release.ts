import {Project} from "./project";

export class Release {

    /** universal unique identifier */
    uuid: string;

    /** name of release */
    name: string;

    /** project of release */
    project: Project;

    public static toRelease(value: any) {
        const release = new Release();
        if (value) {
            release.uuid = value.uuid;
            release.name = value.name;
            if (value.project) {
                release.project = Project.toProject(value.project);
                // console.log(value.project);
            }
        }
        return release;
    }

}
