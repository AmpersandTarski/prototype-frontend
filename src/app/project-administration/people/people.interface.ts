export interface PeopleInterface extends ObjectBase {
  _view_: PersonNameView;
  Email: string;

  Person: ObjectBase & {
    _view_: PersonNameView;
  };
  Projects: Array<ProjectList>;
}

interface ProjectList extends ObjectBase {
  _view_: ProjectNameView;
}

interface ProjectNameView {
  name: string;
}

interface PersonNameView {
  firstName: string;
  txt1: string;
  lastName: string;
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
