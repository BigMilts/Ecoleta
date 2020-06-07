import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index (request : Request, response: Response ) {
    const items =  await knex('items').select('*');
  
    const serialiedItems = items.map(item => {
      return {
        id : item.id,
        title: item.title,
        image_url :`http://10.0.0.11:3333/uploads/${item.image}`
      }
    });
  
    return response.json(serialiedItems)
  }
}

export default ItemsController;