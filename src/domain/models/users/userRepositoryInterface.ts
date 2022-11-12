import { User } from "./user";
import { UserId } from "./userId";
import { UserName } from "./userName";

export interface IUserRepository {
  save(user: User): void;
  findByName(userName: UserName): User | undefined;
  findById(userId: UserId): User | undefined;
}

export class InMemoryUserRepository implements IUserRepository {
  public store: User[];

  constructor() {
    this.store = this.init();
  }

  private init(): User[] {
    return Array.from(Array(10), (v) => {
      return User.init(new UserName(`${v}user`));
    });
  }

  public findByName(userName: UserName): User | undefined {
    return this.store.find((v) => v.name === userName);
  }

  public findById(userId: UserId): User | undefined {
    return this.store.find((v) => v.id === userId);
  }

  public save(user: User): void {
    if (user) {
      this.store = [...this.store].map((v) => {
        if (v.id === user.id) {
          return user;
        }
        return v;
      });
    } else {
      this.store.push(user);
    }
  }
}
