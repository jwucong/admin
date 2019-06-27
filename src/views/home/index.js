import React from 'react';
import {Link} from "react-router-dom";
import classnames from 'classnames'
import './home.scss'

const colors = [
  'rgb(1, 62, 60)',
  'rgb(120, 84, 12)',
  'rgb(40, 8, 23)',
  'rgb(147, 114, 13)',
  'rgb(2, 11, 33)',
  'rgb(120, 84, 12)'
]
const images = []
for (let i = 0; i < 6; i++) {
  const id = i + 1;
  const image = {
    id,
    cover: require(`../../assets/images/cover${i}.jpg`),
    title: `中文标题${id}`,
    subtitle: `This is a title in english`,
    themeColor: colors[i],
    createTime: Date.now(),
    updateTime: Date.now()
  }
  images.push(image)
}

console.log(images)

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignIn = () => {
    const {history} = this.props;
    history.push('/signIn');
  }

  render() {
    const ImageList = () => images.map((image, index) => {
      const classes = ['article']
      classes.push((index + 1) % 3 === 0 ? 'mini' : 'normal')
      const classList = classnames(...classes)
      return (
        <div className={classList} key={image.id}>
          <Link to={`/article/${image.id}`}>
            <div
              className="cover"
              style={{backgroundImage: `url(${image.cover}`}}>
            </div>
            <div className="mask" style={{backgroundColor: image.themeColor}}></div>
            <div className="info" >
              <div
                className="text-wrapper"
                style={{backgroundColor: image.themeColor}}>
                <div className="text">
                  <h3 className="title">{image.title}</h3>
                  <p className="subtitle">{image.subtitle}</p>
                  <div className='date'>{image.updateTime}</div>
                </div>
              </div>
              <div className="arrow"></div>
            </div>
          </Link>
        </div>
      )
    })
    return (
      <div className='home-view'>
        <div className="container">
          <div className="article-list clearfix">
            <ImageList/>
          </div>
        </div>
      </div>
    );
  }


}
