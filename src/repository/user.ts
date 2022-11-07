import { User } from "../domain";

export interface IUserRepository {
  save(user: User): void;
  find(userName: string): User;
}
