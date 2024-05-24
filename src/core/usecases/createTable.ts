import { ITableRepo } from "../../core/ports/secondary";
import { ICreateTable } from "../ports/usecases";
import Table from "../domain/table";
import User from "../domain/user";

export class CreateTable implements ICreateTable {
  private tableRepo: ITableRepo;
  constructor(tableRepo: ITableRepo) {
    this.tableRepo = tableRepo;
  }
  public async run(user: User): Promise<Table | null> {
    let table = new Table(new Date(), null, 0, 0, user);
    this.tableRepo.createTable(table);
    return table;
  }
}
