import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService } from 'warthog';

import { Card } from './card.model';

@Service('CardService')
export class CardService extends BaseService<Card> {
  constructor(@InjectRepository(Card) protected readonly repository: Repository<Card>) {
    super(Card, repository);
  }
}
