import { ObjectBase } from "src/app/shared/component.interfaces";

export interface ActiveProjectInterface extends ObjectBase {
    _view_: ProjectNameView;
    Projects: ObjectBase & {
        _view_: ProjectNameView;
    };
    _sortValues_: {
        Projects: string;
        Name: string;
        Description: string;
        Projectleider: string;
        _64_: string;
        Start: string | null;
        Status: string;
        Active: boolean;
    };
    Name: string;
    Description: string;
    Projectleider: ObjectBase & {
        _view_: PersonNameView
    };
    _64_: ObjectBase & {
        _view_: PersonNameView
    }
    Start: string | null;
    Status: string;
    Active: boolean;
}


interface PersonNameView {
    firstName: string;
    txt1: string;
    lastName: string;
}

interface ProjectNameView {
    name: string;
}
