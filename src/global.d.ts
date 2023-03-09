/**
 * Este módulo exporta un objeto con nombres de clase y sus correspondientes valores.
 * El objeto se obtiene de un archivo CSS que sigue la convención de nomenclatura de módulos,
 * donde los nombres de clase están aislados del espacio de nombres global.
 * 
 * @example
 * import classes from './estilos.module.css';
 * console.log(classes.miClase); // "abc123"
 */
declare module "*.module.css" {
    /**
     * Un objeto que contiene los nombres de clase y sus correspondientes valores
     */
    const classes: { [key: string]: string };
    /**
     * Exporta el objeto `classes` como valor predeterminado
     */
    export default classes;
}

declare module "*.png";
declare module "*.svg";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jepg";