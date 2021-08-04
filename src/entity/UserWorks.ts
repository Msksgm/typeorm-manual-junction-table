import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";
import { Work } from "./Work";

@Entity()
export class UserWorks {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  work_id: number;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "user_id" })
  public user!: User;

  @ManyToOne(() => Work, (work) => work.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "work_id" })
  public work!: Work;
}
