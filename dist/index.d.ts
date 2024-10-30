declare module "nav/collapseButton" {
    import { App } from "obsidian";
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
}
declare module "main" {
    export { CollapseButton } from "nav/collapseButton";
}
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
//# sourceMappingURL=index.d.ts.map