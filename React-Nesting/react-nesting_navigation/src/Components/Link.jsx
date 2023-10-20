export default function Link({href, children, showClass = true}){
    return(
        <a className={ showClass ? "navigation_link" : ""} href={href}>{children}</a>
    );
}