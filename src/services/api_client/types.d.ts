// TODO fixme
export interface PaginationType {
  current: number;
  next?: number;
  pageSize: number;
  total?: number;
}

export interface PageableType {
  links?: PaginationType;
}

export interface ApiResponse<DataType> {
  data: DataType[] | DataType;
  pagination?: PaginationType;
}

// TODO use me!!!
export interface ApiError {
  error?: unknown,
  status: number,
  message: string,
}