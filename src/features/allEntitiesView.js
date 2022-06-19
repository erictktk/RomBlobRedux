import React from "react";
import { useSelector } from "react-redux";
import { Entity } from "../app/entitySlice";

//external selector is also valid
const getAllEntities = state => state.entities.entitiesList;

export const Entities = () => {
  //const allEntities = useSelector( getAllEntities );
  const allEntities = useSelector( state => state.entities.entitiesList );

  const renderedEntities = allEntities.map( e => (
    
  ));


  return (

  )
};
