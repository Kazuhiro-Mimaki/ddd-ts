class UserService {
  public exists(user: User) {
    // 重複を確認する処理
  }
}

// -----
// 具体的な処理
// -----

const userService = new UserService();

const user = new User({
  id: 1,
  name: "sample",
});

userService.exists(user);
