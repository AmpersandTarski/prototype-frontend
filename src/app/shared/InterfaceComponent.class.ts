export abstract class InterfaceComponent {
  public crudC: boolean = false;
  public crudR: boolean = true;
  public crudU: boolean = false;
  public crudD: boolean = false;
  public exprIsUni: boolean = false;
  public exprIsTot: boolean = false;

  public requireArray(property: any) {
    if (Array.isArray(property)) {
      return property;
    } else if (property === null) {
      return [];
    } else {
      return [property];
    }
  }
}
