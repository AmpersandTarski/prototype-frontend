export interface ProjectsInterface extends ObjectBase {
  _view_: ProjectNameView;
  Name: ObjectBase & { _view_: ProjectNameView };
  Description: string;
  Projectleider: ObjectBase & {
    _view_: PersonNameView;
  };
  Status: string;
  Active: boolean;
  _id_: string;
}

export interface PersonNameView {
  firstName: string;
  txt1: string;
  lastName: string;
}

export interface ProjectNameView {
  name: string;
}

export interface ObjectBase {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
}

interface InterfaceRefObject {
  id: string;
  label: string;
}
