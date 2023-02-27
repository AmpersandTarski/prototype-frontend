export type InactiveProjectsInterface = Array<
  ObjectBase & {
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
>;

type ObjectBase = {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
};

type PersonNameView = {
  firstName: string;
  txt1: string;
  lastName: string;
};

type ProjectNameView = {
  name: string;
};

type InterfaceRefObject = {
  id: string;
  label: string;
};
