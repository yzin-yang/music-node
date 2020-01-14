import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Search {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
