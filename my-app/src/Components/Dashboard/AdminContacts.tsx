import React, { useState } from 'react';
import './css/AdminContacts.css'; 


interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const AdminContactsPanel: React.FC = () => {
  // State for the list of contacts
  const [contacts, setContacts] = useState<Contact[]>([
   
  ]);

  
  const [form, setForm] = useState<Omit<Contact, 'id'>>({ name: '', email: '', phone: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add or update a contact
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId !== null) {
   
      setContacts(contacts.map(contact =>
        contact.id === editingId ? { ...contact, ...form } : contact
      ));
      setEditingId(null);
    } else {
      // Add new contact
      const newContact: Contact = { id: Date.now(), ...form };
      setContacts([...contacts, newContact]);
    }
    setForm({ name: '', email: '', phone: '' }); 
  };

  // Edit a contact
  const handleEdit = (contact: Contact) => {
    setForm({ name: contact.name, email: contact.email, phone: contact.phone });
    setEditingId(contact.id);
  };

  // Delete a contact
  const handleDelete = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Contacts Management</h2>
      
      {/* Form for adding/editing */}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleInputChange}
          required
          className="form-input"
        />
        <button type="submit" className="submit-btn">
          {editingId !== null ? 'Update' : 'Add'} Contact
        </button>
      </form>

      {/* Contacts List */}
      <ul className="contacts-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-item">
            <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
            <button onClick={() => handleEdit(contact)} className="edit-btn">Edit</button>
            <button onClick={() => handleDelete(contact.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminContactsPanel;