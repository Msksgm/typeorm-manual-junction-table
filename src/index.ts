import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Work } from "./entity/Work";
import { UserWorks } from "./entity/UserWorks";

createConnection()
  .then(async (connection) => {
    console.log("Inserting a new user into the database...");
    const user1 = new User();
    user1.firstName = "hoge";
    user1.lastName = "hoge";
    user1.age = 25;
    await connection.manager.save(user1);

    const user2 = new User();
    user2.firstName = "fuga";
    user2.lastName = "fuga";
    user2.age = 25;
    await connection.manager.save(user2);

    const user3 = new User();
    user3.firstName = "piyo";
    user3.lastName = "piyo";
    user3.age = 35;
    await connection.manager.save(user3);

    console.log("Inserting a new work into the database...");
    const work1 = new Work();
    work1.title = "フロント";
    work1.body = "運用";
    await connection.manager.save(work1);

    const work2 = new Work();
    work2.title = "バックエンド";
    work2.body = "API作成";
    await connection.manager.save(work2);

    const work3 = new Work();
    work3.title = "DB";
    work3.body = "ER設計";
    await connection.manager.save(work3);

    console.log("Inserting a new userWork into the database...");
    const userWork1 = new UserWorks();
    userWork1.user_id = 1;
    userWork1.work_id = 1;
    await connection.manager.save(userWork1);

    const userWork2 = new UserWorks();
    userWork2.user_id = 1;
    userWork2.work_id = 2;
    await connection.manager.save(userWork2);

    const userWork3 = new UserWorks();
    userWork3.user_id = 2;
    userWork3.work_id = 1;
    await connection.manager.save(userWork3);

    const userWork4 = new UserWorks();
    userWork4.user_id = 3;
    userWork4.work_id = 3;
    await connection.manager.save(userWork4);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch((error) => console.log(error));
