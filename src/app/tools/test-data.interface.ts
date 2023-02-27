import { ObjectBase } from '../shared/objectBase.interface';

export type TestDataInterface = ObjectBase & {
  _id_: string;
  _view_: ProjectNameView;
  Projects: ObjectBase & {
    _view_: ProjectNameView;
  };
  Name: string;
  Description: string;
  Projectleider: ObjectBase & {
    _view_: PersonNameView;
  };
  Start: string | null;
  Status: string;
  Active: boolean;
};

type PersonNameView = {
  firstName: string;
  txt1: string;
  lastName: string;
};

type ProjectNameView = {
  name: string;
};
