import {Menu} from 'antd';
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import './Layouts';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


function Header({ user }) {

const router = useRouter();
if(user==null){
return (
  <Menu  mode="horizontal" theme="dark" style={{padding:"15px 30px"}}>

<Menu.Item key="login" style={{float:"left", border:"none"}}>
      <Link href='/index'>
      <h1><i style={{fontSize:"38px" , color:"#29a19c"}} className="fa"></i><a style={{color:"#ffff"}}><span style={{color:"#29a19c",
fontWeight: "500"}}>PACK</span>pack</a></h1>   
      </Link>
    </Menu.Item>

    <Menu.Item key="login" style={{float:"right"}}>
      <Link href='/login'>
        <a>Login</a>    
      </Link>
    </Menu.Item>


    <Menu.Item key="signup" style={{float:"right"}}>
      <Link href='/signup'>
        <a>Signup</a>    
      </Link>
    </Menu.Item>

    <Menu.Item key="home" style={{float:"right"}}>
      <Link href='/index'>
        <a>Home</a>    
      </Link>
    </Menu.Item>

  </Menu>
);
}
else
{
  return (
    <Menu  mode="horizontal" theme="dark" style={{padding:"15px 30px"}}>
  
  <Menu.Item key="login" style={{float:"left", border:"none"}}>
        <Link href='/index'>
        <h1><i style={{fontSize:"38px" , color:"#29a19c"}} className="fa"></i><a style={{color:"#ffff"}}><span style={{color:"#29a19c",
  fontWeight: "500"}}>PACK</span>pack</a></h1>   
        </Link>
      </Menu.Item>
  
      <Menu.Item key="login" style={{float:"right"}}>
        <Link href='/login'>
          
  <a>{}</a> 
   
        </Link>
      </Menu.Item>
  
  
     
  
      <Menu.Item key="home" style={{float:"right"}}>
        <Link href='/index'>
          <a>Home</a>    
        </Link>
      </Menu.Item>
  
    </Menu>
  );
}

}

export default Header;
