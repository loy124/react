import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";


const BackLink = styled(Link)`
  position: fixed;
  top: 80px;
  right: 80px;
  font-size: 60px; 
`;

const Back = ({pathName}) => (
  <BackLink to ={`/${pathName}`}> 
  {"< "}  
  </BackLink>
);

export default Back;