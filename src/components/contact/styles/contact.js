import styled from "styled-components/macro";

const colors = {
    $midnightblue: "#2c3e50",
    $belizehole: "#2980b9",
    $nephritis: "#27ae60",
    $peterriver: "#3498db",
  },
  centerStage = () => `
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
`,
  corners = () => `border-radius: 5px;`,
  component = () => `
  border-radius: 5px;
	background: linear-gradient( to right, darken( $darker , 1% ) , $darker );
	box-shadow: inset 3px 3px 15px -5px rgba( black , 0.1 );
	padding: 2em;
	display: block;
`,
  btn = () => `
  background: $darker;
	display: inline-block;
	padding: 0.3em 1em 0.5em;
	cursor: pointer;
	background: linear-gradient( to right, darken( $darker , 1% ) , $darker );
	box-shadow: inset 3px 3px 15px -5px rgba( black , 0.1 );
	text-transform: uppercase;
	color: $nephritis;
	border: 1px solid rgba( $primary , 0.3 );
	font-size: 90%;

	&:focus {
		background: $peterriver;
		color: $brighter;
	}

	&:hover {
		background: $nephritis ;
		color: $brighter;
	}

	&:active {
		background: $darker ;
		color: $brighter;
	}
`,
  shadowInset = () => `box-shadow: inset 3px 3px 10px rgba( black , 0.1 );`,
  transition = () => `
    transition: all 0.2s ease-out;

    &:hover {
      transition: all 0.2s ease-in;
    }
  `,
  textAreaInput = () => `
    font-size: 100%;
    
    &:focus {
      outline: none;
      border: 1px solid $primary;
      background: $darker;
      box-shadow: inset 3px 3px 10px 0 rgba( black , 0.1);
    }
    
    &:focus,
    &.active {
      + label {
        background: $primary;
        transform: translateX(-20%) translateY(-50%);
      } 
    }
  `;

`@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);
  
  //colors
  $midnightblue: #2c3e50;
  $belizehole: #2980b9;
  $nephritis: #27ae60;
  $peterriver: #3498db;
  
  $primary: $belizehole;
  $secondary: $midnightblue;
  
  $bright: mix( $primary , white , 50% );
  $brighter: mix( $primary , white , 0% );
  $dark: mix( $secondary , black , 70% );
  $darker: mix( $secondary , black , 60% );
  
  %center-stage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  
  %corners {
    border-radius: 5px;
  }
  
  %component {
    border-radius: 5px;
    background: linear-gradient( to right, darken( $darker , 1% ) , $darker );
    box-shadow: inset 3px 3px 15px -5px rgba( black , 0.1 );
    padding: 2em;
    display: block;
  }
  
  %button {
    background: $darker;
    display: inline-block;
    padding: 0.3em 1em 0.5em;
    cursor: pointer;
    background: linear-gradient( to right, darken( $darker , 1% ) , $darker );
    box-shadow: inset 3px 3px 15px -5px rgba( black , 0.1 );
    text-transform: uppercase;
    color: $nephritis;
    border: 1px solid rgba( $primary , 0.3 );
    font-size: 90%;
    
    &:focus {
      background: $peterriver;
      color: $brighter;
    }
    
    &:hover {
      background: $nephritis ;
      color: $brighter;
    }
    
    &:active {
      background: $darker ;
      color: $brighter;
    }
    
  }
  
  %shadow-inset {
    box-shadow: inset 3px 3px 10px rgba( black , 0.1 );
  }
  
  %transition {
    transition: all 0.2s ease-out;
    
    &:hover {
      transition: all 0.2s ease-in;
    }
    
  }
  
  * {
    position: relative;
    box-sizing: border-box;
  }
  
  html , body { height: 100%; }
  *,
  body {
    font-family: 'Inconsolata', sans-serif ;
    font-weight: 400;
  }
  
  body {
    font-size: 19px;
    line-height: 1.3em;
    background: linear-gradient( to left, darken( $dark , 1% ) , $dark );
    color: $bright;
  }
  

  input,
  textarea {
    @extend %transition;
    font-size: 100%;
    
    &:focus {
      outline: none;
      border: 1px solid $primary;
      background: $darker;
      box-shadow: inset 3px 3px 10px 0 rgba( black , 0.1);
    }
    
    &:focus,
    &.active {
      + label {
        background: $primary;
        transform: translateX(-20%) translateY(-50%);
      } 
    }
    
  }
  
  ::-webkit-input-placeholder { 
    color: rgba( $primary , 0.3 );
  }
  
  [type="text"],
  [type="email"],
  textarea  {
    @extend %corners;
    border: none;
    background: inherit;
    color: $bright;
    border: 1px solid rgba( $primary , 0.3 );
    padding: 1em 0.5em 0.5em;
    width: 100%;
    
    -webkit-filter: blur(5px);
    
    &:focus,
    &.active {
      -webkit-filter: blur(0px);
    }
    
  }
  
  .stage {
    @extend %center-stage;
    max-width: 500px;
    width: 80%;
  }
  `;

export const Form = styled.form`
  ${component()}
`;
export const Fieldset = styled.fieldset``;

export const Legend = styled.legend`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #2980b9;
`;

export const Control = styled.div`
  margin-bottom: 1.3em;
`;
export const Input = styled.input`
  ${({type}) => (type === "submit") && `${btn(), corners()} }
  ${({type}) => (type === "text" || type === "email") && `${corners()}
    border: none;
    background: inherit;
    color: $bright;
    border: 1px solid rgba( $primary , 0.3 );
    padding: 1em 0.5em 0.5em;
    width: 100%;
    
    -webkit-filter: blur(5px);
    
    &:focus,
    &.active {
      -webkit-filter: blur(0px);
    }
  `}
  ${transition()}
  font-size: 100%;
  &:focus {
    outline: none;
    border: 1px solid #2980b9;
    background: $darker;
    box-shadow: inset 3px 3px 10px 0 rgba(black, 0.1);
  }

  &:focus,
  &.active {
    + label {
      background: #2980b9;
      transform: translateX(-20%) translateY(-50%);
    }
  }
`;

export const Label = styled.label`
  ${(transition(), corners())}
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-20%) translateY(50%);
  background: rgba($darker, 0.5);
  border: 1px solid rgba(#2980b9, 0.5);
  padding: 0 1em 0.2em;
  display: block;
  cursor: pointer;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
`;
export const TextArea = styled.textarea`
  ${transition()}
  font-size: 100%;
  &:focus {
    outline: none;
    border: 1px solid #2980b9;
    background: $darker;
    box-shadow: inset 3px 3px 10px 0 rgba(black, 0.1);
  }

  &:focus,
  &.active {
    + label {
      background: #2980b9;
      transform: translateX(-20%) translateY(-50%);
    }
  }
`;
