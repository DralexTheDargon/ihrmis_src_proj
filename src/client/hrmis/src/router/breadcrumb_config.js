import React from "react";
import { useNavigate } from "react-router-dom";

export const crumbFirstLevel = () => {
  const route = [
    {
      label: "Home",
      route: "/rsp",
    },
  ];
  const getFirstLevel = (number) => {
    let newArr = [];
    newArr.push(route[number]);
    return newArr;
  };

  return { getFirstLevel };
};

export const crumbSecondLevel = () => {
  const route = [
    {
      label: "Plantilla",
      route: "/ihrmis/plantilla",
    },
    {
      label: "Dashboard",
      route: "/ihrmis/Dashboard",
    },
  ];

  const getSecondLevel = (number) => {
    const { getFirstLevel } = crumbFirstLevel();
    let newArr = [];
    getFirstLevel(0).forEach((element) => {
      console.log(element?.length);
      newArr.push(element);
    });
    newArr.push(route[number]);
    return newArr;
  };

  return { getSecondLevel };
};

export const crumbThirdLevel = () => {
  const plantillaLevel = [
    { label: "Employee", route: "ihrmis/employee" },
    { label: "Plantilla Items", route: "ihrmis/plantilla-items" },
  ];
};

const BreadcrumbConfig = ({ array = [] }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ul
        className="breadcrumb"
        style={{ display: "flex", flexDirection: "row" }}
      >
        {array.map((element, index) => {
          if (index === array.length - 1)
            return (
              <li style={{ color: "grey" }} key={index}>
                {element?.label}
              </li>
            );
          return (
            <li key={index} onClick={() => navigate(element.route)}>
              <span>{element?.label}</span>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default BreadcrumbConfig;