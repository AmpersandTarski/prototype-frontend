export interface ProjectInterface extends ObjectBase {
  _view_: ProjectNameView;
  Name: string;
  Description: string;
  _40_Planned_41__32_start_32_date: string | null;
  Status: string;
  Active: boolean;
  Current_32_PL: ObjectBase & {
    _view_: PersonNameView;
  };
  Project_32_members: Array<
    ObjectBase & {
      _view_: PersonNameView;
      Name: string;
      Email: string;
    }
  >;
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
