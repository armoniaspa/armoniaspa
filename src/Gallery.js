import React, { useState } from 'react'
import './gallery.css'

import CloseIcon from '@mui/icons-material/Close'

import Img1 from './img/1.jpeg'
import Img2 from './img/2.jpeg'
import Img3 from './img/3.jpeg'
import Img4 from './img/4.jpeg'
import Img5 from './img/5.jpeg'
import Img6 from './img/6.jpeg'
import Img7 from './img/7.jpeg'
import Img8 from './img/8.jpeg'

const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc: Img1
		},
		{
			id: 2,
			imgSrc: Img2
		},
		{
			id: 3,
			imgSrc: Img3
		},
		{
			id: 4,
			imgSrc: Img4
		},
		{
			id: 5,
			imgSrc: Img5
		},
		{
			id: 6,
			imgSrc: Img6
		},
		{
			id: 7,
			imgSrc: Img7
		},
		{
			id: 8,
			imgSrc: Img8
		}
	]

	const [model, setModel] = useState(false)
	const [tempimgSrc, setTempImgSrc] = useState('')

	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc)
		setModel(true)
	}

	return (
		<>
			<div className={model ? 'model open' : 'model'}>
				<img src={tempimgSrc} />
				<CloseIcon onClick={() => setModel(false)} />
			</div>
			<div className="gallery">
				{data.map((item, index) => {
					return (
						<div
							className="pics"
							key={index}
							onClick={() => getImg(item.imgSrc)}
						>
							<img src={item.imgSrc} style={{ width: '100%' }} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Gallery
