import { Product, Table, User } from '@prisma/client';

export class Order {
  id?: string;
  user?: User;
  table?: Table;
  products?: Product[];
  createdAt?: Date;
  updatedAt?: Date;
}
