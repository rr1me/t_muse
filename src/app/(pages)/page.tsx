import s from './page.module.scss';
import NewsElement from '@/app/components/NewsElement/NewsElement';
import NewsColumn from '@/app/components/NewsColumn/NewsColumn';

import data from '../data.json';
import Separator from '@/app/components/Separator/Separator';
import { Fragment } from 'react';

export type NewsObject = {
	name: string,
	date: string,
	text: string,
	img?: string | undefined
}

const offsetArray = Array(4).fill(0).map((_, i) => i*5);

const Home = () =>
	(
		<main className={s.main}>
			<div className={s.content}>
				{
					offsetArray.map(offset => (
						<NewsColumn key={offset}>
							{
								Array(5).fill(0).map((_, i) => (
									<Fragment key={i}>
										<NewsElement obj={data[i + offset]} />
										{i !== 4 && <Separator />}
									</Fragment>
								))
							}
						</NewsColumn>
					))
				}
			</div>
		</main>
	);

export default Home;
