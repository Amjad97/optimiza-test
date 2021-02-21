import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCountries } from "../redux";
import { Table, Typography } from "antd";
import AddCountryModal from "./AddCountryModal";
import EditCountryModal from "./EditCountryModal";
import "antd/dist/antd.css";
import "./style.scss";

const { Title, Text } = Typography;

function CountriesTabel({ countriesData, fetchCountries }) {
  // fetch countries data
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  // table columns
  const columns = [
    {
      title: "Country name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
    },
    {
      title: "Country flag",
      dataIndex: "flag",
      key: "flag",
      render: (url) => <img src={url} alt="flag" className="country-flag" />,
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Country Position",
      dataIndex: "latlng",
      key: "latlng",
      render: (values) => (
        <>
          {values.map((value, index) => (
            <>{index === 0 ? <Text>{value}, </Text> : <Text>{value}</Text>}</>
          ))}
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="buttons-container">
        <AddCountryModal />
        <EditCountryModal />
      </div>
      <Title>List of countries</Title>
      {countriesData.loading ? (
        <Text>Loading</Text>
      ) : countriesData.error ? (
        <Text>{countriesData.error}</Text>
      ) : (
        <Table
          columns={columns}
          dataSource={countriesData.countries}
          pagination={{ pageSize: 25 }}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countriesData: state.countries,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    fetchCountries: () => dispatch(fetchCountries()),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(CountriesTabel);
