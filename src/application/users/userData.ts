import { IUser, UserId, UserName } from "../../domain/models";

export class UserData {
  public readonly id: UserId;
  public name: UserName;

  constructor(_user: IUser) {
    this.id = _user.id;
    this.name = _user.name;
  }

  public get Id(): UserId {
    return this.id;
  }

  public get Name(): UserName {
    return this.name;
  }
}
