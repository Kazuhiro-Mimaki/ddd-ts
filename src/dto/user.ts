import { IUser } from "../domain";

export class UserData {
  public readonly id: number;
  public name: string;

  constructor(_user: IUser) {
    this.id = _user.id;
    this.name = _user.name;
  }

  public get Id(): number {
    return this.id;
  }

  public get Name(): string {
    return this.name;
  }
}
