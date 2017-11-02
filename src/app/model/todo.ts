export class Todo {
    private id: number;
    private task: string;
    private completed: boolean;
    private description: string;

    constructor(id: number, task: string, completed: boolean,
                description: string) {
        this.id = id;
        this.task = task;
        this.completed = completed;
        this.description = description;
    }
}
