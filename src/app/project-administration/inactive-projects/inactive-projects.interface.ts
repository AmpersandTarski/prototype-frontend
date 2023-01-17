export interface InactiveProjectsInterface extends ObjectBase {
  _view_: ProjectNameView;
  Name: ObjectBase & {
    _view_: ProjectNameView;
  };
  Description: string;
  Projectleider: ObjectBase & {
    _view_: PersonNameView;
  };
  Status: string;
  Active: boolean;
}

interface ObjectBase {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
}

interface PersonNameView {
  firstName: string;
  txt1: string;
  lastName: string;
}

interface ProjectNameView {
  name: string;
}

interface InterfaceRefObject {
  id: string;
  label: string;
}
