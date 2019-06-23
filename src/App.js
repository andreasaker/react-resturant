import React, {useState} from 'react';
import './App.css';
import { Button, Header, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react';

function App() {
  const [visible, setVisible] = useState(false)

  let handleHideClick = () => setVisible(false);
  let handleShowClick = () => setVisible(true);
  let handleSidebarHide = () => setVisible(false);

  let SidebarButton = props => {
    if(props.visible){
        return(
        <button class="sidebarBtn" onClick={handleHideClick}>
        <i class="icon close"></i>
        </button>);
      } else {
        return(
        <button class="sidebarBtn" onClick={handleShowClick}>
          <i class="icon bars"></i>
        </button>);
      }
  }

    return (
        <div>
        <Sidebar.Pushable style={{height: '100vh'}} >
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='list' />
              Menu
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='user circle' />
              Contact
            </Menu.Item>
          </Sidebar>
          
          <Sidebar.Pusher>
            <Segment basic>
              <SidebarButton visible={visible}/>
            
              <Header as='h3'>Application Content</Header>
              
            </Segment>
          </Sidebar.Pusher>
          </Sidebar.Pushable>
          </div> 
         
    )
  
}



export default App;
