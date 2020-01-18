import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { Category } from './category.model';

@Service('CategoryService')
export class CategoryService extends BaseService<Category> {
  constructor(@InjectRepository(Category) protected readonly repository: Repository<Category>) {
    super(Category, repository);
  }
}
