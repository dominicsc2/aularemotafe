import React, { useState } from 'react';
import Backdrop from '../../common/Backdrop/Backdrop';
import RoundProfilePicture from '../../common/RoundProfilePicture/RoundProfilePicture';
// import * as IOIcons from 'react-icons/io5'
import { SidebarData } from './content/SidebarData';
import styles from './Sidebar.module.scss';
// import Link from 'next/link'

function Sidebar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <Link to='/notifications' className={styles.sidebarOpen} onClick={showSidebar}>
        <IOIcons.IoMenu />
      </Link> */}

      <div id={styles.sidebar}>
        <nav id={styles.sidebarMenu} className={sidebar ? 'active' : ''}>
          <ul className={styles.sidebarItems}>
            <div className={styles.sidebarTop}>
              <RoundProfilePicture imageUrl="/img/person 1.png" size={55} />

              <div className={styles.topDescription}>
                <h3>Diego Salas Noain</h3>
                <p>dominicsc2hs@gmail.com</p>
                <p>Rango: experto</p>
              </div>
            </div>

            <div className={styles.sidebarTokens}>
              <p>Tienes 0 tokens</p>
              <span className="hightlight">obten más</span>
            </div>
            <hr />
            {SidebarData.map((item, index) => (
              <li key={index}>
                {/* <Link to={item.path} className={item.cName}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link> */}
              </li>
            ))}
          </ul>

          {/* <Link to='#' className={styles.sidebarClose} onClick={showSidebar} style={{
                        opacity: (sidebar) ? '100%' : '0',
                        visibility: (sidebar) ? 'visible' : 'hidden',
                        textDecoration: 'none',
                    }}>
                        &times;
                    </Link> */}
        </nav>

        <Backdrop open={sidebar} setOpen={setSidebar} />
      </div>
    </>
  );
}

export default Sidebar;
