declare module "types" {
    import { SearchMatches } from "obsidian";
    export interface TreeNode {
        name: string;
        count: number;
        children: TreeNode[];
        content: string;
        references: ContentReference[];
    }
    export interface ContentReference {
        searchMatches: SearchMatches;
        path: string;
    }
}
declare module "nav/collapseButton" { }
