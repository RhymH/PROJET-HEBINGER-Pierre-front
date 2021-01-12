import { Client } from "../client";

export class CreateClient {
  static readonly type = "[Client] Create";
  constructor(public payload: Client) {}
}

export class DeleteClient {
  static readonly type = "[Client] Delete";
  constructor(public payload: Client) {}
}
