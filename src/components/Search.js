import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

const SearchBox = () => {
	return (
		<Search
			size="large"
			placeholder="Procure o imóvel ideal para você"
			onSearch={value => console.log(value)}
			enterButton
		/>
	);
};

export default SearchBox;
