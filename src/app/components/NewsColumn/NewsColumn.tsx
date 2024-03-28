import s from './NewsColumn.module.scss';
import { ReactNode } from 'react';

const NewsColumn = ({ children }: {children: ReactNode}) =>
	(
		<div className={s.newsColumn}>
			{children}
		</div>
	);

export default NewsColumn;
