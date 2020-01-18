import { BaseModel, Model, StringField, ManyToMany } from 'warthog';
import { JoinTable, TreeChildren, TreeParent, Tree } from 'typeorm';
import { Card } from '../card/card.model';

@Model()
@Tree("closure-table")
export class Category extends BaseModel {
  @StringField({ nullable: true })
  name?: string;

  @TreeChildren()
  children?: Category[];

  @TreeParent()
  parent?: Category;

  @ManyToMany(() => Card, (card: Card) => card.categorys )
  @JoinTable()
  cards?: Card[];
}
