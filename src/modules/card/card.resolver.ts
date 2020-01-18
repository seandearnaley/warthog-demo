import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId } from 'warthog';

import {
  CardCreateInput,
  CardCreateManyArgs,
  CardUpdateArgs,
  CardWhereArgs,
  CardWhereInput,
  CardWhereUniqueInput
} from '../../../generated';

import { Card } from './card.model';
import { CardService } from './card.service';

@Resolver(Card)
export class CardResolver {
  constructor(@Inject('CardService') public readonly service: CardService) {}

  @Query(() => [Card])
  async cards(
    @Args() { where, orderBy, limit, offset }: CardWhereArgs,
    @Fields() fields: string[]
  ): Promise<Card[]> {
    return this.service.find<CardWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => Card)
  async card(@Arg('where') where: CardWhereUniqueInput): Promise<Card> {
    return this.service.findOne<CardWhereUniqueInput>(where);
  }

  @Mutation(() => Card)
  async createCard(@Arg('data') data: CardCreateInput, @UserId() userId: string): Promise<Card> {
    return this.service.create(data, userId);
  }

  @Mutation(() => [Card])
  async createManyCards(
    @Args() { data }: CardCreateManyArgs,
    @UserId() userId: string
  ): Promise<Card[]> {
    return this.service.createMany(data, userId);
  }

  @Mutation(() => Card)
  async updateCard(
    @Args() { data, where }: CardUpdateArgs,
    @UserId() userId: string
  ): Promise<Card> {
    return this.service.update(data, where, userId);
  }

  @Mutation(() => StandardDeleteResponse)
  async deleteCard(
    @Arg('where') where: CardWhereUniqueInput,
    @UserId() userId: string
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, userId);
  }
}
