import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql';
import { Inject } from 'typedi';
import { Fields, StandardDeleteResponse, UserId } from 'warthog';

import {
  CategoryCreateInput,
  CategoryCreateManyArgs,
  CategoryUpdateArgs,
  CategoryWhereArgs,
  CategoryWhereInput,
  CategoryWhereUniqueInput
} from '../../../generated';

import { Category } from './category.model';
import { CategoryService } from './category.service';

@Resolver(Category)
export class CategoryResolver {
  constructor(@Inject('CategoryService') public readonly service: CategoryService) {}

  @Query(() => [Category])
  async categorys(
    @Args() { where, orderBy, limit, offset }: CategoryWhereArgs,
    @Fields() fields: string[]
  ): Promise<Category[]> {
    return this.service.find<CategoryWhereInput>(where, orderBy, limit, offset, fields);
  }

  @Query(() => Category)
  async category(@Arg('where') where: CategoryWhereUniqueInput): Promise<Category> {
    return this.service.findOne<CategoryWhereUniqueInput>(where);
  }

  @Mutation(() => Category)
  async createCategory(
    @Arg('data') data: CategoryCreateInput,
    @UserId() userId: string
  ): Promise<Category> {
    return this.service.create(data, userId);
  }

  @Mutation(() => [Category])
  async createManyCategorys(
    @Args() { data }: CategoryCreateManyArgs,
    @UserId() userId: string
  ): Promise<Category[]> {
    return this.service.createMany(data, userId);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args() { data, where }: CategoryUpdateArgs,
    @UserId() userId: string
  ): Promise<Category> {
    return this.service.update(data, where, userId);
  }

  @Mutation(() => StandardDeleteResponse)
  async deleteCategory(
    @Arg('where') where: CategoryWhereUniqueInput,
    @UserId() userId: string
  ): Promise<StandardDeleteResponse> {
    return this.service.delete(where, userId);
  }
}
