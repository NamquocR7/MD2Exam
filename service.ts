export interface Manage <T> {
    add(t: T);
    edit(id: number, t: T);
    delete(id: number);
    showAll();
    findById(id: number);
}