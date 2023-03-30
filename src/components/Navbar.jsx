import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
  const lista = formattedMenu(menuItems);
  
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

  keys.forEach((key) => {
    const item = { title: key };
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

    subkeys.forEach((subkey) => {
      const subitem = { title: subkey };
      const subsubmenu = getSubmenu(sublist[subkey]);

      if (subsubmenu.length > 0) {
        subitem.submenu = subsubmenu;
      }

      submenu.push(subitem);
    });
  } else if (!Array.isArray(list) && typeof list === "object") {
    const subkeys = Object.keys(list);

    subkeys.forEach((subkey) => {
      const subitem = { title: subkey };
      const subsubmenu = getSubmenu(list[subkey]);

      if (subsubmenu.length > 0) {
        subitem.submenu = subsubmenu;
      }

      submenu.push(subitem);
    });
  }

  return submenu;
};


export default Navbar;
