import {Router} from 'express';
import {getCustomRepository} from 'typeorm';
import {parseISO} from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmenService from '../services/CreateAppointmentService';


const appointmentsRouter = Router();

appointmentsRouter.get('/' , async(request,response)=>{
const appointmentsRepository = getCustomRepository(AppointmentsRepository);
const appointments = await appointmentsRepository.find();

return response.json(appointments);

});

appointmentsRouter.post('/' ,async (request,response)=>{
  try{
    const{provider_id, date} = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmenService();

    const appointment = await createAppointment.execute({
      date:parsedDate,
      provider_id,
    });
    return response.json(appointment);
  }catch(err){
    return response.status(400).json({error:err.message})

  }

  });

export default appointmentsRouter;
