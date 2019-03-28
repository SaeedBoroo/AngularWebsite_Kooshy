import { JobTop_List } from './list-of-job.interface';

export interface jobTop_Interface {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    list:JobTop_List[];
    totalPages: number;
    hasPreviousPage :boolean;
    hasNextPage :boolean;
    nextPageNumber: number;
    previousPageNumber: number;
}