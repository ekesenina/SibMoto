import React from 'react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'
import '../css/slider.css'



function SliderCatalog () {
  return (
    <Swiper
        className='slider'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
		effect='fade'
		fadeEffect = { {crossFade: false} }
		speed={1500}
        slidesPerView={1}
		autoplay={ {delay: 2000}}
		disableOnInteraction={false}
		stopOnLastSlide={false}
        loop={true}
        loopedSlides={true}
        loopedSlidesLimit={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='slider__slide'>
        <img src={require('../img/slide1.png')} alt='img' className='slider__slide__img'/>
      </SwiperSlide>
      <SwiperSlide className='slider__slide'>
        <img src={require('../img/slide2.png')} alt='img' className='slider__slide__img'/>
      </SwiperSlide>
      <SwiperSlide className='slider__slide'>
        <img src={require('../img/slide3.png')} alt='img' className='slider__slide__img'/>
      </SwiperSlide>
      <SwiperSlide className='slider__slide'>
        <img src={require('../img/slide4.png')} alt='img' className='slider__slide__img'/>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderCatalog;










// import React from 'react';

// import Slide_1 from '../img/slide1.png';
// import Slide_2 from '../img/slide2.png';
// import Slide_3 from '../img/slide3.png'
// import Slide_4 from '../img/slide4.png'


// class Slider extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			slides : [
// 				{
// 					eachSlide: `url(${Slide_1})`
// 				},
// 				{
// 					eachSlide: `url(${Slide_2})`
// 				},
// 				{
// 					eachSlide: `url(${Slide_3})`
// 				},
// 				{
// 					eachSlide: `url(${Slide_4})`
// 				}
// 			],
// 			autoplay: true,
// 			active: 0,
// 			max: 0
// 		}

// 		this.state.max = this.state.slides.length;
// 		this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
// 		this.toggleAutoPlay = this.toggleAutoPlay.bind(this);
// 		this.nextOne = this.nextOne.bind(this);
// 		this.prevOne = this.prevOne.bind(this);
// 	}

// 	componentDidMount() {
// 		this.interval = setInterval(()=> this.intervalBetweenSlides(), 3000)
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.interval)
// 	}

// 	intervalBetweenSlides () {
// 		if (this.state.autoplay === true) {
// 			if (this.state.active === this.state.max - 1) {
// 				this.state.active = 0
// 			} else {
// 				this.state.active++
// 			}

// 			this.setState ({
// 				active: this.state.active
// 			})
// 		}
// 	}

// 	toggleAutoPlay () {
// 		this.setState({
// 			autoplay: !this.state.autoplay
// 		})
// 	}

// 	nextOne() {
// 		(this.state.active < this.state.max - 1) ?
// 		this.setState({
// 			active: this.state.active + 1
// 		}) :
// 		this.setState({
// 			active: 0
// 		})
// 	}
// 	prevOne () {
// 		(this.state.active > 0) ?
// 		this.setState({
// 			active: this.state.active - 1
// 		}) :
// 		this.setState({
// 			active: this.state.max - 1
// 		})
// 	}

// 	isActive (value) {
// 		if (this.state.active === value) {
// 			return 'active'
// 		}
// 	}

// 	setSliderStyles () {
// 		const transition = this.state.active * - 100/this.state.slides.length;

// 		return {
// 			width: (this.state.slides.length * 100) + '%',
// 			transform: `translateX(${transition}%)`
// 		}
// 	}

// 	renderSlides () {
// 		const transition = 100/this.state.slides.length + "%";

// 		return this.state.slides.map((item,index)=> (
// 				<div
// 					className="each-slide"
// 					key = {index}
// 					style = {{backgroundImage: item.eachSlide, width: transition}}>
// 				</div>
// 			));
// 	}

// 	render () {
// 		return (
// 				<div className="slider">
// 					<div
// 						className="wrapper"
// 						style={this.setSliderStyles()}>
// 						{this.renderSlides()}
// 					</div>
// 				</div>
// 			)
// 	}
// }

// export default Slider