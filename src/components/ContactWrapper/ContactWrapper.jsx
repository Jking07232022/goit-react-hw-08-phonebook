import css from "./ContactWrapper.module.css";

export const ContactWrapper = ({children}) => {
   return (
      <div className={css.contactWrapper}>
         {children}
      </div>
   )
}