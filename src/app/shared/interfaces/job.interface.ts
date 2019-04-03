import { Job_List } from './list-of-job.interface';
import { jobSame_Interface } from './job-same.interface';

export interface job_Interface {

    jobsame: jobSame_Interface;
    list:Job_List[];
}