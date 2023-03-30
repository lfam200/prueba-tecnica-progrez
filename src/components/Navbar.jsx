import axios from 'axios';

import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
  const lista = formattedMenu(menuItems);
  console.log(lista)
  return (
    <nav>
      <ul className="menus">
        {lista.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
};

const formattedMenu = (menuItems) => {
  const list = menuItems.lista[0];
  const keys = Object.keys(list);
  const menu = [];

  keys.forEach( (key) => {
    const keyTranslate =  translateText(key)
    console.log(keyTranslate)
    const item = { title:keyTranslate  };
    const submenu = getSubmenu(list[key]);

    if (submenu.length > 0) {
      item.submenu = submenu;
    }

    menu.push(item);
  });

  return menu;
};

const getSubmenu = (list) => {
  const submenu = [];

  if (Array.isArray(list) && list.length > 0) {
    const sublist = list[0];
    const subkeys = Object.keys(sublist);

    subkeys.forEach( (subkey) => {
      const subkeyTranslate =  translateText(subkey)
      console.log(subkeyTranslate)
      const subitem = { title: subkeyTranslate };
      const subsubmenu = getSubmenu(sublist[subkey]);

      if (subsubmenu.length > 0) {
        subitem.submenu = subsubmenu;
      }

      submenu.push(subitem);
    });
  } else if (!Array.isArray(list) && typeof list === "object") {
    const subkeys = Object.keys(list);

    subkeys.forEach( (subkey) => {
      const subkeyTranslate =  translateText(subkey)
      console.log(subkeyTranslate)
      const subitem = { title: subkeyTranslate };
      const subsubmenu = getSubmenu(list[subkey]);

      if (subsubmenu.length > 0) {
        subitem.submenu = subsubmenu;
      }

      submenu.push(subitem);
    });
  }

  return submenu;
};


const translateText = (text) => {

  const list = {
    "card_list": "Lista de tarjetas",
    "pays_transfer": "Transferencias y pagos",
    "between_cards":"Entre tarjetas",
    "banks": "Bancos",
    "credit_card": "Tarjetas de crédito",
    "support": "Soporte",
    "lock": "Bloqueo",
    "change_pass":"Cambiar clave",
    "enterprises": "Empresas"
  };

  let translatedText = list[text] || text

  
  return translatedText;
}

export default Navbar;
