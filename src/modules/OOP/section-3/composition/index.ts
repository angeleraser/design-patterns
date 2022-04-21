import { Department } from '../aggregation';

interface University {
	departments: Array<Department> /* Composition, Department cannot be isolated, 
                                    it will exist in the university container */;
}

export type { University };
