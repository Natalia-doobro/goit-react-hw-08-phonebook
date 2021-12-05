import Section from '../components/Section'
import ContactForm from '../components/ContactForm'
import Filter from '../components/Filter'
import ContactList  from '../components/ContactList'
import s from "../stiles/Contacts.module.css";

function Contacts() {
    return (
       <div className={s.container}>
           <Section title="Phonebook">
                <ContactForm />
            </Section>

            <Section title="Contacts">
                <Filter />
                <ContactList />
            </Section> 
       </div> 
        
    )
}
export default Contacts;