import { BaseModel, IntField, Model, StringField, ManyToMany } from 'warthog';
import { Category } from '../category/category.model';

@Model()
export class Card extends BaseModel {
  @IntField({ nullable: true })
  number?: number;

  @StringField({ nullable: true })
  label?: string;
  
  @ManyToMany(() => Category, (category: Category) => category.cards )
  categorys?: Category[];
}
