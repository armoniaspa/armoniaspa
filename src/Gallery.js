import React, { useState } from 'react'
import './gallery.css'

import CloseIcon from '@mui/icons-material/Close'

import img1 from './img/products/1.jpeg'
import img2 from './img/products/2.jpeg'
import img3 from './img/products/3.jpeg'
import img4 from './img/products/4.jpeg'
import img5 from './img/products/5.jpeg'
import img6 from './img/products/6.jpeg'
import img7 from './img/products/7.jpeg'
import img8 from './img/products/8.jpeg'
import img9 from './img/products/9.jpeg'
import img10 from './img/products/10.jpeg'
import img11 from './img/products/11.jpeg'
import img12 from './img/products/12.jpeg'
import img13 from './img/products/13.jpeg'
import img14 from './img/products/14.jpeg'
import img15 from './img/products/15.jpeg'
import img16 from './img/products/16.jpeg'
import img17 from './img/products/17.jpeg'

import price1 from './img/prices/1.jpeg'
import price2 from './img/prices/2.jpeg'
import price3 from './img/prices/3.jpeg'
import price4 from './img/prices/4.jpeg'
import price5 from './img/prices/5.jpeg'
import price6 from './img/prices/6.jpeg'
import price7 from './img/prices/7.jpeg'
import price8 from './img/prices/8.jpeg'
import price9 from './img/prices/9.jpeg'
import price10 from './img/prices/10.jpeg'
import price11 from './img/prices/11.jpeg'
import price12 from './img/prices/12.jpeg'
import price13 from './img/prices/13.jpeg'
import price14 from './img/prices/14.jpeg'
import price15 from './img/prices/15.jpeg'
import price16 from './img/prices/16.jpeg'
import price17 from './img/prices/17.jpeg'

const rutadestino = ''

const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc: img1,
			imgPrice: price1
		},
		{
			id: 2,
			imgSrc: img2,
			imgPrice: price2
		},
		{
			id: 3,
			imgSrc: img3,
			imgPrice: price3
		},
		{
			id: 4,
			imgSrc: img4,
			imgPrice: price4
		},
		{
			id: 5,
			imgSrc: img5,
			imgPrice: price5
		},
		{
			id: 6,
			imgSrc: img6,
			imgPrice: price6
		},
		{
			id: 7,
			imgSrc: img7,
			imgPrice: price7
		},
		{
			id: 8,
			imgSrc: img8,
			imgPrice: price8
		},
		{
			id: 9,
			imgSrc: img9,
			imgPrice: price9
		},
		{
			id: 10,
			imgSrc: img10,
			imgPrice: price10
		},
		{
			id: 11,
			imgSrc: img11,
			imgPrice: price11
		},
		{
			id: 12,
			imgSrc: img12,
			imgPrice: price12
		},
		{
			id: 13,
			imgSrc: img13,
			imgPrice: price13
		},
		{
			id: 14,
			imgSrc: img14,
			imgPrice: price14
		},
		{
			id: 15,
			imgSrc: img15,
			imgPrice: price15
		},
		{
			id: 16,
			imgSrc: img16,
			imgPrice: price16
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
							style={{ textAlign: 'center', background: '#F7F6F5' }}
							className="pics"
							key={index}
							onClick={() => getImg(item.imgPrice)}
						>
							<img src={item.imgSrc} style={{ width: '100%' }} />

							<h5 style={{ textAlign: 'center' }}>
								Haz clic para conocer nuestros precios...
							</h5>
							<br />
						</div>
					)
				})}
			</div>
			<div>
				<a href="https://api.whatsapp.com/send?phone=3195065174">
					<img src={img17} style={{ width: '100%' }} />
				</a>
			</div>
		</>
	)
}

export default Gallery
