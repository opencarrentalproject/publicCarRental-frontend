import React from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';

const Menu = () => {
    return(
        <Menubar model={items}>
            <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
        </Menubar>
    );
};

const items = [
    {
       label:'Cars',
       icon:'pi pi-fw pi-file',
       items:[
          {
             label:'New',
             icon:'pi pi-fw pi-plus',
          },
          {
             label:'List',
             icon:'pi pi-fw pi-list'
          },
          {
             label:'Export',
             icon:'pi pi-fw pi-external-link'
          }
       ]
    },
    {
       label:'Account',
       icon:'pi pi-fw pi-user',
       items:[
          {
             label:'Change password',
             icon:'pi pi-fw pi-key',
 
          }
       ]
    }
];

export default Menu