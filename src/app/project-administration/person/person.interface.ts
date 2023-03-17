export type PersonInterface = ObjectBase & {
  _view_: PersonNameView;
  First_32_name: string;
  Last_32_name: string;
  Status: string | null;
  Email: string;
  Projects: ObjectBase & {
    _view_: PersonNameView;
    Active: Array<
      ObjectBase & {
        _view_: ProjectNameView;
      }
    >;
    Inactive: Array<
      ObjectBase & {
        _view_: ProjectNameView;
      }
    >;
  };
  Works_32_with: Array<
    ObjectBase & {
      _view_: PersonNameView;
    }
  >;
};

type PersonNameView = {
  firstName: string;
  txt1: string;
  lastName: string;
};

type ProjectNameView = {
  name: string;
};

type ObjectBase = {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
};

type InterfaceRefObject = {
  id: string;
  label: string;
};
