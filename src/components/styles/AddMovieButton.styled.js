import styled from 'styled-components'

export const AddMovieButtonStyled = styled.div`
.addStyle{
  background: black;
  color: rgb(223,185,93);
  border:none;
  position:relative;
  height:60px;
  font-size:1.6em;
  padding:0 2em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
}
.addStyle:hover{
  background:#fff;
  color: black;
}
.addStyle:before,.addStyle:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: black;
  transition:400ms ease all;
}
.addStyle:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.addStyle:hover:before,.addStyle:hover:after{
  width:100%;
  transition:800ms ease all;
}
`