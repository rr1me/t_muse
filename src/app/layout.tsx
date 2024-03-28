import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Source_Serif_4 } from 'next/font/google';
import React from 'react';

import './reset.css';

const source = Source_Serif_4({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 't_muse',
	description: 'whatever',
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={source.className}>{children}</body>
		</html>
	);
}
