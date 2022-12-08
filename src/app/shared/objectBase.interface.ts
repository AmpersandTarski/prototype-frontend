export interface ObjectBase {
  _id_: string;
  _label_: string;
  _path_: string;
  _ifcs_: Array<InterfaceRefObject>;
}

export interface InterfaceRefObject {
  id: string;
  label: string;
}
