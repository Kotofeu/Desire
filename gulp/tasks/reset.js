import del from "del";
export const reset = () => {
   return del(app.path.clean.js, app.path.clean.css, app.path.clean.html, app.path.clean.files);
}
export const resetAll = () => {
   return del(app.path.buildFolder);
}