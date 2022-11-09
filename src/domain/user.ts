export interface IUser {
  id: number;
  name: string;
}

export class User {
  public readonly id: number;
  public name: string;

  constructor(_user: IUser) {
    this.id = _user.id;
    this.name = _user.name;
  }

  public changeName(newName: string): User {
    return new User({
      id: this.id,
      name: newName,
    });
  }

  public equals(otherUser: User): boolean {
    return this.id === otherUser.id;
  }
}
