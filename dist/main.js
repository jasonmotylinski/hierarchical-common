/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  CollapseButton: () => CollapseButton
});
module.exports = __toCommonJS(main_exports);

// src/nav/collapseButton.ts
var import_events = require("events");
var CollapseButton = class extends import_events.EventEmitter {
  constructor(app, parent) {
    super();
    this.svgCollapse = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>';
    this.app = app;
    this.parent = parent;
  }
  render() {
    this.button = this.parent.createDiv({ cls: "clickable-icon nav-action-button" });
    this.button.innerHTML = this.svgCollapse;
    this.button.addEventListener("click", (e) => {
      this.button.classList.toggle("is-active");
      this.emit("collapse-click", e);
    });
  }
  isCollapsed() {
    return this.button.hasClass("is-active");
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL21haW4udHMiLCAiLi4vc3JjL25hdi9jb2xsYXBzZUJ1dHRvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHsgQ29sbGFwc2VCdXR0b24gfSBmcm9tICcuL25hdi9jb2xsYXBzZUJ1dHRvbic7IiwgImltcG9ydCB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VCdXR0b24gZXh0ZW5kcyBFdmVudEVtaXR0ZXIgIHtcclxuICAgIHByaXZhdGUgYXBwOiBBcHA7XHJcbiAgICBwcml2YXRlIHBhcmVudDogRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3ZnQ29sbGFwc2U9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cInN2Zy1pY29uIGx1Y2lkZS1saXN0XCI+PGxpbmUgeDE9XCI4XCIgeTE9XCI2XCIgeDI9XCIyMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjEyXCIgeDI9XCIyMVwiIHkyPVwiMTJcIj48L2xpbmU+PGxpbmUgeDE9XCI4XCIgeTE9XCIxOFwiIHgyPVwiMjFcIiB5Mj1cIjE4XCI+PC9saW5lPjxsaW5lIHgxPVwiM1wiIHkxPVwiNlwiIHgyPVwiMy4wMVwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjEyXCIgeDI9XCIzLjAxXCIgeTI9XCIxMlwiPjwvbGluZT48bGluZSB4MT1cIjNcIiB5MT1cIjE4XCIgeDI9XCIzLjAxXCIgeTI9XCIxOFwiPjwvbGluZT48L3N2Zz4nO1xyXG4gICAgcHJpdmF0ZSBidXR0b24gOkhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBhcmVudDogRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcHA9YXBwO1xyXG4gICAgICAgIHRoaXMucGFyZW50PXBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbj10aGlzLnBhcmVudC5jcmVhdGVEaXYoe2NsczogXCJjbGlja2FibGUtaWNvbiBuYXYtYWN0aW9uLWJ1dHRvblwifSk7XHJcbiAgICAgICAgdGhpcy5idXR0b24uaW5uZXJIVE1MPXRoaXMuc3ZnQ29sbGFwc2U7XHJcblxyXG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PnsgXHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJjb2xsYXBzZS1jbGlja1wiLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbGxhcHNlZCgpOiBib29sZWFue1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1dHRvbi5oYXNDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0gICBcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNDQSxvQkFBNkI7QUFFdEIsSUFBTSxpQkFBTixjQUE2QiwyQkFBYztBQUFBLEVBSzlDLFlBQVksS0FBVSxRQUFpQjtBQUNuQyxVQUFNO0FBSFYsU0FBUSxjQUFZO0FBSWhCLFNBQUssTUFBSTtBQUNULFNBQUssU0FBTztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxTQUFRO0FBQ0osU0FBSyxTQUFPLEtBQUssT0FBTyxVQUFVLEVBQUMsS0FBSyxtQ0FBa0MsQ0FBQztBQUMzRSxTQUFLLE9BQU8sWUFBVSxLQUFLO0FBRTNCLFNBQUssT0FBTyxpQkFBaUIsU0FBUyxDQUFDLE1BQUk7QUFDdkMsV0FBSyxPQUFPLFVBQVUsT0FBTyxXQUFXO0FBQ3hDLFdBQUssS0FBSyxrQkFBa0IsQ0FBQztBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFFQSxjQUFzQjtBQUNsQixXQUFPLEtBQUssT0FBTyxTQUFTLFdBQVc7QUFBQSxFQUMzQztBQUNKOyIsCiAgIm5hbWVzIjogW10KfQo=
