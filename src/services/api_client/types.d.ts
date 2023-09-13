
export interface LinkType {
  active: boolean,
  label: string,
  url: string
}

export interface PaginationType {
  currentPage: number;
  from: number;
  lastPage: number;
  path: string;
  perPage: number;
  to: number;
  total: number;
  links: Link[]
}

export const actionsMethods = {
  index: 'GET',
  show: 'GET',
  create: 'POST',
  update: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH'
}

export interface SingleResponse<DataType> {
  data: DataType;
}

export interface PaginatedResponse<DataType> {
  data: DataType[];
  meta?: PaginationType;
  pagination?: PaginationType;
}

export type ApiResponse<DataType> = PaginatedResponse<DataType> | SingleResponse<DataType>;

export interface ApiError {
  error?: unknown,
  status: number,
  message: string,
}

