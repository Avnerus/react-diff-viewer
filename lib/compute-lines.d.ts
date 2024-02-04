export declare enum DiffType {
    DEFAULT = 0,
    ADDED = 1,
    REMOVED = 2
}
export interface DiffInformation {
    value?: string | DiffInformation[];
    lineNumber?: number;
    type?: DiffType;
}
export interface LineInformation {
    left?: DiffInformation;
    right?: DiffInformation;
}
export interface ComputedLineInformation {
    lineInformation: LineInformation[];
    diffLines: number[];
}
export interface WordDiffInformation {
    left?: DiffInformation[];
    right?: DiffInformation[];
}
/**
 * [TODO]: Think about moving common left and right value assignment to a
 * common place. Better readability?
 *
 * Computes line wise information based in the js diff information passed. Each
 * line contains information about left and right section. Left side denotes
 * deletion and right side denotes addition.
 *
 * @param oldString Old string to compare.
 * @param newString New string to compare with old string.
 * @param disableWordDiff Flag to enable/disable word diff.
 */
declare const computeLineInformation: (oldString: string, newString: string, disableWordDiff?: boolean) => ComputedLineInformation;
export { computeLineInformation };
