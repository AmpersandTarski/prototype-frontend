export type ProjectInterface = ObjectBase & {
  _view_: ProjectNameView;
  Name: string;
  Description: string;
  _40_Planned_41__32_start_32_date: string | null;
  Status: string;
  Active: boolean;
  Keywords: Array<string>;
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

  Alphanumeric_32_uni: string | null;
  Bigalphanumeric_32_uni: string | null;
  HugeAlphanumeric_32_uni: string | null;
  Password_32_uni: string | null;
  Date_32_uni: string | null;
  DateTime_32_uni: string | null;
  Integer_32_uni: number | null;
  Float_32_uni: number | null;
  Object_32_uni: ObjectBase & {
    _view_: PersonNameView;
  };
  Alphanumeric: Array<string> | null;
  Bigalphanumeric: Array<string> | null;
  HugeAlphanumeric: Array<string> | null;
  Password: Array<string> | null;
  Date: Array<string> | null;
  DateTime: Array<string> | null;
  Integer: Array<number> | null;
  Float: Array<number> | null;
  Object: Array<number> | null;
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
