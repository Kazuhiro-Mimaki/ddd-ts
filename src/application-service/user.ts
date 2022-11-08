import { User } from "../domain";
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

  public get(userId: number): UserData {
    const user = this.userRepository.findById(userId);
    if (!user) {
      throw Error(`${userId}: ユーザーが存在しません`);
    }
    return new UserData(user);
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
