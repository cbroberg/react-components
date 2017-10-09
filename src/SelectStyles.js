import styled from 'styled-components'


export const StyledSelect = styled.select`
	background-color: #3B97D3;
	color: white;
	padding: 12px;
	font-size: 1.8rem;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	border: none;
	border-radius: 4px;
	user-select: none;
	cursor: pointer;

	background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20version%3D%221.1%22%20class%3D%22svg-triangle%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23c4c4c4%22%20points%3D%220%2C0%2020%2C0%2010%2C20%22/%3E%0A%3C/svg%3E');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 160px 10px;

	&:hover {
		background-color: #3B97D3;
		border-radius: 4px 4px 0 0;
	}

`

export const StyledOption = styled.option`
	color: white;
	padding: 8px 12px;
	font-family: 'Source Sans Pro';
	font-weight: 300;
	font-style: normal; 
	text-decoration: none;
	text-overflow: ellipsis;
	display: block;
	user-select: none;
	cursor: pointer;
	&:hover {
		background-color: #3B97D3;
	}
`
