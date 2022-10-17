const argv = require("yargs").argv;
const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const getContact = await contacts.getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const addContact = await contacts.addContact(name, email, phone);
      console.log(addContact);
      break;

    case "remove":
      const removeContactById = await contacts.removeContact(id);
      console.log(removeContactById);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
