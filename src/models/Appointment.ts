//import {uuid} from 'uuidv4';
import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import user from './user';


@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

@Column()
  provider_id: string;

@ManyToOne(()=>user)
@JoinColumn({name:'provider_id'})
 provider: user;

@Column('timestamp with time zone')
  date: Date;
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

export default Appointment;
