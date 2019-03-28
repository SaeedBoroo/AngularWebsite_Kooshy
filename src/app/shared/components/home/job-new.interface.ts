import { Job_List } from './list-of-job.interface';

export interface jobNew_Interface {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    list:Job_List[];
    totalPages: number;
    hasPreviousPage :boolean;
    hasNextPage :boolean;
    nextPageNumber: number;
    previousPageNumber: number;
}