import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';


@Entity('users')
class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  name: string;
@Column()
  email: string;
@Column()
  password: string;
 @CreateDateColumn()
 created_at:Date;
@UpdateDateColumn()
updated_at: Date;

 /** constructor ({provider , date}: Omit<Appointment, 'id'>){
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }*/
}

export default user;
