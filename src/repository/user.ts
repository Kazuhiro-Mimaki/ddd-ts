import { User } from "../domain";

export interface IUserRepository {
  save(user: User): void;
  findByName(userName: string): User | undefined;
  findById(userId: number): User | undefined;
}

export class InMemoryUserRepository implements IUserRepository {
  public store: User[];

  constructor() {
    this.store = this.init();
  }

  private init(): User[] {
    return Array.from(Array(10), (v) => {
      return new User({ id: v, name: `User${v}` });
    });
  }

  public findByName(userName: string): User | undefined {
    return this.store.find((v) => v.name === userName);
  }

  public findById(userId: number): User | undefined {
    return this.store.find((v) => v.id === userId);
  }

  public save(user: User): void {
    this.store.push(user);
  }
}
