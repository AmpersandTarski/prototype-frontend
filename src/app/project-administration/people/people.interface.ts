export type PeopleInterface = Array<
  ObjectBase & {
    _view_: PersonNameView;
    Email: string;

    Person: ObjectBase & {
      _view_: PersonNameView;
    };
    Projects: Array<ProjectList>;
  }
>;

type ProjectList = ObjectBase & {
  _view_: ProjectNameView;
};

type ProjectNameView = {
  name: string;
};

type PersonNameView = {
  firstName: string;
  txt1: string;
  lastName: string;
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
