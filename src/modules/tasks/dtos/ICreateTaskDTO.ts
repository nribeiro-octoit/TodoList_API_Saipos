interface ICreateTaskDTO {
    description: string;
    assigned_to: string;
    email: string;
    status?: number;
    id?: string;
    reOpen: number;
}

export { ICreateTaskDTO };
