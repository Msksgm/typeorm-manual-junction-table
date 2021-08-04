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
export class UserAchievement {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  achievement_id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "user_id" })
  public user!: User;

  @ManyToOne(() => Work, (work) => work.id)
  @JoinColumn({ name: "work_id" })
  public work!: Work;

  @CreateDateColumn()
  created_at: Date;
}
