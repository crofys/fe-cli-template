import React from 'react';
import { Menu, Icon, ConfigProvider } from 'antd';
import Link from 'umi/link';
import { MENU_LIST } from '@/constant/index';
import { IRouteProps } from '@/types/index';

import Style from './style.less';
import zhCN from 'antd/es/locale/zh_CN';

const { SubMenu } = Menu;

// 初始化state
const InitState = {
  navList: MENU_LIST
}
// 声明state类型
type TState = Readonly<typeof InitState>

// 声明prop类型
interface IProp extends IRouteProps {}


class AsideLayout extends React.Component<IProp, TState>{

  state: TState = InitState

  /**
   * @description: 渲染菜单
   * @param {any} item 渲染的对象
   */
  private renderMenu = (item: any): JSX.Element => {
    const { childern } = item
    return (
      childern ?
        (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>
                  {item.name}
                </span>
              </span>
            }
          >
            {
              childern.map((k: any) => (
                <Menu.Item key={k.key}>
                  <Link to={k.link}>{k.name}</Link>
                </Menu.Item>
              ))
            }
          </SubMenu>
        ) :
        (
          <Menu.Item key={item.key}>
            <Link to={item.link}>
              <span>
                <Icon type={item.icon} />
                {item.name}
              </span>
            </Link >
          </Menu.Item>
        )
    )
  }

  public render() {
    const { location } = this.props
    const { navList } = this.state

    const excludeMenus = navList.filter(k => !k.childern).map(k => k.key) //一级菜单 没有子集

    const _keys = location.pathname.split('/')
    const defaultSelectedKeys = [_keys[1]] //默认一级菜单选中
    const defaultOpenKeys = excludeMenus.includes(_keys[1]) ? [_keys[1]] : [_keys[1] + '-' + _keys[2]]//默认二级菜单选中
    return (
      <div className={Style.layout}>
        <aside id={Style.aside}>
          <Link to='/home/channelRank'>
            <img className={Style.logo} src={require('@/assets/common/logo.png')} alt="" />
          </Link>
          <Menu
            key={defaultOpenKeys.join(',')}
            className='g_menu'
            defaultSelectedKeys={defaultOpenKeys}
            defaultOpenKeys={defaultSelectedKeys}
            forceSubMenuRender={true}
            mode="inline"
          >
            {navList.map((item) => this.renderMenu(item))}
          </Menu>
        </aside>
        <div className={Style.container}>
          <main>
            <ConfigProvider locale={zhCN}>
              {this.props.children}
            </ConfigProvider>
          </main>
        </div>
      </div>
    );
  }
}


export default AsideLayout

