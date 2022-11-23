export interface OrderWithRelations {
  user: {
    name: string;
  };
  id: string;
  table: {
    number: number;
  };
  products: {
    name: string;
  }[];
}
