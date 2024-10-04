
import './App.css'
import Navbar from './components/Navbar'
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";


import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "./config/firebase";
import ContactCard from './components/ContactCard';
import Model from './components/Model';
import AddAndUpdateContact from './components/AddAndUpdateContact';

function App() {

  const [contacts,setContacts] = useState([]);
  const [isopen,setOpen] =useState(false);

  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  useEffect(()=> {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc)=>{
          return{
            id : doc.id,
            ...doc.data()
          }
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  },[])


  return (
    <>
      <div className=" my-4 max-w-[370px] mx-auto px-4 ">
          <Navbar />
          <div className="flex gap-2">
            <div className="flex flex-grow  relative items-center " >
              <FaSearch className="text-white text-3xl absolute ml-1.5"/>
              <input type="text" className=" h-10 flex-grow  border bg-transparent border-white rounded-md text-white pl-12" />
            </div>
              <AiFillPlusCircle onClick={onOpen} className=" cursor-pointer text-5xl text-white "/>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {
              contacts.map((contact)=>(
                <ContactCard key={contact.id}  contact={contact} />
              ))
            }
          </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isopen} />
    </>
  )
}

export default App
