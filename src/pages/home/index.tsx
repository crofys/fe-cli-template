import React from 'react';
import moment from 'moment';
import { Form, Button } from 'antd'

interface IHomeProp {

}
interface IHomeState {

}
const INIT_STATE = {

}
type THomeState = Readonly<typeof INIT_STATE>

class Home extends React.Component<IHomeProp, IHomeState>{
  readonly state: THomeState = INIT_STATE

  static getDerivedStateFromProps(nextProps: IHomeProp, prevState: THomeState) { }

  componentDidMount() { }

  public render() {
    return (
      <section>
        This is home page!
      </section>
    )
  }
}

export default Home
