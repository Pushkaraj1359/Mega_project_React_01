import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {collection, deleteDoc, doc} from "firebase/firestore"
import { db } from '../config/firebase';

const ContactCard = ({contact}) => {

    const deleteContact =async (id) => {
        try {
            await deleteDoc(doc(db,"contacts",id));
        } catch (error) {
            console.log(error);
        }
    }




    return (
                <div key={contact.id} className="bg-yellow-200 flex justify-between items-center rounded-lg  p-2">
                    <div className="flex gap-2">
                        <CgProfile className="text-orange text-4xl " />
                        <div className="">
                            <h2 className="font-medium">{contact.name}</h2>
                            <p className="text-sm">{contact.email}</p>
                        </div>
                    </div>
                    <div className="flex  ">
                        <FaPen className="text-2xl mr-2" />
                        <MdDelete onClick={()=> deleteContact(contact.id)}  className="text-orange-400 text-3xl"/>
                    </div>
                </div>
    )

}

export default ContactCard;
