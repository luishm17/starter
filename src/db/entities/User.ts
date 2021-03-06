import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { type } from 'os';
import { Reaction } from './Reaction';
import { Post } from './Post';
import { Comment } from './Comment';

@ObjectType()
export class User {
    @Field((type) => ID)
    id: string

    @Field()
    @IsEmail()
    email: string

    @Field((type) => String, { nullable: true })
    name: string | null

    @Field()
    userType?: number

    @Field((type) => Reaction)
    reactions?: Reaction[]

    @Field((type) => Post)
    posts?: Post[]

    @Field((type) => Comment)
    comment?: Comment[]


}