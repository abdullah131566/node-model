export class NodeModelFacade {
  private attribute1: string;
  private attribute2: number;

  constructor() {
    this.attribute1 = "dummy value";
    this.attribute2 = 123;
  }

  public method1(): void {
    console.log("This is method 1");
  }

  public method2(): void {
    console.log("This is method 2");
  }
}
