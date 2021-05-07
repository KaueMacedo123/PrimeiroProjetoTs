import user from '../models/user'
import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'

interface Request {
name:string;
email:string;
password:string;
}

class CreateUserService{
public async execute({name, email, password}:Request): Promise<user>{
const usersRepository = getRepository(user);

const CheckUserExists = await usersRepository.findOne({
  where:{email},
});
if (CheckUserExists){
  throw new Error('Email Já Cadastrado');
}
const hashedPassword = await hash(password, 8)

const User = usersRepository.create({
  name,
  email,
  password:hashedPassword,
});
await usersRepository.save(User);
return User;
 }
}

export default CreateUserService;
