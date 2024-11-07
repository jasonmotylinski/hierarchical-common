declare module "hierarchical-common" {
    import { App, SearchMatches } from "obsidian";
    import { EventEmitter } from "events";
    export class CollapseButton extends EventEmitter {
        private app;
        private parent;
        private svgCollapse;
        private button;
        constructor(app: App, parent: Element);
        render(): void;
        isCollapsed(): boolean;
    }
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
    export interface Point {
        line: number;
        col: number;
        offset: number;
    }
    export interface Position {
        start: Point;
        end: Point;
    }
    export interface BacklinkReference {
        position: Position;
    }
}
