import React from 'react';
import ReactDOM from 'react-dom';
import ImgFigure from './imgFigure.jsx';
import ControllerUnit from './controllerUnit.jsx';

require('../style/main.scss');
var imageDatas = [];
for(var i = 0, len = 4; i < len; i++){
	imageDatas.push({
		url: require('../images/' + (i+1) +'.jpg'),
		title: "title" + (i + 1),
		desc: "desc" + (i + 1)
	});
}

class GalleryByReactApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imgsArrangeArr: [{
				pos: {
					left: 0,
					top: 0
				}
			}]
		};
		this.Constant = {
			centerPos: {
				left: 0,
				right: 0
			},
			hPosRange:{
				leftSecX: [0, 0],
		        rightSecX: [0, 0],
		        y: [0, 0]
			},
			vPosRange:{
				x: [0, 0],
	        	topY: [0, 0]
			}
		};
	}

	// Constant:{
		
	// }
	componentDidMount(){
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
			stageW = stageDOM.scrollWidth,
			stageH = stageDOM.scrollHeight,
			halfStageW = Math.ceil(stageW/2),
			halfStageH = Math.ceil(stageH/2);
		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
			imgW = imgFigureDOM.scrollWidth,
			imgH = imgFigureDOM.scrollHeight,
			halfImgW = Math.ceil(imgW / 2),
			halfImgH = Math.ceil(imgH / 2);

		this.Constant.centerPos = {
			left: halfStageW - halfImgW,
        	top: halfStageH - halfImgH
		};

		// 计算左侧，右侧区域图片排布位置的取值范围
	    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
	    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
	    this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
	    this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
	    this.Constant.hPosRange.y[0] = -halfImgH;
	    this.Constant.hPosRange.y[1] = stageH - halfImgH;

	    // 计算上侧区域图片排布位置的取值范围
	    this.Constant.vPosRange.topY[0] = -halfImgH;
	    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
	    this.Constant.vPosRange.x[0] = halfStageW - imgW;
	    this.Constant.vPosRange.x[1] = halfStageW;

	    this.rearrange(0);

	}
	render() {
		return (
			<section className="stage" ref="stage">
				<section className="img-sec">
					{imageDatas.map((o, i)=>{
						if(!this.state.imgsArrangeArr[i]){
							this.state.imgsArrangeArr[i] = {
								pos: {
									left: 0,
									right: 0
								},
								rotate: 0, 
								isInverse: false,
								isCenter: false
							}
						}
						return <ImgFigure key={i} data={o} ref={"imgFigure"+i} 
						arrange={this.state.imgsArrangeArr[i]} inverse={this.inverse(i)}
						center={this.center(i)}
						/>
					})}
				</section>
				<nav className="controller-nav">
					{imageDatas.map((o, i) =>{
						return <ControllerUnit arrange={this.state.imgsArrangeArr[i]} key={i} inverse={this.inverse(i)} center={this.center(i)}/>
					})}
				</nav>
			</section>
			
		)
	}
	rearrange(centerIndex){
		debugger;
		var imgsArrangeArr = this.state.imgsArrangeArr,
			Constant = this.Constant,
			centerPos = Constant.centerPos,
	        hPosRange = Constant.hPosRange,
	        vPosRange = Constant.vPosRange,
	        hPosRangeLeftSecX = hPosRange.leftSecX,
	        hPosRangeRightSecX = hPosRange.rightSecX,
	        hPosRangeY = hPosRange.y,
	        vPosRangeTopY = vPosRange.topY,
	        vPosRangeX = vPosRange.x,

	        imgsArrangeTopArr = [],
	        topImgNum = Math.floor(Math.random() * 2),    // 取一个或者不取
	        topImgSpliceIndex = 0,
	        imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);
	    imgsArrangeCenterArr[0] = {
          pos: centerPos,
          rotate: 0,
          isCenter: true
        };

        topImgSpliceIndex = Math.ceil(Math.random() * (imgsArrangeArr.length - topImgNum));
        imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);
        // 布局位于上侧的图片
        imgsArrangeTopArr.forEach((o, i)=>{
        	imgsArrangeTopArr[i] = {
              pos: {
                  top: this.getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
                  left: this.getRangeRandom(vPosRangeX[0], vPosRangeX[1])
              },
              rotate: this.get30DegRandom(),
              isCenter: false
            };
        });
        // imgsArrangeTopArr.forEach(function (value, index) {
            
        // });

        // 布局左右两侧的图片
        for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
            var hPosRangeLORX = null;

            // 前半部分布局左边， 右半部分布局右边
            if (i < k) {
                hPosRangeLORX = hPosRangeLeftSecX;
            } else {
                hPosRangeLORX = hPosRangeRightSecX;
            }

            imgsArrangeArr[i] = {
              pos: {
                  top: this.getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
                  left: this.getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
              },
              rotate: this.get30DegRandom(),
              isCenter: false
            };

        }

        if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
            imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
        }

        imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);
        this.setState({
            imgsArrangeArr: imgsArrangeArr
        });
	}

	getRangeRandom(min, max) {
		return Math.ceil(Math.random() * (max - min) + min);
	}
	get30DegRandom(){
		return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
	}

	inverse(index){
		return ()=>{
			var imgsArrangeArr = this.state.imgsArrangeArr;
				imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});
		}
		
	}
	center(index){
		return ()=>{
			this.rearrange(index);
		}
	}


}

export default GalleryByReactApp;