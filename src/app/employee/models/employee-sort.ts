import { Employee } from "./employee";

export interface EmployeeSort {
}

export type SortColumn = keyof Employee | '';

export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}