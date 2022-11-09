import { IUser, User } from "../domain";
import { UserData } from "../dto";
import { IUserRepository } from "../repository";
import { InMemoryUserRepository } from "../repository/user";
import { UserService } from "../service";

export interface IUserApplicationService {
  userRepository: IUserRepository;
  userService: UserService;
}

export class UserApplicationService {
  private userRepository: IUserRepository;
  private userService: UserService;

  constructor(_userAppService: IUserApplicationService) {
    this.userRepository = _userAppService.userRepository;
    this.userService = _userAppService.userService;
  }

  public register(name: string) {
    const user = new User({
      id: 1,
      name: "sample",
    });
    if (user && this.userService.exists(user)) {
      throw Error(`${user}: ユーザーは既に存在しています`);
    }
    this.userRepository.save(user);
  }

  public get(userId: number): UserData | null {
    const user = this.userRepository.findById(userId);
    if (!user) return null;
    return new UserData(user);
  }

  public update(updateUser: IUser): void {
    const user = this.userRepository.findById(updateUser.id);
    if (!user) {
      throw Error(`${updateUser}: ユーザーが存在しません`);
    }
    const newUser = user.changeName(updateUser.name);
    this.userRepository.save(newUser);
  }
}

// -----
// 具体的な処理
// -----

const userService = new UserService({
  userRepository: new InMemoryUserRepository(),
});

const user = new User({
  id: 1,
  name: "sample",
});

userService.exists(user);
