import { UserId } from "./userId";
import { UserName } from "./userName";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  id: UserId;
  name: UserName;
}

export class User {
  public readonly id: UserId;
  public name: UserName;

  constructor(_user: IUser) {
    this.id = _user.id;
    this.name = _user.name;
  }

  public static init(name: UserName): User {
    return new User({ id: new UserId(uuidv4()), name });
  }

  public changeName(newName: UserName): User {
    return new User({
      id: this.id,
      name: newName,
    });
  }

  public equals(otherUser: User): boolean {
    return this.id === otherUser.id;
  }
}
