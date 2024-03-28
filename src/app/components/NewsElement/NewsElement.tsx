import Image from 'next/image';
import s from './NewsElement.module.scss';
import { NewsObject } from '@/app/(pages)/page';

const VariantNewsElement = ({ obj: { name, text, date, img } }: {obj: NewsObject}) =>
	img !== undefined ? (
		<article className={s.imgElement}>
			<Image src={'/pics/' + img + '.jpg'}
						 alt="news pic"
						 width={280}
						 height={130}
						 className={s.img}
			/>
			<div className={s.inner}>
				<h3 className={s.h2}>{name}</h3>
				<p className={s.text}>{text}</p>
				<p className={s.date}>{date}</p>
			</div>
		</article>
	) : (
		<article className={s.element}>
			<h3 className={s.h3}>{name}</h3>
			<p className={s.date}>{date}</p>
			<p className={s.text}>{text}</p>
		</article>
	);

export default VariantNewsElement;
