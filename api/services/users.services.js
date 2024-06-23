import boom from "@hapi/boom";
import Users from "../database/users.js";

class UsersService {
  constructor(){
    this.get();
  }

  async get(){
    try {
      const users = await Users.findAll();
      return users;
    } catch (error) {
      throw boom.notFound(error.message);
    }
  }
  
  async find(id){
    try { 
      const user = await Users.findByPk(id);
      if(!user) throw boom.notFound('Usuario no encontrado');
      return user; 
    } catch (error) {
      throw boom.notFound(error.message);
    }
  }

  async post(data){
    try {
      const { name, email } = data || {};

      if (await Users.findOne({ where: { email } })) {
        throw boom.notAcceptable('Correo existente');
      }
      if (!name ||!email) {
        throw boom.badData('Parametros requeridos');
      }
      if (!email.includes('@') || !email.includes('.')) {
        throw boom.badData('Formato de correo invalido');
      }

      const user = await Users.create({
        name,
        email,
      });
      return user;  
    } catch (error) {
      throw boom.badRequest(error.message);
    } 
  }

  async put(id, newUser){
    try {
      const { name, email } = newUser || {};
      const user = await Users.findByPk(id);

      if (!user) throw boom.notFound('Usuario no encontrado');
      
      if (await Users.findOne({ where: { email: email } })){
        throw boom.conflict('Correo ya registrado');
      }

      if (email && (!email.includes('@') || !email.includes('.'))) {
        throw boom.badData('Formato de correo invalido');
      }

      const updatedUser = {...user.toJSON(), name, email };
      
      
      await updatedUser.save();

      return updatedUser;
    } catch (error) {
      throw boom.badRequest(error.message);
    }
  }

  async delete(id){
    try {
      const response = await Users.destroy({
        where: { id },
      });
      if (response === 0) throw boom.notFound('Usuario no encontrado');
      return response;
    } catch (error) {
      throw boom.badRequest(error.message);
    }
  }
}

export default UsersService;