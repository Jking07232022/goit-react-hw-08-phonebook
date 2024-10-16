import { useDispatch } from "react-redux";
import css from "./ContactsForm.module.css";
import { addContact } from "../../redux/contacts/operations";

export const ContactForm = () => {
   const dispatch = useDispatch();
   
   const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      
      const data = {
         name: form.elements.name.value.toLowerCase(),
         number: form.elements.number.value.toLowerCase()
      }
      dispatch(addContact(data));

      form.reset();
   }
   
   return (
      <form className={css.contactForm} onSubmit={handleOnSubmit}>
         <div className={css.inputWrapper}>
            <label className={css.label}>
               Full Name
               <input 
                  type="text"
                  name="name"
                  className={css.formInput}
                  placeholder="Full Name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                  autoComplete="off"
                  required
               />
            </label>
         </div>

         <div className={css.inputWrapper}>
            <label className={css.label}>
               Number
               <input 
                  type="tel"
                  name="number"
                  className={css.formInput}
                  placeholder="Contact Number"
                  pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  autoComplete="off"
                  required
               />
            </label>
         </div>
         <button className={css.formButton} type="submit">Submit</button>
      </form>
   )
}