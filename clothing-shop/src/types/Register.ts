export class Person {
  private firstname: string;
  private lastname: string;
  private username: string;
  private password: string;
  private email: string;

  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    email: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
    this.username = username;
    this.email = email;
  }

  getFirstname(): string {
    return this.firstname;
  }

  getLastname(): string {
    return this.lastname;
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
}

export class Builder {
  public firstname: string = "";
  public lastname: string = "";
  public username: string = "";
  public password: string = "";
  public email: string = "";

  setFirstname(firstname: string): Builder {
    this.firstname = firstname;
    return this;
  }

  setLastname(lastname: string): Builder {
    this.lastname = lastname;
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

  build(): Person {
    return new Person(
      this.firstname,
      this.lastname,
      this.username,
      this.password,
      this.email
    );
  }
}
