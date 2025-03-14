import { useState } from "react";
import Link from "next/link";
import { Button, Menu } from "antd";
import { icons } from "antd";
import { antd } from "antd";
import { 
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    LaptopOutlined,
    ContactsOutlined,
} from "@ant-design/icons";
import { useVisibility } from "@/context/visibilityContext";

// const { 
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
// } = icons;
// const { Button, Menu } = antd;

const App = () => {
  const [collapsed, setCollapsed] = useState(true); // Menu caché au départ
  const { displayComponant } = useVisibility();


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ 
        width: 50,
        
     }}>
      {/* Bouton menu burger toujours visible */}
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 5, backgroundColor: "black" }}
        
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      {/* Le menu est masqué par défaut */}
      <div 
        style={{ 
            position: 'relative',
            right: 150,
            width: 200,
            maxHeight: collapsed ? '0px' : '500px',
            opacity: collapsed ? 0 : 1,
            overflow: 'hidden',
            transition: 'max-height 0.5s ease-out, opacity 0.3s ease-out',
        }}
        >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={false} // Toujours en mode "étendu" lorsqu'il est affiché
          items={
            [
              {
                key: '1',
                icon: <PieChartOutlined />,
                label: <Link href="/presentation#projets">Projets</Link>
              },
              {
                key: '2',
                icon: <DesktopOutlined />,
                label: <Link href="/presentation#competences">Compétences</Link>,
              },
            
              displayComponant && {
                key: '3',
                icon: <ContainerOutlined />,
                label: <Link href='/presentation#experiences'>Expériences</Link>,
              },
              {
                key: 4,
                icon: <LaptopOutlined />,
                label: <Link href='/presentation#formations'>Formations</Link>,
                
              },
              {
                key: 5,
                icon: <ContactsOutlined />,
                label: <Link href='/presentation#contact'>Contact</Link>,   
              },          
            ]
            
          }
        />
      </div>
    </div>
  );
};

  export default App;