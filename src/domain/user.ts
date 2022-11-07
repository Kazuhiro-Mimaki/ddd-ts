interface IUser {
  id: number;
  name: string;
}

class User {
  private readonly id: number;
  private name: string;

  constructor(_user: IUser) {
    this.id = _user.id;
    this.name = _user.name;
  }

  private changeName(user: User, newName: string): User {
    return new User({
      id: user.id,
      name: newName,
    });
  }

  private equals(otherUser: User): boolean {
    return this.id === otherUser.id;
  }
}
