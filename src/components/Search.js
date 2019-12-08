import React from 'react';

import { Input } from 'antd';

const { Search } = Input;

const API_SEARCH_ENDPOINT = '/busca';

const SearchBox = ({ propHandler }) => {
	const doSearch = text => {
		fetch(API_SEARCH_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ searchText: text }),
		})
			.then(res => res.json())
			.then(resJson => {
				console.log(resJson);
				if (resJson) {
					propHandler(resJson);
				}
			})
			.catch(e => console.log(e));
	};

	return (
		<Search
			size="large"
			placeholder="Procure o imóvel ideal para você"
			onSearch={doSearch}
			enterButton
		/>
	);
};

export default SearchBox;
