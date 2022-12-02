export interface ActiveProjectsInterface extends ObjectBase {
  _view_: ProjectNameView;
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
  Description: string;
  Projectleider: ObjectBase & {
    _view_: PersonNameView;
  };
  _64_: ObjectBase & {
    _view_: PersonNameView;
  };
  Start: string | null;
  Status: string;
  Active: boolean;
  _id_: string;
}

interface PersonNameView {
  firstName: string;
  txt1: string;
  lastName: string;
}

interface ProjectNameView {
  name: string;
}

interface ObjectBase {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
}

interface InterfaceRefObject {
  id: string;
  label: string;
}
