import { App } from "obsidian";
import { EventEmitter } from "events";
export declare class CollapseButton extends EventEmitter {
    private app;
    private parent;
    private svgCollapse;
    private button;
    constructor(app: App, parent: Element);
    render(): void;
    isCollapsed(): boolean;
}
