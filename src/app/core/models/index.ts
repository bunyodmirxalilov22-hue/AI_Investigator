export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
export interface CreateInvestigationRequest {
  productId?: string;

  productUrl?: string;

  imageUrl?: string;

  query?: string;
}