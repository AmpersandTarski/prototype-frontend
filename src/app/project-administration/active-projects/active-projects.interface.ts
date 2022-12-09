import { ObjectBase, PersonNameView, ProjectNameView, ProjectsInterface } from "../projects.interface";

export interface ActiveProjectsInterface extends Omit<ProjectsInterface, 'Name'> {
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
  Projects: ObjectBase & {
    _view_: ProjectNameView;
  };
  Name: string;
  _64_: ObjectBase & {
    _view_: PersonNameView;
  };
  Start: string | null;
}
