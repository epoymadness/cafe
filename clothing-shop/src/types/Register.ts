export class Person {
  private name: string;
  private username: string;
  private password: string;
  private email: string;
  private role: string;

  constructor(
    name: string,
    username: string,
    password: string,
    email: string,
    role: string
  ) {
    this.name = name;
    this.password = password;
    this.username = username;
    this.email = email;
    this.role = role;
  }

  getName(): string {
    return this.name;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  getEmail(): string {
    return this.email;
  }

  getRole(): string {
    return this.role;
  }

  toJSON(): object {
    return {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role,
    };
  }
}

export class Builder {
  public name: string = " ";
  public username: string = "";
  public password: string = "";
  public email: string = "";
  public role: string = " ";

  setName(name: string): Builder {
    this.name = name;
    return this;
  }

  setUsername(username: string): Builder {
    this.username = username;
    return this;
  }

  setPassword(password: string): Builder {
    this.password = password;
    return this;
  }

  setEmail(email: string): Builder {
    this.email = email;
    return this;
  }

  setRole(role: string): Builder {
    if (role === "12345") {
      this.role = "ADMIN";
    } else {
      this.role = "USER";
    }
    return this;
  }

  build(): Person {
    return new Person(
      this.name,
      this.username,
      this.password,
      this.email,
      this.role
    );
  }
}
